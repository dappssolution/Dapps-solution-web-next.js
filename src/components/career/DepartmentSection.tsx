"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import FullDepartmentSection from "./FullDepartmentSection"

interface DepartmentSectionProps {
  title: string
}

export default function DepartmentSection({ title }: DepartmentSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 border-b border-gray-200 cursor-pointer transition-colors"
      >
        <h3 className="text-xl font-medium">{title}</h3>
        <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="py-6 px-4 space-y-4 bg-gray-50">
          <FullDepartmentSection
            title="Frontend Development (1)"
            jobs={[
              {
                title: "React & Next.js Developer",
                experience: "3+ Years of experience",
                description: `We’re looking for a passionate React & Next.js Developer to build high-performance web applications and contribute to our growing team.

Responsibilities:
• Develop dynamic and responsive user interfaces using React and Next.js  
• Optimize performance and ensure SEO-friendly builds  
• Integrate REST and GraphQL APIs  
• Collaborate with designers and backend developers for smooth integrations  
• Maintain clean, reusable, and efficient code  

Requirements:
• Strong proficiency in React, Next.js, TypeScript, and Tailwind CSS  
• Experience with server-side rendering (SSR) and static site generation (SSG)  
• Understanding of Git workflows and modern CI/CD practices  
• Knowledge of modern frontend tools (Webpack, Vercel, etc.)  
• Attention to detail and performance optimization`
              }
            ]}
            defaultOpen={true}
          />

          <FullDepartmentSection
            title="Backend Development (1)"
            jobs={[
              {
                title: "Backend Developer",
                experience: "3+ Years of experience",
                description: `We’re seeking a skilled Backend Developer to architect, develop, and optimize robust server-side solutions for modern applications.

Responsibilities:
• Design and build scalable APIs and backend systems  
• Work closely with frontend teams to define data structures and API requirements  
• Implement secure authentication and authorization systems  
• Optimize database queries and application performance  
• Maintain documentation and ensure high code quality  

Requirements:
• Strong experience with Node.js, Express, or NestJS  
• Good knowledge of databases (MongoDB, PostgreSQL, or MySQL)  
• Familiarity with cloud services (AWS, Vercel, or Firebase)  
• Understanding of RESTful APIs and GraphQL  
• Experience with Git and deployment pipelines`
              }
            ]}
          />
        </div>
      )}
    </div>
  )
}
