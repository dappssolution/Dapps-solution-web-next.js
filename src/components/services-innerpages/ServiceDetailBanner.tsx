"use client"

import { useEffect, useRef } from "react"

interface ServiceDetailBannerProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function ServiceDetailBanner({ title, description, buttonText }: ServiceDetailBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const illustrationRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Animate elements on mount
    const elements = [textRef.current, illustrationRef.current, buttonRef.current]

    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0"
        el.style.transform = index === 1 ? "translateX(50px)" : "translateY(20px)"

        setTimeout(() => {
          el.style.transition = "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
          el.style.opacity = "1"
          el.style.transform = "translate(0)"
        }, index * 150)
      }
    })

    // Floating animation for decorative elements (client only, after hydration)
    if (typeof window !== 'undefined') {
      const floatingElements = containerRef.current?.querySelectorAll("[data-float]");
      floatingElements?.forEach((el, ) => {
        // Use a fixed value for SSR, randomize only on client
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        (el as HTMLElement).style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
      });
    }
  }, [])

  return (
    <div className=" pt-[60px]  overflow-hidden" 
      style={{
    backgroundImage: "url('/bg-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div ref={containerRef} className="relative w-full h-full">
        {/* Decorative floating elements */}
        <div data-float className="absolute top-20 right-20 text-white/30 text-4xl">
          +
        </div>
        <div data-float className="absolute bottom-32 right-32 w-2 h-2 bg-white/20 rounded-full"></div>
        <div data-float className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
        <div data-float className="absolute bottom-20 left-1/3 text-white/20 text-3xl">
          +
        </div>
        <div data-float className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/30 rounded-full"></div>

        {/* Main content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px] lg:min-h-[500px]">
            {/* Left content */}
            <div ref={textRef} className="flex flex-col justify-center space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  leading-tight   text-white">
                  {title}
                </h1>
              </div>

              <p className="text-base sm:text-lg   leading-relaxed max-w-md text-white">
                {description}
              </p>

              <div>
               <button
  ref={buttonRef}
  onClick={() => {
    const phone = "919947400278";
    const message = encodeURIComponent(
      "Hello Dapps Solutions,\nI'm interested in learning more about your AI-driven websites, automation systems, and digital transformation services designed to enhance business growth and efficiency.\nPlease share more details."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  }}
  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-sm sm:text-base"
>
  {buttonText}
</button>

              </div>
            </div>

            {/* Right illustration */}
            <div ref={illustrationRef} className="sm:flex hidden   justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* SVG Illustration */}
                <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main frame/window */}
                  <rect x="80" y="80" width="240" height="240" rx="20" stroke="white" strokeWidth="2" opacity="0.8" />

                  {/* Window header */}
                  <line x1="80" y1="110" x2="320" y2="110" stroke="white" strokeWidth="2" opacity="0.6" />
                  <circle cx="95" cy="95" r="3" fill="white" opacity="0.6" />
                  <circle cx="110" cy="95" r="3" fill="white" opacity="0.6" />
                  <circle cx="125" cy="95" r="3" fill="white" opacity="0.6" />

                  {/* Grid lines inside */}
                  <line x1="160" y1="110" x2="160" y2="320" stroke="white" strokeWidth="1.5" opacity="0.4" />
                  <line x1="240" y1="110" x2="240" y2="320" stroke="white" strokeWidth="1.5" opacity="0.4" />
                  <line x1="80" y1="170" x2="320" y2="170" stroke="white" strokeWidth="1.5" opacity="0.4" />
                  <line x1="80" y1="230" x2="320" y2="230" stroke="white" strokeWidth="1.5" opacity="0.4" />

                  {/* Person 1 - Top left */}
                  <circle cx="120" cy="140" r="8" stroke="white" strokeWidth="1.5" opacity="0.7" />
                  <path d="M 120 150 Q 115 160 110 170" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />
                  <path d="M 120 155 L 105 165" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />
                  <path d="M 120 155 L 135 165" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />

                  {/* Person 2 - Top right */}
                  <circle cx="280" cy="135" r="8" stroke="white" strokeWidth="1.5" opacity="0.7" />
                  <path d="M 280 145 Q 275 155 270 165" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />
                  <path d="M 280 150 L 265 160" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />
                  <path d="M 280 150 L 295 160" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />

                  {/* Person 3 - Bottom left */}
                  <circle cx="120" cy="270" r="8" stroke="white" strokeWidth="1.5" opacity="0.7" />
                  <path d="M 120 280 Q 115 290 110 300" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />
                  <path d="M 120 285 L 105 295" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />
                  <path d="M 120 285 L 135 295" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />

                  {/* Person 4 - Bottom right */}
                  <circle cx="280" cy="275" r="8" stroke="white" strokeWidth="1.5" opacity="0.7" />
                  <path d="M 280 285 Q 275 295 270 305" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />
                  <path d="M 280 290 L 265 300" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />
                  <path d="M 280 290 L 295 300" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none" />

                  {/* Center element/screen */}
                  <rect
                    x="170"
                    y="190"
                    width="60"
                    height="50"
                    rx="4"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.6"
                    fill="none"
                  />
                  <circle cx="200" cy="215" r="4" fill="white" opacity="0.5" />

                  {/* Decorative circles around */}
                  <circle cx="100" cy="200" r="6" stroke="white" strokeWidth="1.5" opacity="0.5" fill="none" />
                  <circle cx="300" cy="150" r="5" stroke="white" strokeWidth="1.5" opacity="0.4" fill="none" />
                  <circle cx="340" cy="250" r="4" stroke="white" strokeWidth="1.5" opacity="0.4" fill="none" />
                </svg>

                {/* Decorative elements around illustration */}
                <div className="absolute -top-4 -right-4 text-white/40 text-2xl">+</div>
                <div className="absolute -bottom-6 -left-6 w-2 h-2 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
