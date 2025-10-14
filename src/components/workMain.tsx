"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { useLanguage } from "@/contexts/LanguageContext"
import { useRef } from "react";

// Define project categories
type Category = "all" | "website" | "app" | "branding" | "social"

// Define project interface
interface Project {
  id: number
  title: string 
  description: string
  image: string
  category: Category
}

export default function WorkMain() {
  const router = useRouter();
  const { t, language } = useLanguage();
  // State to track active category
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle RTL support for this component
  useEffect(() => {
    const contentContainer = document.querySelector('.work-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Add useEffect to handle initial category from URL and history state
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get('category') as Category;
    
    // Check URL parameters first
    if (categoryParam) {
      setActiveCategory(categoryParam);
      // Store in history state
      window.history.replaceState({ category: categoryParam }, '');
    } else {
      // If no URL param, check history state
      const historyState = window.history.state;
      if (historyState?.category) {
        setActiveCategory(historyState.category);
      } else {
        setActiveCategory('all'); // Default to 'all' if nothing is set
      }
    }
  }, []);

  // Responsive items per page
  useEffect(() => {
    function updateItemsPerPage() {
      if (window.innerWidth < 640) {
        setItemsPerPage(6)
      } else {
        setItemsPerPage(9)
      }
    }
    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  // Scroll to top of section when currentPage changes
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  const handleCategoryChange = (category: Category) => {
    setIsLoading(true)
    setActiveCategory(category);
    // Update history state when category changes
    window.history.replaceState({ category }, '');
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 500)
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleProjectClick = (projectTitle: string, projectCategory?: Category) => {
    
    // Map project titles to their corresponding folder names
    const routeMap: { [key: string]: string } = {
      "The Biriyani & Beyond Co": "biriyani-and-beyond",
      [t('work.projects.shetalks.title')]: "she-talks",
      // Add other mappings as needed
    };

    // Special routing for shetalks branding/app
    if (projectTitle === t('work.projects.shetalks.title')) {
      if (projectCategory === 'branding') {
        router.push(`/works/shetalks?category=${activeCategory}`);
        return;
      } else if (projectCategory === 'app') {
        router.push(`/works/she-talks?category=${activeCategory}`);
        return;
      }
    }

    // Special routing for indoarab social
    if (projectTitle === t('work.projects.indoarab.title') && projectCategory === 'social') {
      router.push(`/works/indoarab-social?category=${activeCategory}`);
      return;
    }

    // Special routing for tenderoutes social
    if (projectTitle === t('work.projects.tenderoutes.title') && projectCategory === 'social') {
      router.push(`/works/tenderoutes-social?category=${activeCategory}`);
      return;
    }

    // Special routing for abo-glumbo website
    if (projectTitle === t('work.projects.aboglumbo.title') && projectCategory === 'website') {
      router.push(`/works/abo-glumbo-web?category=${activeCategory}`);
      return;
    }
      // Special routing for khbrahweb website
      if (projectTitle === t('work.projects.khbrahweb.title') && projectCategory === 'website') {
        router.push(`/works/khbrah-web?category=${activeCategory}`);
        return;
      }
      // Special routing for usraweb website
      if (projectTitle === t('work.projects.usraweb.title') && projectCategory === 'website') {
        router.push(`/works/usra-web?category=${activeCategory}`);
        return;
      }
      // Special routing for usrapp (Usra App)
      if (projectTitle === t('work.projects.usrapp.title') && projectCategory === 'app') {
        router.push(`/works/usra-app?category=${activeCategory}`);
        return;
      }
   
    const folderName = routeMap[projectTitle] || projectTitle.toLowerCase().replace(/\s+/g, '-');
    const route = `/works/${folderName}?category=${activeCategory}`;
    router.push(route);
  };

  // Sample project data for all categories
  const allProjects: Project[] = [
    // Website Development Projects
    {
      id: 1,
      title: t('work.projects.cyberseed.title'),
      description: t('work.projects.cyberseed.description'),
      image: "/images/Web-development/cyberceed-background.jpg",
      category: "website",
    },
    {
      id: 2,
      title: t('work.projects.scitor.title'),
      description: t('work.projects.scitor.description'),
      image: "/images/Web-development/scitor-background.jpg",
      category: "website",
    },
    {
      id: 3,
      title: t('work.projects.zayior.title'),
      description: t('work.projects.zayior.description'),
      image: "/images/Web-development/zayior-background.jpg",
      category: "website",
    },
    {
      id: 4,
      title: t('work.projects.teamae.title'),
      description: t('work.projects.teamae.description'),
      image: "/images/Web-development/teamae-bg.jpg",
      category: "website",
    },
     {
      id: 5,
      title: t('work.projects.aesschool.title'),
      description: t('work.projects.aesschool.description'),
      image: "/images/Web-development/aes-school.jpg",
      category: "website",
    },
    {
      id: 6,
      title: t('work.projects.gamegate.title'),
      description: t('work.projects.gamegate.description'),
      image: "/images/Web-development/gamegate-3.jpg",
      category: "website",
    },
     {
      id: 7,
      title: t('work.projects.khbrahweb.title'),
      description: t('work.projects.khbrahweb.description'),
      image: "/images/Web-development/khbrah-1.jpg",
      category: "website",
    },
     {
      id: 8,
      title: t('work.projects.tenderoutes.title'),
      description: t('work.projects.tenderoutes.description'),
      image: "/images/Web-development/tenderoutes.jpg",
      category: "website",
    },
    {
      id: 9,
      title: t('work.projects.galaxy.title'),
      description: t('work.projects.galaxy.description'),
      image: "/images/Web-development/galaxy-5.jpg",
      category: "website",
    },
   
    {
      id: 10,
      title: t('work.projects.genchi.title'),
      description: t('work.projects.genchi.description'),
      image: "/images/Web-development/genchi-3.png",
      category: "website",
    },
 
     {
      id: 11,
      title: t('work.projects.mikara.title'),
      description: t('work.projects.mikara.description'),
      image: "/images/Web-development/MIKARA-.jpg",
      category: "website",
    },
 
    {
      id: 12,
      title: t('work.projects.algharafa.title'),
      description: t('work.projects.algharafa.description'),
      image: "/images/Web-development/algh-4.jpg",
      category: "website",
    },
    {
      id: 13,
      title: t('work.projects.aboglumbo.title'),
      description: t('work.projects.aboglumbo.description'),
      image: "/images/Web-development/abu-glumbo-banner.jpg",
      category: "website",
    },
    {
      id: 14,
      title: t('work.projects.shetalksweb.title'),
      description: t('work.projects.shetalksweb.description'),
      image: "/images/Web-development/shetalks-banner.jpg",
      category: "website",
    },
     {
      id: 15,
      title: t('work.projects.usraweb.title'),
      description: t('work.projects.usraweb.description'),
      image: "/images/Web-development/usraweb-1.jpg",
      category: "website",
    },


    // App Development Projects
    {
      id: 1,
      title: t('work.projects.aboglumbo.title'),
      description: t('work.projects.aboglumbo.description'),
      image: "/images/app-development/abo-glumbo-banner.jpg",
      category: "app",
    },
    {
      id: 2,
      title: t('work.projects.handyman.title'),
      description: t('work.projects.handyman.description'),
      image: "/images/app-development/handyman-banner.jpg",
      category: "app",
    },
    {
      id: 3,
      title: t('work.projects.mrcars.title'),
      description: t('work.projects.mrcars.description'),
      image: "/images/app-development/Mr-Cars-2.jpg",
      category: "app",
    },
    {
      id: 4,
      title: t('work.projects.saver.title'),
      description: t('work.projects.saver.description'),
      image: "/images/Web-development/saver-2.jpg",
      category: "app",
    },
    {
      id: 5,
      title: t('work.projects.shetalks.title'),
      description: t('work.projects.shetalks.description'),
      image: "/images/app-development/shetalks-extended.jpg",
      category: "app",
    },
    {
      id: 6,
      title: t('work.projects.khbrah.title'),
      description: t('work.projects.khbrah.description'),
      image: "/images/app-development/khbra-one.jpg",
      category: "app",
    },
      {
      id: 7,
      title: t('work.projects.usrapp.title'),
      description: t('work.projects.usrapp.description'),
      image: "/images/Web-development/usra-1.jpg",
      category: "app",
    },
   

    // Branding Projects
    {
      id: 201,
      title: t('work.projects.silhouettes.title'),
      description: t('work.projects.silhouettes.description'),
      image: "/images/Branding/sihouettes.png",
      category: "branding",
    },
    {
      id: 202,
      title: t('work.projects.biriyani.title'),
      description: t('work.projects.biriyani.description'),
      image: "/images/Branding/bandb.png",
      category: "branding",
    },
    {
      id: 203,
      title: t('work.projects.teamae.branding.title'),
      description: t('work.projects.teamae.branding.description'),
      image: "/team-ae/four.png",
      category: "branding",
    },
    {
      id: 204,
      title: t('work.projects.matrix.title'),
      description: t('work.projects.matrix.description'),
      image: "/images/Branding/matrix-microns.png",
      category: "branding",
    },
    {
      id: 205,
      title: t('work.projects.cyberseed.branding.title'),
      description: t('work.projects.cyberseed.branding.description'),
      image: "/images/Branding/cyberceed.jpg",
      category: "branding",
    },
    {
      id: 206,
      title: t('work.projects.financeva.title'),
      description: t('work.projects.financeva.description'),
      image: "/images/Branding/FINANCEVA.jpg",
      category: "branding",
    },
    {
      id: 207,
      title: t('work.projects.indoarab.title'),
      description: t('work.projects.indoarab.description'),
      image: "/images/Branding/INDO.jpg",
      category: "branding",
    },
    {
      id: 208,
      title: t('work.projects.mpbg.title'),
      description: t('work.projects.mpbg.description'),
      image: "/images/Branding/MPB.jpg",
      category: "branding",
    },
    {
      id: 209,
      title: t('work.projects.shetalks.title'),
      description: t('work.projects.shetalks.description'),
      image: "/images/Branding/SHETALKS.jpg",
      category: "branding",
    },
    // {
    //   id: 210,
    //   title: t('work.projects.aes.branding.title'),
    //   description: t('work.projects.aes.branding.description'),
    //   image: "/images/Branding/aes-school.png",
    //   category: "branding",
    // },
    {
      id: 211,
      title: t('work.projects.manever.title'),
      description: t('work.projects.manever.description'),
      image: "/manaver/one.png",
      category: "branding",
    },
    {
      id: 212,
      title: t('work.projects.moonwhite.title'),
      description: t('work.projects.moonwhite.description'),
      image: "/moonwhite/five.png",
      category: "branding",
    },
    

    

    // Social Media Projects
    {
      id: 401,
      title: t('work.projects.aes.digital.title'),
      description: t('work.projects.aes.digital.description'),
      image: "/images/Digital-Marketing/aes-min.jpg",
      category: "social",
    },
    {
      id: 402,
      title: t('work.projects.chefpillai.title'),
      description: t('work.projects.chefpillai.description'),
      image: "/images/Digital-Marketing/chef-pillai.jpg",
      category: "social",
    },
    {
      id: 403,
      title: t('work.projects.dubai.title'),
      description: t('work.projects.dubai.description'),
      image: "/images/Digital-Marketing/dubai-min.jpg",
      category: "social",
    },
    {
      id: 404,
      title: t('work.projects.galaxon.title'),
      description: t('work.projects.galaxon.description'),
      image: "/images/Digital-Marketing/galaxy-min.jpg",
      category: "social",
    },
    {
      id: 405,
      title: t('work.projects.greensdoor.title'),
      description: t('work.projects.greensdoor.description'),
      image: "/images/Digital-Marketing/greensdoor-min.jpg",
      category: "social",
    },
    {
      id: 406,
      title: t('work.projects.indoarab.title'),
      description: t('work.projects.indoarab.description'),
      image: "/images/Digital-Marketing/indo-min.jpg",
      category: "social",
    },
     {
      id: 407,
      title: t('work.projects.tenderoutes.title'),
      description: t('work.projects.tenderoutes.description'),
      image: "/images/Digital-Marketing/tenderoutes-min.jpg",
      category: "social",
    },
    {
      id: 408,
      title: t('work.projects.ventes.title'),
      description: t('work.projects.ventes.description'),
      image: "/images/Digital-Marketing/ventes-min.jpg",
      category: "social",
    },
    {
      id: 409,
      title: t('work.projects.weonlywheels.title'),
      description: t('work.projects.weonlywheels.description'),
      image: "/images/Digital-Marketing/we-only-wheels.jpg",
      category: "social",
    },
      {
      id: 410,
      title: t('work.projects.babaganoush.title'),
      description: t('work.projects.babaganoush.description'),
      image: "/images/Digital-Marketing/baba-ganoush.jpg",
      category: "social",
    },
  ]

  // Filter projects by active category
  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter((project) => project.category === activeCategory)
  
  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Category labels and counts
  const categories = [
    { id: "all", label: t('works.categories.all') || 'All', count: allProjects.length },
    { id: "website", label: t('works.categories.website'), count: allProjects.filter((p) => p.category === "website").length },
    { id: "app", label: t('works.categories.app'), count: allProjects.filter((p) => p.category === "app").length },
    { id: "branding", label: t('works.categories.branding'), count: allProjects.filter((p) => p.category === "branding").length },
    { id: "social", label: t('works.categories.social'), count: allProjects.filter((p) => p.category === "social").length },
  ]

  // Helper for pagination range with ellipsis
  function getPaginationRange(current: number, total: number): (number | string)[] {
    const delta = 2;
    const range: (number | string)[] = [];
    for (let i = Math.max(1, current - delta); i <= Math.min(total, current + delta); i++) {
      range.push(i);
    }
    // Check first element for ellipsis logic
    if (typeof range[0] === 'number' && (range[0] as number) > 2) {
      range.unshift('...');
      range.unshift(1);
    } else if (typeof range[0] === 'number' && (range[0] as number) === 2) {
      range.unshift(1);
    }
    // Check last element for ellipsis logic
    if (typeof range[range.length - 1] === 'number' && (range[range.length - 1] as number) < total - 1) {
      range.push('...');
      range.push(total);
    } else if (typeof range[range.length - 1] === 'number' && (range[range.length - 1] as number) === total - 1) {
      range.push(total);
    }
    return range;
  }

  return (
    <main ref={sectionRef} className={`container mx-auto px-4 py-10 md:py-20 w-full h-auto md:px-16 lg:px-32 font-poppins work-content ${language === 'ar' ? 'text-right' : ''}`}>
      {/* Navigation - Responsive with horizontal scrolling on mobile */}
      <nav className="w-full mb-6 md:mb-12">
        <div className="flex flex-wrap  justify-center gap-3 md:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id as Category)}
              className={`px-3 md:px-7 py-2 md:py-3 cursor-pointer rounded-full text-[12px] md:text-sm whitespace-nowrap border border-gray-300 transition-colors ${
                activeCategory === category.id ? "bg-black text-white" : "text-black hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Section Title with Count */}
      <div className="mb-8 md:mb-14">
        <h1 className="text-[25px] md:text-[48px] font-medium inline-flex items-start">
          {categories.find((c) => c.id === activeCategory)?.label}
         
        </h1>
      </div>

      {/* Projects Grid - Strict 3x3 layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {isLoading ? (
          // Loading skeleton - 9 items for 3x3 grid
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-[200px] md:h-[250px] mb-4"></div>
              <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 w-full"></div>
            </div>
          ))
        ) : (
          paginatedProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card sm:mb-4 border border-gray-200 cursor-pointer"
              onClick={() => handleProjectClick(project.title, project.category)}
            >
              <div 
                className="mb-3 md:mb-4 overflow-hidden relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-[200px] md:h-[250px] hover:scale-105 transition-transform duration-300 object-cover"
                  loading="lazy"
               
                  quality={60}
                />
                {hoveredProjectId === project.id && (
                  <div 
                    className="absolute pointer-events-none transition-transform duration-100 ease-out"
                    style={{
                      left: mousePosition.x,
                      top: mousePosition.y,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="flex items-center justify-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md bg-white/20">
                      <span className={`text-white text-xs md:text-sm font-light`}>View</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-3 md:px-4 pb-4 md:pb-5">
                <h3 className={`text-base md:text-lg lg:text-[24px] font-medium`}>{project.title}</h3>
                <p className={`text-xs md:text-sm text-gray-600`}>{project.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {!isLoading && totalPages > 1 && (
        <div className="flex justify-center items-center mt-8">
          <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white ">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#120E43] hover:bg-[#000000]'}`}
            >
              <span className="text-lg">&#60;</span>  
            </button>
            {getPaginationRange(currentPage, totalPages).map((page, idx) =>
              typeof page === 'number' ? (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-base font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-[#000000] text-white shadow'
                      : 'bg-indigo-50 text-[#120E43] hover:bg-indigo-100'
                  }`}
                  style={{ minWidth: 32 }}
                >
                  {page}
                </button>
              ) : (
                <span key={"ellipsis-" + idx} className="px-2 text-gray-400 select-none">...</span>
              )
            )}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50'}`}
            >
              <span className="text-lg">&#62;</span>
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
