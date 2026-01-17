"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export function FloatingElement({ children, delay = 0, duration = 4 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration, delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
