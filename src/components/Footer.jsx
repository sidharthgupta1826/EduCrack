import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { GraduationCap, Mail, ExternalLink, ArrowUp, ShieldCheck, FolderOpen } from 'lucide-react';

export const Footer = () => {
  const { config, handleOpenMainDriveFolder, handleContactGmail, handleOpenDriveFolder } = useConfig();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Study Material', href: '#study-material' },
    { name: 'Exams Covered', href: '#exams-covered' },
    { name: 'Buy Notes', href: '#buy-notes' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const examCategories = config.studyMaterialCategories || [];

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shrink-0">
                <GraduationCap className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight block">
                  {config.siteName}
                </span>
                <span className="block text-[10px] sm:text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                  Competitive Exam Study Portal
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your trusted destination for competitive examination preparation. Providing comprehensive study materials, notes, and previous year resources for SSC, Railways, and government competitive examinations.
            </p>

            <div className="pt-1">
              <div className="text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Google Drive Notes Hub
              </div>
              <button
                onClick={handleOpenMainDriveFolder}
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 active:text-amber-500 transition-colors cursor-pointer min-h-[36px]"
              >
                <FolderOpen className="w-3.5 h-3.5 shrink-0" />
                <span>Open Master Google Drive Folder</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>

          {/* Col 2: Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white active:text-blue-400 transition-colors text-slate-400 text-xs sm:text-sm inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Exams Drive Folders (2 cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Exam Drive Folders
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
              {examCategories.map((exam) => (
                <li key={exam.id} className="truncate">
                  <button
                    onClick={() => handleOpenDriveFolder(exam.driveKey, exam.name)}
                    className="hover:text-blue-400 active:text-blue-300 transition-colors text-left truncate max-w-full cursor-pointer py-0.5"
                  >
                    {exam.name} Notes
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Gmail Contact Information (2 cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Contact Us
            </h4>
            <div className="space-y-2.5 sm:space-y-3">
              <p className="text-xs text-slate-400">
                Direct mentor support via official Gmail:
              </p>
              
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>Gmail Support</span>
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-300 break-all">
                  {config.gmailAddress}
                </div>
              </div>

              <button
                onClick={handleContactGmail}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-200 rounded-lg text-xs font-semibold transition-colors min-h-[40px] cursor-pointer"
              >
                <span>Write to Us</span>
                <Mail className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {config.siteName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1 text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Official Educational Portal</span>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer py-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
