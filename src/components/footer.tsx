"use client"

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
  return (
    <footer
      className="w-full text-white px-4 py-10 md:py-14 lg:px-0 relative overflow-hidden"
      style={{
        backgroundImage: "url('/footer-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      dir="ltr"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-6 md:gap-16 lg:gap-24"> 
        {/* Logo & About */}
        <div className="flex-1 min-w-[250px] flex flex-col items-start"> 
          <div className="relative h-14 w-36 mb-3">
            <Image
              src="/white-logo.png"
              alt="Dapps Solutions Logo"
              fill
              priority
              className="object-contain drop-shadow-lg"
            />
          </div>
          <div className="text-sm text-white/90 max-w-xs text-left"> 
            {t('footer.tagline')}
          </div>
          <div className="hidden md:block mt-6">
            <SocialLinks />
          </div>
        </div>

        {/* Pages Section */}
        <div className="flex-1 min-w-[150px] flex flex-col items-start"> 
          <div className="font-semibold text-lg mb-2">{t('footer.pages')}</div>
          <nav className="flex flex-col gap-1 text-white/90 text-base w-full">
           <Link href="/" className="hover:underline text-left">{t('footer.home')}</Link>
            <Link href="/about" className="hover:underline text-left">{t('footer.aboutUs')}</Link>
            <Link href="/service" className="hover:underline text-left">{t('footer.services')}</Link>
            <Link href="/works" className="hover:underline text-left">{t('footer.works')}</Link>
            <Link href="/careers" className="hover:underline text-left">{t('footer.career')}</Link>
            <Link href="/solutions" className="hover:underline text-left">{t('footer.solutions')}</Link>
          </nav>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 min-w-[150px] flex flex-col items-start"> 
          <div className="font-semibold text-lg mb-2">{t('footer.services')}</div>
          <nav className="flex flex-col gap-1 text-white/90 text-base w-full">
            <Link href="/service/web-development" className="hover:underline text-left">{t('footer.webDevelopment')}</Link>
            <Link href="/service/app-development" className="hover:underline text-left">{t('footer.appDevelopment')}</Link>
            <Link href="/service/branding" className="hover:underline text-left">{t('footer.branding')}</Link>
            <Link href="/service/digital-marketing" className="hover:underline text-left">{t('footer.digitalMarketing')}</Link>
            <Link href="/service/video-photo-editing" className="hover:underline text-left">{t('footer.videoPhotoEditing')}</Link>
            <Link href="/service/ai-agents-automation" className="hover:underline text-left">{t('footer.aiAgentsAutomation')}</Link>
          </nav>
        </div>

        {/* Contact & Locations */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-3 items-start"> 
          <div className="font-semibold text-lg mb-1">{t('footer.contactInfo')}</div>
          <div className="flex items-center gap-2 text-white/90">
            <a href="mailto:info@dappssolutions.com" className="underline hover:text-white">{t('footer.email')}</a>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <span className="font-semibold">{t('footer.phone')}</span>
            <a href="tel:+919947400278" className="hover:underline">{t('footer.phoneNumber')}</a>
          </div>
          <div className="font-semibold text-lg mt-4 mb-1">{t('footer.locations')}</div>
          <div className="flex flex-col gap-1 text-white/90 text-base">
            <span>{t('footer.uae')}</span>
            <span>{t('footer.kerala')}</span>
          </div>
        </div>
      </div>

      {/* Social mobile */}
      <div className="mt-8 flex flex-col items-start gap-2 md:hidden"> 
        <SocialLinks className="justify-start" />
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4 text-xs text-white/80 max-w-7xl mx-auto">
        <div className="text-left w-full">
          {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <Link href="/privacy-policy" className="hover:underline text-left">{t('footer.privacyPolicy')}</Link>
          <Link href="/terms-of-service" className="hover:underline text-left">{t('footer.termsOfService')}</Link>
        </div>
      </div>
    </footer>
  );
}
