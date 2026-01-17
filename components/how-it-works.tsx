"use client"

import { motion } from "framer-motion"
import { Upload, Settings, CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Inscription Simple",
      description: "Créez un compte en moins de 5 minutes",
      icon: Upload,
    },
    {
      number: 2,
      title: "Configurez Votre Profil",
      description: "Ajoutez vos spécialités et préférences",
      icon: Settings,
    },
    {
      number: 3,
      title: "Commencez Immédiatement",
      description: "Accédez à tous les outils et features premium",
      icon: CheckCircle,
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Démarrez en 3 Étapes</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Une intégration rapide et facile pour transformer votre pratique
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index}>
                <ScrollReveal delay={index * 0.1}>
                  <motion.div whileHover={{ y: -10 }} className="relative">
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-primary to-primary-light origin-left"
                      />
                    )}

                    <div className="bg-accent-cream p-8 rounded-3xl text-center relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
                      >
                        {step.number}
                      </motion.div>
                      <step.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
