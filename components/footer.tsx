"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: "Accueil", href: "/" },
      { label: "Fonctionnalités", href: "/features" },
      { label: "Tarifs", href: "/pricing" },
    ],
    Resources: [
      { label: "Blog", href: "/blog" },
      { label: "Master Classes", href: "/masterclasses" },
      { label: "Guides", href: "/contact" },
    ],
    Legal: [
      { label: "Confidentialité", href: "#" },
      { label: "RGPD", href: "#" },
      { label: "Conditions", href: "#" },
    ],
  }

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold">I</span>
              </motion.div>
              <span className="font-bold text-primary">IsiDiet</span>
            </div>
            <p className="text-sm text-gray-600">
              Gestion nutritionnelle intelligente pour l'Afrique, alimentée par l'IA.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <motion.li key={link.label} whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Icons & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-600 text-sm">Copyright © {currentYear} IsiDiet. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <motion.div key={social.label} whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={social.href}
                    className="text-gray-600 hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
