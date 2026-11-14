import React, { useState, useEffect } from 'react';
import { useConfig } from '../context/ConfigContext';
import { Menu, X, ExternalLink, GraduationCap, ChevronRight, FolderOpen } from 'lucide-react';

export const Navbar = () => {
  const { config, handleOpenMainDriveFolder } = useConfig();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Study Material', href: '#study-material' },
    { name: 'Exams Covered', href: '#exams-covered' },
    { name: 'Buy Notes', href: '#buy-notes' },
    { name: 'Contact Us', href: '#contact' },
  ];

  // Lock body scroll when mobile menu is open on Android / mobile devices
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Track scroll position for sticky styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['home', 'about', 'study-material', 'exams-covered', 'buy-notes', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-slate-200/80'
            : 'bg-white py-3 sm:py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Logo & Website Name */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 shrink-0 transition-transform">
                <GraduationCap className="w-5 h-5 text-amber-300" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors truncate">
                  {config.siteName}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-wider uppercase truncate">
                  SSC &amp; Railway Portal
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                      isActive
                        ? 'text-blue-700 bg-blue-50 font-bold'
                        : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Button (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={handleOpenMainDriveFolder}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FolderOpen className="w-4 h-4 text-amber-300" />
                <span>Explore All Notes</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
              </button>
            </div>

            {/* Mobile Actions: Explore Button + Hamburger Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={handleOpenMainDriveFolder}
                className="inline-flex sm:hidden items-center gap-1 px-2.5 py-1.5 bg-blue-600 active:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm cursor-pointer"
              >
                <FolderOpen className="w-3.5 h-3.5 text-amber-300" />
                <span>Notes</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 sm:p-2.5 rounded-xl text-slate-700 hover:text-blue-700 hover:bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Content */}
          <div className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-slide-left">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <GraduationCap className="w-4 h-4 text-amber-300" />
                </div>
                <span className="font-extrabold text-sm text-slate-900 truncate">
                  Navigation
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800 rounded-lg cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all min-h-[48px] ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600'
                        : 'text-slate-700 active:bg-slate-100 hover:bg-slate-50 hover:text-blue-700'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-100 space-y-2.5 bg-slate-50">
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleOpenMainDriveFolder(e);
                }}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-blue-700 to-blue-600 active:from-blue-800 active:to-blue-700 text-white font-bold rounded-xl shadow-md text-sm min-h-[48px] cursor-pointer"
              >
                <FolderOpen className="w-4 h-4 text-amber-300" />
                <span>Explore All Notes (Drive)</span>
                <ExternalLink className="w-4 h-4 text-blue-200" />
              </button>
              <p className="text-[11px] text-center text-slate-500">
                Official Competitive Exam Study Material
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
