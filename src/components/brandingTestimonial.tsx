import Image from 'next/image'
import { Quote } from "lucide-react"

export default function BrandingTestimonial() {
    const name = "Saleena"
    const hasImage = false // Set to true if you have an image, false to show initials
    
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        <div className="relative">
          {/* Large decorative quote mark */}
          <div className="absolute top-0 right-0 text-gray-300 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-none select-none">
            <Quote className="w-8 h-8" />
          </div>
  
          {/* Profile section */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#162034] overflow-hidden flex-shrink-0 relative flex items-center justify-center">
              {hasImage ? (
                <Image 
                  src="" 
                  alt={name} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40px, 48px"
                />
              ) : (
                <span className="text-lg sm:text-xl font-semibold text-[#1098E2]">
                  {name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900">{name}</h3>
              <p className="text-xs sm:text-sm text-gray-600">Founder of Silhouettes by Saleena</p>
            </div>
          </div>
  
          {/* Testimonial text */}
          <div className="pr-8 sm:pr-12 md:pr-16 lg:pr-24">
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-relaxed font-normal">
            Brandbik crafted a unique brand identity that truly resonates with our audience and business values.
            </blockquote>
          </div>
        </div>
      </div>
    )
  }
  