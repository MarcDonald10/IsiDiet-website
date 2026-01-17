"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Fonctionnalités", href: "/features" },
    { label: "Bilan & Plans", href: "/assessment" },
    { label: "Master Classes", href: "/masterclasses" },
    { label: "Blog", href: "/blog" },
    { label: "Tarifs", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 z-50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-primary dark:bg-violet-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-white"
            >
              <span className="font-bold text-lg">I</span>
            </motion.div>
            <span className="font-bold text-lg text-primary dark:text-violet-400 group-hover:scale-105 transition-transform">
              IsiDiet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <motion.div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <motion.div
                  key={link.label}
                  className={`relative text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-violet-400 transition-colors text-sm font-medium group ${
                    active ? "bg-accent-mint/30 dark:bg-slate-700 text-primary dark:text-violet-400" : ""
                  }`}
                >
                  <Link href={link.href}>
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-2 h-2 rounded-full bg-primary dark:bg-violet-400"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-primary dark:bg-violet-400"
                  />
                </motion.div>
              )
            })}
          </motion.div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-primary dark:border-violet-400 text-primary dark:text-violet-400 hover:bg-accent-mint/20 dark:hover:bg-slate-700 bg-transparent transition-all"
              >
                Connexion
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-primary dark:bg-violet-600 hover:bg-primary-light dark:hover:bg-violet-700 text-white shadow-md hover:shadow-lg transition-all border-0">
                S'inscrire
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-3 border-t border-gray-200/30 dark:border-slate-700/30 pt-4">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <motion.div key={link.label} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className={`block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-violet-400 transition-colors font-medium ${
                      active
                        ? "bg-accent-mint/30 dark:bg-slate-700 text-primary dark:text-violet-400 border-l-4 border-primary dark:border-violet-400"
                        : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                    {active && <span className="ml-auto w-2 h-2 rounded-full bg-primary dark:bg-violet-400" />}
                  </Link>
                </motion.div>
              )
            })}
            <div className="flex gap-2 pt-2 border-t border-gray-200/30 dark:border-slate-700/30">
              <ThemeToggle />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-primary dark:border-violet-400 text-primary dark:text-violet-400 bg-transparent hover:bg-accent-mint/20 dark:hover:bg-slate-700"
                >
                  Connexion
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button className="w-full bg-primary dark:bg-violet-600 text-white hover:bg-primary-light dark:hover:bg-violet-700 border-0">
                  S'inscrire
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
