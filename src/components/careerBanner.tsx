"use client"

import CareerHero from "./career/CareerHero"
import FullDepartmentSection from "./career/FullDepartmentSection"


export default function CareerSection() {
  return (
    <div dir="ltr">
      <CareerHero />
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-medium mb-16">Job Openings</h2>
          <div className="space-y-6">
            <FullDepartmentSection
              title="Operations & Research (1)"
              jobs={[
                { 
                  title: "Operations & Research Coordinator",
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
            <FullDepartmentSection
              title="Digital Marketing (1)"
              jobs={[
                {
                  title: "SEO Expert",
                  description: `We are looking for a passionate SEO Expert to join our digital marketing team. You will:

• Develop and implement effective SEO strategies
• Conduct keyword research and competitor analysis
• Optimize website content and structure for search engines
• Monitor, analyze, and report on SEO performance
• Stay up-to-date with the latest SEO trends and best practices
• Collaborate with content creators and web developers to achieve SEO goals

What You Bring:
• Deep understanding of search engine algorithms and ranking methods
• Strong analytical and problem-solving skills
• Familiarity with SEO tools such as Google Analytics, Search Console, SEMrush, or Ahrefs
• Excellent written and verbal communication skills
• Ability to work independently and as part of a team`
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
