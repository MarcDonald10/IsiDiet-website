"use client"

import { Moon, Sun } from "lucide-react"
import { useThemedTheme } from "@/components/use-theme"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useThemedTheme()

  if (!mounted) return null

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-sage-100 dark:bg-slate-700 text-sage-700 dark:text-yellow-400 hover:bg-sage-200 dark:hover:bg-slate-600 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{ duration: 0.3 }}
        key={theme}
      >
        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </motion.div>
    </motion.button>
  )
}
