"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export default function SocialResultSection() {
  const { t, language } = useLanguage();

  // Handle RTL support for this component
  useEffect(() => {
    const contentContainer = document.querySelector('.result-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  return (
    
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className={`md:col-span-8 space-y-4 sm:space-y-6 result-content ${language === 'ar' ? 'text-right' : ''}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">{t('results.title')}</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
            We build impactful social media experiences that boost brand visibility, spark engagement, and drive real results.       </p>
          </div>

          <div className="md:col-span-4 hidden md:flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center group">
              <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-100/30 to-cyan-100/30 backdrop-blur-sm scale-105 group-hover:scale-110 transition-transform duration-300"></div>
              <button className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-blue-500/80 to-cyan-400/80 backdrop-blur-md text-white text-xs sm:text-sm md:text-[14px] font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                {t('results.contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
