"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

interface Job {
  title: string
  experience?: string
  description?: string
}

interface FullDepartmentSectionProps {
  title: string
  jobs: Job[]
  defaultOpen?: boolean
}

export default function FullDepartmentSection({
  title,
  jobs,
  defaultOpen = false,
}: FullDepartmentSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-lg  border border-gray-200 overflow-hidden transition-all duration-300 cursor-pointer">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200 group"
      >
        <h3 className="text-xl font-medium group-hover:text-gray-900 transition-colors">{title}</h3>
        <ChevronDown
          className={`h-6 w-6 transition-all duration-300 group-hover:text-gray-900 ${
            isOpen ? "rotate-180 text-gray-900" : "text-gray-600"
          }`}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden relative`}
      >
        <div className="px-6 pb-6 space-y-1">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between py-4 border-b border-gray-100 last:border-0 group hover:bg-gray-50 transition-all duration-200 rounded-lg px-2 sm:px-4 -mx-2 sm:-mx-4"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? `slideInUp 0.6s ease-out forwards` : "none",
              }}
            >
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-base sm:text-lg group-hover:text-gray-900 transition-colors break-words">{job.title}</h4>
                {job.description && job.description.includes('•') ? (
                  <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                    {job.description.split('•').filter(Boolean).map((point, i) => (
                      <li key={i} className="mb-1 whitespace-pre-line break-words">{point.trim()}</li>
                    ))}
                  </ul>
                ) : job.description ? (
                  <div className="mt-2 text-sm text-gray-600 whitespace-pre-line break-words">{job.description}</div>
                ) : null}
                {/* Apply now button for mobile, always below description, always visible */}
                <div className="block md:hidden mt-4 w-full">
                  <a
                    href={`mailto:info@brandbik.com?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="w-full justify-center text-white bg-black hover:bg-gray-900 flex items-center group/apply transition-all duration-200 px-4 py-3 rounded-lg text-center font-medium text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2 font-medium">Apply now</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/apply:translate-x-1 text-white" />
                  </a>
                </div>
              </div>
              {/* Desktop button, right aligned */}
              <div className="hidden md:flex md:mt-0 md:ml-6 flex-shrink-0 w-full md:w-auto">
                <a
                  href={`mailto:info@brandbik.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="w-full md:w-auto justify-center text-gray-600 hover:text-black flex items-center group/apply transition-all duration-200 hover:bg-black hover:text-white px-4 py-2 rounded-md border border-gray-300 md:border-0 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2 font-medium">Apply now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/apply:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 