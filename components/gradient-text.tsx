"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function GradientText({ children, className = "", delay = 0 }: GradientTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`bg-gradient-to-r from-[#6A1B9A] via-[#AB47BC] to-[#4CAF50] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </motion.span>
  )
}
