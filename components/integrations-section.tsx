"use client"

import { motion } from "framer-motion"
import { Shield, Send, Database, Zap } from "lucide-react"

const integrations = [
  { name: "WhatsApp", icon: Send, color: "#25D366" },
  { name: "SMS Gateway", icon: Zap, color: "#FF6B6B" },
  { name: "EMR Systems", icon: Database, color: "#4F46E5" },
  { name: "Payment Gateway", icon: Shield, color: "#10B981" },
  { name: "Google Calendar", icon: Zap, color: "#EA4335" },
  { name: "Slack", icon: Send, color: "#36C5F0" },
  { name: "Stripe", icon: Database, color: "#626EE7" },
  { name: "Telegram", icon: Send, color: "#0088CC" },
]

export function IntegrationsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-mint/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Intégrations Puissantes</h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            IsiDiet s'intègre parfaitement avec vos outils préférés
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -4 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-sage-100 hover:shadow-lg transition-shadow"
            >
              <integration.icon className="w-10 h-10 md:w-12 md:h-12 mb-3" style={{ color: integration.color }} />
              <p className="text-sm md:text-base font-semibold text-slate-900 text-center">{integration.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
