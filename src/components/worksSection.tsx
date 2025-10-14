/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Works() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeSet, setActiveSet] = useState(0)
  const animationRef = useRef<number>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  // Removed bgColor and setBgColor, now handled by inline style

  const projects = useMemo(() => [
    // First set of projects (original ones)
    [
      {
        id: 1,
        title: { en: "", ar: "" },
        category: { en: "", ar: "" },
        number: "",
        type: "image",
        src: "/images/BRANDING.jpg",
        alt: "Business Person",
      },
      {
        id: 2,
        title: {
          en: "Developed Comprehensive Brand Identity Solutions",
          ar: "تطوير حلول شاملة لهوية العلامة التجارية"
        },
        category: {
          en: "Brand Strategy & Identity",
          ar: "استراتيجية وهوية العلامة التجارية"
        },
        number: "1",
        type: "text",
      },
      {
        id: 3,
        title: {
          en: "Spearheaded End-to-End App Development Initiatives",
          ar: "قيادة مبادرات تطوير التطبيقات من البداية للنهاية"
        },
        category: {
          en: "Mobile & Web Application Development",
          ar: "تطوير تطبيقات الجوال والويب"
        },
        number: "2",
        alt: "App Developer",
        type: "text",
      },
      {
        id: 4,
        title: { en: "", ar: "" },
        category: { en: "", ar: "" },
        number: "",
        type: "image",
        src: "/images/APP.jpg",
        alt: "Business Person",
      },
      {
        id: 5,
        title: { en: "", ar: "" },
        category: { en: "", ar: "" },
        number: "",
        type: "image",
        src: "/images/GENCHI.jpg",
        alt: "Business Person",
      },
      {
        id: 6,
        title: {
          en: "Engineered and Launched Robust Full-Stack Web Platforms",
          ar: "هندسة وإطلاق منصات ويب متكاملة قوية"
        },
        category: {
          en: "Full-Stack Web Development",
          ar: "تطوير الويب المتكامل"
        },
        number: "3",
        type: "text",
      },
      {
        id: 7,
        title: {
          en: "Designed and Executed High-Impact Digital Marketing Campaigns",
          ar: "تصميم وتنفيذ حملات تسويق رقمي عالية التأثير"
        },
        category: {
          en: "Digital Marketing Solutions",
          ar: "حلول التسويق الرقمي"
        },
        number: "4",
        alt: "Gaming Website",
        type: "text",
      },
    ],
    // Second set of projects
    [
      {
        id: 8,
        title: { en: "", ar: "" },
        category: { en: "", ar: "" },
        number: "",
        type: "image",
        src: "/images/tenderoutes-min.jpg",
        alt: "Business Person",
      },
      {
        id: 9,
        title: {
          en: "Delivered Bespoke App Development Services",
          ar: "تقديم خدمات تطوير تطبيقات مخصصة"
        },
        category: {
          en: "Custom Application Solutions",
          ar: "حلول تطبيقات مخصصة"
        },
        number: "",
        type: "image",
        src: "/images/SOCIAL.jpg",
        alt: "Business Person",
      },
      {
        id: 10,
        title: {
          en: "Managed Strategic Social Media Campaigns for Brand Growth",
          ar: "إدارة حملات وسائل التواصل الاجتماعي الاستراتيجية لنمو العلامة التجارية"
        },
        category: {
          en: "Social Media Management",
          ar: "إدارة وسائل التواصل الاجتماعي"
        },
        number: "5",
        alt: "Social Media Manager",
        type: "text",
      },
      {
        id: 11,
        title: {
          en: "Developed and Launched Targeted Advertising Campaigns",
          ar: "تطوير وإطلاق حملات إعلانية مستهدفة"
        },
        category: {
          en: "Advertising & Promotions",
          ar: "الإعلانات والترويج"
        },
        number: "6",
        alt: "Advertising Specialist",
        type: "text",
      },
      {
        id: 12,
        title: { en: "", ar: "" },
        category: { en: "", ar: "" },
        number: "",
        type: "image",
        src: "/images/chef-pillai.jpg",
        alt: "Business Person",
      },
      {
        id: 13,
        title: { en: "", ar: "" },
        category: { en: "", ar: "" },
        number: "",
        type: "image",
        src: "/images/FINANCEVA.jpg",
        alt: "Business Person",
      },
      {
        id: 2,
        title: {
          en: "Developed Comprehensive Brand Identity Solutions",
          ar: "تطوير حلول شاملة لهوية العلامة التجارية"
        },
        category: {
          en: "Brand Strategy & Identity",
          ar: "استراتيجية وهوية العلامة التجارية"
        },
        number: "1",
        type: "text",
      },
      {
        id: 3,
        title: {
          en: "Spearheaded End-to-End App Development Initiatives",
          ar: "قيادة مبادرات تطوير التطبيقات من البداية للنهاية"
        },
        category: {
          en: "Mobile & Web Application Development",
          ar: "تطوير تطبيقات الجوال والويب"
        },
        number: "2",
        alt: "App Developer",
        type: "text",
      },
      {
        id: 4,
        title: { en: "", ar: "" },
        category: { en: "", ar: "" },
        number: "",
        type: "image",
        src: "/images/WE ON WHEELS-min.jpeg",
        alt: "Business Person",
      },
      {
        id: 5,
        title: { en: "", ar: "" },
        category: { en: "", ar: "" },
        number: "",
        type: "image",
        src: "/images/CYBERBRANDD.jpg",
        alt: "Business Person",
      },
      {
        id: 6,
        title: {
          en: "Crafted and Implemented Holistic Branding Strategies",
          ar: "تصميم وتنفيذ استراتيجيات شاملة للعلامة التجارية"
        },
        category: {
          en: "Brand Development",
          ar: "تطوير العلامة التجارية"
        },
        number: "3",
        type: "text",
      },
    ],
  ], [language, t])

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 771)
    }

    // Set initial state
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const startAutoScroll = () => {
              stopAutoScroll()

              const scrollInterval = isMobile ? 3000 : 2000

              animationRef.current = window.setInterval(() => {
                setActiveSet((prev) => {
                  const nextIndex = direction === "forward" ? prev + 1 : prev - 1

                  if (nextIndex >= projects.length) {
                    setDirection("backward")
                    // setBgColor removed: background handled by gradient
                    return prev - 1 // go backward
                  } else if (nextIndex < 0) {
                    setDirection("forward")
                    // setBgColor removed: background handled by gradient
                    return prev + 1 // start forward again
                  } else {
                    // Toggle background color based on direction
                    // setBgColor removed: background handled by gradient
                    return nextIndex
                  }
                })
              }, scrollInterval)
            }

            startAutoScroll()
            const upElements = document.querySelectorAll(".animate-up")
            const downElements = document.querySelectorAll(".animate-down")
            upElements.forEach((el) => {
              el.classList.add("animate-floating-up")
            })
            downElements.forEach((el) => {
              el.classList.add("animate-floating-down")
            })
          } else {
            stopAutoScroll()
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      stopAutoScroll()
    }
  }, [isMobile, direction])

  const stopAutoScroll = () => {
    if (animationRef.current) {
      clearInterval(animationRef.current)
      animationRef.current = null
    }
  }

  const renderProject = (project: any) => {
    switch (project.type) {
      case "text":
        return (
          <div className="space-y-3 md:space-y-4">
            <p className=" text-[12px] md:text-[16px]">{project.title[language]}</p>
            <p className="text-[14px] text-gray-400 font-medium">{project.category[language]}</p>
          </div>
        )
      case "image":
        return (
          <Image
            src={project.src || "/placeholder.svg"}
            alt={project.alt}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        )
      default:
        return null
    }
  }

  return (
    <div
      className={`lg:h-screen h-auto pb-4 pt-2 lg:pb-0 text-white px-5 md:pl-0 md:pr-20 transition-colors duration-1000 ease-in-out ${language === 'ar' ? 'text-right' : ''}`}
      ref={sectionRef}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      style={{
        background: 'linear-gradient(135deg, #A43EF9 0%, #3D096C 35%, #5A189A 70%, #E1AAFF 100%)',
      }}
    >
      <div className="container mx-auto h-full">
        {/* Mobile Header - Only visible on small screens */}
        <div className="lg:hidden py-8">
          <h1 className="text-5xl md:text-7xl font-medium">{t('works.title')}</h1>
          <p className="text-lg max-w-[350px] mt-4">{t('works.subtitle')}</p>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 border border-gray-600 rounded-full px-4 py-2 w-fit mt-6 hover:bg-gray-900 transition-colors"
          >
            <span>{t('clients.viewAll')}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-full">
          {/* Right Column - Project Grid (Full width on mobile, now on left for desktop) */}
          <div className="col-span-1 lg:col-span-7 h-[50vh] lg:h-full w-full overflow-hidden relative order-1 lg:order-1">
            <div
              className="absolute inset-0 grid grid-cols-2 auto-rows-[1fr] gap-1 border-l border-t border-gray-800 transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateY(-${activeSet * (isMobile ? 100 : 70)}%)`,
                height: `${projects.length * 100}%`,
              }}
            >
              {projects.flatMap((projectSet, setIndex) =>
                projectSet.map((project, index) => (
                  <div
                    key={`${setIndex}-${project.id}`}
                    className={`border-r border-b border-gray-800 relative h-full
                              ${index % 2 === 0 ? "animate-up" : "animate-down"}
                              ${project.type === "image" ? "p-0" : "p-4"}`}
                  >
                    {renderProject(project)}
                    {project.number && (
                      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-6xl md:text-9xl font-bold opacity-80">
                        {isLargeScreen && project.number}
                      </div>
                    )}
                  </div>
                )),
              )}
            </div>
          </div>

          {/* Left Column - Hidden on mobile, now on right for desktop */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-around h-full relative overflow-hidden order-2 lg:order-2">
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
               
            </div>
           

            <div className="relative z-10 space-y-4 md:space-y-6 h-screen py-4 flex justify-around flex-col pl-20">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-5xl md:text-7xl font-medium mt-8 md:mt-16">{t('works.title')}</h1>
                <p className="text-lg max-w-[350px]">{t('works.subtitle')}</p>
              </div>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 border border-gray-600 bg-white text-[#A43EF9] rounded-full px-4 py-2 md:px-6 md:py-3 w-fit mt-8 md:mt-12 hover:bg-gray-900 transition-colors"
              >
                <span>{t('clients.viewAll')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
