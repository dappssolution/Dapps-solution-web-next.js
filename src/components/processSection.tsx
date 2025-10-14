"use client"

import { Poppins } from 'next/font/google';
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],  
  variable: '--font-poppins',  
});

export default function ProcessSection() {
  const { t, language } = useLanguage();

  
  // Handle RTL support for this component
  useEffect(() => {
    const contentContainer = document.querySelector('.process-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  return (
    <section className={`bg-[#1d1d1d] text-white py-12 sm:py-16 md:py-20 px-5 md:px-16 lg:px-24 ${poppins.className}`}>
      <div className={`text-center sm:text-left process-content ${language === 'ar' ? 'text-right' : ''}`}>
        <h2 className={`text-3xl sm:text-4xl md:text-[48px] font-medium mb-10 sm:mb-16 md:mb-20`}>{t('process.title')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-gradient-to-r from-[#5f4d30] to-[#4b463b]">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold">1</span>
            </div>
            <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3">{t('process.step1.title')}</h3>
            <p className="text-sm sm:text-base text-gray-400 text-center sm:text-left max-w-[290px] sm:max-w-none">
              {t('process.step1.description')}
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-gradient-to-r from-[#6b4595] to-[#796d8b]">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold">2</span>
            </div>
            <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3">{t('process.step2.title')}</h3>
            <p className="text-sm sm:text-base text-gray-400 text-center sm:text-left max-w-[290px] sm:max-w-none">
              {t('process.step2.description')}
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center sm:items-start mt-8 lg:mt-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-gradient-to-r from-[#359191] to-[#1a3b3b]">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold">3</span>
            </div>
            <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3">{t('process.step3.title')}</h3>
            <p className="text-sm sm:text-base text-gray-400 text-center sm:text-left max-w-[290px] sm:max-w-none">
              {t('process.step3.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
  