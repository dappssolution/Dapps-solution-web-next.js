"use client"

import { useState } from "react"
import Image from "next/image"

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    content:
      "We optimize your online presence to improve visibility in search results, driving organic traffic through strategic keyword optimization, content creation, and technical SEO improvements.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    content:
      "Our targeted PPC campaigns maximize your ROI through strategic ad placement, keyword research, and continuous optimization across Google Ads, social media platforms, and other digital channels.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Content Marketing",
    content:
      "We create engaging, valuable content that resonates with your target audience, including blog posts, articles, infographics, and videos that drive engagement and establish your brand authority.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Social Media Marketing",
    content:
      "Our social media strategies build brand awareness and engagement through platform-specific content, community management, and targeted advertising campaigns across major social networks.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Email Marketing",
    content:
      "We develop effective email marketing campaigns that nurture leads, retain customers, and drive conversions through personalized content, automation, and strategic segmentation.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=60",
  },
]

export default function DigitalMarketingServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(-1)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  return (
    <div className="w-full px-5 md:px-16 lg:px-24 py-16 lg:py-24">
      <h1 className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-2 font-poppins`}>
        Digital Marketing Services We Offer
      </h1>
      <p className="text-gray-500 mb-10 text-base md:text-[16px] max-w-[778px] py-4">
        At Brandbik, our Digital Marketing services are designed to drive growth and maximize your online presence. 
        From SEO to social media, we create data-driven strategies that deliver measurable results.
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