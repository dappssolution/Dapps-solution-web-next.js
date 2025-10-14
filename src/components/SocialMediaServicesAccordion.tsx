"use client"

import { useState } from "react"
import Image from "next/image"

const services = [
  {
    title: "Social Media Strategy",
    content:
      "We develop comprehensive social media strategies tailored to your brand's goals and target audience. Our approach includes platform selection, content planning, and performance metrics to ensure maximum impact and engagement.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Content Creation",
    content:
      "Our creative team produces engaging, platform-optimized content including posts, stories, reels, and videos. We focus on creating content that resonates with your audience and aligns with your brand voice.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Community Management",
    content:
      "We manage your social media presence by engaging with your audience, responding to comments, and fostering meaningful conversations. Our team ensures your brand maintains an active and positive community presence.",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Social Media Advertising",
    content:
      "We create and manage targeted social media advertising campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter. Our data-driven approach ensures optimal ROI and campaign performance.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Analytics & Reporting",
    content:
      "We provide detailed analytics and regular performance reports to track your social media success. Our insights help optimize your strategy and demonstrate ROI through key metrics and KPIs.",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&auto=format&fit=crop&q=60",
  },
]

export default function SocialMediaServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(-1)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  return (
    <div className="w-full px-5 md:px-16 lg:px-24 py-16 lg:py-24">
      <h1 className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-2 font-poppins`}>
        Social Media Services We Offer
      </h1>
      <p className="text-gray-500 mb-10 text-base md:text-[16px] max-w-[778px] py-4">
        At Brandbik, our Social Media services are designed to build your brand&apos;s presence and engage your audience. 
        From strategy to content creation, we help you connect with your community and achieve your social media goals.
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