"use client"

import Image from "next/image"
 

const slideInUpKeyframes = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export default function CareerHero() {
 
  return (
    <>

      <style jsx>{slideInUpKeyframes}</style>
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transition: "none",
          }}
        >
          <Image
            src="/bg-1.jpg"
            alt="Modern office environment with professionals collaborating"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div
          className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 "
          dir="ltr"
        >
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl absolute bottom-12 sm:bottom-32">
            
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-4 sm:mb-6 leading-tight">
                  Explore your passion,
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Create change
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl pr-2">
                  Transform your career while transforming lives.
                </p>
            
          </div>
        </div>
      </section>
    </>
  )
} 

