"use client"

 
import { Poppins } from "next/font/google"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export default function WorkBanner() {
  const { t, language } = useLanguage();

  return (
    <section
      className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/bg-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 pt-20">
        {/* Left Content */}
        <motion.div
          className={`w-full md:w-1/2 py-10 md:py-20 ${language === "ar" ? "text-right" : "text-center md:text-left"}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 ${poppins.className} ${language === "ar" ? "text-right" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            {t('work.banner.title')}
          </motion.h1>

          <motion.p
            className={`text-lg md:text-xl text-white/80 mb-6 max-w-xl mx-auto md:mx-0 ${language === "ar" ? "text-right" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            {t('works.subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
