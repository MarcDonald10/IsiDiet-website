"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card3D } from "@/components/3d-card"

export default function Pricing() {
  const { ref: pricingRef, inView: pricingInView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const plans = [
    {
      name: "Gratuit",
      description: "Pour tester la plateforme",
      price: "0",
      period: "/mois",
      features: [
        { name: "Accès basique", included: true },
        { name: "1 patient", included: true },
        { name: "Conseils automatiques limités", included: true },
        { name: "Master classes", included: false },
        { name: "Analytics avancées", included: false },
        { name: "Support prioritaire", included: false },
      ],
      cta: "Commencer gratuitement",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "Pour diététiciens actifs",
      price: "99",
      period: "/mois",
      features: [
        { name: "Accès complet", included: true },
        { name: "Patients illimités", included: true },
        { name: "Tous les conseils automatiques", included: true },
        { name: "Master classes illimitées", included: true },
        { name: "Analytics avancées", included: true },
        { name: "Support par email", included: true },
      ],
      cta: "Commencer 14 jours gratuits",
      highlighted: true,
    },
    {
      name: "Premium",
      description: "Pour cabinets et institutions",
      price: "299",
      period: "/mois",
      features: [
        { name: "Tout du plan Pro", included: true },
        { name: "Équipe illimitée", included: true },
        { name: "API personnalisée", included: true },
        { name: "Analytics premium & exports", included: true },
        { name: "Intégration Mobile Money", included: true },
        { name: "Support prioritaire 24/7", included: true },
      ],
      cta: "Contacter les ventes",
      highlighted: false,
    },
  ]

  const faqs = [
    {
      question: "Puis-je changer de plan à tout moment ?",
      answer:
        "Oui, vous pouvez mettre à jour ou rétrograder votre plan à tout moment. Les modifications prennent effet au prochain cycle de facturation.",
    },
    {
      question: "Comment fonctionne le Mobile Money ?",
      answer:
        "Le plan Premium inclut l'intégration Mobile Money (Orange Money, MTN Mobile Money, etc.) pour les paiements de consultation.",
    },
    {
      question: "Y a-t-il une période d'essai ?",
      answer: "Oui, vous avez 14 jours d'essai gratuit pour les plans Pro et Premium, sans besoin de carte bancaire.",
    },
    {
      question: "Quelle est votre politique de remboursement ?",
      answer: "Nous offrons une garantie satisfaction 30 jours. Si vous n'êtes pas satisfait, nous remboursons 100%.",
    },
  ]

  const roiTips = [
    {
      title: "Augmentez votre patientèle de 30%",
      description: "Les master classes et l'éducation augmentent la crédibilité et attirent plus de patients.",
    },
    {
      title: "Économisez 15 heures par semaine",
      description: "L'IA automatise la génération de plans, vous laissant plus de temps pour vos patients.",
    },
    {
      title: "Multipliez vos revenus par 2-3x",
      description:
        "Avec les consultations Mobile Money et les plans illimités, vos revenus potentiels augmentent significativement.",
    },
  ]

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section - improved responsive text and spacing */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-pretty leading-tight">
              Tarifs Simples et Transparents
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Choisissez le plan qui correspond à vos besoins. Pas de frais cachés, annulation facile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section - responsive grid and card sizing */}
      <section ref={pricingRef} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-accent-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <Card3D key={plan.name} delay={index * 0.15}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                    plan.highlighted
                      ? "ring-2 ring-primary shadow-2xl md:scale-105 bg-white"
                      : "border border-gray-200 hover:shadow-lg bg-white"
                  }`}
                >
                  {/* Badge for Pro plan */}
                  {plan.highlighted && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute top-0 right-0 bg-primary text-white px-2 sm:px-3 md:px-4 py-1 text-xs font-bold rounded-bl-lg shadow-lg"
                    >
                      RECOMMANDÉ
                    </motion.div>
                  )}

                  {/* Content */}
                  <div className="relative p-4 sm:p-5 md:p-8 flex flex-col h-full">
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">
                        {plan.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-xs sm:text-sm text-gray-600">{plan.period}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mb-4 sm:mb-6 md:mb-8"
                    >
                      <Button
                        className={`w-full h-10 sm:h-11 md:h-12 rounded-lg font-semibold shadow-lg border-0 text-xs sm:text-sm md:text-base ${
                          plan.highlighted
                            ? "bg-primary hover:bg-primary-light text-white"
                            : "bg-white hover:bg-accent-mint text-primary border border-primary"
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </motion.div>

                    {/* Features List */}
                    <div className="space-y-2 sm:space-y-3 flex-1">
                      {plan.features.map((feature, idx) => (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          {feature.included ? (
                            <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                          ) : (
                            <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-300" />
                          )}
                          <span
                            className={`text-xs sm:text-sm ${feature.included ? "text-gray-900" : "text-gray-600"}`}
                          >
                            {feature.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section - responsive card grid and spacing */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 text-pretty"
          >
            ROI: Pourquoi IsiDiet ?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {roiTips.map((tip, index) => (
              <Card3D key={tip.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-accent-mint p-4 sm:p-6 md:p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
                >
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{tip.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{tip.description}</p>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - improved responsive FAQ cards */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-accent-cream">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 text-pretty"
          >
            Questions sur la Facturation
          </motion.h2>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{faq.question}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - responsive button layout */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pretty">
              Prêt à transformer votre pratique ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Rejoignez les diététiciens qui augmentent leur patientèle et leurs revenus avec IsiDiet
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white hover:bg-gray-100 text-primary text-xs sm:text-sm md:text-base lg:text-lg h-10 sm:h-11 md:h-12 md:h-13 px-4 sm:px-6 md:px-8 rounded-lg font-semibold shadow-lg border-0 w-full sm:w-auto">
                  Commencer 14 jours gratuits
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white text-xs sm:text-sm md:text-base lg:text-lg h-10 sm:h-11 md:h-12 md:h-13 px-4 sm:px-6 md:px-8 rounded-lg font-semibold transition-all w-full sm:w-auto"
                  variant="outline"
                >
                  Parler avec un expert
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
