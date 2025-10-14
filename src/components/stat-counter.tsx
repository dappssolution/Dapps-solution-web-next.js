"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface StatCounterProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

export default function StatCounter({ end, suffix = "", duration = 2000, className = "" }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(countUp)
      }
    }

    animationFrame = requestAnimationFrame(countUp)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isInView])

  return (
    <div ref={ref} className={className}>
      <span dir="ltr">{count}{suffix}</span>
    </div>
  )
}
