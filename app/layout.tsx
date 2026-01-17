import type React from "react"
import type { Metadata } from "next"
import { Poppins, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { ScrollProgressBar } from "@/components/scroll-progress-bar"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const _outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "IsiDiet - Gestion Nutritionnelle Intelligente pour l'Afrique",
  description:
    "Plateforme révolutionnaire de gestion nutritionnelle pour diététiciens et patients. Conseils personnalisés, plans alimentaires, et suivi en temps réel.",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${_poppins.variable} ${_outfit.variable}`} suppressHydrationWarning>
      <body
        className={`font-poppins antialiased bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <ScrollProgressBar />
          {children}
          <Footer />
          <StickyCTA />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
