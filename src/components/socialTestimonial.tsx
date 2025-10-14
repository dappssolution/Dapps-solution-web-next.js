import { Quote } from "lucide-react"

export default function SocialTestimonial() {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        <div className="relative">
          {/* Large decorative quote mark */}
          <div className="absolute top-0 right-0 text-gray-300 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-none select-none">
            <Quote className="w-8 h-8" />
          </div>
  
          {/* Profile section */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 relative flex items-center justify-center">
              <span className="text-lg sm:text-xl font-bold text-gray-700">S</span>
            </div>
            
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900">Soumya </h3>
              <p className="text-xs sm:text-sm text-gray-600">Founder of SheTalks</p>
            </div>
          </div>
  
          {/* Testimonial text */}
          <div className="pr-8 sm:pr-12 md:pr-16 lg:pr-24">
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-relaxed font-normal">
              Our social media engagement soared thanks to their expert strategies.
            </blockquote>
          </div>
        </div>
      </div>
    )
  }
  