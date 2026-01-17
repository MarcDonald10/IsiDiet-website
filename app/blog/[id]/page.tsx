"use client"

import { motion } from "framer-motion"
import { Calendar, User, Clock, Share2, Heart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

// Mock data - Replace with actual data fetching
const blogArticles = {
  1: {
    id: 1,
    title: "Aliments Camerounais pour Contrôler l'Hypertension",
    author: "Dr. Marie Nkomo",
    date: "15 Décembre 2025",
    readTime: "5 min",
    image: "/blog-hypertension.jpg",
    category: "Nutrition",
    content: `
      <h2>Introduction</h2>
      <p>L'hypertension artérielle est l'une des principales causes de décès en Afrique de l'Ouest. 
      Découvrez comment les aliments camerounais traditionnels peuvent vous aider à gérer naturellement votre tension artérielle.</p>

      <h2>Le Plantain : Un Allié Puissant</h2>
      <p>Le plantain est riche en potassium, un minéral essentiel pour réguler la pression artérielle. 
      Une portion de 150g de plantain bouillie contient environ 600mg de potassium, ce qui aide à 
      contrebalancer les effets du sodium dans votre alimentation.</p>

      <h3>Recommandations</h3>
      <ul>
        <li>Consommez du plantain 3-4 fois par semaine</li>
        <li>Privilégiez la cuisson à l'eau ou à la vapeur</li>
        <li>Évitez les fritures excessives d'huile</li>
      </ul>

      <h2>Le Manioc : Source de Fibre</h2>
      <p>Le manioc est une excellente source de fibres alimentaires qui aident à réduire le cholestérol 
      et à maintenir un poids sain, deux facteurs importants pour contrôler l'hypertension.</p>

      <h2>Le Ndolé : L'Aliment Secret</h2>
      <p>Le ndolé, plat traditionnel camerounais, combine les épinards amers locaux avec des cacahuètes. 
      Les épinards contiennent des nitrates naturels qui favorisent la vasodilatation et réduisent la pression artérielle.</p>

      <h2>Conclusion</h2>
      <p>En intégrant ces aliments traditionnels dans votre alimentation quotidienne, vous pouvez 
      significativement améliorer votre gestion de l'hypertension.</p>
    `,
    relatedArticles: [2, 4, 5],
  },
  2: {
    id: 2,
    title: "Évolution du Diabète en Afrique et Stratégies de Prévention",
    author: "Prof. Jean Mbala",
    date: "12 Décembre 2025",
    readTime: "7 min",
    image: "/blog-diabetes.jpg",
    category: "Santé",
    content: `
      <h2>L'Épidémie de Diabète en Afrique</h2>
      <p>Le diabète de type 2 connaît une croissance exponentielle en Afrique de l'Ouest. 
      Cet article explore les causes et les solutions éprouvées.</p>
      <p>Statistiques: Plus de 19% de la population adulte souffre de diabète ou de prédiabète.</p>

      <h2>Stratégies de Prévention</h2>
      <h3>1. Alimentation Équilibrée</h3>
      <p>Réduisez les sucres raffinés et augmentez les fibres.</p>
      
      <h3>2. Exercice Régulier</h3>
      <p>30 minutes de marche quotidienne peuvent réduire le risque de 50%.</p>

      <h3>3. Gestion du Poids</h3>
      <p>Maintenir un IMC sain est crucial pour la prévention.</p>

      <h2>Les Aliments à Privilégier</h2>
      <ul>
        <li>Céréales complètes</li>
        <li>Légumes locaux verts</li>
        <li>Fruits frais (avec modération)</li>
        <li>Protéines maigres</li>
      </ul>
    `,
    relatedArticles: [1, 3, 6],
  },
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const article = blogArticles[Number.parseInt(params.id) as keyof typeof blogArticles]

  if (!article) {
    return (
      <main className="bg-white">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <Link href="/blog">
              <Button className="bg-primary hover:bg-primary-dark text-white">Retour au blog</Button>
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
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link href="/blog" className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{article.title}</h1>

            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de lecture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-20 relative z-10 mb-12">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover rounded-xl shadow-2xl"
        />
      </div>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-3 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              {/* Share Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-accent-cream p-6 rounded-xl sticky top-24"
              >
                <h3 className="font-bold text-gray-900 mb-4">Partager</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary hover:bg-primary-dark text-white p-2 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4 mx-auto" />
                  </button>
                  <button className="flex-1 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors">
                    <Heart className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </motion.div>

              {/* Category */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-primary/10 p-4 rounded-xl"
              >
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 md:py-20 bg-accent-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Articles Connexes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="h-40 bg-primary/20" />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">Article Connexe {index}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">Description courte de l'article connexe...</p>
                  <Link href={`/blog/${article.relatedArticles[index - 1]}`}>
                    <button className="text-primary font-semibold hover:gap-2 flex items-center gap-1 transition-all">
                      Lire plus →
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
