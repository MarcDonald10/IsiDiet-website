"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollReveal({ children, delay = 0, direction = "up" }: ScrollRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const directionVariants = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  }

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction].initial}
      animate={inView ? directionVariants[direction].animate : directionVariants[direction].initial}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
