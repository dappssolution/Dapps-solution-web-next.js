"use client"

import { useEffect, useState } from "react"
import { Download, MessageCircle } from "lucide-react"

export default function WorkDetailBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className=" w-full overflow-hidden">
      <div className="relative w-full py-[110px] pt-[170px]   flex items-center justify-start px-4 sm:px-6 lg:px-12" 
        style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1277470.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        {/* Content Container */}
        <div className="w-full max-w-4xl">
          {/* Main Heading - Fade in and slide up animation */}
          <h1
            className={`text-4xl sm:text-4xl lg:text-5xl  font-bold text-white mb-6 leading-tight transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            Employee Exit Management System- A Microsoft Sharepoint Implementation Case Study
          </h1>

          {/* Description Text - Fade in with delay */}
          <p
            className={`text-base sm:text-lg  text-white/90 mb-8 max-w-2xl leading-relaxed transition-all duration-1000 transform delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Streamline the employee offboarding process by automating workflows, enhancing data security, and improving
            approval tracking through Microsoft SharePoint integration.
          </p>

          {/* Buttons Container - Fade in with delay */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 transform delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Let's Talk Button */}
            <button
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 sm:px-10 sm:py-4 bg-white text-[#010737]  cursor-pointer  font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              aria-label="Start a conversation"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span>Let&lsquo;s talk</span>
            </button>

            {/* Download Case Study Button */}
            <button
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 sm:px-10 sm:py-4 bg-white text-[#010737] cursor-pointer font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              aria-label="Download the case study"
            >
              <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              <span>Download Case Study</span>
            </button>
          </div>
        </div>

        {/* Decorative gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
