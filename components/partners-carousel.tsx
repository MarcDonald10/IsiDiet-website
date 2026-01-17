"use client"

import { motion } from "framer-motion"

export function PartnersCarousel() {
  const partners = [
    { name: "MTN Health", logo: "/mtn-health-logo.jpg" },
    { name: "Orange Care", logo: "/orange-care-logo.jpg" },
    { name: "African Health", logo: "/african-health-logo.jpg" },
    { name: "Wellness Hub", logo: "/wellness-hub-logo.jpg" },
    { name: "Care Africa", logo: "/care-africa-logo.jpg" },
  ]

  return (
    <div className="overflow-hidden bg-white py-12">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...partners, ...partners].map((partner, i) => (
          <div key={i} className="flex items-center gap-3 px-6">
            <img
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
