import React, { createContext, useContext, useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  // Allow local persistence for live testing in browser
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('exam_site_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          parsed.siteName === 'Competitive Exam Study Portal' ||
          parsed.siteName === 'Competitive Exam Study Platform'
        ) {
          parsed.siteName = SITE_CONFIG.siteName;
        }
        if (
          !parsed.hindiTagline ||
          parsed.hindiTagline.includes('आपकी') ||
          parsed.hindiTagline.includes('सफलता')
        ) {
          parsed.hindiTagline = SITE_CONFIG.hindiTagline;
          parsed.hindiSubtitle = SITE_CONFIG.hindiSubtitle;
        }
        return {
          ...SITE_CONFIG,
          ...parsed,
          googleDriveLinks: {
            ...SITE_CONFIG.googleDriveLinks,
            ...(parsed.googleDriveLinks || {}),
          },
        };
      }
    } catch {
      // fallback to default
    }
    return SITE_CONFIG;
  });

  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [configModalTab, setConfigModalTab] = useState('drive'); // 'drive' or 'general'
  const [notification, setNotification] = useState(null);

  const updateConfig = (newValues) => {
    setConfig(prev => {
      const updated = {
        ...prev,
        ...newValues,
        googleDriveLinks: {
          ...prev.googleDriveLinks,
          ...(newValues.googleDriveLinks || {}),
        },
      };
      try {
        localStorage.setItem('exam_site_config', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
    showToast("Settings updated successfully!");
  };

  const resetConfig = () => {
    try {
      localStorage.removeItem('exam_site_config');
    } catch (e) {
      console.error(e);
    }
    setConfig(SITE_CONFIG);
    showToast("Settings reset to defaults!");
  };

  const showToast = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  // Safe handler to open specific Google Drive folder for an examination
  const handleOpenDriveFolder = (driveKey, examName) => {
    const driveLinks = config.googleDriveLinks || {};
    const url = driveLinks[driveKey] || driveLinks.mainStudyMaterialFolder;

    if (!url || url.includes('YOUR_') || url.includes('[INSERT')) {
      showToast(
        `Please set the Google Drive folder link for ${examName || 'this exam'} in src/config/siteConfig.js or in Settings!`,
        'warning'
      );
      setConfigModalTab('drive');
      setIsConfigModalOpen(true);
      return;
    }

    const targetUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Safe handler to open the Main Study Material Google Drive folder ("Explore All Notes")
  const handleOpenMainDriveFolder = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const driveLinks = config.googleDriveLinks || {};
    const url = driveLinks.mainStudyMaterialFolder || config.externalNotesUrl;

    if (!url || url.includes('YOUR_') || url.includes('[INSERT')) {
      showToast(
        "Please set the Main Google Drive Folder URL in src/config/siteConfig.js or in Settings!",
        "warning"
      );
      setConfigModalTab('drive');
      setIsConfigModalOpen(true);
      return;
    }

    const targetUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Safe handler to open general external notes website (for Buy Notes or portal)
  const handleOpenExternalNotes = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    // If externalNotesUrl is configured, use it; otherwise fallback to main Google Drive folder
    const driveLinks = config.googleDriveLinks || {};
    const mainFolder = driveLinks.mainStudyMaterialFolder;
    const url = !config.externalNotesUrl.includes('[INSERT') ? config.externalNotesUrl : mainFolder;

    if (!url || url.includes('YOUR_') || url.includes('[INSERT')) {
      showToast(
        "Please configure your Notes Website or Main Google Drive Folder link in src/config/siteConfig.js!",
        "warning"
      );
      setConfigModalTab('general');
      setIsConfigModalOpen(true);
      return;
    }

    const targetUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Safe handler to launch Gmail contact
  const handleContactGmail = (e) => {
    const email = config.gmailAddress;

    if (!email || email.includes('[INSERT YOUR GMAIL ADDRESS HERE]')) {
      if (e && e.preventDefault) e.preventDefault();
      showToast(
        "Please configure your Gmail address in src/config/siteConfig.js or in Settings!",
        "warning"
      );
      setConfigModalTab('general');
      setIsConfigModalOpen(true);
      return;
    }

    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Inquiry regarding Study Notes & Materials")}&body=${encodeURIComponent("Hello,\n\nI am preparing for competitive examinations and would like more details about your study materials and notes.\n\nThank you!")}`;
  };

  return (
    <ConfigContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        handleOpenDriveFolder,
        handleOpenMainDriveFolder,
        handleOpenExternalNotes,
        handleContactGmail,
        isConfigModalOpen,
        setIsConfigModalOpen,
        configModalTab,
        setConfigModalTab,
        notification,
        showToast,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
