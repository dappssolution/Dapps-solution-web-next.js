"use client"

import { useEffect, useRef, useState } from "react"

export default function WorkDetailInfo() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
              <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">Client</h2>
            </div>

            {/* Right: Description */}
            <div className="flex items-start">
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                Our client, a Fortune 500 company, is a leader in medical innovation. They develop solutions that
                improve lives, providing essential products, tools, and services to healthcare professionals, patients,
                and career seekers. Committed to growth and forward-thinking, they leverage advanced technologies to
                benefit employees and consumers alike.
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
              <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">Requirement</h2>
            </div>

            {/* Right: Description */}
            <div className="flex items-start">
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                The client needed to enhance their manual offboarding process, which involved multiple forms and
                approvals, by implementing an automated, centralized system. This system required efficient tracking,
                data security, and streamlined workflows to ensure a smoother, faster exit process for employees while
                providing valuable insights for the organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
