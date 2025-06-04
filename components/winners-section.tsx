"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WinnersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLElement>(null)

  const winners = [
    {
      year: "2023",
      amount: "$50 Million",
      location: "Melbourne, VIC",
      numbers: "7, 12, 18, 23, 31, 38, 42",
      story: "Won by a syndicate of 10 healthcare workers who had been playing together for over 5 years.",
      gradient: "from-emerald-500 to-teal-600",
      icon: "🏥",
    },
    {
      year: "2022",
      amount: "$30 Million",
      location: "Geelong, VIC",
      numbers: "3, 9, 15, 22, 29, 35, 41",
      story: "A retired couple who planned to travel around Australia in their new motorhome.",
      gradient: "from-blue-500 to-indigo-600",
      icon: "🚐",
    },
    {
      year: "2021",
      amount: "$40 Million",
      location: "Ballarat, VIC",
      numbers: "5, 11, 17, 24, 33, 39, 44",
      story: "A young tradesman who continued working despite his windfall, using the money to start his own business.",
      gradient: "from-orange-500 to-red-600",
      icon: "🔨",
    },
    {
      year: "2020",
      amount: "$20 Million",
      location: "Bendigo, VIC",
      numbers: "2, 8, 14, 21, 28, 34, 40",
      story:
        "A family who had been struggling financially and used the winnings to pay off their mortgage and help their children.",
      gradient: "from-purple-500 to-pink-600",
      icon: "🏠",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          winners.forEach((winner, index) => {
            const targetAmount = Number.parseInt(winner.amount.replace(/[^0-9]/g, ""))
            animateNumber(winner.amount, targetAmount, index)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateNumber = (key: string, target: number, index: number) => {
    let current = 0
    const increment = target / 50
    const timer = setInterval(
      () => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setAnimatedNumbers((prev) => ({ ...prev, [key]: Math.floor(current) }))
      },
      30 + index * 10,
    )
  }

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden relative"
      id="winners-section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2
          className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent transform transition-all duration-1000 px-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          🏆 Historic Winners in Victoria 🏆
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {winners.map((winner, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br ${winner.gradient} transform transition-all duration-700 hover:scale-105 hover:rotate-1 ${isVisible ? "translate-x-0 opacity-100" : index % 2 === 0 ? "-translate-x-10 opacity-0" : "translate-x-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              <CardHeader className="relative z-10 text-center pb-3 sm:pb-4 p-4 sm:p-6">
                <CardTitle className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-2xl animate-slow-pulse">
                  ${animatedNumbers[winner.amount] || 0} Million
                </CardTitle>
                <p className="text-base sm:text-lg md:text-xl text-white/90 font-bold mt-2">
                  {winner.year} • {winner.location}
                </p>
              </CardHeader>

              <CardContent className="relative z-10 space-y-3 sm:space-y-4 md:space-y-6 p-3 sm:p-4 md:p-6">
                <div className="text-center">
                  <p className="text-sm sm:text-base md:text-lg font-bold text-yellow-300 mb-2 sm:mb-3">
                    🎯 Winning Numbers:
                  </p>
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 md:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {winner.numbers.split(", ").map((num, i) => (
                      <span
                        key={i}
                        className={`bg-white/20 backdrop-blur-sm text-white font-black px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border-2 border-white/30 transform transition-all duration-300 hover:scale-125 hover:rotate-12 hover:bg-yellow-400 hover:text-black text-xs sm:text-sm md:text-base ${isVisible ? "animate-bounceIn" : ""}`}
                        style={{ animationDelay: `${index * 200 + i * 100}ms` }}
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20">
                  <p className="text-white/95 italic text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center">
                    "{winner.story}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div
          className={`text-center mt-8 sm:mt-12 md:mt-16 transform transition-all duration-1000 delay-800 px-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-yellow-400/30">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-yellow-300 mb-3 sm:mb-4 animate-pulse">
              ✨ Your Story Could Be Next! ✨
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 leading-relaxed px-2">
              Join thousands of Victorians who have changed their lives with Oz Lotto
            </p>
            <div className="flex flex-col xs:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <span className="text-green-400 text-xl sm:text-2xl">✓</span>
                <span className="font-semibold text-sm sm:text-base">Secure Platform</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400 text-xl sm:text-2xl">✓</span>
                <span className="font-semibold text-sm sm:text-base">Licensed in Victoria</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400 text-xl sm:text-2xl">✓</span>
                <span className="font-semibold text-sm sm:text-base">Responsible Gaming</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slow-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out forwards;
        }
        
        .animate-slow-pulse {
          animation: slow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
