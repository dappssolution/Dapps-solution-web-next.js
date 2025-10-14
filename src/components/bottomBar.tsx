"use client";

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

export default function BottomBar() {
  const { t, language } = useLanguage();
  // Arrow animation state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full primary-background h-full">
      {/* CTA Section */}
      <div className="relative primary-background w-full px-4 sm:px-6 py-12 md:py-20 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center ${language === 'ar' ? 'text-right' : ''}`}>
            <motion.div 
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('bottom.bar.title')}
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl">
                {t('bottom.bar.description')}
              </p>
            </motion.div>
            <motion.div 
              className={`flex ${language === 'ar' ? 'flex-row-reverse md:justify-end' : 'md:justify-end'}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                href="#"
                className={`inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-teal-500 text-white hover:bg-teal-900/30 transition-colors w-full md:w-auto justify-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {t('bottom.bar.button')}
                <motion.span
                  animate={{
                    x: isHovered ? [0, 4, 0] : 0
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: isHovered ? Infinity : 0,
                    repeatType: "loop",
                    repeatDelay: 1
                  }}
                >
                  <ArrowRight className={`h-4 w-4 sm:h-5 sm:w-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}