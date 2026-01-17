"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface ComparisonSliderProps {
  beforeLabel: string
  afterLabel: string
  beforeImage: string
  afterImage: string
}

export function ComparisonSlider({ beforeLabel, afterLabel, beforeImage, afterImage }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, newPosition)))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <img src={beforeImage || "/placeholder.svg"} alt={beforeLabel} className="w-full h-auto block" />

      <div style={{ width: `${sliderPosition}%` }} className="absolute inset-0 overflow-hidden">
        <img src={afterImage || "/placeholder.svg"} alt={afterLabel} className="w-screen h-auto block" />
      </div>

      <motion.div
        style={{ left: `${sliderPosition}%` }}
        className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-[#4F46E5] to-transparent"
      >
        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 bg-[#4F46E5] rounded-full shadow-lg flex items-center justify-center text-white font-bold">
            ⟨⟩
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
        {afterLabel}
      </div>
    </motion.div>
  )
}
