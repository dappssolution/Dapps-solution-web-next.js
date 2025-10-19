"use client"

 
import { useEffect, useRef } from "react"
import { Poppins } from "next/font/google"
import { useLanguage } from "@/contexts/LanguageContext"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
})

 

export default function ServiceMain() {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null)
  
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
      style={{
  backgroundImage: "url('/bg-1.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}

    >
   

     

      {/* Content */}
      {/* Service banner text overlay */}
      <div className="relative flex flex-col items-center justify-center w-full h-full px-4 py-12 sm:px-6 lg:px-8 sm:py-16 md:py-20 lg:py-24 z-30">
        <div
          className={`max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl text-center ${language === 'ar' ? 'text-right' : ''}`}
          style={{ color: '#fff',  zIndex: 30 }}
        >
          <h1
            className={`text-3xl sm:text-5xl font-nohemi md:text-6xl lg:text-6xl font-extrabold mb-2 sm:mb-3 drop-shadow-lg ${poppins.className}`}
            style={{ color: '#fff',   zIndex: 30 }}
          >
            {t('serviceMain.title')}
          </h1>
          <p
            className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-5 drop-shadow"
            style={{ color: '#fff',   zIndex: 30 }}
          >
            {t('serviceMain.description')}
          </p>
          <a
            href={`https://wa.me/919947400278?text=${t('serviceMain.whatsappMessage')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block`}
            style={{ zIndex: 30 }}
          >
            <button
              className={`flex items-center cursor-pointer bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-200 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-sm sm:text-base group ${poppins.className} ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              style={{ zIndex: 30 }}
            >
              {t('serviceMain.button')}
              <span>
                
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
