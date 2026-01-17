"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Download, Mail, Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { useState } from "react"

export default function Blog() {
  const { ref: articlesRef, inView: articlesInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [email, setEmail] = useState("")

  const articles = [
    {
      id: 1,
      title: "Aliments Camerounais pour Contrôler l'Hypertension",
      excerpt:
        "Découvrez comment les aliments locaux comme le plantain et le manioc peuvent vous aider à gérer votre tension.",
      category: "Nutrition",
      author: "Dr. Marie Nkomo",
      date: "15 Décembre 2025",
      readTime: "5 min",
      image: "/blog-hypertension.jpg",
    },
    {
      id: 2,
      title: "Évolution du Diabète en Afrique et Stratégies de Prévention",
      excerpt: "Comprendre l'épidémie de diabète et les solutions éducatives qui fonctionnent vraiment.",
      category: "Santé",
      author: "Prof. Jean Mbala",
      date: "12 Décembre 2025",
      readTime: "7 min",
      image: "/blog-diabetes.jpg",
    },
    {
      id: 3,
      title: "Recettes Équilibrées avec Plantain et Manioc",
      excerpt: "10 recettes délicieuses et nutritives pour varier votre alimentation avec les cultures locales.",
      category: "Recettes",
      author: "Chef Fatima Hassan",
      date: "10 Décembre 2025",
      readTime: "6 min",
      image: "/blog-recipes.jpg",
    },
    {
      id: 4,
      title: "Ndolé : Superaliment Camerounais Oublié",
      excerpt: "Tous les bienfaits nutritionnels du Ndolé et comment l'intégrer dans vos plans alimentaires.",
      category: "Nutrition",
      author: "Dr. Amara Diop",
      date: "8 Décembre 2025",
      readTime: "5 min",
      image: "/blog-ndole.jpg",
    },
    {
      id: 5,
      title: "Obésité chez l'Enfant : Prévention dès le Jeune Âge",
      excerpt: "Stratégies éprouvées pour prévenir l'obésité chez les enfants en Afrique de l'Ouest.",
      category: "Pédiatrie",
      author: "Dr. Aissatou Dia",
      date: "5 Décembre 2025",
      readTime: "6 min",
      image: "/blog-children.jpg",
    },
    {
      id: 6,
      title: "Impact de la Nutrition sur la Productivity des Travailleurs",
      excerpt: "Comment une bonne nutrition améliore les performances et la qualité de vie au travail.",
      category: "Bien-être",
      author: "Dr. Pierre Mbongo",
      date: "2 Décembre 2025",
      readTime: "5 min",
      image: "/blog-productivity.jpg",
    },
  ]

  const guides = [
    {
      title: "Guide Complet de Nutrition pour Diabétiques",
      description: "Tout ce que vous devez savoir pour gérer le diabète par l'alimentation.",
      format: "PDF",
      pages: "32 pages",
    },
    {
      title: "Recettes Africaines Équilibrées",
      description: "Collection de 50 recettes traditionnelles adaptées à vos besoins nutritionnels.",
      format: "PDF",
      pages: "48 pages",
    },
    {
      title: "Tableaux de Composition des Aliments Locaux",
      description: "Données complètes sur la valeur nutritionnelle des aliments camerounais.",
      format: "Excel",
      pages: "15 feuilles",
    },
  ]

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section - improved responsive text sizing and spacing */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-pretty leading-tight">
              Blog & Ressources
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Articles, guides et conseils d'experts en nutrition pour une meilleure santé en Afrique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid - responsive image heights and card layouts */}
      <section ref={articlesRef} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-gray-900">
            Articles Récents
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {articles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.08}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={articlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Image - responsive heights */}
                  <div className="relative overflow-hidden bg-gray-200 h-40 sm:h-44 md:h-48">
                    <img
                      src={article.image || "/placeholder.svg?height=192&width=400&query=article"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-primary text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">{article.excerpt}</p>

                    {/* Meta Info */}
                    <div className="space-y-2 sm:space-y-3 pb-3 sm:pb-4 border-b border-gray-200 mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <User className="w-3 h-3" />
                        <span className="line-clamp-1">{article.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 flex-shrink-0" />
                          <span>{article.date}</span>
                        </div>
                        <span className="text-primary font-semibold">{article.readTime}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm">
                      Lire l'article
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section - responsive card grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-accent-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-gray-900">
            Guides Gratuits Téléchargeables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {guides.map((guide, index) => (
              <AnimatedSection key={guide.title} delay={index * 0.15}>
                <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-primary bg-accent-mint px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {guide.format}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{guide.description}</p>
                  <p className="text-xs text-gray-500 mb-4 sm:mb-6">{guide.pages}</p>

                  <Button className="w-full bg-primary hover:bg-primary-light text-white rounded-lg font-semibold flex items-center justify-center gap-2 text-sm h-10 sm:h-11">
                    <Download className="w-4 h-4" />
                    Télécharger
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - improved responsive form layout */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary text-white">
        <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Recevez les Nouveautés</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2">
              Inscrivez-vous à notre newsletter pour les derniers articles, conseils et ressources
            </p>

            <form className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="flex-1 px-3 sm:px-4 py-2 md:py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:outline-none text-xs sm:text-sm md:text-base"
              />
              <Button className="bg-white hover:bg-gray-100 text-primary font-semibold px-3 sm:px-6 md:px-8 rounded-lg h-10 sm:h-11 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base whitespace-nowrap">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                S'inscrire
              </Button>
            </form>

            <p className="text-xs text-white/70 mt-3 sm:mt-4">
              Nous respectons votre vie privée. Désinscription facile à tout moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - improved responsive FAQ cards */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900">
            Questions Fréquentes
          </h2>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {[
              {
                question: "Comment utiliser les données d'aliments locaux ?",
                answer:
                  "Nos bases de données incluent la composition nutritionnelle complète des aliments camerounais et africains pour une meilleure recommandation.",
              },
              {
                question: "Puis-je télécharger les articles en PDF ?",
                answer:
                  "Oui, tous les articles et guides sont disponibles en PDF gratuitement pour les membres IsiDiet.",
              },
              {
                question: "Comment la plateforme gère-t-elle la confidentialité ?",
                answer:
                  "Nous respectons strictement les standards RGPD et les lois de protection des données en Afrique.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-accent-cream p-4 sm:p-5 md:p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm md:text-base">{faq.question}</h3>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
