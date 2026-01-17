"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FAQEnhanced() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: "Comment démarre mon intégration avec IsiDiet ?",
      a: "Notre équipe vous guidera dans une intégration rapide de 5 minutes. Créez un compte, configurez votre profil, et vous êtes prêt à servir vos patients.",
    },
    {
      q: "Est-ce compatible avec les aliments locaux africains ?",
      a: "Oui ! IsiDiet a été spécialement développé pour les aliments et les patho locals du Cameroun et de l'Afrique de l'Ouest.",
    },
    {
      q: "Quel est le coût mensuel ?",
      a: "Nous offrons différents plans : Gratuit pour démarrer, Pro pour les professionnels, et Premium avec support VIP. Consultez notre page tarification.",
    },
    {
      q: "Mes données patient sont-elles sécurisées ?",
      a: "Absolument. Nous utilisons le chiffrement de niveau médical et respectons les normes HIPAA et RGPD.",
    },
    {
      q: "Puis-je intégrer IsiDiet avec mon système existant ?",
      a: "Oui, IsiDiet s'intègre avec les principaux systèmes de gestion médicale et dossiers patients électroniques.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-lg text-gray-700">Trouvez les réponses à vos questions</p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-accent-cream transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} className="flex-shrink-0 ml-4">
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-700 border-t border-gray-200">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
