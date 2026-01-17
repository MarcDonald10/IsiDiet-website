"use client"

import { useEffect, useRef } from "react"

export function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      life: number
    }> = []

    const createParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
        life: 1,
      })
    }

    for (let i = 0; i < 50; i++) createParticle()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(139, 157, 131, 0.3)"

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.008

        if (p.life <= 0) {
          particles.splice(i, 1)
          createParticle()
        }

        ctx.globalAlpha = p.life
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}
