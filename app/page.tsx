"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Sparkles, Users, TrendingUp, Heart, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { PartnersCarousel } from "@/components/partners-carousel"
import { SuccessStories } from "@/components/success-stories"
import { HowItWorks } from "@/components/how-it-works"
import { ComparisonTable } from "@/components/comparison-table"
import { FeaturesGrid } from "@/components/features-grid"
import { FAQEnhanced } from "@/components/faq-enhanced"
import { IntegrationsSection } from "@/components/integrations-section"
import { HealthCalculator } from "@/components/health-calculator"
import { SecurityBadges } from "@/components/security-badges"
import { VideoTestimonials } from "@/components/video-testimonials"
import { RoadmapSection } from "@/components/roadmap-section"

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Profils Personnalisés",
      description: "Créez des profils détaillés avec historique médical et objectifs",
      color: "bg-accent-mint",
    },
    {
      icon: TrendingUp,
      title: "Conseils Automatiques",
      description: "Recommandations intelligentes basées sur données scientifiques",
      color: "bg-accent-cream",
    },
    {
      icon: Heart,
      title: "Plans Nutritionnels",
      description: "Plans repas adaptés aux pathologies locales",
      color: "bg-accent-beige",
    },
    {
      icon: Zap,
      title: "Messagerie Temps Réel",
      description: "Communication directe entre diététiciens et patients",
      color: "bg-accent-mint",
    },
  ]

  const stats = [
    { label: "Patients Actifs", value: "50K+" },
    { label: "Diététiciens", value: "1.2K" },
    { label: "Succès", value: "95%" },
  ]

  const testimonials = [
    {
      name: "Dr. Amara Nsumba",
      role: "Diététicienne, Douala",
      text: "IsiDiet a transformé ma pratique. Mes patients obtiennent des résultats deux fois plus rapides.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "Marie Assomo",
      role: "Patiente, Yaoundé",
      text: "Enfin une solution adaptée à notre alimentation locale. C'est incroyable !",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Prof. Jean Bah",
      role: "Nutritionniste, Cameroun",
      text: "L'IA comprend vraiment les spécificités de notre population. Révolutionnaire !",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
  ]

  return (
    <div className="bg-accent-cream min-h-screen">
      {/* Hero Section - Optimized for all screen sizes */}
      <section className="relative min-h-screen pt-28 pb-12 sm:pt-32 sm:pb-16 md:pb-20 lg:pt-40 flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-accent-mint rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-accent-beige rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-gray-800 space-y-4 sm:space-y-6 md:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="flex items-center gap-2 bg-accent-mint px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full border border-gray-300 text-xs sm:text-sm"
                  >
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary" />
                    <span className="font-semibold text-gray-700">Révolution nutritionnelle</span>
                  </motion.div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-balance text-gray-900">
                  Révolutionnez votre pratique diététique avec l'IA nutritionnelle
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl"
              >
                Profils personnalisés, conseils automatiques, plans alimentaires adaptés, master classes et suivi
                patient en temps réel. Tout ce dont vous avez besoin pour transformer votre pratique nutritionnelle.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2 md:pt-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/features" className="block">
                    <Button className="bg-primary hover:bg-primary-light text-white text-sm sm:text-base md:text-lg h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 rounded-lg font-semibold shadow-md w-full sm:w-auto border-0 transition-all">
                      Découvrir
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/contact" className="block">
                    <Button className="bg-white hover:bg-gray-50 text-primary text-sm sm:text-base md:text-lg h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 rounded-lg font-semibold shadow-md border border-gray-300 w-full sm:w-auto transition-all">
                      Contact
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Mock App */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative w-48 sm:w-56 md:w-64 h-72 sm:h-80 md:h-96 bg-white rounded-3xl shadow-2xl p-2 sm:p-3 border-6 sm:border-8 border-gray-800 overflow-hidden">
                <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary rounded-full"
                  />
                  <p className="text-gray-800 font-bold text-xs sm:text-sm">Patient Dashboard</p>
                  <p className="text-xs text-gray-600">Suivi nutritionnel</p>
                  <div className="w-full space-y-2 pt-1 sm:pt-2">
                    <motion.div
                      animate={{ width: ["60%", "85%"] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="h-1.5 sm:h-2 bg-primary rounded mx-auto"
                    />
                    <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-3/5 mx-auto" />
                    <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-2/3 mx-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Fonctionnalités principales
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto px-2">
                Tout ce dont vous avez besoin pour gérer vos patients efficacement
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(107, 142, 111, 0.08)" }}
                  className="p-4 sm:p-5 md:p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all duration-300 h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center mb-3 md:mb-4 text-white shadow-md"
                  >
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </motion.div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturesGrid />

      <PartnersCarousel />

      {/* Features Section - Using dedicated FeaturesGrid */}
      <HowItWorks />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
                Résultats vérifiés
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto px-2">
                Rejoignez des milliers de professionnels de la santé qui transforment leurs pratiques
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center px-2 sm:px-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SuccessStories />

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Ce que disent nos utilisateurs
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto px-2">
                Des diététiciens et patients qui ont transformé leur vie
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-5 sm:p-6 md:p-8 rounded-2xl bg-accent-cream border border-gray-200 h-full flex flex-col justify-between"
                >
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-xs sm:text-sm md:text-base text-gray-900">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable />

      {/* New Premium Sections */}
      <IntegrationsSection />

      <SecurityBadges />

      <HealthCalculator />

      <VideoTestimonials />

      <RoadmapSection />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-primary-light text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div className="bg-primary/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance leading-tight text-white">
              Prêt à transformer votre pratique ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
              Rejoignez IsiDiet et commencez à offrir des solutions nutritionnelles personnalisées à vos patients dès
              aujourd'hui.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="inline-block">
                <Button className="bg-white hover:bg-gray-100 text-primary text-sm sm:text-base md:text-lg h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 rounded-lg font-semibold shadow-lg border-0 transition-all">
                  Commencer Maintenant
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQEnhanced />
    </div>
  )
}
