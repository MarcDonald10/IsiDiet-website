"use client"

import { motion } from "framer-motion"
import { Play, Clock, Star, Calendar, User, MapPin, Share2, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

// Mock data - Replace with actual data fetching
const masterclasses = {
  1: {
    id: 1,
    title: "Nutrition Locale contre le Diabète",
    instructor: "Dr. Marie Nkomo",
    rating: 4.8,
    students: 234,
    duration: "45 min",
    category: "Santé",
    level: "Intermédiaire",
    price: "15 000 FCFA",
    image: "/masterclass-diabetes.jpg",
    description: "Découvrez les stratégies éprouvées pour gérer le diabète avec les aliments locaux camerounais.",
    overview: `
      Cette masterclass intensive explore comment utiliser la richesse de la cuisine camerounaise 
      pour contrôler naturellement le diabète de type 2. Vous apprendrez les principes nutritionnels, 
      les aliments à privilégier, et comment créer des plans alimentaires personnalisés pour vos patients.
    `,
    whatYouWillLearn: [
      "Les bases scientifiques du diabète et son lien avec l'alimentation",
      "Comment identifier les aliments à index glycémique bas locaux",
      "Créer des plans alimentaires adaptés à la culture camerounaise",
      "Gérer les portions et les équilibres nutritionnels",
      "Conseils pratiques pour améliorer l'adhésion des patients",
    ],
    schedule: "15 Janvier 2026 - 18:00 GMT+1",
    format: "Live + Enregistrée",
    materials: ["Slides PDF", "Tableau des aliments", "Templates de plans nutritionnels"],
    relatedCourses: [2, 3, 5],
  },
  2: {
    id: 2,
    title: "Gestion de l'Hypertension par l'Alimentation",
    instructor: "Dr. Amara Diop",
    rating: 4.9,
    students: 456,
    duration: "60 min",
    category: "Santé",
    level: "Débutant",
    price: "12 000 FCFA",
    image: "/masterclass-hypertension.jpg",
    description: "Session interactive sur la réduction de la tension artérielle par l'alimentation.",
    overview: "Apprenez les stratégies alimentaires pour réduire efficacement la tension artérielle.",
    whatYouWillLearn: [
      "L'hypertension en Afrique : épidémiologie et impact",
      "Le rôle du sodium, du potassium et du magnésium",
      "Aliments camerounais bénéfiques pour la tension",
      "Créer des menus hypotenseurs délicieux",
      "Suivi et évaluation des résultats",
    ],
    schedule: "22 Janvier 2026 - 15:00 GMT+1",
    format: "Live avec Q&A",
    materials: ["Slides PDF", "Guide des aliments", "Recettes pratiques"],
    relatedCourses: [1, 4, 6],
  },
}

export default function MasterClassDetail({ params }: { params: { id: string } }) {
  const course = masterclasses[Number.parseInt(params.id) as keyof typeof masterclasses]

  if (!course) {
    return (
      <main className="bg-white">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Cours non trouvé</h1>
            <Link href="/masterclasses">
              <Button className="bg-primary hover:bg-primary-dark text-white">Retour aux cours</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <Link
            href="/masterclasses"
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <span>← Retour aux cours</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex gap-2 mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.category}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance">{course.title}</h1>

              <div className="flex gap-6 mb-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <span>
                    {course.rating} ({course.students} étudiants)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="bg-white hover:bg-gray-100 text-primary font-bold px-8 h-12 text-lg rounded-lg w-full md:w-auto">
                  <Play className="w-5 h-5 mr-2" />
                  S'inscrire Maintenant - {course.price}
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl hover:bg-black/40 transition-colors cursor-pointer group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow"
                >
                  <Play className="w-8 h-8 text-primary ml-1" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main */}
            <div className="md:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aperçu du Cours</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{course.overview}</p>
              </motion.div>

              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ce Que Vous Apprendrez</h2>
                <div className="space-y-4">
                  {course.whatYouWillLearn.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">
                        ✓
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Materials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Matériel Inclus</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {course.materials.map((material, idx) => (
                    <div key={idx} className="bg-accent-cream p-4 rounded-lg border border-gray-200">
                      <p className="font-semibold text-gray-900">{material}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Schedule Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-accent-cream p-6 rounded-xl sticky top-24"
              >
                <h3 className="font-bold text-gray-900 mb-4">Infos du Cours</h3>

                <div className="space-y-4 pb-4 border-b border-gray-300 mb-4">
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Date & Heure</p>
                      <p className="font-semibold text-gray-900">{course.schedule}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Format</p>
                      <p className="font-semibold text-gray-900">{course.format}</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-12 rounded-lg mb-3">
                  S'inscrire - {course.price}
                </Button>

                <button className="w-full border-2 border-primary text-primary font-semibold h-11 rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                  <BookmarkPlus className="w-4 h-4" />
                  Sauvegarder
                </button>
              </motion.div>

              {/* Share */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white border border-gray-200 p-6 rounded-xl"
              >
                <h3 className="font-bold text-gray-900 mb-4">Partager</h3>
                <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors">
                  <Share2 className="w-4 h-4" />
                  Partager ce Cours
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 md:py-24 bg-accent-cream">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Cours Connexes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="h-40 bg-primary/20 relative group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-70 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">Cours Connexe {index}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">Description courte du cours...</p>
                  <Link href={`/masterclasses/${course.relatedCourses[index - 1]}`}>
                    <button className="text-primary font-semibold hover:gap-2 flex items-center gap-1 transition-all">
                      Explorer →
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
