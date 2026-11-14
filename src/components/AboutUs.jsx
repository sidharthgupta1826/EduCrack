import React from 'react';
import { useConfig } from '../context/ConfigContext';
import {
  Target,
  Compass,
  CheckCircle2,
  BookMarked,
  ExternalLink,
  FolderOpen
} from 'lucide-react';

export const AboutUs = () => {
  const { config, handleOpenMainDriveFolder } = useConfig();

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            About Our Platform
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Dedicated to Empowering Government Job Aspirants
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
            Our platform was founded with a straightforward goal: to provide competitive examination aspirants with high-quality, concise, and syllabus-aligned study materials without confusion or clutter.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Mission Card */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-50/70 to-indigo-50/50 border border-blue-100 shadow-sm relative overflow-hidden">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 mb-4 sm:mb-6">
              <Target className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
              To democratize competitive exam preparation by simplifying extensive syllabi into well-organized, high-yield study notes. We aim to help every diligent student crack exams like SSC GD, SSC CGL, SSC CHSL, SSC MTS, and Railways by focusing strictly on what is asked in the exam.
            </p>
            <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs font-semibold text-blue-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>100% Focused on Exam Patterns &amp; Marks Distribution</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-50/70 to-slate-50 border border-indigo-100 shadow-sm relative overflow-hidden">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 mb-4 sm:mb-6">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
              To be the most reliable and trusted educational guide for youth seeking a career in government service. We envision an educational ecosystem where no aspirant is left behind due to expensive coaching or lack of quality study materials and notes.
            </p>
            <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs font-semibold text-indigo-700">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Direct Google Drive Access With Zero Login Barriers</span>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {config.aboutFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-bold text-xs sm:text-sm shadow-sm mb-3 sm:mb-4">
                0{idx + 1}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 sm:mb-2">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Central Google Drive Callout */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <BookMarked className="w-4 h-4 shrink-0" />
              <span>Centralized Google Drive Folders</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-snug">
              Access Full Chapter Notes &amp; Practice Material
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              All detailed notes, chapter summaries, formula sheets, and PDF booklets are hosted directly in Google Drive folders organized by examination.
            </p>
          </div>

          <button
            onClick={handleOpenMainDriveFolder}
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-amber-400 active:bg-amber-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all min-h-[48px] cursor-pointer"
          >
            <FolderOpen className="w-4 h-4 text-slate-950 shrink-0" />
            <span>Open Google Drive Folders</span>
            <ExternalLink className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
