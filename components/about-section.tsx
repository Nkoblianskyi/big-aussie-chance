"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      id="about-section"
    >
      <div className="container mx-auto">
        <h2
          className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transform transition-all duration-1000 px-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          🌟 About Big Aussie Chance 🌟
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Mission Card */}
          <Card
            className={`group relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 transform transition-all duration-700 hover:scale-105 hover:-rotate-1 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>

            <CardHeader className="relative z-10 text-center pb-3 sm:pb-4">
              <CardTitle className="text-2xl xs:text-3xl sm:text-4xl font-black text-white drop-shadow-lg">
                🎯 Our Mission
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 p-4 sm:p-6 text-white/95 leading-relaxed">
              <p className="text-sm sm:text-base md:text-lg mb-4">
                Big Aussie Chance is Victoria's premier platform for lottery information and ticket purchasing. We are
                dedicated to providing Australians with a safe, secure, and exciting way to participate in lottery
                games.
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-4">
                Our mission extends beyond simply facilitating lottery ticket purchases. We strive to create a
                comprehensive ecosystem that educates, informs, and empowers our users to make informed decisions.
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                We believe that everyone deserves the chance to dream big while maintaining responsible gambling
                practices.
              </p>
            </CardContent>
          </Card>

          {/* Values Card */}
          <Card
            className={`group relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-emerald-500 to-teal-600 transform transition-all duration-700 hover:scale-105 hover:rotate-1 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

            <CardHeader className="relative z-10 text-center pb-3 sm:pb-4">
              <CardTitle className="text-2xl xs:text-3xl sm:text-4xl font-black text-white drop-shadow-lg">
                💎 Our Values
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 p-4 sm:p-6 text-white/95">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <h4 className="font-bold text-yellow-300 mb-2 text-sm sm:text-base">🔒 Security</h4>
                  <p className="text-xs sm:text-sm">Bank-level security for all transactions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <h4 className="font-bold text-yellow-300 mb-2 text-sm sm:text-base">🎯 Integrity</h4>
                  <p className="text-xs sm:text-sm">Complete honesty and transparency</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <h4 className="font-bold text-yellow-300 mb-2 text-sm sm:text-base">🤝 Responsibility</h4>
                  <p className="text-xs sm:text-sm">Promoting responsible gambling</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <h4 className="font-bold text-yellow-300 mb-2 text-sm sm:text-base">🚀 Innovation</h4>
                  <p className="text-xs sm:text-sm">Continuous service improvement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-orange-500 to-red-600">
            <div className="absolute inset-0 bg-black/20"></div>
            <CardHeader className="relative z-10 text-center">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                🏆 Why Choose Big Aussie Chance? 🏆
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6 text-white/95">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl mb-2 block">🛡️</span>
                    <h4 className="text-lg sm:text-xl font-bold text-yellow-300">Licensed & Regulated</h4>
                  </div>
                  <p className="text-sm sm:text-base text-center">
                    Fully licensed to operate in Victoria, Australia, ensuring compliance with all regulations
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl mb-2 block">🎮</span>
                    <h4 className="text-lg sm:text-xl font-bold text-yellow-300">User-Friendly</h4>
                  </div>
                  <p className="text-sm sm:text-base text-center">
                    Intuitive design that makes lottery participation simple and enjoyable for everyone
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl mb-2 block">📱</span>
                    <h4 className="text-lg sm:text-xl font-bold text-yellow-300">Mobile Optimized</h4>
                  </div>
                  <p className="text-sm sm:text-base text-center">
                    Fully responsive platform that works seamlessly across all devices and screen sizes
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl mb-2 block">🎯</span>
                    <h4 className="text-lg sm:text-xl font-bold text-yellow-300">Responsible Gaming</h4>
                  </div>
                  <p className="text-sm sm:text-base text-center">
                    Committed to promoting responsible gambling practices with built-in tools and resources
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl mb-2 block">💬</span>
                    <h4 className="text-lg sm:text-xl font-bold text-yellow-300">Customer Support</h4>
                  </div>
                  <p className="text-sm sm:text-base text-center">
                    Dedicated customer service team available to assist with any questions or concerns
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl mb-2 block">📊</span>
                    <h4 className="text-lg sm:text-xl font-bold text-yellow-300">Comprehensive Info</h4>
                  </div>
                  <p className="text-sm sm:text-base text-center">
                    Detailed guides, statistics, and educational resources about lottery games
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-3">🌟 Join Thousands of Winners!</h3>
                <p className="text-sm sm:text-base mb-4">
                  Experience the excitement of lottery gaming with Victoria's most trusted platform
                </p>
                <div className="flex flex-col xs:flex-row justify-center items-center gap-3 sm:gap-4 text-white/80">
                  <span className="flex items-center gap-2">
                    <span className="text-green-400 text-lg sm:text-xl">✓</span>
                    <span className="font-semibold text-xs sm:text-sm">Secure Platform</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-green-400 text-lg sm:text-xl">✓</span>
                    <span className="font-semibold text-xs sm:text-sm">Licensed in Victoria</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-green-400 text-lg sm:text-xl">✓</span>
                    <span className="font-semibold text-xs sm:text-sm">Responsible Gaming</span>
                  </span>
                </div>
              </div>
            </CardContent>

            {/* Floating decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-ping"></div>
          </Card>
        </div>
      </div>
    </section>
  )
}
