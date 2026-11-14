import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 p-2.5 sm:p-3 rounded-full bg-blue-600/90 hover:bg-blue-600 active:bg-blue-700 text-white shadow-xl backdrop-blur-xs transition-all transform hover:-translate-y-1 active:scale-95 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
