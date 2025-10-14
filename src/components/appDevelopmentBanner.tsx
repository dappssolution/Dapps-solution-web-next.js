"use client"

import { ArrowUpRight } from "lucide-react"
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { useLanguage } from "@/contexts/LanguageContext";

// Add type for CSS custom properties
type CSSPropertiesWithCustomVars = React.CSSProperties & {
  '--rotation': string;
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // You can include multiple weights
  display: 'swap',
  variable: '--font-poppins',
});

// Add keyframes animation
const floatingAnimation = `
  @keyframes float {
    0% {
      transform: translateY(0px) rotate(var(--rotation));
    }
    50% {
      transform: translateY(-10px) rotate(var(--rotation));
    }
    100% {
      transform: translateY(0px) rotate(var(--rotation));
    }
  }
`;

export default function AppDevelopmentBanner() {
  const { t, language } = useLanguage();

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Add global styles for animation */}
      <style jsx global>{floatingAnimation}</style>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-10" />

      {/* Floating website images */}
      <div className="absolute inset-0 z-0">
        {/* Top left image */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-32 sm:w-48 md:w-64 h-20 sm:h-32 md:h-40 rounded-lg shadow-2xl opacity-60 overflow-hidden animate-float" style={{ '--rotation': '-12deg' } as CSSPropertiesWithCustomVars}>
          <Image
            src="/images/Web-development/GENCHI.jpg"
            alt="GENCHI"
            fill
            className="object-cover"
          />
        </div>

        {/* Top center image */}
        <div className="absolute top-8 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-80 h-16 sm:h-20 md:h-24 rounded-lg shadow-2xl opacity-50 overflow-hidden animate-float-delay-1" style={{ '--rotation': '3deg' } as CSSPropertiesWithCustomVars}>
          <Image
            src="/images/game-gate.png"
            alt="Game Gate"
            fill
            className="object-cover"
          />
        </div>

        {/* Top right image */}
        <div className="absolute top-4 lg:top-8 right-2 lg:right-4 w-48 lg:w-72 h-32 lg:h-48 rounded-lg shadow-2xl opacity-70 overflow-hidden animate-float-delay-2" style={{ '--rotation': '12deg' } as CSSPropertiesWithCustomVars}>
          <Image
            src="/images/scitor-academy.jpg"
            alt="Scitor Academy"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom left image */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-2 sm:left-4 md:left-8 w-48 sm:w-64 md:w-80 h-32 sm:h-40 md:h-52 rounded-lg shadow-2xl opacity-60 overflow-hidden animate-float-delay-3" style={{ '--rotation': '-6deg' } as CSSPropertiesWithCustomVars}>
          <Image
            src="/images/aes-school-of-commerce.jpg"
            alt="AES School of Commerce"
            fill
            className="object-cover"
          />
        </div>

        {/* Center left image */}
        <div className="absolute top-1/2 left-2 xl:left-4 transform -translate-y-1/2 w-48 xl:w-64 h-28 xl:h-36 rounded-lg shadow-2xl opacity-50 overflow-hidden animate-float-delay-4" style={{ '--rotation': '6deg' } as CSSPropertiesWithCustomVars}>
          <Image
            src="/images/team-ae.jpg"
            alt="Team AE"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom center image */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 w-64 md:w-96 h-20 md:h-32 rounded-lg shadow-2xl opacity-40 overflow-hidden animate-float-delay-5" style={{ '--rotation': '-3deg' } as CSSPropertiesWithCustomVars}>
          <Image
            src="/images/galaxey-paints.jpg"
            alt="Galaxey Paints"
            fill
            className="object-cover"
          />
        </div>

        {/* Right side image */}
        <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 w-48 sm:w-64 md:w-80 h-32 sm:h-44 md:h-56 rounded-lg shadow-2xl opacity-75 overflow-hidden animate-float-delay-6" style={{ '--rotation': '-12deg' } as CSSPropertiesWithCustomVars}>
          <Image
            src="/images/Web-development/jn-.jpg"
            alt="JN"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main content */}
      <div className={`relative z-20 text-center px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col ${language === 'ar' ? 'text-right' : ''}`}>
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-medium text-white mb-6 sm:mb-8 tracking-tight leading-tight ${poppins.className}`}>
          {t('service.banner.app.title')}
        </h1>


        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{t('service.banner.app.subtitle')}</p>

        <a
          href="https://wa.me/919074851748?text=Hi%20Brandbik%2C%20I'm%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more.%20Could%20you%20please%20help%20me%20get%20started%3F"
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-slate-600 cursor-pointer hover:bg-slate-500 flex justify-center items-center gap-2 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
        >
          <span>{t('service.banner.app.button')}</span>
          <ArrowUpRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} h-6 w-6 p-1 border border-gray-100 rounded-full`} />
        </a>
      </div>

      {/* Add animation styles */}
      <style jsx global>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float 6s ease-in-out 0.5s infinite;
        }
        .animate-float-delay-2 {
          animation: float 6s ease-in-out 1s infinite;
        }
        .animate-float-delay-3 {
          animation: float 6s ease-in-out 1.5s infinite;
        }
        .animate-float-delay-4 {
          animation: float 6s ease-in-out 2s infinite;
        }
        .animate-float-delay-5 {
          animation: float 6s ease-in-out 2.5s infinite;
        }
        .animate-float-delay-6 {
          animation: float 6s ease-in-out 3s infinite;
        }
      `}</style>
    </div>
  )
}
