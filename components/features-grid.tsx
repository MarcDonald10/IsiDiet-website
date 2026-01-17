"use client"

import { motion } from "framer-motion"
import { BarChart3, MessageCircle, Users, Zap, Shield, TrendingUp, Clock, Globe } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FeaturesGrid() {
  const features = [
    { icon: BarChart3, title: "Tableaux de Bord Avancés", desc: "Visualisez tous les métriques clés de santé" },
    { icon: MessageCircle, title: "Messagerie IA", desc: "Communication intelligente avec vos patients" },
    { icon: Users, title: "Gestion Communauté", desc: "Créez des groupes d'support et de motivation" },
    { icon: Zap, title: "Automatisation Complète", desc: "Économisez du temps grâce à l'IA" },
    { icon: Shield, title: "Sécurité HIPAA", desc: "Vos données toujours protégées" },
    { icon: TrendingUp, title: "Rapports Analytics", desc: "Résultats détaillés et mesurables" },
    { icon: Clock, title: "Disponibilité 24/7", desc: "Plateforme toujours accessible" },
    { icon: Globe, title: "Multi-langue & Devises", desc: "Supporté en français, anglais, lingala" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-accent-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Fonctionnalités Complètes</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Tout ce qu'un professionnel de santé moderne peut demander
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(107, 142, 111, 0.1)" }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
