"use client"
import Link from "next/link"
import Image from "next/image"
import { Poppins } from 'next/font/google'
import { useState } from "react"
import { usePathname } from "next/navigation"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],  
  variable: '--font-poppins',  
})

// Define a type for work items
interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
  slug?: string;
}


export default function RelatedWorks() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)
  const pathname = usePathname()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  // Sample data for different service types
  const serviceWorks: Record<string, Work[]> = {
    "web-development": [
      {
        id: 1,
        title: "Cyberseed",
        description: "Cyberseed is a business consultancy firm offering tailored solutions to help companies overcome challenges and achieve sustainable growth.",
        image: "/images/Web-development/cyberceed-background.jpg",
        slug: "cyberseed",
      },
      {
        id: 2,
      title: "Scitor Academy",
      description: "Scitor Academy is a skill-based institute offering courses in digital marketing, development, design, and AI to prepare students for tech careers.",
      image: "/images/Web-development/scitor-background.jpg",
      slug: "scitor-academy",
      },
      {
        id: 3,
      title: "Zayior",
      description: "Zayior Resort is a luxury nature retreat nestled in the scenic village of Kakkadampoyil, Kerala, near Kozhikode.",
      image: "/images/Web-development/zayior-background.jpg",
      slug: "zayior",
      }
    ],
    "app-development": [
      {
        id: 1,
        title: "Abo Glumbo  ",
        description: "Connect with trusted professionals for home repairs, installations, and maintenance—all in one easy-to-use app.",
        image: "/images/app-development/abo-glumbo-banner.jpg",
        slug: "abo-glumbo",
      },
      {
        id: 2,
        title: "Handyman",
        description: "Trusted Electrical & Plumbing Services Fast, safe support from certified pros across Saudi Arabia. Easy booking through our simple app.",
        image: "/images/app-development/handyman-banner.jpg",
        slug: "handyman",
      },
      {
        id: 3,
        title: "Mr Cars",
        description: "A comprehensive car service app designed to simplify vehicle care across Saudi Arabia",
        image: "/images/app-development/mr-cars-banner.jpg",
        slug: "mr-cars",
      }
    ],
    "branding": [
      {
        id: 1,
        title: "Silhouettes By Saleena",
        description: "Crafted the brand identity and logo for Silhouettes By Saleena, a modern, elegant fashion label.",
        image: "/images/Branding/sihouettes.png",
        category: "branding",
        slug: "silhouettes-by-saleena",
      },
      {
        id: 2,
        title: "The Biriyani & Beyond Co",
        description: "Crafted a vibrant brand identity capturing the emotion, tradition, and flavor of authentic biryani.",
        image: "/images/Branding/bandb.png",
        category: "branding",
        slug: "biriyani-and-beyond",
      },
      {
        id: 3,
        title: "Team AE",
        description: "Built a dynamic brand website for Team AE, showcasing innovation in events, education, and entertainment.",
        image: "/images/Branding/team-ae-work.png",
        category: "branding",
        slug: "teamae",
      },
      {
        id: 4,
        title: "Matrix Microns",
        description: "Matrix Microns delivers high-quality, sustainably sourced quartz lumps for global industrial applications.",
        image: "/images/Branding/matrix-microns.png",
        category: "branding",
        slug: "matrix-microns",
      },
      {
        id: 5,
        title: "Cyberseed",
        description: "We crafted Cyberseed's bold, modern branding to reflect innovation, growth, and digital excellence.",
        image: "/images/Branding/cyberceed.jpg",
        category: "branding",
        slug: "cyberseed",
      },
      {
        id: 6,
        title: "Financeva",
        description: "Financeva: A logo symbolizing financial growth and guidance with a sleek, navigation-inspired design.",
        image: "/images/Branding/FINANCEVA.jpg",
        category: "branding",
        slug: "financeva",
      },
    ],
    "digital-marketing": [
      {
        id: 1,
        title: "AES School of commerce",
        description: "AE's School of Commerce is a premier accounting institute located in Perinthalmanna, Malappuram, Kerala.",
        image: "/images/Digital-Marketing/aes-min.jpg",
        slug: "aes-school-digital",
      },
      {
        id: 2,
        title: "Chef Pillai",
        description: "Chef Pillai offering traditional Kerala dishes with a modern twist ",
        image: "/images/Digital-Marketing/chef-pillai.jpg",
        slug: "chef-pillai",
      },
      {
        id: 3,
        title: "Get Your Dubai Visa",
        description: " Get Your Dubai Visa is a travel service provider specializing in facilitating Dubai visa applications for Indian travelers",
        image: "/images/Digital-Marketing/dubai-min.jpg",
        slug: "get-your-dubai-visa",
      },
    ],
    "social-media": [
      {
        id: 1,
        title: "Galaxon Max",
        description: "Galaxon Max is a construction solutions company based in Kerala, India, specializing in the exhibition, distribution, marketing, and retail of building materials, paints, varnishes, and adhesives used in construction.",
        image: "/images/Digital-Marketing/galaxy-min.jpg",
        slug: "galaxon-max",
      },
      {
        id: 2,
        title: "Green Door Organics",
        description: "Green Door Organics is an organic food company based in Kozhikode, Kerala, committed to promoting healthy living through natural and chemical-free products",
        image: "/images/Digital-Marketing/greensdoor-min.jpg",
        slug: "green-door-organics",
      },
      {
        id: 3,
        title: "INDOARAB",
        description: "INDOARAB company specializes in the manufacture of perfumes and chemical products.",
        image: "/images/Digital-Marketing/indo-min.jpg",
        slug: "indo-arab",
      },
    ],
    "advertising": [
      {
        id: 1,
        title: "MPB Group",
        description: "We developed MPB Group's branding to unify its diverse ventures in quarry, petroleum, and more.",
        image: "/images/Branding/MPB.jpg",
        slug: "mpb-group",
      },
      {
        id: 2,
        title: "SheTalks",
        description: "We crafted the bold, empowering brand identity for SheTalks – celebrating women's voices worldwide.",
        image: "/images/Branding/SHETALKS.jpg",
        slug: "she-talks",
      },
      {
        id: 3,
        title: "AES School of Commerce",
        description: "Crafted a visionary brand identity for AES School of Commerce, symbolizing progress, energy, and connectivity.",
        image: "/images/Branding/aes-school.png",
        slug: "aes-school",
      },
    ]
  }

  // Get the current service type from the pathname
  const currentService = pathname.split('/').pop() || 'web-development'
  const relatedWorks: Work[] = serviceWorks[currentService as keyof typeof serviceWorks] || serviceWorks['web-development']

  return (
    <section className={`container mx-auto px-5 md:px-16 lg:px-24 py-12 md:py-20 ${poppins.className}`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl lg:text-[48px] font-medium mb-2">Related Works</h2>
        <Link href="/works" className="text-blue-500 hover:underline">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {relatedWorks.map((work) => (
          'slug' in work ? (
            <Link href={`/works/${work.slug}`} key={work.id} className="project-card sm:mb-4 border border-gray-200 cursor-pointer">
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
            </Link>
          ) : (
            <div key={work.id} className="project-card sm:mb-4 border border-gray-200 cursor-pointer">
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
          )
        ))}
      </div>
    </section>
  )
}