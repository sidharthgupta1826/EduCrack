import React from 'react';
import { useConfig } from '../context/ConfigContext';
import {
  ShoppingBag,
  ExternalLink,
  CheckCircle2,
  Zap,
  ShieldCheck,
  FileCheck,
  DownloadCloud,
  Sparkles
} from 'lucide-react';

export const BuyNotes = () => {
  const { config, handleOpenExternalNotes } = useConfig();

  return (
    <section id="buy-notes" className="py-14 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[400px] bg-blue-600/15 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Container */}
        <div className="rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 p-5 sm:p-10 lg:p-16 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Premium Study Packages</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Buy Notes &amp; Elevate Your Competitive Exam Preparation
              </h2>

              <p className="text-slate-300 text-xs sm:text-lg leading-relaxed">
                Students can access and purchase comprehensive, exam-specific notes for SSC GD, CGL, CHSL, MTS, Railway NTPC, and Group D. Get complete chapter theory, solved questions, and formula sheets designed to help you score maximum marks.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
                {config.buyNotesFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* BUY NOTES BUTTON */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  onClick={handleOpenExternalNotes}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 active:scale-[0.98] text-slate-950 font-extrabold text-sm sm:text-lg rounded-xl sm:rounded-2xl shadow-xl shadow-amber-400/20 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5 text-slate-950 shrink-0" />
                  <span>Buy Notes</span>
                  <ExternalLink className="w-4 h-4 text-slate-950 shrink-0" />
                </button>

                <div className="text-xs text-slate-400 text-center sm:text-left">
                  <span className="block font-semibold text-slate-300">Opens in a new browser tab</span>
                  <span>Instant access on our official notes portal</span>
                </div>
              </div>

              {/* Safe external notice */}
              <div className="pt-2 text-[10px] sm:text-[11px] text-slate-400 border-t border-white/10 flex items-center justify-center lg:justify-start gap-2 text-center lg:text-left">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  All study materials and purchases are securely processed and fulfilled directly through our official external notes website.
                </span>
              </div>
            </div>

            {/* Right Card: Visual Highlights */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl bg-gradient-to-b from-blue-900/60 to-slate-900/90 border border-blue-400/20 p-5 sm:p-7 space-y-4 sm:space-y-5 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">Study Material Highlights</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    2026 Updated
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                    <FileCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-xs sm:text-sm">Concise &amp; High-Yield</strong>
                      <span className="text-xs text-slate-300">Zero fluff. Strictly structured around recent exam question trends.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                    <DownloadCloud className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-xs sm:text-sm">Easy PDF Access</strong>
                      <span className="text-xs text-slate-300">Read online or download for offline study anytime on our external portal.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-xs sm:text-sm">Authentic Content</strong>
                      <span className="text-xs text-slate-300">Prepared by educators with years of experience in competitive exams.</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleOpenExternalNotes}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 active:bg-blue-600/60 border border-blue-400/30 text-blue-200 text-xs font-bold transition-all text-center min-h-[44px] cursor-pointer"
                >
                  Click Here to Buy Notes on External Website →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
