"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Award, CheckCircle } from "lucide-react"

const badges = [
  { icon: Shield, label: "Conforme RGPD", desc: "Protection des données" },
  { icon: Lock, label: "Chiffrement SSL", desc: "Données sécurisées" },
  { icon: Award, label: "ISO 27001", desc: "Norme internationale" },
  { icon: CheckCircle, label: "HIPAA Ready", desc: "Santé approuvée" },
]

export function SecurityBadges() {
  return (
    <section className="py-12 md:py-16 bg-sage-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">Sécurité & Conformité</h2>
          <p className="text-sm md:text-base text-slate-600">Vos données sont en sécurité avec nous</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-lg border border-sage-100"
            >
              <badge.icon className="w-8 h-8 md:w-10 md:h-10 text-sage-700 mb-2" />
              <p className="text-xs md:text-sm font-semibold text-slate-900 text-center">{badge.label}</p>
              <p className="text-xs text-slate-500 text-center mt-1">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
