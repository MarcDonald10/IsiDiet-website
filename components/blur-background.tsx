"use client"

import { motion } from "framer-motion"

export function BlurBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-300/10 to-green-300/10 rounded-full blur-3xl"
      />
    </div>
  )
}
