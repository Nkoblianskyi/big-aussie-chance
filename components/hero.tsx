"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface HeroProps {
  onBuyTicket: () => void
}

export default function Hero({ onBuyTicket }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const getNextTuesday = () => {
      const now = new Date()
      const nextTuesday = new Date()
      const daysUntilTuesday = (2 - now.getDay() + 7) % 7 || 7
      nextTuesday.setDate(now.getDate() + daysUntilTuesday)
      nextTuesday.setHours(20, 0, 0, 0)
      return nextTuesday
    }

    const updateTimer = () => {
      const now = new Date().getTime()
      const nextDraw = getNextTuesday().getTime()
      const difference = nextDraw - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
      <div className="container mx-auto text-center">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-slow-pulse px-2">
            Big Aussie Chance
          </h1>
          <p
            className={`text-base xs:text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 transform transition-all duration-1000 delay-300 px-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Your gateway to Oz Lotto dreams in Victoria
          </p>
        </div>

        <Card
          className={`bg-white/10 backdrop-blur-md border-white/20 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto transform transition-all duration-1000 delay-500 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-yellow-300 animate-slow-bounce">
            Next Draw Countdown
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-4 sm:mb-6 animate-fadeIn px-2">
            {(() => {
              const getNextTuesday = () => {
                const now = new Date()
                const nextTuesday = new Date()
                const daysUntilTuesday = (2 - now.getDay() + 7) % 7 || 7
                nextTuesday.setDate(now.getDate() + daysUntilTuesday)
                nextTuesday.setHours(20, 0, 0, 0)
                return nextTuesday
              }

              const nextDraw = getNextTuesday()
              const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
              return `${nextDraw.toLocaleDateString("en-AU", options)} AEST`
            })()}
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-center">
            {Object.entries(timeLeft).map(([key, value], index) => (
              <div
                key={key}
                className={`bg-white/20 rounded-lg p-2 sm:p-3 md:p-4 transform transition-all duration-500 hover:scale-110 hover:bg-white/30 ${isVisible ? "animate-fadeInUp" : ""}`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-300 animate-pulse">{value}</div>
                <div className="text-xs sm:text-sm text-blue-100 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </Card>

        <div
          className={`transform transition-all duration-1000 delay-700 px-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Button
            onClick={onBuyTicket}
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 animate-slow-pulse hover:animate-none"
          >
            <span className="hidden xs:inline">Buy Your Ticket Now!</span>
            <span className="xs:hidden">Buy Ticket!</span>
          </Button>
        </div>
      </div>

      {/* Floating elements animation */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-orange-400/20 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-float-slow"></div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slow-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes slow-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite 2s;
        }
        
        .animate-slow-pulse {
          animation: slow-pulse 3s ease-in-out infinite;
        }

        .animate-slow-bounce {
          animation: slow-bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
