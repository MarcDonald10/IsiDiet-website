"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ComparisonTable() {
  const features = [
    { name: "Gestion patients de base", traditional: false, isidiet: true },
    { name: "Plans nutritionnels personnalisés", traditional: false, isidiet: true },
    { name: "IA recommandations", traditional: false, isidiet: true },
    { name: "Suivi temps réel", traditional: false, isidiet: true },
    { name: "Master classes intégrées", traditional: false, isidiet: true },
    { name: "Support 24/7", traditional: false, isidiet: true },
    { name: "Intégration aliments africains", traditional: false, isidiet: true },
  ]

  return (
    <section className="py-20 lg:py-32 bg-accent-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">IsiDiet vs Approche Traditionnelle</h2>
            <p className="text-lg text-gray-700">Voir comment IsiDiet transforme la gestion nutritionnelle</p>
          </div>
        </ScrollReveal>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left p-4 text-gray-900 font-bold">Fonctionnalité</th>
                <th className="text-center p-4 text-gray-700 font-semibold">Approche Traditionnelle</th>
                <th className="text-center p-4 bg-primary/10 text-primary font-bold rounded-t-lg">IsiDiet</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="p-4 text-gray-900 font-semibold">{feature.name}</td>
                  <td className="text-center p-4">
                    {feature.traditional ? (
                      <Check className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-400 mx-auto" />
                    )}
                  </td>
                  <td className="text-center p-4 bg-primary/5">
                    <Check className="w-6 h-6 text-primary mx-auto" />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
