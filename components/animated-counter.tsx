"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export function AnimatedCounter({
  value,
  duration = 2.5,
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = value / (duration * 60)
    const interval = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplayValue(value)
        clearInterval(interval)
      } else {
        setDisplayValue(Math.floor(start * Math.pow(10, decimals)) / Math.pow(10, decimals))
      }
    }, 1000 / 60)

    return () => clearInterval(interval)
  }, [isInView, value, duration, decimals])

  return (
    <div ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="font-bold text-4xl"
      >
        {prefix}
        {displayValue.toLocaleString("fr-FR", { maximumFractionDigits: decimals })}
        {suffix}
      </motion.span>
    </div>
  )
}
