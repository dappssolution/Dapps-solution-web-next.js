"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { AlertCircle, FileText, Clock, Database, MessageSquare, Shield } from "lucide-react"

interface Challenge {
  id: number
  icon: React.ReactNode
  title: string
  description: string
}

const challenges: Challenge[] = [
  {
    id: 1,
    icon: <AlertCircle className="w-6 h-6" />,
    title: "Errors in Manual Processes",
    description:
      "Manual handling led to inefficiencies and increased errors. Tasks were prone to delays and inaccuracies.",
  },
  {
    id: 2,
    icon: <FileText className="w-6 h-6" />,
    title: "Complexity of Multiple Forms",
    description:
      "Employees navigated through various forms and documents. This complexity often caused confusion and incomplete submissions.",
  },
  {
    id: 3,
    icon: <Clock className="w-6 h-6" />,
    title: "Slow Approval Processes",
    description:
      "Manual tracking and follow-up for approvals caused significant delays in processing onboarding requests.",
  },
  {
    id: 4,
    icon: <Database className="w-6 h-6" />,
    title: "Lack of Centralized Data Management",
    description:
      "There was scattered information across different platforms. This caused difficulty in tracking and managing offboarding tasks.",
  },
  {
    id: 5,
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Communication Inefficiencies",
    description:
      "With the absence of automated notifications and reminders, keeping all parties informed and on schedule became an upheaval task.",
  },
  {
    id: 6,
    icon: <Shield className="w-6 h-6" />,
    title: "Security and Compliance Risks",
    description:
      "Manual processes come with risks to data security. Conforming compliance with regulations and company policies was challenging.",
  },
]

export function ChallengesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = Number.parseInt(entry.target.getAttribute("data-card-id") || "0")
            setVisibleCards((prev) => {
              if (!prev.includes(cardId)) {
                return [...prev, cardId]
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = containerRef.current?.querySelectorAll("[data-card-id]")
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
          {/* Left Column - Title */}
          <div className="flex items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-left-8 duration-700">
              Challenges
            </h1>
          </div>

          {/* Right Column - Description */}
          <div className="flex items-start">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
              The client sought to enhance their employee offboarding process, originally manual and cumbersome with
              multiple stages and forms, resulting in significant delays and poor tracking capabilities. Lack of an
              automated and centralized Employee Exit Management System posed the following challenges:
            </p>
          </div>
        </div>

        {/* Challenge Cards Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.id}
              data-card-id={challenge.id}
              className={`group relative p-6 md:p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-500 cursor-default ${
                visibleCards.includes(challenge.id)
                  ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: visibleCards.includes(challenge.id) ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Icon Container */}
              <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary text-secondary-foreground group-hover:scale-110 transition-transform duration-300">
                {challenge.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {challenge.description}
              </p>

              {/* Hover Border Animation */}
              <div className="absolute inset-0 rounded-lg border border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
