"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {   X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
import GetStartedPanel from "./GetStartedPanel"

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const pathname = usePathname()

  // Helper for color palette
  const palette = {
    darkBlue: '#A43EF9',
    black: '#3D096C',
    cyan: '#5A189A',
    purple: '#E1AAFF',
  }

  // Add this helper function to check if we're on the works or about route
  const isDarkTextRoute = pathname === '/works' || pathname === '/about' || pathname === '/clients'

  // Close panel when route changes
  useEffect(() => {
    setIsPanelOpen(false)
  }, [pathname])

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 991)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle panel open/close
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isPanelOpen])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLanguageDropdownOpen(false)
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  const handleLanguageChange = (newLanguage: 'en' | 'ar') => {
    setLanguage(newLanguage)
    setIsLanguageDropdownOpen(false)
  }

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      setIsPanelOpen(false)
      // Small delay to allow panel to close before navigation
      setTimeout(() => {
        window.location.href = href
      }, 50)
    }
  }

 // Language Switcher Component (fixed design, no scroll effect)
const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div className="relative" onClick={(e) => e.stopPropagation()}>
    <motion.button
      onClick={() => {
        const newLanguage = language === "en" ? "ar" : "en"
        handleLanguageChange(newLanguage)
      }}
      className={`relative inline-flex rounded-[8px] items-center h-[42px] px-0   cursor-pointer transition-all duration-300
        bg-white hover:bg-gray-100 border border-[#A43EF9]
        ${isMobile ? "w-[85px]" : "w-[85px]"}`}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-full h-full flex items-center justify-between px-1 ">
        <span
          className={`text-sm pl-2 font-medium z-10 ${
            language === "en" ? "text-white" : "text-[#3D096C]"
          }`}
        >
          EN
        </span>
        <span
          className={`text-sm pr-1 font-medium z-10 ${
            language === "ar" ? "text-white" : "text-[#3D096C]"
          }`}
        >
          عربي
        </span>
        <motion.div
          className="absolute h-[34px] w-[38px] rounded-[8px]  bg-[#A43EF9] shadow-md"
          animate={{
            x: language === "en" ? 0 : isMobile ? "36px" : "39px",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        />
      </div>
    </motion.button>
  </div>
)


  return (
    <header
      className={`fixed h-[90px] top-0 left-0 z-50 w-full transition-all duration-500`}
      style={{
        background: isScrolled || isDarkTextRoute
          ? '#fff'
          : ' ',
        boxShadow: isScrolled || isDarkTextRoute ? '0 2px 16px 0 rgba(61,9,108,0.08)' : 'none',
        color: isScrolled || isDarkTextRoute ? palette.black : '#fff',
      }}
    >
      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-24 py-3 sm:py-4">
        <div className="flex items-center justify-center">
          {/* Combined Navigation Container with Logo and CTA */}
          <div className={`relative flex items-center justify-between w-full transition-all duration-500 ease-in-out rounded-[8px] px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3`}> 
            {/* Left side: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" prefetch>
                <span className="font-extrabold text-4xl tracking-tight" style={{color: isScrolled || isDarkTextRoute ? palette.black : '#fff', fontFamily: 'Poppins, sans-serif'}}>
                  <Image src={'/dapps-logo.png'} alt="Dapps Logo" width={130} height={100} />
                </span>
              </Link>
            </div>
            {/* Centered Navigation */}
            <nav className="hidden lg:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center space-x-1 xl:space-x-2 2xl:space-x-4">
              <Link
                href="/about"
                onClick={handleNavigation}
                className={`font-medium relative group px-1 xl:px-2 2xl:px-4 py-2 rounded-[8px] transition-all duration-300 text-xs xl:text-sm 2xl:text-base ${
                  isScrolled || isDarkTextRoute
                    ? "text-[#3D096C] hover:bg-[#A43EF9] hover:text-white"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="relative">About</span>
              </Link>
              <Link
                href="/service"
                onClick={handleNavigation}
                className={`font-medium relative group px-1 xl:px-2 2xl:px-4 py-2 rounded-[8px] transition-all duration-300 text-xs xl:text-sm 2xl:text-base ${
                  isScrolled || isDarkTextRoute
                    ? "text-[#3D096C] hover:bg-[#A43EF9] hover:text-white"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="relative">Services</span>
              </Link>
              <Link
                href="/works"
                onClick={handleNavigation}
                className={`font-medium relative group px-1 xl:px-2 2xl:px-4 py-2 rounded-[8px] transition-all duration-300 text-xs xl:text-sm 2xl:text-base  ${
                  isScrolled || isDarkTextRoute
                    ? "text-[#3D096C] hover:bg-[#A43EF9] hover:text-white"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="relative">{t('header.works')}</span>
              </Link>
              <Link
                href="/careers"
                onClick={handleNavigation}
                className={`font-medium relative group px-1 xl:px-2 2xl:px-4 py-2 rounded-[8px] transition-all duration-300 text-xs xl:text-sm 2xl:text-base ${
                  isScrolled || isDarkTextRoute
                    ? "text-[#3D096C] hover:bg-[#A43EF9] hover:text-white"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="relative">{t('header.career')}</span>
              </Link>
              <Link
                href="/contact"
                onClick={handleNavigation}
                className={`font-medium relative group px-1 xl:px-2 2xl:px-4 py-2 rounded-[8px] transition-all duration-300 text-xs xl:text-sm 2xl:text-base  ${
                  isScrolled || isDarkTextRoute
                    ? "text-[#3D096C] hover:bg-[#A43EF9] hover:text-white"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className="relative">{t('Solutions')}</span>
              </Link>
            </nav>

            {/* Right side: Controls */}
            <div className="flex items-center">
              {/* Desktop Controls: Language Switcher and Get Started */}
              <div className="hidden lg:flex items-center gap-2 sm:gap-3 md:gap-4">
                <LanguageSwitcher />
                <button
                  onClick={() => setIsPanelOpen(true)}
                  className={`inline-flex items-center justify-center gap-1 sm:gap-2 cursor-pointer ${
                    isScrolled || isDarkTextRoute
                      ? "bg-[#A43EF9] hover:bg-[#5A189A] text-white"
                      : "bg-[#A43EF9] hover:bg-[#5A189A] text-white"
                  } px-2 sm:px-3 w-[156px] md:px-4 py-[8px] sm:py-[10px] rounded-[8px] transition-all duration-300 hover:transform hover:scale-105 group`}
                >
                  <span className="text-white text-xs sm:text-sm md:text-base">{t('Contact')}</span>
                   
                </button>
              </div>
              {/* Mobile and Tablet Controls: Language Switcher in Hamburger */}
              <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-4">
                <LanguageSwitcher isMobile={true} />
                <button
                  className={`${isScrolled || isDarkTextRoute ? "text-[#3D096C]" : "text-white"} ml-1`}
                  onClick={() => setIsPanelOpen(true)}
                  aria-label="Open menu"
                >
                  <svg className="w-12 h-12 sm:w-9 sm:h-9 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started Panel */}
      {isLargeScreen ? (
        <GetStartedPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
      ) : (
    
        <div
          className={`fixed inset-0 z-[60] transition-all duration-700 ease-in-out perspective-3d ${
            isPanelOpen ? "visible" : "invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isPanelOpen ? "opacity-80 bg-[#fff]" : "opacity-0 bg-transparent"
            }`}
            onClick={() => setIsPanelOpen(false)}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: '-100%', rotateX: 60, opacity: 0 }}
            animate={isPanelOpen ? { y: 0, rotateX: 0, opacity: 1 } : { y: '-100%', rotateX: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="absolute top-0 left-0 h-full w-full sm:w-[90vw] bg-white shadow-2xl transform-gpu"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex flex-col h-full relative overflow-hidden">
              {/* Panel Header with logo */}
              <div className="flex items-center justify-between p-6 border-b border-[#A43EF9]/20 relative z-10">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <Link href="/" onClick={() => setIsPanelOpen(false)} prefetch>
                    <Image src={'/dapps-logo.png'} alt="Dapps Logo" width={130} height={100} />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPanelOpen(false)}
                    className="p-2 text-[#3D096C] hover:bg-[#A43EF9]/10 rounded-[8px] transition-all duration-300 hover:rotate-90"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Panel Navigation */}
              <nav className="flex-1 p-6 relative z-10">
                <div className="space-y-4">
                  {[ 
                    { href: "/about", label: t('header.about') }, 
                    { href: "/service", label: t('header.services') }, 
                    { href: "/works", label: t('header.works') }, 
                    { href: "/careers", label: t('header.career') }, 
                    { href: "/contact", label: t('header.contact') } 
                  ].map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavigation}
                      className="block transform hover:translate-x-2 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="group relative py-3 px-6 rounded-[8px] border border-[#A43EF9]/20 transition-all duration-300 bg-white hover:bg-[#A43EF9]/10">
                        <span className="text-xl font-medium group-hover:text-[#A43EF9] text-[#3D096C] transition-colors">
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Connect Us Button */}
              <div className="p-6 relative z-10">
                <Link
                  href="/contact"
                  onClick={() => setIsPanelOpen(false)}
                  className="group relative block w-full text-[#fff] text-center py-4 rounded-[8px] font-medium text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden bg-[#A43EF9] hover:bg-[#5A189A]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t('header.connectUs')}
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  )
}