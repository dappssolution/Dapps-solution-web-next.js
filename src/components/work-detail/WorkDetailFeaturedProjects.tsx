"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function WorkDetailFeaturedProjects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Intranet Portal",
      image: "http://wallpapercave.com/wp/OsshDMo.jpg",
      delay: 0,
      link: "/projects/intranet-portal",
    },
    {
      id: 2,
      title: "Document Management System",
      image: "https://cdnb.artstation.com/p/assets/images/images/041/576/171/large/3d-pro-club-a540d7126542929-612f83f928d25.jpg?1632102481",
      delay: 100,
      link: "/projects/document-management-system",
    },
    {
      id: 3,
      title: "Performance Management System",
      image: "https://mma.prnewswire.com/media/2041787/PEPSI_Multipack.jpg?p=facebook",
      delay: 200,
      link: "/projects/performance-management-system",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="w-full px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <div
          className={`mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Our featured projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className={`group flex flex-col transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${project.delay}ms` : "0ms",
              }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
