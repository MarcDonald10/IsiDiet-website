"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Heart } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function SuccessStories() {
  const stories = [
    {
      title: "Clinique Douala Health",
      metric: "+300%",
      description: "Augmentation des patients traités",
      icon: Users,
      color: "bg-accent-mint",
    },
    {
      title: "Dr. Amara's Practice",
      metric: "2.5x",
      description: "Plus rapide pour atteindre les résultats",
      icon: TrendingUp,
      color: "bg-accent-beige",
    },
    {
      title: "Yaoundé Medical Center",
      metric: "95%",
      description: "Satisfaction patient",
      icon: Heart,
      color: "bg-accent-cream",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-accent-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cas de Succès Réels</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Découvrez comment IsiDiet a transformé les pratiques de nos utilisateurs
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${story.color} p-8 rounded-3xl border-2 border-gray-200`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-6"
                >
                  <story.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-2">{story.metric}</h3>
                <p className="text-gray-900 font-semibold mb-2">{story.title}</p>
                <p className="text-gray-700">{story.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
