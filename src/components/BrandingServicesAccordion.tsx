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
    title: "Brand Strategy",
    content:
      "We develop comprehensive brand strategies that define your unique value proposition, target audience, and market positioning. Our strategic approach ensures your brand resonates with your audience and stands out in the market.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Logo Design",
    content:
      "Our creative team crafts distinctive logos that capture your brand's essence and create lasting impressions. We focus on creating memorable, versatile designs that work across all platforms and applications.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Brand Identity Design",
    content:
      "We create cohesive brand identity systems including color palettes, typography, imagery guidelines, and design elements that maintain consistency across all brand touchpoints.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Brand Voice & Messaging",
    content:
      "We develop your brand's unique voice and messaging framework that communicates your values and connects with your audience. This includes tone of voice guidelines, key messages, and content strategy.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Brand Guidelines",
    content:
      "We create comprehensive brand guidelines that ensure consistent implementation of your brand across all channels. These guidelines serve as a reference for maintaining brand integrity in all communications.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=60",
  },
]

export default function BrandingServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(-1)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  return (
    <div className="w-full px-5 md:px-16 lg:px-24 py-16 lg:py-24">
      <h1 className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-2 ${poppins.className}`}>
        Branding Services We Offer
      </h1>
      <p className="text-gray-500 mb-10 text-base md:text-[16px] max-w-[778px] py-4">
        At Brandbik, our Branding services are designed to create powerful, memorable brand experiences. 
        From strategy to visual identity, we help you build a brand that resonates with your audience and drives business growth.
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