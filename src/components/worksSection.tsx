/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Works() {
  const { t, language } = useLanguage();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);

  // Handle Mobile Detection
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind 'sm' breakpoint
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024); // 'sm' to 'lg'
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Original Data
  const originalProjects = useMemo(
    () => [
      {
        id: 1,
        type: "image",
        src: "/workslide-1.jpg",
        alt: "Business Person",
        title: { en: "Corporate Vision", ar: "رؤية الشركات" },
        category: { en: "Photography", ar: "تصارير" },
        number: "01",
      },
      {
        id: 2,
        type: "image",
        src: "/workslide-4.jpg",
        alt: "Brand Identity",
        title: {
          en: "Brand Identity Solutions",
          ar: "حلول هوية العلامة التجارية",
        },
        category: { en: "Brand Strategy", ar: "استراتيجية العلامة" },
        number: "02",
      },
      {
        id: 3,
        type: "image",
        src: "/workslide-5.jpg",
        alt: "App Development",
        title: { en: "End-to-End App Development", ar: "تطوير التطبيقات" },
        category: { en: "Development", ar: "تطوير" },
        number: "03",
      },
      {
        id: 4,
        type: "image",
        src: "/workslide-2.jpg",
        alt: "Strategy Meeting",
        title: { en: "Strategic Planning", ar: "التخطيط الاستراتيجي" },
        category: { en: "Consulting", ar: "استشارات" },
        number: "04",
      },
      {
        id: 5,
        type: "image",
        src: "/workslide-3.jpg",
        alt: "Tech Solution",
        title: { en: "Digital Innovation", ar: "الابتكار الرقمي" },
        category: { en: "Technology", ar: "تكنولوجيا" },
        number: "05",
      },
    ],
    []
  );

  // Double the data for infinite loop illusion on desktop
  // Only duplicate projects for desktop (lg and up)
  const displayProjects =
    isMobile || isTablet
      ? originalProjects
      : [...originalProjects, ...originalProjects];

  return (
    <section
      className="relative min-h-screen w-full bg-[#0a0a0a] py-16 lg:py-36 flex flex-col justify-center overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/work-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="container mx-auto z-10 h-full flex flex-col lg:h-[80vh]">
        {/* Header Section - Added px-6 md:px-0 for spacing on mobile */}
        <div className="px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-24">
          <div>
            <h2 className="text-[#5a189a] font-bold tracking-widest text-sm uppercase mb-2">
              {t("works.subtitle") || "PORTFOLIO"}
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t("works.title") || "Selected Works"}
            </h1>
          </div>

          <Link
            href="/works"
            className="hidden md:flex group items-center gap-3 text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>{t("clients.viewAll")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* DESKTOP: Slider Container 
            We use a custom animation class defined in styles below 
        */}
        <div
          className="flex-1 w-full relative pb-10 lg:pb-16"
          onMouseEnter={() => setIsHoveringContainer(true)}
          onMouseLeave={() => {
            setIsHoveringContainer(false);
            setActiveId(null); // Reset active card when leaving the track
          }}
        >
          <div
            className={cn(
              isMobile || isTablet
                ? "grid grid-cols-1 gap-6 px-4 sm:px-8 md:px-16"
                : "flex gap-4 h-full min-h-[500px] w-max animate-marquee",
              (isHoveringContainer || activeId !== null) &&
                !(isMobile || isTablet) &&
                "paused"
            )}
            style={
              isMobile || isTablet
                ? { width: "100%" }
                : { flexDirection: "row", width: "max-content" }
            }
          >
            {displayProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
                activeId={activeId}
                setActiveId={setActiveId}
                language={language}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-10 px-6 pb-10">
          <Link
            href="/works"
            className="flex w-full justify-center items-center gap-2 text-white border border-white/20 rounded-full px-6 py-4 hover:bg-white hover:text-black transition-all"
          >
            <span>{t("clients.viewAll")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Global CSS for the marquee loop */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
          /* -50% because we duplicated the list once. Moving 50% reaches the start of the duplicate, creating the loop. */
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* RTL support for Arabic */
        [dir="rtl"] .animate-marquee {
          animation: marquee-rtl 40s linear infinite;
        }
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}

const ProjectCard = ({
  project,
  activeId,
  setActiveId,
  language,
  isMobile,
  isTablet,
}: any) => {
  const isImage = project.type === "image";
  const isActive = activeId === project.id;

  // Only animate on desktop (not mobile/tablet)
  const enableAnimation = !(isMobile || isTablet);

  return (
    <motion.div
      layout={enableAnimation}
      onHoverStart={() => enableAnimation && setActiveId(project.id)}
      onHoverEnd={() => enableAnimation && setActiveId(null)}
      className={cn(
        "relative overflow-hidden rounded-2xl w-full cursor-pointer border border-white/10 group",
        // Mobile/Tablet: Fixed height stack
        // Desktop: Fixed width (base) that grows
        isMobile || isTablet
          ? "w-full h-[350px] mb-4 last:mb-0"
          : "h-full w-[280px]",
        isImage ? "bg-zinc-900" : "bg-zinc-900/40 backdrop-blur-md"
      )}
      // FRAMER MOTION ANIMATION
      animate={
        enableAnimation
          ? {
              // If active, width becomes 600px. If not, 280px.
              width: isActive ? 600 : 280,
              opacity: activeId !== null && !isActive ? 0.5 : 1, // Dim others
            }
          : {}
      }
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Background Image */}
      {isImage && (
        <Image
          src={project.src}
          alt={project.alt}
          fill
          className={cn(
            "object-cover transition-all duration-700 ease-out",
            // Always visible, blurred and dark by default, clearer on hover (desktop)
            enableAnimation && !isActive
              ? "scale-100 blur-sm grayscale-[30%] brightness-50"
              : enableAnimation && isActive
              ? "scale-105 blur-none grayscale-0 brightness-90"
              : isMobile || isTablet
              ? "scale-105 blur-sm grayscale-[30%] brightness-60"
              : "scale-100 blur-sm grayscale-[30%] brightness-50"
          )}
        />
      )}

      {/* Gradient Overlay */}
      {/* Overlay: strong black for desktop, lighter on hover */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500 z-10",
          enableAnimation && !isActive && isImage && "bg-black/40",
          enableAnimation && isActive && isImage && "bg-black/40",
          (isMobile || isTablet) && isImage && "bg-black/70"
        )}
      />

      {/* Content Container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        {/* Top: Number & Icon */}
        <div className="flex justify-between items-start">
          <span
            className={cn(
              "font-mono text-xl transition-colors duration-300",
              isActive || isMobile ? "text-white" : "text-white/50"
            )}
          >
            {project.number}
          </span>

          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-300",
              isActive || isMobile
                ? "bg-white text-black rotate-45"
                : "bg-transparent text-white"
            )}
          >
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Center: Vertical Text (Desktop Inactive State) */}
        {enableAnimation && !isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <span className="text-white font-bold text-lg lg:text-2xl tracking-widest uppercase whitespace-nowrap [writing-mode:vertical-rl] rotate-180 drop-shadow-md">
              {project.category[language] || project.category.en}
            </span>
          </motion.div>
        )}

        {/* Bottom: Main Text Info */}
        <div
          className={cn(
            "relative overflow-hidden transition-all duration-500",
            enableAnimation && !isActive
              ? "opacity-0 translate-y-10 invisible"
              : "opacity-100 translate-y-0 visible"
          )}
        >
          <p className="text-white/90 text-sm font-bold tracking-wide mb-2 uppercase drop-shadow-md">
            {project.category[language] || project.category.en}
          </p>

          <h3
            className={cn(
              "text-white font-bold leading-tight drop-shadow-md",
              language === "ar" ? "font-arabic" : "",
              isImage ? "text-2xl lg:text-3xl" : "text-2xl lg:text-4xl"
            )}
          >
            {project.title[language] || project.title.en}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};
