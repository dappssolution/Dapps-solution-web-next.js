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
    title: "Digital Advertising",
    content:
      "We create and manage comprehensive digital advertising campaigns across multiple platforms including Google Ads, social media, and programmatic advertising. Our data-driven approach ensures optimal ROI and campaign performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Print & Outdoor Advertising",
    content:
      "From billboards to magazine ads, we design and execute impactful print and outdoor advertising campaigns that capture attention and drive engagement. We handle everything from creative design to media placement.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Social Media Advertising",
    content:
      "We develop targeted social media advertising strategies across platforms like Facebook, Instagram, LinkedIn, and Twitter. Our campaigns are designed to increase brand awareness, drive engagement, and generate leads.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Video Advertising",
    content:
      "We create compelling video advertisements for TV, online platforms, and social media. Our video content is designed to tell your brand story and engage your audience through visual storytelling.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Performance Marketing",
    content:
      "We implement performance-based marketing strategies that focus on measurable results. Our approach includes conversion rate optimization, A/B testing, and continuous campaign optimization to maximize ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
]

export default function AdvertisingServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(-1)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  return (
    <div className="w-full px-5 md:px-16 lg:px-24 py-16 lg:py-24">
      <h1 className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-2 ${poppins.className}`}>
        Advertising Services We Offer
      </h1>
      <p className="text-gray-500 mb-10 text-base md:text-[16px] max-w-[778px] py-4">
        At Brandbik, our Advertising services are designed to maximize your brand&apos;s reach and impact. 
        From digital to traditional media, we create strategic advertising campaigns that drive results and deliver measurable ROI.
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
              <span className="flex-1 relative z-0">{service.title}</span>

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

              <span className="text-3xl font-light ml-4 relative z-0 transition-transform duration-300">
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