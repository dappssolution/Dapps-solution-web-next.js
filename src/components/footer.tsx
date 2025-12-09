
"use client"
import React from "react";
import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaLinkedin,  FaWhatsapp, FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "../contexts/LanguageContext"

function SocialLinks({ className = "" }: { className?: string }) {
  const iconBase = "text-white w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5";
  const linkBase =
    "group inline-flex items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/20 px-3 py-2";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Link href="https://www.instagram.com/dapps_solutions" aria-label="Instagram" className={linkBase}>
        <FaInstagram className={iconBase} /> 
      </Link>
      <Link href="https://wa.me/919947400278" aria-label="WhatsApp" className={linkBase}>
        <FaWhatsapp className={iconBase} />
      </Link>
      <Link href="https://www.linkedin.com/company/dapps-solution/" aria-label="LinkedIn" className={linkBase}>
        <FaLinkedin className={iconBase} />
      </Link>
      <Link href="https://twitter.com/dapps_solutions" aria-label="Twitter" className={linkBase}>
        <FaXTwitter className={iconBase} />
      </Link>
      <Link href="https://www.facebook.com/dapps_solutions" aria-label="Facebook" className={linkBase}>
        <FaFacebook className={iconBase} />
      </Link>
    </div>
  );
}



export default function Footer() {
  const { t } = useLanguage();
  const [year, setYear] = React.useState<string>("");
  React.useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer
      className="w-full px-4 py-10 md:py-16 relative overflow-hidden"
    style={{
  backgroundImage: `url('/work-bg.jpg')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  // Remove backdropFilter since it's usually for transparent backgrounds
}}

      dir="ltr"
    >
      <div className="max-w-5xl mx-auto rounded-3xl shadow-2xl bg-white/10 border border-white/20 backdrop-blur-lg p-6 md:p-8 flex flex-col items-center gap-8">
        {/* Logo & Social Icons Centered */}
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="relative h-14 w-32 md:h-16 md:w-40">
            <Image
              src="/white-logo.png"
              alt="Dapps Solutions Logo"
              fill
              sizes="(max-width: 600px) 100vw, 40vw"
              priority
              className="object-contain drop-shadow-xl"
            />
          </div>
          <div className="mt-2">
            <SocialLinks className="gap-4 md:gap-5 justify-center" />
          </div>
        </div>

        {/* Tagline Centered */}
        <div className="text-base text-white/90 max-w-xl font-light text-center px-2">
          {t('footer.tagline')}
        </div>

        {/* Navigation Links Responsive */}
        <nav className="flex flex-wrap justify-center gap-3 md:gap-6 text-white/80 text-sm md:text-base font-medium w-full border-t border-white/20 pt-6">
          <Link href="/" className="hover:text-white transition-colors duration-200">{t('footer.home')}</Link>
          <Link href="/about" className="hover:text-white transition-colors duration-200">{t('footer.aboutUs')}</Link>
          <Link href="/service" className="hover:text-white transition-colors duration-200">{t('footer.services')}</Link>
          <Link href="/works" className="hover:text-white transition-colors duration-200">{t('footer.works')}</Link>
          <Link href="/careers" className="hover:text-white transition-colors duration-200">{t('footer.career')}</Link>
          <Link href="/solutions" className="hover:text-white transition-colors duration-200">{t('footer.solutions')}</Link>
          <Link href="/service/web-development" className="hover:text-white transition-colors duration-200">{t('footer.webDevelopment')}</Link>
          <Link href="/service/app-development" className="hover:text-white transition-colors duration-200">{t('footer.appDevelopment')}</Link>
          <Link href="/service/branding" className="hover:text-white transition-colors duration-200">{t('footer.branding')}</Link>
          <Link href="/service/digital-marketing" className="hover:text-white transition-colors duration-200">{t('footer.digitalMarketing')}</Link>
          <Link href="/service/video-photo-editing" className="hover:text-white transition-colors duration-200">{t('footer.videoPhotoEditing')}</Link>
          <Link href="/service/ai-agents-automation" className="hover:text-white transition-colors duration-200">{t('footer.aiAgentsAutomation')}</Link>
        </nav>

        {/* Contact & Locations Responsive Row */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-6 border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-2 text-white/80">
              <span className="font-bold">{t('footer.contactInfo')}:</span>
              <a href="mailto:info@dappssolutions.com" className="underline hover:text-white transition-colors duration-200">{t('footer.email')}</a>
              <span className="font-semibold md:ml-4">{t('footer.phone')}</span>
              <a href="tel:+919947400278" className="hover:underline hover:text-white transition-colors duration-200">{t('footer.phoneNumber')}</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-white/80 w-full md:w-auto justify-center md:justify-end">
            <span className="font-bold">{t('footer.locations')}:</span>
            <span>{t('footer.uae')}</span>
            <span>{t('footer.kerala')}</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-5xl mx-auto mt-8 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 text-xs text-white/80 shadow-lg">
        <div className="w-full md:w-auto text-center md:text-left">
          {year && t('footer.copyright').replace('{year}', year)}
        </div>
        <div className="flex gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-end">
          <Link href="/privacy-policy" className="hover:underline hover:text-white transition-colors duration-200">{t('footer.privacyPolicy')}</Link>
          <Link href="/terms-of-service" className="hover:underline hover:text-white transition-colors duration-200">{t('footer.termsOfService')}</Link>
        </div>
      </div>
    </footer>
  );
}
