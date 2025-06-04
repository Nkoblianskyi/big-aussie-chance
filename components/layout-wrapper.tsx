"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoginModal from "@/components/login-modal"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [showLogin, setShowLogin] = useState(false)
  const router = useRouter()

  const handleSignUp = () => {
    router.push("/register")
  }

  const handleLogin = () => {
    setShowLogin(true)
  }

  const handleLoginSuccess = () => {
    setShowLogin(false)
    // Тут можна додати логіку після успішного логіну
  }

  return (
    <>
      <Header onSignUp={handleSignUp} onLogin={handleLogin} />
      {children}
      <Footer />

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onLogin={handleLoginSuccess} />
    </>
  )
}
