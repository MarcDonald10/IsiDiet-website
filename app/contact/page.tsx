"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card3D } from "@/components/3d-card"
import { useState } from "react"

export default function Contact() {
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@isidiet.com",
      description: "Réponse en moins de 24h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+237 697 234 567",
      description: "Lundi-Vendredi, 9h-18h (GMT+1)",
    },
    {
      icon: MapPin,
      title: "Localisation",
      details: "Yaoundé, Cameroun",
      description: "Avec représentation en Dakar",
    },
  ]

  const faqs = [
    {
      question: "Combien de temps prend l'onboarding ?",
      answer: "Le processus d'onboarding complet prend environ 2 heures. Nous guidons chaque diététicien pas à pas.",
    },
    {
      question: "Comment sécurisez-vous les données patient ?",
      answer:
        "Nous respectons strictement les standards RGPD et les lois locales. Tous les données sont chiffrées et sécurisées.",
    },
    {
      question: "Intégrez-vous les dossiers existants ?",
      answer:
        "Oui, nous pouvons importer vos données existantes. Notre équipe technique vous accompagne dans la migration.",
    },
    {
      question: "Propose-t-on une formation pour l'équipe ?",
      answer:
        "Oui, formations en ligne gratuites et documentation complète incluses. Support technique prioritaire aussi.",
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section - improved responsive text sizing and spacing */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-primary text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 border border-white/10 rounded-full pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-pretty">
              Nous Sommes Là Pour Vous
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Questions, suggestions ou besoin de support ? Contactez-nous. Nous répondons rapidement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods - responsive card layout and sizing */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-accent-mint/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card3D key={method.title} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md text-white"
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-base sm:text-lg font-semibold text-primary mb-2 line-clamp-1">
                      {method.details}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">{method.description}</p>
                  </motion.div>
                </Card3D>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section - responsive form layout and grid */}
      <section ref={contactRef} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-pretty">
                Envoyez-nous un Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="bg-accent-mint/20 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 space-y-4 sm:space-y-5 md:space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Jean"
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-xs sm:text-sm"
                      required
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Nom</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Mbala"
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-xs sm:text-sm"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jean@example.com"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-xs sm:text-sm"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+237 6XX XXX XXX"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-xs sm:text-sm"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Votre message ici..."
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none transition-all text-xs sm:text-sm"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-primary hover:bg-primary-light text-white h-10 sm:h-11 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md border-0 text-xs sm:text-sm md:text-base">
                    <Send className="w-4 h-4" />
                    Envoyer le Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Map & Message - responsive layout */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 sm:gap-6 md:gap-8"
            >
              {/* Map Placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary rounded-lg sm:rounded-xl overflow-hidden h-48 sm:h-56 md:h-64 flex items-center justify-center text-white shadow-xl"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <MapPin className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2" />
                  </motion.div>
                  <p className="font-semibold text-sm sm:text-base">Yaoundé, Cameroun</p>
                  <p className="text-xs text-white/80">Cliquez pour voir sur la carte</p>
                </div>
              </motion.div>

              {/* Message Box */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">Réponse Rapide</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Notre équipe répond généralement en moins de 2 heures
                    </p>
                  </div>
                </div>

                <div className="bg-accent-mint/40 p-3 sm:p-4 rounded-lg border border-primary/20">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Heures de support : Lundi-Vendredi, 8h-20h (GMT+1). Week-end et jours fériés : réponse le jour
                    ouvrable suivant.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - responsive FAQ cards */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-accent-mint/10 to-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 text-pretty"
          >
            Questions Fréquentes
          </motion.h2>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-primary hover:shadow-lg hover:border-accent-mint transition-all"
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{faq.question}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - responsive button layout */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 border border-white/10 rounded-full pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pretty">Prêt à Commencer ?</h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed px-2">
              Rejoignez les diététiciens qui transforment la nutrition en Afrique
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white hover:bg-gray-100 text-primary text-xs sm:text-sm md:text-base h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 rounded-lg font-semibold shadow-lg border-0">
                S'inscrire maintenant
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
