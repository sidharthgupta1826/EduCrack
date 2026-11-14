import React from 'react';
import { ConfigProvider } from './context/ConfigContext';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { StudyMaterial } from './components/StudyMaterial';
import { ExamsCovered } from './components/ExamsCovered';
import { BuyNotes } from './components/BuyNotes';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { NotificationToast } from './components/NotificationToast';
import { ConfigModal } from './components/ConfigModal';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <ConfigProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white">
        {/* Top Info & Announcement Bar */}
        <TopBar />

        {/* Responsive Sticky Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Section 1: Home / Hero */}
          <Hero />

          {/* Section 2: About Us */}
          <AboutUs />

          {/* Section 3: Study Material (Most Important Section) */}
          <StudyMaterial />

          {/* Section 4: Exams Covered */}
          <ExamsCovered />

          {/* Section 5: Buy Notes */}
          <BuyNotes />

          {/* Section 6: Contact Us (Gmail Only) */}
          <ContactUs />
        </main>

        {/* Section 7/8: Footer */}
        <Footer />

        {/* Global Utilities */}
        <NotificationToast />
        <ConfigModal />
        <ScrollToTop />
      </div>
    </ConfigProvider>
  );
}
