/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { FiArrowUpRight, FiSmartphone, FiGlobe, FiLayers, FiPenTool, FiTrendingUp, FiZap } from "react-icons/fi"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"

type Service = {
  title: string
  desc: string
  icon: ReactNode
  featured?: boolean
}

const services: Service[] = [
  {
    title: "App Development",
    desc: "High-quality mobile and cross-platform apps with strong performance and security.",
    icon: <FiSmartphone aria-hidden className="size-6" />,
    featured: true,
  },
  {
    title: "Web Development",
    desc: "Modern, fast, and secure websites. We turn your ideas into delightful web experiences.",
    icon: <FiGlobe aria-hidden className="size-6" />,
  },
  {
    title: "Digital Transformation",
    desc: "Scale operations with automation, cloud, and optimized processes tailored to your business.",
    icon: <FiLayers aria-hidden className="size-6" />,
  },
  {
    title: "Branding",
    desc: "Build a unique brand identity with thoughtful visual systems and messaging.",
    icon: <FiPenTool aria-hidden className="size-6" />,
  },
  {
    title: "Digital Marketing",
    desc: "Grow your audience with data-driven strategies across paid, search, and social.",
    icon: <FiTrendingUp aria-hidden className="size-6" />,
  },
  {
    title: "Performance Optimization",
    desc: "Improve Core Web Vitals, speed, and reliability across devices and networks.",
    icon: <FiZap aria-hidden className="size-6" />,
  },
]

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
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const px = x / rect.width
    const py = y / rect.height

    const rx = (py - 0.5) * -2 * maxRotate
    const ry = (px - 0.5) * 2 * maxRotate

    const next = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${hoverScale})`
    setTransform(next)

    if (glare) {
      node.style.setProperty("--glare-x", `${px * 100}%`)
      node.style.setProperty("--glare-y", `${py * 100}%`)
    }
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
        "motion-reduce:transition-none motion-reduce:transform-none",
        glare &&
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[var(--radius-lg)] before:content-[''] before:opacity-0 hover:before:opacity-60 before:transition-opacity before:duration-200",
        glare &&
          "before:bg-[radial-gradient(200px_200px_at_var(--glare-x,_50%)_var(--glare-y,_50%),oklch(1_0_0_/_0.15),transparent_60%)]",
        className,
      )}
      style={{ transform }}
      aria-live="polite"
    >
      {children}
    </div>
  )
}

function useAnimationFrame(callback: (state: { time: number }) => void) {
  const cb = useRef(callback)
  cb.current = callback
  useEffect(() => {
    let raf = 0
    const loop = (t: number) => {
      cb.current({ time: t })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
}

function SpinnerKnot() {
  const ref = useRef<any>(null)
  useAnimationFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01
      ref.current.rotation.y += 0.012
    }
  })
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[0.8, 0.25, 120, 16]} />
      <meshStandardMaterial roughness={0.35} metalness={0.6} color="hsl(250 75% 65%)" />
    </mesh>
  )
}

function Loader3D({
  className,
  hiddenOnMobile = false,
}: {
  className?: string
  hiddenOnMobile?: boolean
}) {
  return (
    <div
      aria-hidden
      className={[
        "pointer-events-none absolute inset-0 -z-10 opacity-30 motion-reduce:hidden",
        hiddenOnMobile ? "hidden sm:block" : "",
        className || "",
      ].join(" ")}
    >
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 2]} intensity={1} />
        <group position={[0, -0.2, 0]}>
          <SpinnerKnot />
        </group>
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-14 sm:py-18 md:py-24">
      <Loader3D hiddenOnMobile={false} />

      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-10 text-center sm:mb-12 md:mb-16">
          <span className="mb-4 text-xs font-medium text-muted-foreground sm:text-sm text-white rounded-[8px] px-3 py-2 bg-[#A43EF9]">Services</span>
          <h2 className="  text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl text-black lg:text-6xl mt-4">
            Our major services that drive the Digital Transformation
          </h2>
        </header>

        <div
          className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2 sm:gap-5
            lg:grid-cols-3 lg:gap-6
          "
          role="list"
          aria-label="Service list"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} index={i} {...s} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="#"
            className={cn(
              "inline-flex items-center justify-center   px-5 py-2 text-sm font-medium md:px-6 md:py-2.5",
              "bg-primary text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border rounded-[8px] border-[#A43EF9] text-[#A43EF9]",
            )}
            aria-label="View all services"
          >
            View Services
            <FiArrowUpRight aria-hidden className="ml-2 size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, desc, icon, featured, index }: Service & { index: number }) {
  const isFirst = index === 0

  return (
    <TiltCard
      className={cn(
        "group h-full rounded-[var(--radius-lg)] border",
        // Card gradient background
        "bg-[linear-gradient(135deg,_#A43EF9_0%,_#5A189A_50%,_#3D096C_100%)] text-white",
        "p-5 sm:p-6 md:p-7",
        "transition-colors duration-200",
        featured ? "ring-2 ring-[#E1AAFF]" : "",
        "hover:ring-2 hover:ring-[#E1AAFF] hover:shadow-xl",
        "shadow-sm hover:shadow-lg",
      )}
      glare
      hoverScale={1.05}
      maxRotate={12}
    >
      <div
        role="listitem"
        className={cn(
          "relative flex h-full min-h-56 flex-col justify-between gap-6 sm:min-h-64 md:min-h-72",
          featured ? "bg-[#E1AAFF]/10 rounded-[var(--radius-lg)] p-4" : "",
        )}
      >
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "inline-flex items-center justify-center rounded-full",
              "size-12 sm:size-14",
              // Icon gradient bg
              "bg-[radial-gradient(circle_at_60%_40%,_#E1AAFF_0%,_#A43EF9_60%,_#5A189A_100%)] text-[#3D096C]",
              "transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg border-2 border-[#E1AAFF]",
            )}
            aria-hidden
          >
            {icon}
          </div>

          {isFirst && (
            <span
              className={cn(
                "pointer-events-none absolute -inset-0.5 rounded-[var(--radius-lg)] [calc(var(--radius-lg)+6px)]",
                "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                // Subtle purple glow
                "bg-[radial-gradient(260px_260px_at_10%_10%,#E1AAFF44,transparent_70%)]",
              )}
              aria-hidden
            />
          )}
        </div>

        <div className="relative z-10">
          <div className="mb-3 inline-flex items-center gap-2 text-[#E1AAFF]">
            <span className="sr-only">{title}  </span>
          </div>
          <h3 className="mb-2 text-xl font-semibold sm:text-2xl text-[#E1AAFF]">{title}</h3>
          <p className="text-sm leading-relaxed text-white/90 sm:text-base">{desc}</p>
        </div>

        <div className="mt-4 flex items-center justify-start">
          <div
            className={cn(
              "inline-flex items-center gap-2   px-3 py-1 text-xs font-medium border-2 border-[#A43EF9]",
              "bg-[#3D096C] text-[#E1AAFF] rounded-[var(--radius-lg)] group-hover:bg-[#A43EF9] group-hover:text-white transition-colors duration-300",
            )}
          >
            Learn more
            <FiArrowUpRight className="size-3.5" aria-hidden />
          </div>
        </div>

        {isFirst && (
          <div
            className={cn(
              "pointer-events-none absolute inset-0 rounded-[var(--radius-lg)]",
              "transition-transform duration-300",
              "group-hover:-translate-y-1 group-hover:translate-x-0.5",
            )}
            aria-hidden
          />
        )}
      </div>
    </TiltCard>
  )
}
