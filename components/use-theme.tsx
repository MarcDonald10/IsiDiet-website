"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemedTheme() {
  const theme = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return { theme: "light", toggleTheme: () => {}, mounted: false }
  }

  return {
    theme: theme.theme || "light",
    toggleTheme: () => theme.setTheme(theme.theme === "dark" ? "light" : "dark"),
    mounted: true,
  }
}
