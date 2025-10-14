"use client"

import { useState } from "react"
import { Poppins } from "next/font/google"
import Image from "next/image"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const services = [
  {
    title: "Native App Development",
    content:
      "We develop high-performance native applications for iOS and Android platforms using Swift, Kotlin, and Java, ensuring optimal performance and platform-specific features.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Cross-Platform Development",
    content:
      "Using React Native and Flutter, we create cross-platform applications that work seamlessly across iOS and Android while maintaining native-like performance and user experience.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "UI/UX Design",
    content:
      "Our expert designers create intuitive and engaging user interfaces that enhance user experience and drive engagement, following the latest design trends and best practices.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "App Maintenance & Support",
    content:
      "We provide comprehensive maintenance and support services to ensure your app stays up-to-date, secure, and performs optimally across all devices and platforms.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
  },
]

export default function AppDevServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(-1)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  return (
    <div className="w-full px-5 md:px-16 lg:px-24 py-16 lg:py-24">
      <h1 className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-2 ${poppins.className}`}>
        App Development Services We Offer
      </h1>
      <p className="text-gray-500 mb-10 text-base md:text-[16px] max-w-[778px] py-4">
        At Brandbik, our App Development services are designed to transform your ideas into powerful mobile applications. 
        From native to cross-platform solutions, we deliver high-performance apps that drive business growth.
      </p>

      <div className="border-b border-gray-200 overflow-visible">
        {services.map((service, idx) => (
          <div key={service.title} className="relative overflow-visible">
            <div
              className="flex items-center justify-between py-3 md:py-5 cursor-pointer text-xl md:text-2xl lg:text-[32px] font-normal border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 relative overflow-visible group"
              onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <span className="flex-1 relative z-[1]">{service.title}</span>

              {/* Centered Hover Image with Slide Effect - Responsive */}
              <div
                className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out ${
                  hoveredIndex === idx ? "opacity-100 scale-100 -rotate-3" : "opacity-0 scale-75 rotate-6"
                }`}
                style={{
                  zIndex: 20,
                }}
              >
                {/* Mobile Image */}
                <div className="relative w-32 h-20 sm:hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} preview`}
                    fill
                    className="object-cover shadow-xl transform transition-transform duration-300"
                    sizes="128px"
                  />
                </div>

                {/* Tablet Image */}
                <div className="relative w-40 h-24 hidden sm:block md:hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} preview`}
                    fill
                    className="object-cover shadow-xl transform transition-transform duration-300"
                    sizes="160px"
                  />
                </div>

                {/* Desktop Image */}
                <div className="relative w-48 h-32 hidden md:block lg:hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} preview`}
                    fill
                    className="object-cover shadow-xl transform transition-transform duration-300"
                    sizes="192px"
                  />
                </div>

                {/* Large Desktop Image */}
                <div className="relative w-56 h-36 hidden lg:block">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} preview`}
                    fill
                    className="object-cover shadow-xl transform transition-transform duration-300"
                    sizes="224px"
                  />
                </div>
              </div>

              <span className="text-3xl font-light ml-4 relative z-[1] transition-transform duration-300">
                {openIndex === idx ? "−" : "+"}
              </span>
            </div>

            {/* Content */}
            {openIndex === idx && service.content && (
              <div className="text-gray-500 text-base md:text-lg my-4 pl-1 relative z-10">{service.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 