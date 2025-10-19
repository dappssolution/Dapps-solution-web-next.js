"use client"

import type React from "react"

type ClientsMarqueeProps = {
  speedSeconds?: number
  className?: string
  brands?: string[]
}

// Responsive marquee for black SVG logos on white
export default function ClientsMarquee({
  speedSeconds = 22,
  className,
  brands = [
    "apple", "google", "netflix", "adidas", "nike", "samsung",
    "spotify", "uber", "airbnb", "paypal", "facebook", "instagram",
    "github", "gitlab", "slack", "youtube", "tiktok", "whatsapp", "pinterest", "dropbox",
    "dribbble", "figma", "behance", "wordpress", "vimeo", "snapchat", "telegram"
  ],
}: ClientsMarqueeProps) {
  const items = [...brands, ...brands]
  const rootClass = [
    "relative w-full bg-white text-black",
    "flex items-center justify-center",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <section aria-label="Our clients" className={rootClass}>
      <div className="relative mx-auto w-full max-w-7xl px-2 sm:px-4 md:px-6">
        {/* Marquee viewport with edge fade mask and mobile scroll fallback */}
        <div
            className="relative mx-auto w-full overflow-x-hidden hide-scrollbar rounded-xl border border-black/5 bg-white px-1 py-4 sm:px-2 sm:py-6 md:px-4 md:py-8"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            className="marquee-track flex w-max items-center gap-6 sm:gap-10 md:gap-16"
            style={
              {
                "--speed": `${speedSeconds}s`,
              } as React.CSSProperties
            }
          >
            {items.map((slug, i) => (
              <LogoItem key={`${slug}-${i}`} slug={slug} />
            ))}
          </div>
        </div>
      </div>

      {/* Scoped styles - right-to-left marquee */}
      <style jsx>{`
        .marquee-track {
          animation: marquee-right var(--speed) linear infinite;
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        /* Hide scrollbar cross-browser */
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

// Individual logo, gradient mask
function LogoItem({ slug }: { slug: string }) {
  const label = `Logo of ${slug.charAt(0).toUpperCase()}${slug.slice(1)}`
  const gradientId = `gradient-${slug}`
  const svgUrl = `https://cdn.simpleicons.org/${encodeURIComponent(slug)}/ffffff`

  return (
    <div
      className="group flex shrink-0 items-center justify-center rounded-lg px-2 py-1 sm:px-3 sm:py-2 transition-transform duration-300 hover:scale-105 md:px-4 md:py-3"
      role="img"
      aria-label={label}
      title={label}
      style={{ position: "relative" }}
    >
      <span
        style={{
          display: "inline-block",
          position: "relative",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
        >
          <defs>
            {/* Updated gradient colors */}
            <linearGradient
              id={gradientId}
              x1="0"
              y1="0"
              x2="40"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#040150" />
              <stop offset="50%" stopColor="#5A189A" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <image
            href={svgUrl}
            width="40"
            height="40"
            style={{ mask: `url(${svgUrl})`, WebkitMask: `url(${svgUrl})` }}
          />
          <rect width="40" height="40" fill={`url(#${gradientId})`} mask={`url(${svgUrl})`} />
        </svg>
      </span>
    </div>
  )
}
