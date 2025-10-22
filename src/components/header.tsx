"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
 

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false) 
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const gradient = "linear-gradient(135deg, #040150 0%, #5A189A 50%, #000 100%)"
  const isDarkTextRoute = pathname === "/works" || pathname === "/about" || pathname === "/clients"

  useEffect(() => {
    setIsPanelOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 991)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isPanelOpen ? "hidden" : "unset"
  }, [isPanelOpen])

  const handleLanguageChange = (newLanguage: "en" | "ar") => {
    setLanguage(newLanguage)
  }

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href) {
      setIsPanelOpen(false)
      setTimeout(() => (window.location.href = href), 50)
    }
  }

  const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <motion.button
        onClick={() => handleLanguageChange(language === "en" ? "ar" : "en")}
        className={`relative inline-flex rounded-[8px] items-center h-[42px] px-0 border border-[#040150] bg-white hover:bg-gray-100 cursor-pointer transition-all duration-300 ${
          isMobile ? "w-[85px]" : "w-[85px]"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-full h-full flex items-center justify-between px-1">
          <span className={`text-sm pl-2 font-medium z-10 ${language === "en" ? "text-white" : "text-[#040150]"}`}>
            EN
          </span>
          <span className={`text-sm pr-1 font-medium z-10 ${language === "ar" ? "text-white" : "text-[#040150]"}`}>
            عربي
          </span>
          <motion.div
            className="absolute h-[34px] w-[38px] rounded-[8px] shadow-md"
            style={{ background: gradient }}
            animate={{ x: language === "en" ? 0 : isMobile ? "36px" : "39px" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
          />
        </div>
      </motion.button>
    </div>
  )

  return (

    <header
      className={`fixed h-[70px] md:h-[70px] top-2  rounded-full left-2 right-2 md:left-20 md:right-20 z-50 flex justify-center items-center transition-all duration-500`}
style={{
  background: isScrolled || isDarkTextRoute
    ? "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(250,250,255,0.65) 100%)"
    : "transparent",
  backdropFilter: isScrolled || isDarkTextRoute ? "blur(16px) saturate(180%)" : "none",
  WebkitBackdropFilter: isScrolled || isDarkTextRoute ? "blur(16px) saturate(180%)" : "none",
  boxShadow: isScrolled || isDarkTextRoute
    ? "0 4px 24px rgba(61,9,108,0.15)"
    : "none",
  transition: "all 0.4s ease-in-out",
  zIndex: 999,
}}


    >
      <div className="relative z-10 container mx-auto px-2 sm:px-3 md:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-between w-full transition-all duration-500 ease-in-out rounded-[8px] px-2 sm:px-3 md:px-6 lg:px-8 py-2 sm:py-3">
            <div className="flex-shrink-0">
              <Link href="/" prefetch>
                <Image src={"/dapps-logo.png"} alt="Dapps Logo" width={110} height={80} className="w-[100px] md:w-[130px] h-auto" />
              </Link>
            </div>

            {/* Navigation - visible on desktop, flex on lg+ only. Mobile view for <=991px */}
            <nav
              className="hidden lg:flex absolute lg:relative top-1/2 left-1/2 lg:top-auto lg:left-auto -translate-y-1/2 -translate-x-1/2 lg:translate-y-0 lg:translate-x-0 items-center space-x-2 sm:space-x-4"
            >
              {[
                { href: "/about", label: t("header.about") },
                { href: "/service", label: t("header.services") },
                { href: "/works", label: t("header.works") },
                { href: "/careers", label: t("header.career") },
                { href: "/contact", label: t("header.connectUs") },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigation}
                  className={`font-medium px-2 sm:px-3 py-2 rounded-[8px] text-xs sm:text-sm md:text-base transition-all duration-300 ${
                    isScrolled || isDarkTextRoute
                      ? "text-[#040150] hover:text-white"
                      : "text-white hover:text-white"
                  }`}
                  style={{
                    background: isScrolled || isDarkTextRoute ? "transparent" : "transparent",
                  }}
                >
                  <span className="relative hover:bg-gradient-to-r hover:from-[#040150] hover:via-[#5A189A] hover:to-[#000] hover:px-3 hover:py-2 hover:rounded-[8px] transition-all duration-300">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center">
              <div className="hidden lg:flex items-center gap-2 sm:gap-3">
                <LanguageSwitcher />
                <a
                  href={`https://wa.me/919947400278?text=${encodeURIComponent(
                    "Hello Dapps Solutions,\nI'm interested in learning more about your AI-driven websites, automation systems, and digital transformation services designed to enhance business growth and efficiency.\nPlease share more details."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white px-3 sm:px-4 py-2 sm:py-[10px] rounded-[8px] transition-all duration-300 hover:scale-105"
                  style={{ background: gradient }}
                >
                  <span className="text-xs sm:text-sm md:text-base">{t("header.contact")}</span>
                </a>
              </div>

              {/* Mobile/Tablet Controls - visible for <=991px */}
              <div className="lg:hidden flex items-center gap-2 sm:gap-3">
                <LanguageSwitcher isMobile={true} />
                <button
                  className={`${isScrolled || isDarkTextRoute ? "text-[#040150]" : "text-white"} ml-1`}
                  onClick={() => setIsPanelOpen(true)}
                  aria-label="Open menu"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Panel with animated menu items */}
      {!isLargeScreen && (
        <div
          className={`fixed inset-0 z-[60] transition-all duration-700 ${isPanelOpen ? "visible" : "invisible"}`}
        >
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${isPanelOpen ? "opacity-70 bg-[#000]" : "opacity-0 bg-transparent"}`}
            onClick={() => setIsPanelOpen(false)}
          />

          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={isPanelOpen ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="absolute top-0 left-0 h-full w-full text-white"
            style={{ background: gradient }}
          >
            <div className="flex flex-col h-full relative overflow-hidden">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/20">
                <Link href="/" onClick={() => setIsPanelOpen(false)} prefetch>
                  <Image src={"/dapps-logo.png"} alt="Dapps Logo" width={110} height={80} className="w-[90px] sm:w-[130px] h-auto" />
                </Link>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-[8px] transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center items-center gap-3 sm:gap-4 px-2 sm:px-6">
                {[
                  { href: "/about", label: t("header.about") },
                  { href: "/service", label: t("header.services") },
                  { href: "/works", label: t("header.works") },
                  { href: "/careers", label: t("header.career") },
                  { href: "/contact", label: t("header.contact") },
                ].map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: idx % 2 === 0 ? "-100vw" : "100vw", opacity: 0 }}
                    animate={isPanelOpen ? { x: 0, opacity: 1 } : { x: idx % 2 === 0 ? "-100vw" : "100vw", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 30, delay: isPanelOpen ? 0.1 + idx * 0.08 : 0 }}
                    className="w-full flex justify-center"
                  >
                    <Link
                      href={item.href}
                      onClick={handleNavigation}
                      className="block w-full max-w-xs py-3 px-6 rounded-[12px] bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg text-center"
                    >
                      <span className="text-lg font-semibold tracking-wide">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={isPanelOpen ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 30, delay: isPanelOpen ? 0.6 : 0 }}
                className="p-4 sm:p-6 w-full flex justify-center"
              >
                <a
  href={`https://wa.me/919947400278?text=${encodeURIComponent(
    "Hello Dapps Solutions,\nI'm interested in learning more about your AI-driven websites, automation systems, and digital transformation services designed to enhance business growth and efficiency.\nPlease share more details."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setIsPanelOpen(false)}
  className="block w-full max-w-xs text-center py-4 rounded-[12px] font-semibold text-lg bg-white text-[#040150] hover:bg-[#E1AAFF] transition-all duration-300 shadow-lg"
>
  {t("header.connectUs")}
</a>

              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  )
}
