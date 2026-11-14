import React from 'react';
import { useConfig } from '../context/ConfigContext';
import {
  BookOpen,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Bookmark,
  FolderOpen
} from 'lucide-react';

export const Hero = () => {
  const { config, handleOpenMainDriveFolder } = useConfig();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[300px] sm:h-[350px] bg-blue-500/20 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Pill 1: Official Education Website Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{config.badgeText || "Official Education Website"}</span>
            </div>

            {/* Prominent Website / Channel Name */}
            <div>
              <div className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-bold text-blue-300/90 mb-1">
                Official Educational Platform
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight break-words">
                {config.siteName}
              </h1>
            </div>

            {/* Primary English Tagline */}
            <p className="text-base sm:text-xl font-bold text-amber-400 tracking-wide leading-snug">
              {config.tagline}
            </p>

            {/* Highlight Banner / Taglines */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 text-left">
              <h2 className="text-base sm:text-2xl font-bold text-blue-100 tracking-wide leading-snug break-words">
                {config.highlightTagline || config.hindiTagline}
              </h2>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
                {config.highlightSubtitle || config.hindiSubtitle}
              </p>
            </div>

            {/* Short Platform Introduction & Welcome Message */}
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {config.welcomeMessage}
            </p>

            {/* Three Highlight Category Pills */}
            <div className="pt-1">
              <div className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center lg:text-left">
                Key Examinations Covered:
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {config.heroPills.map((pill) => (
                  <span
                    key={pill.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span>{pill.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons: Touch friendly with min-h-[48px] */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={() => scrollToSection('study-material')}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-amber-200 shrink-0" />
                <span>Explore Study Material</span>
                <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
              </button>

              <button
                onClick={handleOpenMainDriveFolder}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-[0.98] text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-400/20 transition-all cursor-pointer"
              >
                <FolderOpen className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Explore All Notes</span>
                <ExternalLink className="w-4 h-4 text-slate-900 shrink-0" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-[11px] sm:text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Direct Google Drive Folders</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>SSC &amp; Railway 2026 Updated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>No Mandatory Login</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              
              {/* Outer Card with Gradient Border */}
              <div className="rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-blue-400/30 via-indigo-500/20 to-transparent shadow-2xl backdrop-blur-xl">
                <div className="rounded-[18px] sm:rounded-[22px] bg-slate-900/95 border border-slate-700/60 p-4 sm:p-6 space-y-4 sm:space-y-5">
                  
                  {/* Top Bar inside mockup card */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                        <FolderOpen className="w-4 h-4 text-amber-300" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Google Drive Notes Hub</div>
                        <div className="text-[10px] text-slate-400">Public Viewer Folders</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Live Access
                    </span>
                  </div>

                  {/* Main Visual Image Banner */}
                  <div className="relative rounded-xl overflow-hidden aspect-video border border-slate-700/80 group">
                    <img
                      src="/images/ssc-gd.jpg"
                      alt="SSC GD & Railway Study Materials"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                      <div>
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded">
                          Google Drive Hosted
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          SSC &amp; Railway Notes Folders
                        </p>
                      </div>
                      <span className="text-[10px] sm:text-xs text-blue-300 font-semibold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60">
                        2026 Edition
                      </span>
                    </div>
                  </div>

                  {/* Quick Feature Badges */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <div className="flex items-center gap-1.5 text-blue-400 mb-0.5">
                        <Bookmark className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-xs font-bold">SSC Folders</span>
                      </div>
                      <p className="text-[10px] text-slate-300 truncate">GD • CGL • CHSL • MTS</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <div className="flex items-center gap-1.5 text-amber-400 mb-0.5">
                        <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-xs font-bold">Railway Folders</span>
                      </div>
                      <p className="text-[10px] text-slate-300 truncate">NTPC • Group D</p>
                    </div>
                  </div>

                  {/* Quick Access Action */}
                  <button
                    onClick={handleOpenMainDriveFolder}
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl bg-blue-600/25 hover:bg-blue-600/35 active:bg-blue-600/40 border border-blue-500/40 text-blue-200 text-xs font-semibold group cursor-pointer min-h-[44px]"
                  >
                    <span className="truncate">Open Main Google Drive Folder</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 shrink-0 ml-2" />
                  </button>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
