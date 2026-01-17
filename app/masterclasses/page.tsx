"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Play, Users, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card3D } from "@/components/3d-card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function MasterClasses() {
  const { ref: coursesRef, inView: coursesInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const courses = [
    {
      id: 1,
      title: "Nutrition Locale contre le Diabète",
      category: "Santé",
      format: "Enregistrée",
      duration: "45 min",
      instructor: "Dr. Marie Nkomo",
      level: "Intermédiaire",
      rating: 4.8,
      students: 234,
      image: "/masterclass-diabetes.jpg",
      description: "Comprendre comment utiliser les aliments locaux pour gérer le diabète efficacement.",
    },
    {
      id: 2,
      title: "Gestion de l'Hypertension par l'Alimentation",
      category: "Santé",
      format: "En Direct",
      duration: "60 min",
      instructor: "Dr. Amara Diop",
      level: "Débutant",
      rating: 4.9,
      students: 456,
      image: "/masterclass-hypertension.jpg",
      description: "Session interactive sur la réduction de la tension artérielle par les aliments.",
    },
    {
      id: 3,
      title: "Plantain et Manioc : Nutrition Complète",
      category: "Nutrition",
      format: "Enregistrée",
      duration: "38 min",
      instructor: "Dr. Jean Mbala",
      level: "Débutant",
      rating: 4.7,
      students: 189,
      image: "/masterclass-local-foods.jpg",
      description: "Découvrez tous les bienfaits nutritionnels des cultures locales africaines.",
    },
    {
      id: 4,
      title: "Obesity Management Workshop",
      category: "Santé",
      format: "Enregistrée",
      duration: "55 min",
      instructor: "Dr. Pierre Mbongo",
      level: "Avancé",
      rating: 4.6,
      students: 312,
      image: "/masterclass-obesity.jpg",
      description: "Stratégies avancées pour la gestion du poids et de l'obésité.",
    },
    {
      id: 5,
      title: "Recettes Équilibrées avec Ndolé",
      category: "Nutrition",
      format: "En Direct",
      duration: "75 min",
      instructor: "Chef Fatima Hassan",
      level: "Débutant",
      rating: 4.9,
      students: 528,
      image: "/masterclass-recipes.jpg",
      description: "Apprenez 10 recettes délicieuses et équilibrées avec le Ndolé.",
    },
    {
      id: 6,
      title: "Nutrition pour Enfants en Afrique",
      category: "Pédiatrie",
      format: "Enregistrée",
      duration: "42 min",
      instructor: "Dr. Aissatou Dia",
      level: "Intermédiaire",
      rating: 4.8,
      students: 267,
      image: "/masterclass-kids.jpg",
      description: "Optimiser la nutrition des enfants avec les ressources locales.",
    },
  ]

  const benefits = [
    {
      title: "Pour Diététiciens",
      items: ["Certification continue", "Expertise accrue", "Meilleure relation clients", "Pratique plus efficace"],
    },
    {
      title: "Pour Patients",
      items: ["Éducation nutritionnelle", "Recettes personnalisées", "Q&A en direct", "Communauté supportive"],
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance leading-tight text-white">
              Master Classes Nutritionnelles
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-2">
              Formations premium pour diététiciens et patients. Apprenez d'experts en nutrition en direct et
              enregistrée.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mt-6 sm:mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white hover:bg-gray-100 text-primary text-xs sm:text-sm md:text-base h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 rounded-lg font-semibold shadow-lg">
                  Explorer les Cours
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-white/20 hover:bg-white/30 text-white h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 rounded-lg font-semibold border border-white/40 backdrop-blur-sm transition-all text-xs sm:text-sm md:text-base lg:text-lg"
                  variant="outline"
                >
                  Voir Calendrier
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section ref={coursesRef} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 text-balance">
              Tous nos Cours
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {courses.map((course, index) => (
              <ScrollReveal key={course.id} delay={index * 0.08}>
                <Card3D delay={index * 0.08}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={coursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300"
                  >
                    {/* Image with Play Button */}
                    <div className="relative overflow-hidden bg-primary h-40 sm:h-44 md:h-48">
                      <motion.div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center cursor-pointer"
                        >
                          <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary ml-1" />
                        </motion.div>
                      </motion.div>
                      <img
                        src={course.image || "/placeholder.svg?height=192&width=400&query=course"}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Badge */}
                      <motion.div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold text-primary shadow-lg">
                        {course.format}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 md:p-6">
                      <div className="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                          {course.category}
                        </span>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg md:text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                      {/* Meta Info */}
                      <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                        >
                          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{course.duration}</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                        >
                          <Users className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{course.students} étudiants</span>
                        </motion.div>
                      </div>

                      {/* Instructor & Rating */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-600">Instructeur</p>
                          <p className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-1">
                            {course.instructor}
                          </p>
                        </div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-1 flex-shrink-0">
                          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs sm:text-sm font-semibold text-gray-900">{course.rating}</span>
                        </motion.div>
                      </div>

                      {/* CTA Button */}
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="w-full bg-primary hover:bg-primary-light text-white rounded-lg font-semibold shadow-lg transition-all text-xs sm:text-sm md:text-base h-10 sm:h-11">
                          Voir le Cours
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-accent-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 text-balance">
              Pourquoi Participer ?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {benefits.map((benefit, idx) => (
              <ScrollReveal key={benefit.title} delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md border-l-4 border-primary hover:border-primary-light hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{benefit.title}</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {benefit.items.map((item) => (
                      <motion.li
                        key={item}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 sm:gap-3 text-gray-700 font-medium text-xs sm:text-sm md:text-base"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 text-balance">
              Prochaines Sessions en Direct
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                date: "15 Janvier 2026",
                time: "18:00 GMT+1",
                title: "Nutrition et Exercice Physique",
                instructor: "Dr. Amara Diop",
              },
              {
                date: "22 Janvier 2026",
                time: "15:00 GMT+1",
                title: "Aliments Africains et Prévention",
                instructor: "Prof. Mbala",
              },
            ].map((session, idx) => (
              <ScrollReveal key={session.date} delay={idx * 0.15}>
                <Card3D delay={idx * 0.15}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-primary p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-white hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div>
                        <p className="text-white/70 text-xs sm:text-sm mb-1">{session.date}</p>
                        <p className="text-xl sm:text-2xl font-bold">{session.time}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"
                      >
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </motion.div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{session.title}</h3>
                    <p className="text-white/80 mb-4 sm:mb-6 text-xs sm:text-sm">Avec {session.instructor}</p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-white hover:bg-gray-100 text-primary font-semibold w-full rounded-lg shadow-lg transition-all text-xs sm:text-sm h-10 sm:h-11">
                        S'inscrire Maintenant
                      </Button>
                    </motion.div>
                  </motion.div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        </div>

        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Accédez à l'Éducation Nutritionnelle de Qualité
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Rejoignez la communauté et transformez votre pratique avec nos formations complètes
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white hover:bg-gray-100 text-primary text-xs sm:text-sm md:text-base lg:text-lg h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 rounded-lg font-semibold shadow-lg">
                Explorez Tous les Cours
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
