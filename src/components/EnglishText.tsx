"use client"

import { ReactNode } from "react"

interface EnglishTextProps {
  children: ReactNode
  className?: string
}

export default function EnglishText({ children, className = "" }: EnglishTextProps) {
  return (
    <span className={`font-english ${className}`}>
      {children}
    </span>
  )
} 