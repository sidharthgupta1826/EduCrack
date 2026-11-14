import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { Mail, Copy, Check, Send, Sparkles } from 'lucide-react';

export const ContactUs = () => {
  const { config, handleContactGmail, showToast } = useConfig();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (config.gmailAddress) {
      navigator.clipboard.writeText(config.gmailAddress);
      setCopied(true);
      showToast("Gmail address copied to clipboard!", "info");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-white text-slate-800 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3 sm:mb-4">
          <Mail className="w-3.5 h-3.5 shrink-0" />
          <span>Contact Us</span>
        </div>

        {/* Heading & Subtitle */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Have Questions? Reach Out Directly via Gmail
        </h2>

        <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We are dedicated to helping competitive examination aspirants. For inquiries about study notes, syllabus guidance, or questions, you can contact us directly at our official Gmail address.
        </p>

        {/* Main Gmail Contact Card */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/50 border border-blue-100 shadow-xl max-w-2xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Gmail Stylized Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md flex items-center justify-center">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                fill="#EA4335"
              />
            </svg>
          </div>

          {/* Email Address Display with Copy Button */}
          <div className="space-y-2 w-full">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Official Gmail Address
            </span>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 w-full max-w-full">
              <span className="text-xs sm:text-lg md:text-xl font-mono font-bold text-slate-900 bg-white px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl border border-slate-200 shadow-xs break-all text-center flex-1">
                {config.gmailAddress}
              </span>
              <button
                onClick={handleCopyEmail}
                title="Copy Gmail Address"
                className="py-2.5 px-4 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 text-xs font-semibold min-h-[44px] cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-emerald-600 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 shrink-0" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Primary Action Button: "Contact via Gmail" */}
          <div className="pt-1">
            <button
              onClick={handleContactGmail}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-xl sm:rounded-2xl shadow-lg shadow-red-500/25 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-red-100 shrink-0" />
              <span>Contact via Gmail</span>
            </button>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-2.5">
              Opens your default Gmail or email application with a pre-formatted message
            </p>
          </div>

          {/* Reassurance message */}
          <div className="pt-3 border-t border-slate-200/60 text-[11px] sm:text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Direct correspondence with mentor • No third-party forms</span>
          </div>

        </div>

      </div>
    </section>
  );
};
