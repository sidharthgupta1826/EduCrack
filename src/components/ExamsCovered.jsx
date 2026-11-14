import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import {
  Shield,
  Train,
  Landmark,
  CheckCircle2,
  FolderOpen,
  Layers,
  ArrowRight
} from 'lucide-react';

export const ExamsCovered = () => {
  const { config, handleOpenDriveFolder, handleOpenMainDriveFolder } = useConfig();
  const [activeTab, setActiveTab] = useState('ssc');

  const categories = [
    {
      id: 'ssc',
      label: 'SSC Examinations',
      icon: Shield,
      count: '4 Exams',
      color: 'blue',
      data: config.examsCoveredDetailed.ssc,
    },
    {
      id: 'railway',
      label: 'Railway Examinations',
      icon: Train,
      count: '2 Exams',
      color: 'amber',
      data: config.examsCoveredDetailed.railway,
    },
    {
      id: 'other',
      label: 'Other Government Exams',
      icon: Landmark,
      count: 'State & Central',
      color: 'emerald',
      data: config.examsCoveredDetailed.other,
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="exams-covered" className="py-14 sm:py-20 lg:py-28 bg-white text-slate-800 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>Exams Covered</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive Coverage of Top Government Exams
          </h2>
          <p className="text-xs sm:text-lg text-slate-600 leading-relaxed">
            Detailed breakdown of every competitive examination included in our study notes curriculum.
          </p>
        </div>

        {/* 3 Main Category Selector Tabs */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 p-1.5 sm:p-2 bg-slate-100 rounded-xl sm:rounded-2xl max-w-3xl w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center justify-center gap-2.5 py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px] cursor-pointer ${
                    isActive
                      ? 'bg-white text-blue-700 shadow-md scale-[1.01]'
                      : 'text-slate-600 hover:text-slate-900 active:bg-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span className="truncate">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Overview Card */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-slate-200">
            <div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                {currentCategory.label}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {currentCategory.data.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {currentCategory.data.subtitle}
              </p>
            </div>

            <button
              onClick={handleOpenMainDriveFolder}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 active:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all shrink-0 min-h-[44px] cursor-pointer"
            >
              <FolderOpen className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Open Google Drive Folders</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

          {/* Cards for Exams in Current Category */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {currentCategory.data.exams.map((exam, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                      {exam.name}
                    </h4>
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
                      {exam.stage.split('+')[0].trim()}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <div>
                      <strong className="text-slate-800">Exam Stages: </strong>
                      <span>{exam.stage}</span>
                    </div>

                    <div>
                      <strong className="text-slate-800">Exam Pattern: </strong>
                      <span className="text-slate-700">{exam.pattern}</span>
                    </div>

                    <div>
                      <strong className="text-slate-800">Syllabus Subjects: </strong>
                      <span>{exam.syllabus}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="text-xs font-medium text-emerald-700 flex items-center gap-1.5 min-w-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{exam.keyBenefit}</span>
                  </div>
                  <button
                    onClick={() => handleOpenDriveFolder(exam.driveKey, exam.name)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 active:text-blue-800 shrink-0 min-h-[36px] px-2 py-1 cursor-pointer"
                  >
                    <FolderOpen className="w-3.5 h-3.5 shrink-0" />
                    <span>Drive →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Highlights Summary Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800">
            <div className="flex items-center gap-2 text-blue-700 font-bold mb-1.5">
              <Shield className="w-4 h-4 text-blue-600 shrink-0" />
              <h4 className="text-sm font-bold">SSC Exam Syllabus</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Covers SSC GD, CGL, CHSL, and MTS with detailed notes on Quantitative Aptitude, General Intelligence, English &amp; Hindi Comprehension, and Static GK.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/60 border border-amber-100 text-slate-800">
            <div className="flex items-center gap-2 text-amber-800 font-bold mb-1.5">
              <Train className="w-4 h-4 text-amber-600 shrink-0" />
              <h4 className="text-sm font-bold">Railway Exam Syllabus</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Covers Railway NTPC (CBT 1 &amp; 2) and Group D with complete NCERT General Science (Physics, Chemistry, Biology), Mathematics, and Indian Railway GK.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-slate-800">
            <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1.5">
              <Landmark className="w-4 h-4 text-emerald-600 shrink-0" />
              <h4 className="text-sm font-bold">Other Government Exams</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Covers State Police Constables &amp; Sub-Inspectors, State CET, Defence recruitment, and all major public sector competitive examination syllabi.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
