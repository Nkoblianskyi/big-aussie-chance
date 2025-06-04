"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import InfoSection from "@/components/info-section"
import WinnersSection from "@/components/winners-section"
import HistorySection from "@/components/history-section"
import LoginModal from "@/components/login-modal"
import CookieBanner from "@/components/cookie-banner"
import AboutSection from "@/components/about-section"

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero onBuyTicket={() => setShowLogin(true)} />
      <AboutSection />
      <InfoSection />
      <WinnersSection />
      <HistorySection />

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={() => {
          setShowLogin(false)
        }}
      />

      <CookieBanner />
    </div>
  )
}
