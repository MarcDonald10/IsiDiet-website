"use client"

import { motion } from "framer-motion"
import { ChevronDown, Users, Zap, MessageCircle, BarChart3, Leaf, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BlurBackground } from "@/components/blur-background"
import { useState } from "react"

export default function Features() {
  const [expandedAccordion, setExpandedAccordion] = useState(0)

  const features = [
    {
      id: 0,
      icon: Users,
      title: "Création des Profils",
      description: "Profils détaillés et personnalisés pour chaque patient",
      details: [
        "Âge, sexe, poids, taille",
        "Pathologies : diabète, hypertension, obésité",
        "Objectifs nutritionnels spécifiques",
        "Historique des consultations",
        "Préférences alimentaires et allergies",
      ],
      nutritionTip: "Un bon profil améliore les recommandations de 40%",
      localFoods: ["Plantain riche en potassium", "Manioc faible glycémie", "Ndolé riche en nutriments"],
    },
    {
      id: 1,
      icon: Zap,
      title: "Génération Automatique des Conseils",
      description: "Intelligence artificielle pour des recommandations scientifiques",
      details: [
        "Base de données scientifique complète",
        "Algorithmes basés sur recherches nutrionnelles",
        "Suggestions de menus adaptées",
        "Aliments à privilégier et à éviter",
        "Intégration d'aliments locaux",
      ],
      nutritionTip: "Les conseils automatiques sont 95% conformes aux standards internationaux",
      localFoods: ["Plantain pour l'énergie", "Manioc pour la satiété", "Fruits locaux pour les vitamines"],
    },
    {
      id: 2,
      icon: MessageCircle,
      title: "Messagerie Temps Réel",
      description: "Communication directe entre diététiciens et patients",
      details: [
        "Chat instantané disponible 24/7",
        "Partage de documents et images",
        "Prise de rendez-vous intégrée",
        "Historique complet des conversations",
        "Notifications en temps réel",
      ],
      nutritionTip: "La communication régulière augmente l'adhésion de 60%",
      localFoods: ["Conseils personnalisés", "Support nutritionnel", "Suivi des progrès"],
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Analyse des Données",
      description: "Tableaux de bord et statistiques avancées",
      details: [
        "Tendances de poids et IMC",
        "Graphiques d'efficacité du traitement",
        "Analyse par pathologie",
        "Statistiques de population",
        "Rapports exportables",
      ],
      nutritionTip: "Les données visualisées améliorent la compréhension patient de 75%",
      localFoods: ["Ndolé riche en protéines", "Plantain riche en vitamines", "Manioc nutritif"],
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section - improved responsive spacing and text sizes */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-primary text-white overflow-hidden">
        <BlurBackground />

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
                <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white/70" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold bg-white/15 px-2.5 sm:px-3 md:px-4 py-1 rounded-full">
                Découvrez nos fonctionnalités
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-pretty leading-tight">
              Fonctionnalités IsiDiet
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-2">
              Découvrez tous les outils qui transforment votre pratique diététique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Accordions - improved responsive grid and padding */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent-mint/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isExpanded = expandedAccordion === feature.id
              return (
                <ScrollReveal key={feature.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ boxShadow: "0 20px 40px rgba(107, 142, 111, 0.08)" }}
                    className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 bg-white"
                  >
                    {/* Accordion Header - responsive padding and text sizes */}
                    <button
                      onClick={() => setExpandedAccordion(isExpanded ? -1 : feature.id)}
                      className="w-full p-3 sm:p-5 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-white hover:bg-gray-50 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md text-white"
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                      </motion.div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0, scale: isExpanded ? 1.2 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 p-2"
                      >
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary font-bold" />
                      </motion.div>
                    </button>

                    {/* Accordion Content - responsive grid layout for mobile */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-5 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-3 sm:pt-4 border-t border-gray-200 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                          {/* Details */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              Caractéristiques principales
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                              {feature.details.map((detail, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 + idx * 0.05 }}
                                  className="flex items-start gap-2 sm:gap-3 group"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1 flex-shrink-0 group-hover:scale-150 transition-transform" />
                                  <span className="text-xs sm:text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors">
                                    {detail}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>

                          {/* Nutrition Tip */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-accent-mint/30 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all"
                          >
                            <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                              <motion.div
                                animate={{ y: [0, 3, 0] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              >
                                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                              </motion.div>
                              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
                                Conseil Nutrition
                              </h4>
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                              {feature.nutritionTip}
                            </p>
                          </motion.div>

                          {/* Local Foods */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-accent-cream/40 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-accent-taupe/20 hover:border-accent-taupe/40 hover:shadow-lg transition-all"
                          >
                            <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent-taupe flex-shrink-0 mt-1" />
                              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
                                Aliments Locaux
                              </h4>
                            </div>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {feature.localFoods.map((food, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 + idx * 0.05 }}
                                  className="text-xs sm:text-sm md:text-base text-gray-700 group hover:text-gray-900 transition-colors"
                                >
                                  ✓ {food}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>

                        {/* Screenshot Placeholder */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                          className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200"
                        >
                          <p className="text-xs text-gray-600 mb-3 sm:mb-4 font-semibold">Aperçu de l'interface</p>
                          <motion.div
                            whileHover={{ boxShadow: "0 20px 40px rgba(107, 142, 111, 0.1)" }}
                            className="bg-accent-mint/20 rounded-lg sm:rounded-xl border-2 border-gray-200 hover:border-primary/30 aspect-video flex items-center justify-center transition-all"
                          >
                            <div className="text-center px-3 sm:px-4">
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary rounded-lg mx-auto mb-2 sm:mb-3 md:mb-4 shadow-md text-white flex items-center justify-center"
                              >
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                              </motion.div>
                              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                                Capture d'écran de {feature.title}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - improved responsive button layout */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary-light text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 border border-white/10 rounded-full pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pretty leading-tight">
              Prêt à exploiter tout le potentiel ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Découvrez comment IsiDiet transforme la pratique nutritionnelle
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button className="bg-white hover:bg-gray-100 text-primary text-sm sm:text-base md:text-lg h-10 sm:h-11 md:h-12 md:h-13 px-4 sm:px-6 md:px-10 rounded-lg font-semibold shadow-md border-0 transition-all">
                Commencer une démo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
