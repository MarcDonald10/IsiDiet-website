"use client"

import { motion } from "framer-motion"
import { Zap, Brain, Users, TrendingUp } from "lucide-react"

const roadmapItems = [
  {
    quarter: "Q1 2024",
    title: "IA Nutritionnelle Avancée",
    description: "Algorithme ML pour recommandations personnalisées",
    icon: Brain,
    completed: true,
  },
  {
    quarter: "Q2 2024",
    title: "Mobile App Complète",
    description: "Application native iOS et Android",
    icon: Users,
    completed: true,
  },
  {
    quarter: "Q3 2024",
    title: "Intégration Wearables",
    description: "Connexion avec montres intelligentes",
    icon: Zap,
    completed: false,
  },
  {
    quarter: "Q4 2024",
    title: "Expansion Pan-Africaine",
    description: "Support de 15+ pays africains",
    icon: TrendingUp,
    completed: false,
  },
]

export function RoadmapSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Notre Roadmap</h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez ce qui arrive bientôt sur IsiDiet
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 md:gap-6 mb-6 md:mb-8"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${
                    item.completed ? "bg-sage-700 text-white" : "bg-mint text-sage-700 border-2 border-sage-700"
                  }`}
                >
                  <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                {i < roadmapItems.length - 1 && <div className="w-1 h-12 md:h-16 bg-sage-200 mt-2"></div>}
              </div>

              <div className="pb-6 md:pb-8 flex-1">
                <p className="text-xs md:text-sm font-bold text-sage-700 uppercase tracking-wide">{item.quarter}</p>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-600 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
