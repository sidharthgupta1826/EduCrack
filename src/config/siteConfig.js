/**
 * Central Configuration for the Competitive Exam Study Material Website.
 * 
 * Centralized Google Drive folder URLs, external website links, Gmail address, 
 * and examination categories are configured here.
 */

export const SITE_CONFIG = {
  // Website / Channel Name
  siteName: "EduCrack",
  shortName: "EduCrack",
  
  // Tagline
  tagline: "Your Destination for Competitive Exam Preparation.",
  
  // Welcome & Highlight Subtitles
  hindiTagline: "Preparing for your success with the right study material.",
  hindiSubtitle: "Useful notes and study resources for competitive exam preparation.",
  highlightTagline: "Preparing for your success with the right study material.",
  highlightSubtitle: "Useful notes and study resources for competitive exam preparation.",
  badgeText: "Official Education Website",
  
  // Platform Introduction
  welcomeMessage: "Welcome to your premier destination for government competitive examination preparation. Access structured, syllabus-aligned, and high-yield study materials crafted specifically to help you succeed in SSC, Railways, and state-level exams.",
  
  /**
   * CENTRALIZED GOOGLE DRIVE FOLDER LINKS (IMPORTANT)
   * 
   * Update these URLs with your actual Google Drive folder links.
   * Make sure your Google Drive folders are set to:
   * "Anyone with the link" -> "Viewer" so students don't need to log in.
   */
  googleDriveLinks: {
    // Main Competitive Exam Study Material Parent Folder (Explore All Notes)
    mainStudyMaterialFolder: "https://drive.google.com/drive/folders/YOUR_MAIN_STUDY_MATERIAL_FOLDER_ID?usp=sharing",
    
    // 1. SSC GD Folder Link
    sscGdFolder: "https://drive.google.com/drive/folders/YOUR_SSC_GD_FOLDER_ID?usp=sharing",
    
    // 2. SSC CGL Folder Link
    sscCglFolder: "https://drive.google.com/drive/folders/YOUR_SSC_CGL_FOLDER_ID?usp=sharing",
    
    // 3. SSC CHSL Folder Link
    sscChslFolder: "https://drive.google.com/drive/folders/YOUR_SSC_CHSL_FOLDER_ID?usp=sharing",
    
    // 4. SSC MTS Folder Link
    sscMtsFolder: "https://drive.google.com/drive/folders/YOUR_SSC_MTS_FOLDER_ID?usp=sharing",
    
    // 5. Railway NTPC Folder Link
    railwayNtpcFolder: "https://drive.google.com/drive/folders/YOUR_RAILWAY_NTPC_FOLDER_ID?usp=sharing",
    
    // 6. Railway Group D Folder Link
    railwayGroupDFolder: "https://drive.google.com/drive/folders/YOUR_RAILWAY_GROUP_D_FOLDER_ID?usp=sharing",
    
    // 7. Other Government Competitive Examinations Folder Link
    otherExamsFolder: "https://drive.google.com/drive/folders/YOUR_OTHER_EXAMS_FOLDER_ID?usp=sharing",
  },

  /**
   * EXTERNAL NOTES WEBSITE INTEGRATION:
   * Used for general portal links and Buy Notes.
   */
  externalNotesUrl: "[INSERT YOUR NOTES WEBSITE LINK HERE]",
  
  /**
   * CONTACT DETAILS:
   * Only Gmail contact is permitted.
   */
  gmailAddress: "[INSERT YOUR GMAIL ADDRESS HERE]",
  
  // Announcement ticker message
  announcement: "Admissions Open for 2026-2027 Competitive Exam Batches & Notes!",
  
  // Main Category Tags for Hero Section
  heroPills: [
    { id: "ssc", label: "SSC Exams", count: "4 Major Exams" },
    { id: "railway", label: "Railway Exams", count: "NTPC & Group D" },
    { id: "gs", label: "General Studies", count: "Complete GK & GS" },
  ],

  // 7 Study Material Examination Categories (Section 3)
  // Each category maps directly to its specific Google Drive folder key
  studyMaterialCategories: [
    {
      id: "ssc-gd",
      name: "SSC GD",
      fullName: "Staff Selection Commission - General Duty Constable",
      category: "SSC",
      image: "/images/ssc-gd.jpg",
      badge: "Constable (GD) 2026",
      driveKey: "sscGdFolder",
      description: "Complete study package covering General Intelligence & Reasoning, General Knowledge & Elementary Mathematics for BSF, CISF, CRPF, SSB, ITBP, and SSF exams.",
      highlights: ["Maths Short Tricks", "General Science & GK", "Reasoning Solved Sets", "Hindi & English Grammar"],
      targetPosts: "BSF, CISF, CRPF, SSB, ITBP, Assam Rifles, SSF",
      eligibility: "10th Class Pass",
    },
    {
      id: "ssc-cgl",
      name: "SSC CGL",
      fullName: "Combined Graduate Level Examination",
      category: "SSC",
      image: "/images/ssc-cgl.jpg",
      badge: "Tier-1 & Tier-2",
      driveKey: "sscCglFolder",
      description: "In-depth study notes for Graduate Level posts. Covers Quantitative Aptitude, English Comprehension, General Intelligence & GS with topic-wise previous years analysis.",
      highlights: ["Advanced Maths Formulas", "Grammar Rules & Vocab", "GS Static + Current", "Tier-2 Focused Practice"],
      targetPosts: "Assistant Section Officer (ASO), Inspector (Central Excise/IT), Auditor, Tax Assistant",
      eligibility: "Bachelor's Degree",
    },
    {
      id: "ssc-chsl",
      name: "SSC CHSL",
      fullName: "Combined Higher Secondary Level (10+2)",
      category: "SSC",
      image: "/images/ssc-chsl.jpg",
      badge: "10+2 Level",
      driveKey: "sscChslFolder",
      description: "Targeted revision notes for 10+2 aspirants covering General Awareness, Quantitative Aptitude, Reasoning, and English Language for clerical and ministerial cadres.",
      highlights: ["Arithmetic & Algebra Basics", "Vocabulary & Synonyms", "General Awareness Digest", "Speed Test Question Banks"],
      targetPosts: "Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Data Entry Operator (DEO)",
      eligibility: "12th Standard Pass",
    },
    {
      id: "ssc-mts",
      name: "SSC MTS",
      fullName: "Multi-Tasking (Non-Technical) Staff & Havaldar",
      category: "SSC",
      image: "/images/ssc-mts.jpg",
      badge: "MTS 2026 Guide",
      driveKey: "sscMtsFolder",
      description: "Exam-focused study material designed for high scoring in Session-2 (General Awareness & English) along with qualifying Session-1 Numerical & Reasoning.",
      highlights: ["High-scoring GS Notes", "Essential English Vocab", "Basic Maths Shortcuts", "Previous Solved Papers"],
      targetPosts: "Multi-Tasking Staff & Havaldar (CBIC/CBN)",
      eligibility: "10th Class Pass",
    },
    {
      id: "railway-ntpc",
      name: "Railway NTPC",
      fullName: "RRB Non-Technical Popular Categories",
      category: "Railway",
      image: "/images/railway-ntpc.jpg",
      badge: "CBT-1 & CBT-2",
      driveKey: "railwayNtpcFolder",
      description: "Comprehensive notes for Graduate and Undergraduate posts in Indian Railways. Heavy focus on General Awareness (40-50 Marks), Mathematics, and General Intelligence.",
      highlights: ["General Science Capsules", "Railway GK & History", "Arithmetic & Geometry", "CBT-1 & CBT-2 Practice Sets"],
      targetPosts: "Station Master, Goods Guard, Senior Clerk cum Typist, Commercial Apprentice",
      eligibility: "12th Pass / Graduate (Post specific)",
    },
    {
      id: "railway-group-d",
      name: "Railway Group D",
      fullName: "RRB Level 1 Posts Recruitment",
      category: "Railway",
      image: "/images/railway-groupd.jpg",
      badge: "RRB Level 1",
      driveKey: "railwayGroupDFolder",
      description: "Syllabus-aligned preparation notes emphasizing NCERT Physics, Chemistry, and Biology (25 Marks), Mathematics, Reasoning, and Current Affairs.",
      highlights: ["NCERT General Science Theory", "Class 9th & 10th Science Numericals", "Logical Reasoning Patterns", "Fast Track Revision Sheets"],
      targetPosts: "Track Maintainer Grade IV, Helper/Assistant in Electrical, Mechanical, Signal & Telecommunication",
      eligibility: "10th Pass or ITI from NCVT/SCVT",
    },
    {
      id: "other-govt-exams",
      name: "Other Government Competitive Examinations",
      fullName: "State PSC, Police, Defence & Central Exams",
      category: "Other",
      image: "/images/other-govt.jpg",
      badge: "State & Central",
      driveKey: "otherExamsFolder",
      description: "Foundational and advanced study materials covering State Police Constables & Sub-Inspectors, State SSC/CET exams, Teaching exams, and Defence services.",
      highlights: ["Indian Polity & Constitution", "Indian History & Geography", "Standard Numerical Ability", "State GK Modules"],
      targetPosts: "State Police SI & Constable, State CET, DSSSB, State PSC Non-Gazetted Posts",
      eligibility: "10th / 12th / Graduate",
    },
  ],

  // Detailed breakdown for "Exams Covered" (Section 4)
  examsCoveredDetailed: {
    ssc: {
      title: "Staff Selection Commission (SSC) Examinations",
      subtitle: "The most sought-after recruitment exams for Central Government ministries, departments, and subordinate offices.",
      exams: [
        {
          name: "SSC GD Constable",
          stage: "Computer Based Examination (CBE) + PET/PST",
          syllabus: "General Intelligence & Reasoning, Elementary Mathematics, General Knowledge & General Awareness, English/Hindi.",
          pattern: "80 Questions | 160 Marks | 60 Minutes",
          keyBenefit: "Crisp chapter-wise notes for quick recall in General Science and Elementary Maths.",
          driveKey: "sscGdFolder",
        },
        {
          name: "SSC CGL",
          stage: "Tier-1 (Qualifying) & Tier-2 (Merit)",
          syllabus: "Quantitative Aptitude, General Intelligence, English Language & Comprehension, General Awareness, Computer Knowledge & Data Entry.",
          pattern: "Tier-1: 100 Qs (200 Marks) | Tier-2: Multi-Section Paper",
          keyBenefit: "Advanced formula sheets, tricky geometry/algebra shortcuts, and high-frequency English vocab.",
          driveKey: "sscCglFolder",
        },
        {
          name: "SSC CHSL",
          stage: "Tier-1 & Tier-2 (Objective + Typing/Skill Test)",
          syllabus: "Mathematical Abilities, Reasoning, English Comprehension, General Awareness, and Basic Computer Knowledge.",
          pattern: "Tier-1: 100 Qs | Tier-2: Module 1 & 2 Tests",
          keyBenefit: "Concept builders for 10+2 syllabus with previous 5 years' solved trend analysis.",
          driveKey: "sscChslFolder",
        },
        {
          name: "SSC MTS & Havaldar",
          stage: "Session-1 (Qualifying) + Session-2 (Merit Scoring)",
          syllabus: "Session 1: Numerical Ability & Reasoning | Session 2: General Awareness & English Language.",
          pattern: "Session-2 decides rank: 50 Questions | 150 Marks",
          keyBenefit: "Maximum focus on General Awareness and English vocabulary where ranks are determined.",
          driveKey: "sscMtsFolder",
        },
      ],
    },
    railway: {
      title: "Railway Recruitment Board (RRB) Examinations",
      subtitle: "Recruitment examinations for key operational, clerical, and technical positions across all 21 Indian Railway zones.",
      exams: [
        {
          name: "Railway NTPC (Graduate & Under Graduate)",
          stage: "CBT-1, CBT-2, Typing/CBAT, Document Verification & Medical",
          syllabus: "General Awareness (Science, History, Polity, Geography, Current Affairs), Mathematics, General Intelligence & Reasoning.",
          pattern: "CBT 1: 100 Qs (90 Mins) | CBT 2: 120 Qs (90 Mins)",
          keyBenefit: "Comprehensive Railway General Knowledge capsule and topic-wise General Science theory.",
          driveKey: "railwayNtpcFolder",
        },
        {
          name: "Railway Group D (RRB Level 1)",
          stage: "Single-stage CBT + Physical Efficiency Test (PET)",
          syllabus: "General Science (Class 10th NCERT Physics, Chemistry, Life Sciences), Mathematics, General Intelligence, Current Affairs.",
          pattern: "100 Questions | 100 Marks | 90 Minutes",
          keyBenefit: "Dedicated NCERT science summaries with solved numerical problems and chemical reaction tables.",
          driveKey: "railwayGroupDFolder",
        },
      ],
    },
    other: {
      title: "Other Government Competitive Examinations",
      subtitle: "Foundation study resources for aspirants preparing simultaneously for state-level and allied government recruitment drives.",
      exams: [
        {
          name: "State Police Exams (SI & Constable)",
          stage: "Written Test + Physical Standards & Efficiency Test",
          syllabus: "General Studies, Numerical & Mental Ability, Mental Aptitude/Law & Constitution, State General Knowledge.",
          pattern: "Varies by State (UP Police, Delhi Police, Bihar Police, MP Police)",
          keyBenefit: "Core GK and law/polity summaries adaptable to state-specific examinations.",
          driveKey: "otherExamsFolder",
        },
        {
          name: "State Staff Selection & CET Exams",
          stage: "Common Eligibility Tests / Screening Examinations",
          syllabus: "General Awareness, Reasoning, Quantitative Aptitude, State History & Culture.",
          pattern: "Objective Multiple Choice Format",
          keyBenefit: "Strong base in General Studies that serves as the common denominator for all CETs.",
          driveKey: "otherExamsFolder",
        },
      ],
    },
  },

  // About Us Pillars
  aboutFeatures: [
    {
      title: "Direct Google Drive Access",
      desc: "Every exam category connects directly to its dedicated Google Drive folder with viewable PDFs and notes without any login barrier.",
    },
    {
      title: "Focused on Student Success",
      desc: "Every note and study package is crafted with the exact exam syllabus and latest exam trends in mind, removing clutter.",
    },
    {
      title: "Structured & Easy to Revise",
      desc: "Information organized logically with chapter summaries, bullet points, formula charts, and mnemonics for rapid retention.",
    },
    {
      title: "Direct Mentor Support via Gmail",
      desc: "Aspirants have direct access to reach out via Gmail for guidance, resource questions, and feedback.",
    },
  ],

  // Buy Notes Features
  buyNotesFeatures: [
    "Comprehensive Coverage of SSC & Railway Syllabus",
    "Chapter-wise Theory + High-Yield Practice Questions",
    "Previous 5+ Years Solved Trends & Pattern Analysis",
    "Formula Cheat Sheets, Mind Maps & Quick Revision Tables",
    "Instant Google Drive & Digital Portal Access",
    "Bilingual Presentation (Simple Hindi & English Explanations)",
  ],
};
