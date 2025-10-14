"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Poppins } from "next/font/google"
import { useLanguage } from "@/contexts/LanguageContext"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
})

// Floating animation keyframes
const floatingAnimation = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes slideBackgroundLTR {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes slideBackgroundRTL {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
}

@keyframes textReveal {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}
`

export default function ServiceMain() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current
    if (!banner) return

    if (language === 'ar') {
      banner.style.animation = "slideBackgroundRTL 10s linear infinite"
    } else {
      banner.style.animation = "slideBackgroundLTR 10s linear infinite"
    }

    return () => {
      if (banner) {
        banner.style.animation = ""
      }
    }
  }, [language])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-center items-center overflow-hidden md:px-16 lg:px-24 pt-16"
    >
      {/* Animated gradient background with moving colors */}
  <div className="absolute inset-0 w-full h-full z-0">
        <div
          ref={bannerRef}
          className="absolute inset-0 w-[200%] h-full flex"
          style={{
            willChange: "transform",
          }}
        >
          {/* Custom animated gradient backgrounds */}
          <div
            className="w-full h-full flex-shrink-0"
            style={{
              background: "linear-gradient(90deg, #A43EF9 0%, #3D096C 25%, #5A189A 50%, #E1AAFF 100%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "center",
            }}
          />
          <div
            className="w-full h-full flex-shrink-0"
            style={{
              background: "linear-gradient(90deg, #E1AAFF 0%, #5A189A 25%, #3D096C 50%, #A43EF9 100%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>

      {/* Modern decorative elements */}
      <style jsx global>
        {floatingAnimation}
      </style>
      
      {/* Floating circles */}
      {/* Floating circles with new colors */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full blur-2xl z-10 pointer-events-none"
        style={{
          animation: "float 4s ease-in-out infinite",
          background: "linear-gradient(135deg, #A43EF9 0%, #E1AAFF 100%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full blur-2xl z-10 pointer-events-none"
        style={{
          animation: "float 5s ease-in-out infinite",
          background: "linear-gradient(135deg, #3D096C 0%, #5A189A 100%)",
        }}
      />

      {/* Content */}
      {/* Service banner text overlay */}
      <div className="relative flex flex-col items-center justify-center w-full h-full px-4 py-12 sm:px-6 lg:px-8 sm:py-16 md:py-20 lg:py-24 z-30">
        <div
          className={`max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl text-center ${language === 'ar' ? 'text-right' : ''}`}
          style={{ color: '#fff',  zIndex: 30 }}
        >
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-2 sm:mb-3 drop-shadow-lg ${poppins.className}`}
            style={{ color: '#fff',   zIndex: 30 }}
          >
            Our Services
          </h1>
          <p
            className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-5 drop-shadow"
            style={{ color: '#fff',   zIndex: 30 }}
          >
            We offer a wide range of digital solutions including App Development, Branding, Digital Marketing, Web Development, and more. Let us help you grow your business with innovative strategies and creative execution.
          </p>
          <a
            href="https://wa.me/919074851748"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block`}
            style={{ zIndex: 30 }}
          >
            <button
              className={`flex items-center cursor-pointer bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-200 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-sm sm:text-base group ${poppins.className} ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              style={{ zIndex: 30 }}
            >
              Get Started
              <span>
                <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform`} />
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
