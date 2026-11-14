import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { Mail, Bell, ExternalLink, Settings, Wifi } from 'lucide-react';

export const TopBar = () => {
  const { config, handleOpenMainDriveFolder, setIsConfigModalOpen } = useConfig();

  const isConfiguredEmail = config.gmailAddress && !config.gmailAddress.includes('[INSERT');

  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2 px-3 sm:px-4 border-b border-slate-800 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <div className="flex items-center gap-1.5 text-slate-300 truncate">
            <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="font-medium truncate text-[11px] sm:text-xs">
              {isConfiguredEmail ? config.gmailAddress : 'Mentor Support via Gmail'}
            </span>
          </div>
          <span className="hidden md:inline text-slate-700">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-slate-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>2026-2027 Notes &amp; Solved Papers</span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleOpenMainDriveFolder}
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold rounded-lg transition-all text-[11px] shadow-sm cursor-pointer"
          >
            <span>Drive Notes</span>
            <ExternalLink className="w-3 h-3 shrink-0" />
          </button>

          {/* Quick config modal trigger */}
          <button
            onClick={() => setIsConfigModalOpen(true)}
            title="Configure Website Settings (Drive Links & Gmail)"
            aria-label="Settings"
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 active:bg-slate-700 transition-colors cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
