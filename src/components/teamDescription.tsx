"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

type AnimationType = "fade" | "scale" | "slide" | "bounce" | "rotate3d"
type TransitionType = "spring" | "tween" | "bounce"

interface AnimationVariant {
  initial: Record<string, number>
  animate: Record<string, number | number[]>
  exit: Record<string, number>
}

 


interface HighlightSet {
  words: string[]
  color: string
  animation: AnimationType
  transition: TransitionType
}

// Memoize the animation variants
const animationVariants: Record<AnimationType, AnimationVariant> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
    exit: { scale: 0.8 }
  },
  slide: {
    initial: { x: -20 },
    animate: { x: 0 },
    exit: { x: 20 }
  },
  bounce: {
    initial: { y: 0 },
    animate: { 
      y: [-10, 0, -5, 0]
    },
    exit: { y: 0 }
  },
  rotate3d: {
    initial: { 
      rotateX: 10,
      rotateY: 10,
      scale: 0.8,
      opacity: 0
    },
    animate: { 
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1
    },
    exit: { 
      rotateX: -10,
      rotateY: -10,
      scale: 0.8,
      opacity: 0
    }
  }
};

 

// Memoize the highlighted sets
const highlightedSets: HighlightSet[] = [
  { 
    words: ["cross-disciplinary", "strategists", "designers"], 
    color: "text-[#3D096C]",
    animation: "rotate3d",
    transition: "spring"
  },
  { 
    words: ["developers", "storytellers", "belief"], 
    color: "text-[#5A189A]",
    animation: "rotate3d",
    transition: "tween"
  },
  { 
    words: ["design", "business", "together"], 
    color: "text-[#E1AAFF]",
    animation: "rotate3d",
    transition: "bounce"
  }
];

// Arabic highlighted sets
const arabicHighlightedSets: HighlightSet[] = [
  { 
    words: ["متعدد", "التخصصات", "الاستراتيجيين", "المصممين"], 
    color: "text-[#5A189A]",
    animation: "rotate3d",
    transition: "spring"
  },
  { 
    words: ["المطورين", "رواة", "القصص", "إيمان"], 
    color: "text-[#E1AAFF]",
    animation: "rotate3d",
    transition: "tween"
  },
  { 
    words: ["مشترك", "فريق", "يجمعنا"], 
    color: "text-[#A43EF9]",
    animation: "rotate3d",
    transition: "bounce"
  }
];

interface AnimatedWordProps {
  word: string;
  isHighlighted: boolean;
  currentSet: HighlightSet;
  index: number;
  onPauseToggle: () => void;
}

// Memoized Word Component
const AnimatedWord = memo(({ 
  word, 
  isHighlighted, 
  currentSet, 
  index,
  onPauseToggle
}: AnimatedWordProps) => {
  const handleClick = useCallback(() => {
    if (isHighlighted) {
      onPauseToggle();
    }
  }, [isHighlighted, onPauseToggle]);

  return (
    <motion.span
      key={index}
      initial={isHighlighted ? animationVariants[currentSet.animation].initial : {}}
      animate={isHighlighted ? animationVariants[currentSet.animation].animate : {}}
      exit={isHighlighted ? animationVariants[currentSet.animation].exit : {}}
       className={`inline-block ${isHighlighted ? currentSet.color : 'text-black'} ${index !== 0 ? 'ml-1' : ''}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      whileHover={isHighlighted ? {
        scale: 1.1,
        rotateX: 10,
        rotateY: 10,
        transition: { duration: 0.2 }
      } : {}}
      onClick={handleClick}
    >
      {word}
    </motion.span>
  );
});

AnimatedWord.displayName = 'AnimatedWord';

export default function TeamDescription() {
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const { t, language } = useLanguage()

  const handlePauseToggle = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = "+919074851748";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  // Use appropriate highlighted sets based on language
  const currentHighlightedSets = language === 'ar' ? arabicHighlightedSets : highlightedSets;

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentHighlightIndex((prev) => (prev + 1) % currentHighlightedSets.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isPaused, currentHighlightedSets.length])

  const renderText = useCallback(() => {
    const text = t('team.description.text')
    const currentSet = currentHighlightedSets[currentHighlightIndex]
    
    return text.split(' ').map((word, index) => {
      const isHighlighted = currentSet.words.includes(
        word.toLowerCase().replace(/[.,—]/g, '')
      )
      
      return (
        <AnimatedWord
          key={index}
          word={word}
          isHighlighted={isHighlighted}
          currentSet={currentSet}
          index={index}
          onPauseToggle={handlePauseToggle}
        />
      )
    })
  }, [currentHighlightIndex, handlePauseToggle, t, currentHighlightedSets])

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 lg:pt-16  py-12    sm:py-12 md:py-24 md:pt-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 relative">
      <div className="max-w-[957px] w-full">
        <h2 
          className={`$${language === 'ar' ? 'text-right' : 'text-left'} text-xl px-2 sm:text-2xl md:text-3xl lg:text-[40px] font-poppins leading-tight`}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          {renderText()}
        </h2>
        
      </div>
      <div className="hidden md:flex items-center justify-center w-full md:w-auto">
        <div className="flex items-center justify-center w-full">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center group">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-[#59189a84] to-[#290d458e] scale-105 group-hover:scale-110 transition-transform duration-300"></div>
            <button 
              onClick={handleWhatsAppClick}
              className="relative z-10 w-[90%] h-[90%] rounded-full bg-gradient-to-r from-[#5A189A] to-[#290d45] text-white text-sm sm:text-base font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {t('team.contactUs')}
            </button>
          </div>
        </div>
      </div>
      
      

      {/* Mobile Contact Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <div className="relative w-20 h-20 flex items-center justify-center group">
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 scale-105 group-hover:scale-110 transition-transform duration-300"></div>
          <button 
            onClick={handleWhatsAppClick}
            className="relative z-10  w-18 h-18 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-[14px] font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {t('team.contactUs')}
          </button>
        </div>
      </div>
    </div>
  )
}