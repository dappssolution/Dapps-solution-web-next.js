// ...existing code...
"use client"

import type React from "react"
import { useContext, useRef, useState } from "react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import {
  FiArrowUpRight,
  FiSmartphone,
  FiGlobe,
  FiPenTool,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi"
import Link from "next/link"
import { LanguageContext } from "@/contexts/LanguageContext"

type Service = {
  title: string
  desc: string
  icon: ReactNode
  featured?: boolean
}

const ServicesSection = () => {
  const langCtx = useContext(LanguageContext)
  const t = langCtx?.t || ((k: string) => k)

  const services = [
    {
      title: t("services.service1.title"),
      desc: t("services.service1.desc"),
      icon: <FiSmartphone aria-hidden className="size-6" />,
      featured: true,
    },
    {
      title: t("services.service2.title"),
      desc: t("services.service2.desc"),
      icon: <FiGlobe aria-hidden className="size-6" />,
    },
    {
      title: t("services.service3.title"),
      desc: t("services.service3.desc"),
      icon: <FiPenTool aria-hidden className="size-6" />,
    },
    {
      title: t("services.service4.title"),
      desc: t("services.service4.desc"),
      icon: <FiTrendingUp aria-hidden className="size-6" />,
    },
    {
      title: t("services.service5.title"),
      desc: t("services.service5.desc"),
      icon: <FiPenTool aria-hidden className="size-6" />,
    },
    {
      title: t("services.service6.title"),
      desc: t("services.service6.desc"),
      icon: <FiZap aria-hidden className="size-6" />,
    },
  ]

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-14 sm:py-18 md:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-10 text-center sm:mb-12 md:mb-16">
          <span className="mb-4 text-xs font-medium text-white sm:text-sm rounded-[8px] px-3 py-2 bg-[#5A189A]">
            {t("services.section.title")}
          </span>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl mt-4 text-[#040150]">
            {t("services.section.header")}
          </h2>
        </header>

        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          role="list"
          aria-label="Service list"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} index={i} {...s} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/service"
            className={cn(
              "inline-flex items-center justify-center px-5 py-2 text-sm font-medium md:px-6 md:py-2.5 rounded-[8px] border border-transparent text-white",
              "bg-[linear-gradient(135deg,_#040150_0%,_#5A189A_50%,_#000_100%)] shadow-sm transition-transform hover:scale-[1.05]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A189A]",
            )}
            aria-label={t("services.section.viewAll")}
          >
            {t("services.section.viewAll")}
            <FiArrowUpRight aria-hidden className="ml-2 size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TiltCard({
  children,
  className,
  glare = true,
  hoverScale = 1.03,
  maxRotate = 10,
}: {
  children: ReactNode
  className?: string
  glare?: boolean
  hoverScale?: number
  maxRotate?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState<string>("")

  const handleMouseMove = (e: React.MouseEvent) => {
    const node = ref.current;
    if (!node) return;
    // Batch DOM read
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const rx = (py - 0.5) * -2 * maxRotate;
    const ry = (px - 0.5) * 2 * maxRotate;
    const next = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${hoverScale})`;
    // Use requestAnimationFrame for DOM write
    window.requestAnimationFrame(() => {
      setTransform(next);
      if (glare) {
        node.style.setProperty("--glare-x", `${px * 100}%`);
        node.style.setProperty("--glare-y", `${py * 100}%`);
      }
    });
  }

  const handleLeave = () => {
    setTransform("")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className={cn(
        "relative h-full transform-gpu transition-transform duration-200 ease-out will-change-transform",
        glare &&
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[var(--radius-lg)] before:content-[''] before:opacity-0 hover:before:opacity-60 before:transition-opacity before:duration-200",
        glare &&
          "before:bg-[radial-gradient(200px_200px_at_var(--glare-x,_50%)_var(--glare-y,_50%),oklch(1_0_0_/_0.15),transparent_60%)]",
        className,
      )}
      style={{ transform }}
    >
      {children}
    </div>
  )
}

const serviceRoutes = [
  "/service/app-development",
  "/service/web-development",
  "/service/branding",
  "/service/digital-marketing",
  "/service/video-photo-editing",
  "/service/ai-agents-automation",
]

function ServiceCard({ title, desc, icon,  index }: Service & { index: number }) {
  const langCtx = useContext(LanguageContext)
  const t = langCtx?.t || ((k: string) => k)
  const route = serviceRoutes[index]

  return (
    <Link href={route} style={{ textDecoration: "none" }}>
      <TiltCard
        className={cn(
          "group h-full rounded-[var(--radius-lg)] border border-[#E1AAFF]/30",
          "bg-[linear-gradient(135deg,_#040150_0%,_#5A189A_50%,_#000_100%)] text-white",
          "p-5 sm:p-6 md:p-7 transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-[#5A189A]",
        )}
        glare
        hoverScale={1.05}
        maxRotate={12}
      >
        <div
          role="listitem"
          className={cn(
            "relative flex h-full min-h-56 flex-col justify-between gap-6 sm:min-h-64 md:min-h-72",
            // ✅ Apply slightly transparent background to ALL cards
            "bg-white/10 backdrop-blur-[2px] rounded-[var(--radius-lg)] p-4",
            "transition-all duration-300 hover:bg-white/15",
          )}
        >
          <div className="flex items-start justify-between">
            <div
              className={cn(
                "inline-flex items-center justify-center rounded-full",
                "size-12 sm:size-14",
                "bg-[radial-gradient(circle_at_60%_40%,_#E1AAFF_0%,_#5A189A_60%,_#040150_100%)] text-white",
                "transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg border-2 border-[#E1AAFF]",
              )}
              aria-hidden
            >
              {icon}
            </div>
          </div>

          <div className="relative z-10 cursor-pointer">
            <h3 className="mb-2 text-xl font-semibold sm:text-2xl text-[#fff]">{title}</h3>
            <p className="text-sm leading-relaxed text-white/90 sm:text-base">{desc}</p>
          </div>

          <div className="mt-4 flex items-center justify-start">
            <div
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1 text-xs font-medium border-2 border-[#5A189A]",
                "bg-transparent text-[#FFF] rounded-[var(--radius-lg)] group-hover:bg-[#5A189A] group-hover:text-white transition-colors duration-300",
              )}
            >
              {t("services.card.learnMore")}
              <FiArrowUpRight className="size-3.5" aria-hidden />
            </div>
          </div>
        </div>
      </TiltCard>
    </Link>
  )
}

export default ServicesSection
