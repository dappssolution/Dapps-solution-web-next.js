"use client"

import type React from "react"

type ClientsMarqueeProps = {
  speedSeconds?: number
  className?: string
  // Pass Simple Icons slugs for ANY brand available
  brands?: string[]
}

// Responsive marquee for black SVG logos on white
export default function ClientsMarquee({
  speedSeconds = 22,
  className,
  brands = [
    "apple", "google",   "netflix", "adidas", "nike", "samsung",
    "spotify", "uber", "airbnb", "paypal", "facebook",  "instagram" ,
    "github", "gitlab", "slack", "youtube", "tiktok", "whatsapp", "pinterest", "dropbox",
    "dribbble", "figma", "behance", "wordpress", "vimeo", "snapchat", "telegram"
    // Add more as needed from Simple Icons list
  ],
}: ClientsMarqueeProps) {
  const items = [...brands, ...brands]
  const rootClass = [
    "relative w-full overflow-hidden bg-white text-black",
    "flex items-center justify-center",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <section aria-label="Our clients" className={rootClass}>
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
        {/* Marquee viewport with edge fade mask */}
        <div
          className="relative mx-auto w-full overflow-hidden rounded-xl border border-black/5 bg-white px-2 py-6 md:px-4 md:py-8"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            className="marquee-track flex w-max items-center gap-10 md:gap-16"
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

// Individual logo, black SVG on white
function LogoItem({ slug }: { slug: string }) {
  // Use SVG with gradient fill for the logo
  const label = `Logo of ${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  // Gradient SVG string for mask
  const gradientId = `gradient-${slug}`;
  const svgUrl =
    `https://cdn.simpleicons.org/${encodeURIComponent(slug)}/ffffff`;
  return (
    <div
      className="group flex shrink-0 items-center justify-center rounded-lg px-3 py-2 transition-transform duration-300 hover:scale-105 md:px-4 md:py-3"
      role="img"
      aria-label={label}
      title={label}
      style={{ position: 'relative' }}
    >
      <span
        style={{
          display: 'inline-block',
          position: 'relative',
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-auto md:h-8 lg:h-10"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3D096C" />
              <stop offset="35%" stopColor="#A43EF9" />
              <stop offset="70%" stopColor="#5A189A" />
              <stop offset="100%" stopColor="#E1AAFF" />
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
  );
}
