"use client"

import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function StatsAnimated({
  value,
  label,
  suffix = "",
}: { value: number | string; label: string; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || typeof value !== "number") return

    const start = 0
    const end = value
    const duration = 2
    const increment = end / (duration * 60)
    let current = start

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-2">
        {typeof value === "number" ? `${count}${suffix}` : value}
      </div>
      <p className="text-lg text-gray-700">{label}</p>
    </div>
  )
}
