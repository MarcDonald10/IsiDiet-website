"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#4F46E5] via-[#10B981] to-[#4F46E5] z-50 rounded-full"
      style={{
        width: `${scrollProgress}%`,
      }}
      transition={{ duration: 0.1 }}
    />
  )
}
