"use client"

import type React from "react"
import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect, useRef, useState } from "react"
import { AlertCircle, FileText, Clock, Database, MessageSquare, Shield } from "lucide-react"


export interface ChallengeText {
  title: string;
  description: string;
}

interface ChallengesSectionProps {
  challenges: ChallengeText[];
  description: string;
}


export function ChallengesSection({ challenges, description }: ChallengesSectionProps) {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

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
      <div className="max-w-8xl px-4 mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
          {/* Left Column - Title */}
          <div className="flex items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-left-8 duration-700">
              {t("workDetailChallenge.title")}
            </h1>
          </div>
          

          {/* Right Column - Description */}
          <div className="flex items-start">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
              {description}
            </p>
          </div>
        </div>

        {/* Challenge Cards Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              data-card-id={index}
              className={`group relative p-6 md:p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-500 cursor-default ${
                visibleCards.includes(index)
                  ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: visibleCards.includes(index) ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Icon Container */}
              <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary text-secondary-foreground group-hover:scale-110 transition-transform duration-300">
                {index === 0 && <AlertCircle className="w-6 h-6" />}
                {index === 1 && <FileText className="w-6 h-6" />}
                {index === 2 && <Clock className="w-6 h-6" />}
                {index === 3 && <Database className="w-6 h-6" />}
                {index === 4 && <MessageSquare className="w-6 h-6" />}
                {index === 5 && <Shield className="w-6 h-6" />}
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
