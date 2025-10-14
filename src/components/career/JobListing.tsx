"use client"

import { ArrowRight } from "lucide-react"

interface JobListingProps {
  title: string
  location: string
  type: string
}

export default function JobListing({ title, location, type }: JobListingProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0">
      <div>
        <h4 className="font-medium text-lg">{title}</h4>
        <p className="text-gray-600">
          {location} • {type}
        </p>
      </div>
      <button className="text-gray-600 hover:text-black flex items-center group">
        <span className="mr-2">Apply</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  )
} 