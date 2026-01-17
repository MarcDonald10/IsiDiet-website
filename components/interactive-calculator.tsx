"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"

export function InteractiveCalculator() {
  const [age, setAge] = useState(35)
  const [weight, setWeight] = useState(80)
  const [condition, setCondition] = useState("diabetes")

  const calculateSavings = () => {
    const baseSavings = weight * 1000
    const conditionMultiplier = condition === "diabetes" ? 1.5 : condition === "hypertension" ? 1.2 : 1
    return Math.round(baseSavings * conditionMultiplier)
  }

  const calculateTime = () => {
    return Math.round(age * 0.5 + 10)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#4F46E5]/10 to-[#10B981]/10 rounded-3xl p-8 border border-[#4F46E5]/20"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Calculez vos économies de santé</h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Âge: {age} ans</label>
            <input
              type="range"
              min="18"
              max="80"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full accent-[#4F46E5]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Poids: {weight} kg</label>
            <input
              type="range"
              min="40"
              max="150"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full accent-[#4F46E5]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Condition</label>
            <div className="space-y-2">
              {["diabetes", "hypertension", "obesity"].map((cond) => (
                <motion.label key={cond} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    value={cond}
                    checked={condition === cond}
                    onChange={(e) => setCondition(e.target.value)}
                    className="accent-[#4F46E5]"
                  />
                  <span className="capitalize">
                    {cond === "diabetes" ? "Diabète" : cond === "hypertension" ? "Hypertension" : "Obésité"}
                  </span>
                </motion.label>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6 flex flex-col justify-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 border-2 border-[#4F46E5]"
          >
            <p className="text-gray-600 mb-2">Économies annuelles potentielles</p>
            <div className="text-4xl font-bold text-[#4F46E5] mb-2">
              <AnimatedCounter value={calculateSavings()} prefix="₣" suffix=" FCFA" />
            </div>
            <p className="text-sm text-gray-600">Grâce à la prévention et gestion optimale</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 border-2 border-[#10B981]"
          >
            <p className="text-gray-600 mb-2">Années de vie gagnées</p>
            <div className="text-4xl font-bold text-[#10B981] mb-2">
              <AnimatedCounter value={calculateTime()} suffix=" ans" />
            </div>
            <p className="text-sm text-gray-600">Grâce à une meilleure santé</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
