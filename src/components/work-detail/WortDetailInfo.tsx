"use client"

import { useEffect, useRef, useState } from "react"


export interface WorkDetailInfoProps {
  clientTitle: string;
  clientDescription: string;
  requirementTitle: string;
  requirementDescription: string;
}

export default function WorkDetailInfo({
  clientTitle,
  clientDescription,
  requirementTitle,
  requirementDescription,
}: WorkDetailInfoProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-background md:px-8 lg:px-12 ">
      {/* Client Section */}
      <div className="mx-auto max-w-8xl px-4 py-12  ">
        <div className="grid gap-8 md:gap-12 lg:gap-16">
          {/* Client Item */}
          <div
            className={`grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Left: Title */}
            <div className="flex items-start">
              <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">{clientTitle}</h2>
            </div>

            {/* Right: Description */}
            <div className="flex items-start">
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                {clientDescription}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Requirement Item */}
          
          <div
            className={`grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Left: Title */}
            <div className="flex items-start">
              <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">{requirementTitle}</h2>
            </div>

            {/* Right: Description */}
            <div className="flex items-start">
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                {requirementDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
