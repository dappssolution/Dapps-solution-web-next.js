"use client"

import { useState } from "react"
import Image from "next/image"

const services = [
  {
    title: "E-commerce Website Design",
    content:
      "Turn browsers into buyers with a high-converting online store. Our e-commerce solutions combine sleek design, seamless UX, and robust security to maximize sales and scalability",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Applications & Dashboard",
    content:
      "Power your business with intuitive, high-performance tools. We build custom web apps and dashboards that simplify workflows, enhance productivity, and keep users engaged.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Custom Website Design",
    content:
      "Stand out in the digital crowd with a website that's uniquely yours. We design tailor-made sites that capture your brand's essence, engage visitors, and drive measurable business growth.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Redesign and Website Revamp",
    content:
      "Don't let an outdated site hold you back. We transform underperforming websites into modern, fast, and conversion-focused platforms that align with your evolving brand.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
]

export default function WebDevServicesAccordion() {

  const [openIndex, setOpenIndex] = useState<number>(-1) // Custom Website Design open by default
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  return (
    <div className="w-full px-5 md:px-16 lg:px-24 py-16 lg:py-24">
      <h1 className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-2 font-poppins`}>
        Modern Web Development Solutions
      </h1>
      <p className="text-gray-500 mb-10 text-base md:text-[16px] max-w-[778px] py-4">
        Empower your business with cutting-edge web development. From high-performance websites to custom digital platforms, we blend the latest technology, sleek design, and strategic thinking to help you thrive online. Let’s build the future of your brand—fast, secure, and ready to scale.
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
                    src={service.image || "/p"}
                    alt={`${service.title} preview`}
                    fill
                    className="object-cover shadow-xl transform transition-transform duration-300"
                    sizes="128px"
                  />
                </div>

                {/* Tablet Image */}
                <div className="relative w-40 h-28 hidden sm:block md:hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} preview`}
                    fill
                    className="object-cover  shadow-xl transform transition-transform duration-300"
                    sizes="160px"
                  />
                </div>

                {/* Desktop Image */}
                <div className="relative w-48 h-32 hidden md:block lg:hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} preview`}
                    fill
                    className="object-cover  shadow-xl transform transition-transform duration-300"
                    sizes="192px"
                  />
                </div>

                {/* Large Desktop Image */}
                <div className="relative w-56 h-36 hidden lg:block">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} preview`}
                    fill
                    className="object-cover  shadow-xl transform transition-transform duration-300"
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
