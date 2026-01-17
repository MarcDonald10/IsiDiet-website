"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function AdvancedContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contactez-nous</h2>
              <p className="text-base sm:text-lg text-slate-600">
                Nous sommes là pour répondre à vos questions et discuter de votre projet
              </p>
            </div>

            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-sage-700 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm md:text-base">Email</p>
                  <a
                    href="mailto:contact@isidiet.com"
                    className="text-sage-700 hover:text-sage-800 text-sm md:text-base"
                  >
                    contact@isidiet.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-sage-700 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm md:text-base">Téléphone</p>
                  <a href="tel:+237123456789" className="text-sage-700 hover:text-sage-800 text-sm md:text-base">
                    +237 (123) 456-789
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sage-700 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm md:text-base">Siège</p>
                  <p className="text-slate-600 text-sm md:text-base">Yaoundé, Cameroun</p>
                </div>
              </motion.div>
            </div>

            {/* Hours */}
            <div className="bg-mint/30 p-4 md:p-6 rounded-xl border border-sage-200">
              <h3 className="font-semibold text-slate-900 mb-3 text-sm md:text-base">Heures d'ouverture</h3>
              <div className="space-y-2 text-xs md:text-sm text-slate-600">
                <p>Lun - Ven: 8h - 18h</p>
                <p>Sam: 9h - 13h</p>
                <p>Dim: Fermé</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 text-center"
              >
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-lg md:text-xl font-bold text-green-900 mb-2">Message envoyé avec succès</h3>
                <p className="text-green-700 text-sm md:text-base">Merci ! Nous vous recontacterons très bientôt.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-cream p-6 md:p-8 rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                    <label className="block text-xs md:text-sm font-semibold text-slate-900 mb-2">Nom</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 md:py-3 border border-sage-200 rounded-lg focus:outline-none focus:border-sage-700 text-sm md:text-base bg-white"
                      placeholder="Votre nom"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <label className="block text-xs md:text-sm font-semibold text-slate-900 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 md:py-3 border border-sage-200 rounded-lg focus:outline-none focus:border-sage-700 text-sm md:text-base bg-white"
                      placeholder="votre@email.com"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <label className="block text-xs md:text-sm font-semibold text-slate-900 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 md:py-3 border border-sage-200 rounded-lg focus:outline-none focus:border-sage-700 text-sm md:text-base bg-white"
                      placeholder="+237 123 456 789"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <label className="block text-xs md:text-sm font-semibold text-slate-900 mb-2">Entreprise</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 md:py-3 border border-sage-200 rounded-lg focus:outline-none focus:border-sage-700 text-sm md:text-base bg-white"
                      placeholder="Votre clinique"
                    />
                  </motion.div>
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <label className="block text-xs md:text-sm font-semibold text-slate-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 md:py-3 border border-sage-200 rounded-lg focus:outline-none focus:border-sage-700 text-sm md:text-base bg-white resize-none"
                    placeholder="Votre message..."
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                  className="w-full bg-sage-700 hover:bg-sage-800 text-white py-3 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                  {!loading && <Send className="w-4 h-4 md:w-5 md:h-5" />}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
