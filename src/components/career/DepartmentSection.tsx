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
        className="w-full flex items-center justify-between py-6   border-b border-gray-200 cursor-pointer transition-colors"
      >
        <h3 className="text-xl font-medium">{title}</h3>
        <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="py-6 px-4 space-y-4 bg-gray-50">
           <FullDepartmentSection
              title="Operations & Research (1)"
              jobs={[
                { 
                  title: "Operations & Research Coordinator",
                  experience: "2+ Years of experience",
                  description: `Ready to take charge of deadlines, processes, and research? We're looking for a detail-oriented team player to:

• Manage project timelines & deliverables
• Coordinate communication across teams
• Conduct research for course development
• Optimize processes and keep us on track
• Provide regular updates to management

What You Bring:
• Excellent organizational skills
• Strong research & analytical mindset
• Top-notch communication skills
• Experience with project management tools`
                }
              ]}
              defaultOpen={true}
            />

<FullDepartmentSection
              title="Design (1)"
              jobs={[
                { 
                  title: "Senior Graphic Designer",
                  experience: "4+ Years of experience",
                  description: `We're seeking a talented Senior Graphic Designer with video editing expertise to join our creative team. In this role, you'll be responsible for:

• Creating compelling visual designs for digital and print media
• Producing high-quality video content and animations
• Leading design projects from concept to completion
• Collaborating with cross-functional teams
• Maintaining brand consistency across all platforms

Requirements:
• Strong portfolio showcasing both graphic design and video editing work
• Proficiency in Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro)
• Experience with motion graphics and animation
• Excellent time management and project coordination skills
• Ability to work under tight deadlines while maintaining quality`
                }
              ]}
            />
        </div>
      )}
    </div>
  )
} 