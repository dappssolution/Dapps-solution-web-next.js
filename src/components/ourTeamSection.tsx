"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

// Custom CSS to hide scrollbar but keep functionality
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`

export default function OurTeamSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const { t } = useLanguage()

  const teamMembers: TeamMember[] = [
    {
      id: 2,
      name: "team.member.2.name",
      role: "team.member.2.role",
      image: "/Photo/althaf.jpg",
    },
    {
      id: 1,
      name: "team.member.1.name",
      role: "team.member.1.role",
      image: "/Photo/fadhi.png",
    },
    {
      id: 10,
      name: "team.member.10.name",
      role: "team.member.10.role",
      image: "/Photo/shaheed.jpg",
    },
    {
      id: 11,
      name: "team.member.11.name",
      role: "team.member.11.role",
      image: "/Photo/sahal.jpg",
    },
    {
      id: 12,
      name: "team.member.12.name",
      role: "team.member.12.role",
      image: "/Photo/fawaz.jpg",
    },
 
    {
      id: 13,
      name: "team.member.13.name",
      role: "team.member.13.role",
      image: "/Photo/haneen.jpg",
    },
    {
      id: 3,
      name: "team.member.3.name",
      role: "team.member.3.role",
      image: "/Photo/saleel.jpeg",
    },
    {
      id: 4,
      name: "team.member.4.name",
      role: "team.member.4.role",
      image: "/Photo/basil.jpeg",
    },
    {
      id: 5,
      name: "team.member.5.name",
      role: "team.member.5.role",
      image: "/Photo/nasih.jpg",
    },
    {
      id: 6,
      name: "team.member.6.name",
      role: "team.member.6.role",
      image: "/Photo/adnan.jpeg",
    },
    {
      id: 7,
      name: "team.member.7.name",
      role: "team.member.7.role",
      image: "/Photo/rafi.jpg",
    },
    {
      id: 8,
      name: "team.member.8.name",
      role: "team.member.8.role",
      image: "/Photo/amna.jpg",
    },
    {
      id: 9,
      name: "team.member.9.name",
      role: "team.member.9.role",
      image: "/Photo/shamna.jpg",
    },
    {
      id: 14,
      name: "team.member.14.name",
      role: "team.member.14.role",
      image: "/Photo/javid.jpg",
    },
    {
      id: 15,
      name: "team.member.15.name",
      role: "team.member.15.role",
      image: "/Photo/minha.jpg",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0')
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, cardId]))
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-6 md:pl-16 lg:pl-24">
      <style jsx global>
        {scrollbarHideStyles}
      </style>
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="inline-flex items-center rounded-full text-white bg-gray-400 border px-2.5 py-0.5 text-sm  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
              {t('team.badge')}
            </div>
            <h2 className={`font-poppins text-3xl font-medium tracking-tight py-1 sm:text-4xl md:text-[48px] pb-6 text-center md:text-left`}>{t('team.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 scrollbar-hide">
            {teamMembers.map((member, index) => {
              const isVisible = visibleCards.has(member.id)
              return (
                <div
                  key={member.id}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  data-card-id={member.id}
                  className="group relative overflow-hidden w-full h-[380px] shadow-2xl transform transition-all duration-700"
                  style={{
                    transform: isVisible ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isVisible ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Decorative elements */}
                  <div 
                    className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full transition-all duration-500"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
                    }}
                  ></div>
                  <div 
                    className="absolute top-8 right-8 w-2 h-2 bg-white/30 rounded-full transition-all duration-500 delay-200"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
                    }}
                  ></div>
                  
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      transform: isVisible ? 'scale(1.1)' : 'scale(1)',
                      filter: isVisible ? 'grayscale(0)' : 'grayscale(1)'
                    }}
                  />
                  
                  {/* Content overlay */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-700"
                    style={{
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    {/* Name */}
                    <h3 
                      className="text-xl font-bold text-white drop-shadow-2xl mb-1 transition-all duration-700"
                      style={{
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      {t(member.name)}
                    </h3>
                    
                    {/* Role */}
                    <p 
                      className="text-sm text-white/80 drop-shadow-lg transition-all duration-700 delay-200"
                      style={{
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      {t(member.role)}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div 
                      className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-3 transition-all duration-700 delay-300"
                      style={{
                        width: isVisible ? '100%' : '0%'
                      }}
                    ></div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500"
                    style={{
                      opacity: isVisible ? 1 : 0
                    }}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
