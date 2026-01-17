"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface Card3DProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Card3D({ children, className = "", delay = 0 }: Card3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, rotateX: 5 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`perspective ${className}`}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        whileHover={{
          boxShadow: "0 20px 50px rgba(79, 70, 229, 0.2)",
        }}
        className="transition-shadow duration-300"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
