import React, { useState, useMemo } from 'react';
import { useConfig } from '../context/ConfigContext';
import {
  BookOpen,
  ExternalLink,
  Search,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Layers,
  FolderOpen
} from 'lucide-react';

export const StudyMaterial = () => {
  const { config, handleOpenDriveFolder, handleOpenMainDriveFolder } = useConfig();
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'ALL', label: 'All Exams (7)' },
    { id: 'SSC', label: 'SSC Exams' },
    { id: 'Railway', label: 'Railway Exams' },
    { id: 'Other', label: 'Other Govt Exams' },
  ];

  const filteredCategories = useMemo(() => {
    return config.studyMaterialCategories.filter((item) => {
      const matchesFilter = selectedFilter === 'ALL' || item.category === selectedFilter;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [config.studyMaterialCategories, selectedFilter, searchQuery]);

  return (
    <section id="study-material" className="py-14 sm:py-20 lg:py-28 bg-slate-50 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>Study Material &amp; Google Drive Folders</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Explore Examination Study Material
          </h2>
          <p className="text-xs sm:text-lg text-slate-600 leading-relaxed">
            Direct access to dedicated Google Drive folders containing chapter notes, practice papers, and solved sets for every competitive examination.
          </p>
        </div>

        {/* PRIMARY PROMINENT BANNER: EXPLORE ALL NOTES */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-700/15 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Google Drive Study Material Hub</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-snug">
                Main Competitive Exam Study Material Drive
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Click below to open the master Google Drive folder containing all notes, subject booklets, and revision materials in one place.
              </p>
            </div>

            {/* EXPLORE ALL NOTES BUTTON */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={handleOpenMainDriveFolder}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-[0.98] text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-amber-400/25 transition-all cursor-pointer"
              >
                <FolderOpen className="w-5 h-5 text-slate-950 shrink-0" />
                <span>Explore All Notes</span>
                <ExternalLink className="w-4 h-4 text-slate-950 shrink-0" />
              </button>

              <button
                onClick={handleOpenMainDriveFolder}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <span>Access Master Folder</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search: Mobile Optimized */}
        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          
          {/* Category Filter Tabs with smooth mobile swipe scroll */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-xs overflow-x-auto no-scrollbar w-full md:w-auto -mx-1 px-2 md:mx-0">
            {filterTabs.map((tab) => {
              const active = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[38px] cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-blue-700 active:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search exam (e.g. MTS, CGL, NTPC)..."
              className="w-full pl-9 pr-8 py-2.5 sm:py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-xs min-h-[42px]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 absolute right-3 top-2.5 p-1 cursor-pointer"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 7 Examination Cards Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                
                {/* Badges on Image */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-xs">
                    {item.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/95 text-slate-800 backdrop-blur-xs shadow-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Google Drive indicator badge */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-xs border border-white/20 text-white text-[10px] font-semibold">
                  <FolderOpen className="w-3 h-3 text-amber-300 shrink-0" />
                  <span>Drive Folder</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <span className="text-[10px] sm:text-[11px] font-medium text-blue-200 block">
                    {item.eligibility}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight drop-shadow-xs">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {item.fullName}
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] sm:text-xs font-bold text-slate-700 mb-1.5 sm:mb-2">
                      Study Materials Included:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {item.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dedicated Google Drive View Notes Button (min-h-[48px]) */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => handleOpenDriveFolder(item.driveKey, item.name)}
                    className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/20 active:scale-[0.98] cursor-pointer"
                  >
                    <FolderOpen className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>View Notes</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-200 shrink-0 ml-0.5" />
                  </button>
                  <p className="text-[10px] sm:text-[11px] text-center text-slate-400 mt-1.5">
                    Opens {item.name} Google Drive folder in a new tab
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-700">No examination matches found</h4>
            <p className="text-xs text-slate-500 mt-1">
              Try searching for &quot;SSC&quot;, &quot;Railway&quot;, &quot;NTPC&quot;, or click All Exams.
            </p>
            <button
              onClick={() => {
                setSelectedFilter('ALL');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="mt-10 sm:mt-14 text-center px-2">
          <p className="text-xs sm:text-sm text-slate-500 mb-2">
            All Google Drive folders are set with public viewer access so you can read and download notes instantly without login restrictions.
          </p>
          <button
            onClick={handleOpenMainDriveFolder}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 group cursor-pointer"
          >
            <FolderOpen className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Open Master Google Drive Folder</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
