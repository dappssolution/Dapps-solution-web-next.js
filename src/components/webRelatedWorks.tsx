"use client"
import Link from "next/link"
import Image from "next/image"
import { Poppins } from 'next/font/google'
import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],  
  variable: '--font-poppins',  
})


export default function WebRelatedWorks() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)
  const { t } = useLanguage();
  const pathname = usePathname();
 

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  // Sample data for the related works grid - using website development projects
  const relatedWorks = [
    {
      id: 1,
      title: t('work.projects.cyberseed.title'),
      description: t('work.projects.cyberseed.description'),
      image: "/images/Web-development/cyberceed-background.jpg",
      category: "website",
      route: "/works/cyberseed",
    },
    {
      id: 2,
      title: t('work.projects.scitor.title'),
      description: t('work.projects.scitor.description'),
      image: "/images/Web-development/scitor-background.jpg",
      category: "website",
      route: "/works/scitor-academy",
    },
    {
      id: 3,
      title: t('work.projects.zayior.title'),
      description: t('work.projects.zayior.description'),
      image: "/images/Web-development/zayior-background.jpg",
      category: "website",
      route: "/works/zayior",
    },
  ];

  // AES School work object
  const aesSchoolWork = {
    id: 5,
    title: t('work.projects.aesschool.title'),
    description: t('work.projects.aesschool.description'),
    image: "/images/Web-development/aes-school.jpg",
    category: "website",
    route: "/works/aes-school",
  };

  // Replace Cyberseed, Scitor Academy, or Zayior with AES School if on their respective routes
  let displayedWorks = relatedWorks;
  if (
    pathname === "/works/cyberseed" ||
    pathname === "/works/scitor-academy" ||
    pathname === "/works/zayior"
  ) {
    displayedWorks = relatedWorks.map(work =>
      (pathname === "/works/cyberseed" && work.route === "/works/cyberseed") ||
      (pathname === "/works/scitor-academy" && work.route === "/works/scitor-academy") ||
      (pathname === "/works/zayior" && work.route === "/works/zayior")
        ? aesSchoolWork
        : work
    );
  }

  return (
    <section className={`container mx-auto px-5 md:px-16 lg:px-24 py-12 md:py-20 ${poppins.className}`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl lg:text-[48px] font-medium mb-2">Related Works</h2>
        <Link href="/works" className="text-blue-500 hover:underline">
          View All
        </Link>
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {displayedWorks.map((work) => (
          <Link key={work.id} href={work.route} className="block">
            <div className="project-card sm:mb-4 border border-gray-200 cursor-pointer">
              <div 
                className="mb-3 md:mb-4 overflow-hidden relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredProjectId(work.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  width={400}
                  height={250}
                  className="w-full h-[200px] md:h-[250px] hover:scale-105 transition-transform duration-300"
                />
                {hoveredProjectId === work.id && (
                  <div 
                    className="absolute pointer-events-none transition-transform duration-100 ease-out"
                    style={{
                      left: mousePosition.x,
                      top: mousePosition.y,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="flex items-center justify-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md bg-white/20">
                      <span className={`text-white text-xs md:text-sm font-light ${poppins.className}`}>View</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-3 md:px-4 pb-4 md:pb-5">
                <h3 className={`text-base md:text-lg lg:text-[24px] font-medium ${poppins.className}`}>{work.title}</h3>
                <p className={`text-xs md:text-sm text-gray-600 ${poppins.className}`}>{work.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}