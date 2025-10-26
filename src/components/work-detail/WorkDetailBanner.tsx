"use client"

import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export interface WorkDetailBannerProps {
  title: string;
  description: string;
}

export default function WorkDetailBanner({ title, description }: WorkDetailBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);
 
  return (
    <div className=" w-full overflow-hidden  ">
      <div className="relative w-full py-[150px] pt-[170px]   flex items-center justify-start px-4 sm:px-6 lg:px-12" 
        style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1277470.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        {/* Content Container */}
        <div className="w-full max-w-4xl">
          {/* Main Heading - Fade in and slide up animation */}
          <h1
            className={`text-4xl sm:text-4xl lg:text-5xl  font-bold text-white mb-6 leading-tight transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {title}
          </h1>

          {/* Description Text - Fade in with delay */}
          <p
            className={`text-base sm:text-lg  text-white/90 mb-8 max-w-2xl leading-relaxed transition-all duration-1000 transform delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {description}
          </p>

          {/* Buttons Container - Fade in with delay */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 transform delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Let's Talk Button */}
            <button
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 sm:px-10 sm:py-4 bg-white text-[#010737]  cursor-pointer  font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              aria-label={t("workDetailBanner.letsTalk")}
            >
              <span>{t("workDetailBanner.letsTalk")}</span>
            </button>

            {/* Download Case Study Button */}
            <button
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 sm:px-10 sm:py-4 bg-white text-[#010737] cursor-pointer font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              aria-label={t("workDetailBanner.downloadCaseStudy")}
            >
              <span>{t("workDetailBanner.downloadCaseStudy")}</span>
            </button>
          </div>
        </div>

       
      </div>
    </div>
  )
}
