"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AlertCircle, Apple, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card3D } from "@/components/3d-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"

export default function Assessment() {
  const { ref: workflowRef, inView: workflowInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: mockupRef, inView: mockupInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    condition: "diabetes",
  })

  const workflowSteps = [
    {
      number: 1,
      title: "Collecte des Données",
      description: "Informations du patient : âge, poids, taille, pathologies",
    },
    { number: 2, title: "Analyse IA", description: "L'algorithme traite les données et calcule les besoins" },
    { number: 3, title: "Génération du Bilan", description: "Rapport nutritionnel détaillé et personnalisé" },
    { number: 4, title: "Plan Alimentaire", description: "Menu hebdomadaire adapté et recommandations" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-accent-mint rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-accent-beige rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-pretty leading-tight">
              Bilan Automatisé et Plans Alimentaires
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Générez des rapports nutritionnels personnalisés et des plans hebdomadaires en quelques minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section ref={workflowRef} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 text-pretty">
              Processus en 4 étapes
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {workflowSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={workflowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="bg-primary text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-full flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl font-bold"
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/80">{step.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mockups & Simulation Section */}
      <section ref={mockupRef} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-accent-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left - Simulation Form */}
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={mockupInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-pretty">
                  Simulez un bilan
                </h2>

                <form className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 space-y-4 sm:space-y-6">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Âge</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="35"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                    />
                  </motion.div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Poids (kg)</label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="75"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Taille (cm)</label>
                      <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        placeholder="175"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Condition</label>
                    <select
                      name="condition"
                      value={formData.condition}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                    >
                      <option value="diabetes">Diabète</option>
                      <option value="hypertension">Hypertension</option>
                      <option value="obesity">Obésité</option>
                      <option value="general">Santé générale</option>
                    </select>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-primary hover:bg-primary-light text-white h-10 sm:h-11 md:h-12 rounded-lg font-semibold shadow-lg text-xs sm:text-sm md:text-base flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Générer le bilan
                    </Button>
                  </motion.div>

                  <p className="text-xs text-gray-600 text-center">
                    Cette simulation vous montre comment IsiDiet génère des recommandations
                  </p>
                </form>
              </motion.div>
            </ScrollReveal>

            {/* Right - Mockup Dashboard */}
            <ScrollReveal delay={0.2}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={mockupInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6 }}
              >
                <Card3D>
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div className="bg-primary p-4 sm:p-6 text-white">
                      <h3 className="text-lg sm:text-xl font-bold">Rapport Nutritionnel</h3>
                      <p className="text-xs sm:text-sm text-white/80">Bilan automatisé personnalisé</p>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                      {/* Weight Evolution Chart */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-xs sm:text-sm">
                          Évolution du Poids
                        </h4>
                        <div className="bg-accent-cream rounded-lg p-3 sm:p-4 h-40 sm:h-48 flex items-end justify-between gap-1 sm:gap-2 border border-gray-200">
                          {[65, 72, 68, 75, 70, 69, 67].map((value, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${(value / 80) * 100}%` }}
                              transition={{ delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="flex-1 flex flex-col items-center"
                            >
                              <div className="w-full bg-primary rounded-t"></div>
                              <span className="text-xs text-gray-500 mt-1">W{idx + 1}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Alerts */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 flex gap-3"
                      >
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-yellow-900 text-xs sm:text-sm">
                            Attention : Glycémie élevée
                          </p>
                          <p className="text-xs text-yellow-800">Recommandation : Réduire sucres simples</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sample Meal Plan Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 text-pretty">
              Plan Hebdomadaire pour Diabète
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {["Lundi", "Mardi", "Mercredi"].map((day, idx) => (
              <ScrollReveal key={day} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white border border-primary/20 rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="bg-primary p-4 sm:p-5 text-white">
                    <h3 className="font-bold text-lg sm:text-xl">{day}</h3>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                    {["Petit Déjeuner", "Déjeuner", "Dîner"].map((meal, mealIdx) => (
                      <div key={mealIdx} className="flex items-start gap-2 sm:gap-3">
                        <Apple className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">{meal}</p>
                          <p className="text-xs text-gray-600">Repas équilibré adapté</p>
                        </div>
                      </div>
                    ))}
                    <div className="pt-3 sm:pt-4 border-t border-gray-200">
                      <p className="text-xs sm:text-sm text-gray-600">
                        <span className="font-semibold">Calories:</span> 2200 kcal
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Générez vos Premiers Bilans
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Accédez aux outils d'évaluation complète et plans personnalisés
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white hover:bg-gray-100 text-primary text-xs sm:text-sm md:text-base lg:text-lg h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Essayer Maintenant
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
