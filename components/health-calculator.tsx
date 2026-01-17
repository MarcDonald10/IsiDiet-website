"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function HealthCalculator() {
  const [weight, setWeight] = useState(70)
  const [height, setHeight] = useState(175)
  const [age, setAge] = useState(30)

  const bmi = weight / (height / 100) ** 2
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Insuffisant", color: "text-blue-600" }
    if (bmi < 25) return { label: "Normal", color: "text-green-600" }
    if (bmi < 30) return { label: "Surpoids", color: "text-yellow-600" }
    return { label: "Obésité", color: "text-red-600" }
  }

  const category = getBMICategory(bmi)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Calculateur Santé Interactif
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez votre IMC, calories journalières, et vos objectifs nutritionnels
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-mint/30 to-cream p-8 md:p-12 rounded-2xl">
            <div className="space-y-8">
              {/* Weight */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <label className="block text-sm md:text-base font-semibold text-slate-900 mb-3">
                  Poids: {weight} kg
                </label>
                <input
                  type="range"
                  min="30"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-sage-200 rounded-lg accent-sage-700"
                />
              </motion.div>

              {/* Height */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <label className="block text-sm md:text-base font-semibold text-slate-900 mb-3">
                  Taille: {height} cm
                </label>
                <input
                  type="range"
                  min="140"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-sage-200 rounded-lg accent-sage-700"
                />
              </motion.div>

              {/* Age */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <label className="block text-sm md:text-base font-semibold text-slate-900 mb-3">Âge: {age} ans</label>
                <input
                  type="range"
                  min="18"
                  max="100"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-sage-200 rounded-lg accent-sage-700"
                />
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-sage-200"
              >
                <div className="bg-white p-4 md:p-6 rounded-xl">
                  <p className="text-xs md:text-sm text-slate-600 font-medium">IMC</p>
                  <p className={`text-2xl md:text-3xl font-bold ${category.color}`}>{bmi.toFixed(1)}</p>
                  <p className={`text-xs md:text-sm ${category.color} font-semibold`}>{category.label}</p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-xl">
                  <p className="text-xs md:text-sm text-slate-600 font-medium">Calories Journalières</p>
                  <p className="text-2xl md:text-3xl font-bold text-sage-700">{Math.round(bmr * 1.55)}</p>
                  <p className="text-xs md:text-sm text-slate-600 font-semibold">kcal/jour</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
