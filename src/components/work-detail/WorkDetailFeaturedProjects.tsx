"use client"

import { useEffect, useState } from "react"
import Image from "next/image";
import Link from "next/link"


export interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

interface WorkDetailFeaturedProjectsProps {
  projects: FeaturedProject[];
  heading: string;
}

export default function WorkDetailFeaturedProjects({ projects, heading }: WorkDetailFeaturedProjectsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            {heading}
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={project.link}
              className={`group flex flex-col transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${project.delay || 0}ms` : "0ms",
              }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={idx === 0}
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
  );
}
