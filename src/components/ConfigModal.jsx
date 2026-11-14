import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { X, ExternalLink, Mail, Check, RotateCcw, FolderOpen, Settings2 } from 'lucide-react';

export const ConfigModal = () => {
  const {
    config,
    updateConfig,
    resetConfig,
    isConfigModalOpen,
    setIsConfigModalOpen,
    configModalTab,
    setConfigModalTab
  } = useConfig();
  
  const [siteName, setSiteName] = useState(config.siteName);
  const [externalUrl, setExternalUrl] = useState(
    config.externalNotesUrl.includes('[INSERT') ? '' : config.externalNotesUrl
  );
  const [gmail, setGmail] = useState(
    config.gmailAddress.includes('[INSERT') ? '' : config.gmailAddress
  );

  // Google Drive folder links state
  const driveLinks = config.googleDriveLinks || {};
  const [mainDrive, setMainDrive] = useState(
    driveLinks.mainStudyMaterialFolder && !driveLinks.mainStudyMaterialFolder.includes('YOUR_')
      ? driveLinks.mainStudyMaterialFolder
      : ''
  );
  const [sscGd, setSscGd] = useState(
    driveLinks.sscGdFolder && !driveLinks.sscGdFolder.includes('YOUR_') ? driveLinks.sscGdFolder : ''
  );
  const [sscCgl, setSscCgl] = useState(
    driveLinks.sscCglFolder && !driveLinks.sscCglFolder.includes('YOUR_') ? driveLinks.sscCglFolder : ''
  );
  const [sscChsl, setSscChsl] = useState(
    driveLinks.sscChslFolder && !driveLinks.sscChslFolder.includes('YOUR_') ? driveLinks.sscChslFolder : ''
  );
  const [sscMts, setSscMts] = useState(
    driveLinks.sscMtsFolder && !driveLinks.sscMtsFolder.includes('YOUR_') ? driveLinks.sscMtsFolder : ''
  );
  const [railwayNtpc, setRailwayNtpc] = useState(
    driveLinks.railwayNtpcFolder && !driveLinks.railwayNtpcFolder.includes('YOUR_') ? driveLinks.railwayNtpcFolder : ''
  );
  const [railwayGroupD, setRailwayGroupD] = useState(
    driveLinks.railwayGroupDFolder && !driveLinks.railwayGroupDFolder.includes('YOUR_') ? driveLinks.railwayGroupDFolder : ''
  );
  const [otherExams, setOtherExams] = useState(
    driveLinks.otherExamsFolder && !driveLinks.otherExamsFolder.includes('YOUR_') ? driveLinks.otherExamsFolder : ''
  );

  if (!isConfigModalOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    updateConfig({
      siteName: siteName.trim() || config.siteName,
      externalNotesUrl: externalUrl.trim() || "[INSERT YOUR NOTES WEBSITE LINK HERE]",
      gmailAddress: gmail.trim() || "[INSERT YOUR GMAIL ADDRESS HERE]",
      googleDriveLinks: {
        mainStudyMaterialFolder: mainDrive.trim() || "https://drive.google.com/drive/folders/YOUR_MAIN_STUDY_MATERIAL_FOLDER_ID?usp=sharing",
        sscGdFolder: sscGd.trim() || "https://drive.google.com/drive/folders/YOUR_SSC_GD_FOLDER_ID?usp=sharing",
        sscCglFolder: sscCgl.trim() || "https://drive.google.com/drive/folders/YOUR_SSC_CGL_FOLDER_ID?usp=sharing",
        sscChslFolder: sscChsl.trim() || "https://drive.google.com/drive/folders/YOUR_SSC_CHSL_FOLDER_ID?usp=sharing",
        sscMtsFolder: sscMts.trim() || "https://drive.google.com/drive/folders/YOUR_SSC_MTS_FOLDER_ID?usp=sharing",
        railwayNtpcFolder: railwayNtpc.trim() || "https://drive.google.com/drive/folders/YOUR_RAILWAY_NTPC_FOLDER_ID?usp=sharing",
        railwayGroupDFolder: railwayGroupD.trim() || "https://drive.google.com/drive/folders/YOUR_RAILWAY_GROUP_D_FOLDER_ID?usp=sharing",
        otherExamsFolder: otherExams.trim() || "https://drive.google.com/drive/folders/YOUR_OTHER_EXAMS_FOLDER_ID?usp=sharing",
      },
    });
    setIsConfigModalOpen(false);
  };

  const handleReset = () => {
    resetConfig();
    setSiteName("EduCrack");
    setExternalUrl('');
    setGmail('');
    setMainDrive('');
    setSscGd('');
    setSscCgl('');
    setSscChsl('');
    setSscMts('');
    setRailwayNtpc('');
    setRailwayGroupD('');
    setOtherExams('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden my-4 sm:my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-4 sm:p-6 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 bg-white/10 rounded-lg shrink-0">
              <FolderOpen className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold leading-tight">Google Drive &amp; Website Settings</h3>
              <p className="text-[11px] sm:text-xs text-blue-100">Configure your folder links &amp; contact</p>
            </div>
          </div>
          <button
            onClick={() => setIsConfigModalOpen(false)}
            className="p-1.5 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors text-white/80 hover:text-white cursor-pointer"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 pt-2.5 gap-2 sm:gap-4 overflow-x-auto no-scrollbar shrink-0">
          <button
            type="button"
            onClick={() => setConfigModalTab('drive')}
            className={`pb-2.5 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              configModalTab === 'drive'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Google Drive Folders (7 Exams + Main)</span>
          </button>
          <button
            type="button"
            onClick={() => setConfigModalTab('general')}
            className={`pb-2.5 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              configModalTab === 'general'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>General &amp; Gmail</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
          <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 leading-relaxed">
            💡 <strong>Centralized Config:</strong> You can permanently paste your Google Drive links into{' '}
            <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 font-mono text-blue-900 font-bold">
              src/config/siteConfig.js
            </code>
            . Changes here apply instantly to test buttons live in your browser!
          </div>

          {configModalTab === 'drive' ? (
            /* TAB 1: GOOGLE DRIVE FOLDERS */
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  1. Main Study Material Folder (Explore All Notes)
                </label>
                <input
                  type="text"
                  value={mainDrive}
                  onChange={(e) => setMainDrive(e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/YOUR_MAIN_FOLDER_ID"
                  className="w-full px-3 py-2 text-xs sm:text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    SSC GD Drive Folder
                  </label>
                  <input
                    type="text"
                    value={sscGd}
                    onChange={(e) => setSscGd(e.target.value)}
                    placeholder="https://drive.google.com/drive/folders/..."
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    SSC CGL Drive Folder
                  </label>
                  <input
                    type="text"
                    value={sscCgl}
                    onChange={(e) => setSscCgl(e.target.value)}
                    placeholder="https://drive.google.com/drive/folders/..."
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    SSC CHSL Drive Folder
                  </label>
                  <input
                    type="text"
                    value={sscChsl}
                    onChange={(e) => setSscChsl(e.target.value)}
                    placeholder="https://drive.google.com/drive/folders/..."
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    SSC MTS Drive Folder
                  </label>
                  <input
                    type="text"
                    value={sscMts}
                    onChange={(e) => setSscMts(e.target.value)}
                    placeholder="https://drive.google.com/drive/folders/..."
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Railway NTPC Drive Folder
                  </label>
                  <input
                    type="text"
                    value={railwayNtpc}
                    onChange={(e) => setRailwayNtpc(e.target.value)}
                    placeholder="https://drive.google.com/drive/folders/..."
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Railway Group D Drive Folder
                  </label>
                  <input
                    type="text"
                    value={railwayGroupD}
                    onChange={(e) => setRailwayGroupD(e.target.value)}
                    placeholder="https://drive.google.com/drive/folders/..."
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Other Exams Drive Folder
                </label>
                <input
                  type="text"
                  value={otherExams}
                  onChange={(e) => setOtherExams(e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/..."
                  className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
          ) : (
            /* TAB 2: GENERAL & GMAIL SETTINGS */
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Website / Channel Name
                </label>
                <input
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  placeholder="e.g. EduCrack or Your Channel Name"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  External Notes Website URL (for Buy Notes)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={externalUrl}
                    onChange={(e) => setExternalUrl(e.target.value)}
                    placeholder="https://your-external-notes-website.com"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <ExternalLink className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Contact Gmail Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={gmail}
                    onChange={(e) => setGmail(e.target.value)}
                    placeholder="your.official.exam@gmail.com"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                </div>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors py-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset to Defaults
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsConfigModalOpen(false)}
                className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs transition-all cursor-pointer"
              >
                <Check className="w-4 h-4" />
                Save &amp; Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
