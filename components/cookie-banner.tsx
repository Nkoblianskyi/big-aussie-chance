"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="bg-white border-2 border-yellow-400 shadow-2xl">
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-blue-800 mb-2">Cookie Consent</h3>
              <p className="text-gray-700 text-sm">
                We use cookies to enhance your experience on our website. By continuing to use our site, you agree to
                our use of cookies as described in our{" "}
                <Link href="/cookies" className="text-blue-600 hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-3">
              <Button onClick={declineCookies} variant="outline" className="border-gray-300">
                Decline
              </Button>
              <Button
                onClick={acceptCookies}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
