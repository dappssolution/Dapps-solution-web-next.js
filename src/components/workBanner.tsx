"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { Onest } from "next/font/google"
import { motion, useInView } from "framer-motion"
 

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export default function WorkBanner() {
  
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [isMobile, setIsMobile] = useState(false)
  const [showFirst, setShowFirst] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const interval = setInterval(() => {
      if (isMobile) {
        setShowFirst((prev) => !prev)
      }
    }, 1500)

    return () => {
      window.removeEventListener("resize", checkMobile)
      clearInterval(interval)
    }
  }, [isMobile])

  return (
    <section ref={sectionRef} className="relative w-full h-[420px] overflow-hidden" dir="ltr">
      {/* Animated Color Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Main gradient background - updated to #5A189A */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#59189a6a] via-[#7a2ff25d] to-[#c77dff61] animate-gradient-shift"></div>

        {/* Wave overlay - subtle purple tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5A189A]/20 to-transparent animate-wave-flow"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text */}
          <div className="md:w-1/2 px-4 md:px-0 text-center md:text-left mb-8 md:mb-0">
            <h1
              className={`text-4xl md:text-5xl pl-0  lg:pl-20 lg:text-[48px] font-bold text-[#5A189A] leading-tight ${poppins.className}`}
            >
              Empowering Your Vision.<br className="hidden md:block" />
            
            </h1>
            
          </div>

          {/* Right side - Sphere and Stats */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {/* Stats */}
            <div className="absolute sm:bottom-[55%] sm:right-[2%] z-20">
              <motion.div
                initial={{ opacity: 0, x: "100%", y: "100%", scale: 0.5 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#5A189A]/20 backdrop-blur-sm rounded-[9px] sm:rounded-xl px-4 sm:px-6 py-2 border border-[#5A189A] shadow-lg flex justify-center items-center gap-2 w-[210px]"
              >
                <motion.div
                  key={showFirst ? "countries" : "projects"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center items-center gap-2"
                >
                  <div className={`text-2xl lg:text-[32px] text-[#5A189A] font-bold ${onest.className}`}>
                    {isMobile ? (showFirst ? "22+" : "1000+") : "22+"}
                  </div>
                  <div className={`text-[#5A189A] sm:text-[20px] font-extralight ${poppins.className}`}>
                    {isMobile ? (showFirst ? "Countries Served" : "Projects Delivered") : "Countries Served"}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute sm:bottom-[11%] sm:right-[16%] z-20">
              <motion.div
                initial={{ opacity: 0, x: "100%", y: "100%", scale: 0.5 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#5A189A]/20 backdrop-blur-sm rounded-[9px] sm:rounded-xl px-4 sm:px-6 py-2 border border-[#5A189A] shadow-lg flex justify-center items-center gap-2  w-[230px]"
              >
                <motion.div
                  key={showFirst ? "projects" : "countries"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center items-center gap-2"
                >
                  <div className={`text-2xl lg:text-[32px] text-[#5A189A] font-bold ${onest.className}`}>
                    {isMobile ? (showFirst ? "1000+" : "14+") : "1000+"}
                  </div>
                  <div className={`text-[#5A189A] sm:text-[20px] font-extralight ${poppins.className}`}>
                    {isMobile ? (showFirst ? "Projects Delivered" : "Industries Impacted") : "Industries Impacted"}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Sphere Container */}
            <div className="w-full h-full">
              {/* Main Sphere */}
              <motion.div
                initial={{ opacity: 0, x: "100%", y: "100%", scale: 0 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute bottom-[-500px] left-1/2 transform -translate-x-1/2
                  sm:bottom-[-350px] sm:left-auto sm:right-[-300px] sm:translate-x-0 sm:transform-none
                  w-[820px] h-[820px] md:w-[800px] md:h-[800px]
                "
              >
                <Image src="/images/about-shape.png" alt="3D Sphere" fill className="object-contain" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
