"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiArrowUpRight } from "react-icons/fi";

// ---------------------------------------------------------------------------
// 1. Data & Config
// ---------------------------------------------------------------------------

type HighlightSet = {
  words: string[];
  displayTitle: string; 
  accentColor: string;
  glowColor: string; // Added for the text-shadow effect
};

const highlightedSets: HighlightSet[] = [
  {
    words: ["cross-disciplinary", "strategists", "designers"],
    displayTitle: "STRATEGISTS & DESIGNERS",
    accentColor: "text-[#D8B4FE]", // Light Purple for dark bg
    glowColor: "rgba(168, 85, 247, 0.5)",
  },
  {
    words: ["developers", "storytellers", "belief"],
    displayTitle: "BUILDERS OF BELIEF",
    accentColor: "text-[#E9D5FF]", // Lighter Purple
    glowColor: "rgba(192, 132, 252, 0.5)",
  },
  {
    words: ["design", "business", "together"],
    displayTitle: "BUSINESS & DESIGN",
    accentColor: "text-[#F3E8FF]", // Almost White Purple
    glowColor: "rgba(216, 180, 254, 0.5)",
  },
];

const arabicHighlightedSets: HighlightSet[] = [
  {
    words: ["متعدد", "التخصصات", "الاستراتيجيين", "المصممين"],
    displayTitle: "استراتيجية وتصميم",
    accentColor: "text-[#D8B4FE]",
    glowColor: "rgba(168, 85, 247, 0.5)",
  },
  {
    words: ["المطورين", "رواة", "القصص", "إيمان"],
    displayTitle: "بناء المعتقدات",
    accentColor: "text-[#E9D5FF]",
    glowColor: "rgba(192, 132, 252, 0.5)",
  },
  {
    words: ["مشترك", "فريق", "يجمعنا"],
    displayTitle: "تصميم الأعمال",
    accentColor: "text-[#F3E8FF]",
    glowColor: "rgba(216, 180, 254, 0.5)",
  },
];

// ---------------------------------------------------------------------------
// 2. Main Component
// ---------------------------------------------------------------------------

export default function TeamDescription() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();

  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = "+919947400278";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  const currentSets = language === "ar" ? arabicHighlightedSets : highlightedSets;
  const activeSet = currentSets[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentSets.length);
    }, 4500); // Slightly slower for better reading
    return () => clearInterval(interval);
  }, [currentSets.length]);

  // Helper to render the paragraph
  const renderContextParagraph = () => {
    const text = t("team.description.text") || "";
    return text.split(" ").map((word, i) => {
      const cleanWord = word.toLowerCase().replace(/[.,—]/g, "");
      const isActive = activeSet.words.includes(cleanWord);

      return (
        <span
          key={i}
          className={`relative inline-block transition-all duration-700 mx-1 ${
            isActive
              ? "text-white font-bold opacity-100 scale-105"
              : "text-gray-400 font-medium opacity-50 blur-[0.5px]"
          }`}
          style={{
             textShadow: isActive ? `0 0 20px ${activeSet.glowColor}` : 'none'
          }}
        >
          {word}
          {isActive && (
            // Animated Underline
            <motion.span 
                layoutId="underline"
                className="absolute left-0 bottom-0 block h-[2px] w-full bg-gradient-to-r from-[#A43EF9] to-[#E1AAFF]" 
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </span>
      );
    });
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[80vh] flex items-center">
      
      {/* 1. Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('/work-bg.jpg')",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-32">
        
        {/* LEFT COLUMN: The "Big Impact" Title */}
        <div className="flex-1 w-full relative h-[140px] sm:h-[180px] lg:h-auto lg:min-h-[400px] flex items-center lg:items-start justify-center lg:justify-start">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentIndex}
              initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -60, opacity: 0, filter: "blur(20px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Elegant ease
              className={`
                text-5xl sm:text-6xl lg:text-8xl 
                font-black uppercase leading-[0.9] tracking-tighter 
                text-center lg:text-left absolute lg:relative w-full
                ${activeSet.accentColor}
              `}
              style={{
                textShadow: `0 0 40px ${activeSet.glowColor}`
              }}
            >
              {activeSet.displayTitle}
            </motion.h2>
          </AnimatePresence>

          {/* Background decorative huge number */}
          <span className="absolute -left-12 -top-16 text-[250px] font-bold text-white/5 -z-10 select-none hidden lg:block font-['Figtree']">
            0{currentIndex + 1}
          </span>
        </div>

        {/* RIGHT COLUMN: Context & CTA */}
        <div className="flex-1 w-full flex flex-col items-center lg:items-start gap-10">
          
          {/* Tag */}
          <div className="flex items-center gap-3 w-full justify-center lg:justify-start">
            <span className="h-[1px] w-12 bg-[#E1AAFF]/50"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#E1AAFF] uppercase shadow-glow">
              {t('team.label') || "Our DNA"}
            </span>
          </div>

          {/* Paragraph */}
          <p 
            className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-center lg:text-left font-light tracking-wide"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {renderContextParagraph()}
          </p>

          {/* Glassmorphism Button */}
          <button
            onClick={handleWhatsAppClick}
            className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {/* Button Background: Glass + Gradient Border */}
            <span className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full group-hover:bg-white/20 transition-all duration-300"></span>
            
            {/* Hover Gradient Glow */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#5A189A] to-[#452D9B] opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"></span>

            <span className="relative flex items-center gap-3 z-10">
              {t("team.contactUs")} 
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <FiArrowUpRight className="text-lg" />
              </span>
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}