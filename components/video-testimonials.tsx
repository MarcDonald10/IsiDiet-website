"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Dr. Amara Nkosi",
    title: "Nutritionniste, Douala",
    image: "/female-doctor-professional.jpg",
    video: "https://example.com/video1",
    quote: "IsiDiet a transformé ma pratique. Mes patients perdent 5kg par mois en moyenne.",
  },
  {
    name: "Pr. Jean Kouamé",
    title: "Chef de clinique, Abidjan",
    image: "/male-doctor-confident.jpg",
    video: "https://example.com/video2",
    quote: "Plateforme révolutionnaire pour la gestion nutritionnelle en Afrique.",
  },
  {
    name: "Dr. Fatima Hassan",
    title: "Spécialiste endocrinologie, Accra",
    image: "/female-healthcare-specialist.jpg",
    video: "https://example.com/video3",
    quote: "Enfin une solution adaptée au contexte africain avec aliments locaux.",
  },
]

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Témoignages Vidéo</h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Écoutez ce que disent les professionnels de santé africains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="relative mb-4 group cursor-pointer">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  onClick={() => setActiveVideo(i)}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl"
                >
                  <Play className="w-16 h-16 text-white fill-white" />
                </motion.div>
              </div>

              <div className="flex-1 bg-mint/30 p-4 md:p-6 rounded-xl">
                <p className="text-sm md:text-base text-slate-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-sm md:text-base font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs md:text-sm text-slate-600">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
