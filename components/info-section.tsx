"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InfoSection() {
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

  const cardData = [
    {
      title: "🎫 Available Tickets",
      icon: "🎰",
      gradient: "from-blue-500 to-purple-600",
      items: [
        "Standard Entry (7 numbers)",
        "System Entry (8-20 numbers)",
        "Pick Entry (choose your numbers)",
        "QuickPick (random selection)",
        "Multi-week entries available",
        "Syndicate options for group play",
        "Regular Player Cards",
        "Gift cards for special occasions",
      ],
    },
    {
      title: "💰 Prize Structure",
      icon: "💎",
      gradient: "from-green-500 to-emerald-600",
      items: [
        "Division 1: 7 numbers (Jackpot)",
        "Division 2: 6 numbers + 1 supp",
        "Division 3: 6 numbers",
        "Division 4: 5 numbers + 1 supp",
        "Division 5: 5 numbers",
        "Division 6: 4 numbers",
        "Division 7: 3 numbers + 1 supp",
        "Minimum Division 1: $2 million",
        "Jackpot increases when not won",
      ],
    },
    {
      title: "⏰ Draw Information",
      icon: "📺",
      gradient: "from-orange-500 to-red-600",
      items: [
        "Every Tuesday at 8:30 PM AEST",
        "Minimum jackpot: $2 million",
        "Numbers drawn: 1-45",
        "Supplementary numbers: 2",
        "Tickets close: 7:30 PM on draw day",
        "Results available by 9:30 PM",
        "Live broadcast on 7TWO",
        "Results published online immediately",
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
      id="info-section"
    >
      <div className="container mx-auto">
        <h2
          className={`text-3xl xs:text-4xl sm:text-5xl font-black text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent transform transition-all duration-1000 px-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          🎲 About Lottery Games in Victoria 🎲
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-rotate-1 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90`}></div>
              <div className="absolute inset-0 bg-black/10"></div>

              <CardHeader className="relative z-10 text-center pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl md:text-2xl font-black text-white drop-shadow-lg px-2">
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 p-3 sm:p-4 md:p-6">
                <ul className="space-y-2 sm:space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`flex items-start text-white/95 font-medium transform transition-all duration-300 hover:translate-x-2 hover:text-yellow-300 text-sm sm:text-base ${isVisible ? "animate-slideInLeft" : ""}`}
                      style={{ animationDelay: `${index * 200 + itemIndex * 50}ms` }}
                    >
                      <span className="text-yellow-300 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0 mt-0.5">✨</span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-12 sm:w-16 h-12 sm:h-16 bg-white/10 rounded-full blur-lg"></div>
            </Card>
          ))}
        </div>

        {/* Main info card */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
            <div className="absolute inset-0 bg-black/20"></div>
            <CardHeader className="relative z-10 text-center">
              <CardTitle className="text-4xl font-black text-white mb-4">🏆 Lottery Games in Victoria 🏆</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6 text-white/95 leading-relaxed text-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="animate-fadeIn">
                    🎯 Our lottery games are among Victoria's most popular, offering some of the biggest jackpots in
                    Australia. The game is drawn every Tuesday night and requires players to select 7 numbers from 1 to
                    45.
                  </p>
                  <p className="animate-fadeIn">
                    🏪 In Victoria, lottery tickets can be purchased from authorized retailers across the state,
                    including newsagents, convenience stores, and through official online platforms like ours.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="animate-fadeIn">
                    🏆 Victoria has been home to numerous lottery jackpot winners, with several Division 1 prizes
                    claimed by Victorian residents each year.
                  </p>
                  <p className="animate-fadeIn">
                    🏥 A portion of all lottery ticket sales in Victoria goes toward community initiatives, funding
                    important projects in health, education, sports, arts, and emergency services.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4 text-center">
                  🎮 How to Play Lottery Games in Victoria
                </h3>
                <p className="text-center mb-4">
                  Playing lottery games is simple! Select your numbers or choose a QuickPick for randomly generated
                  numbers. You must be 18+ to play.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-300 mb-2">🎫 Claiming Prizes</h4>
                    <ul className="space-y-1">
                      <li>• Up to $1,500: Any Victorian outlet</li>
                      <li>• $1,500-$5,000: Selected retailers</li>
                      <li>• Over $5,000: Victorian Lotteries Commission</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-300 mb-2">⏰ Important Info</h4>
                    <ul className="space-y-1">
                      <li>• Tickets close 7:30 PM Tuesday</li>
                      <li>• Results by 9:30 PM</li>
                      <li>• 6 months to claim prizes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Floating decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-ping"></div>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  )
}
