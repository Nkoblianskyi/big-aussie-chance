"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HistorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
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

  const tabs = [
    {
      title: "📚 The Story",
      icon: "📖",
      content: {
        title: "The Story of Australia's Favorite Lottery",
        sections: [
          {
            subtitle: "🎯 The Beginning",
            text: "Oz Lotto was first drawn on 26 February 1994, making it Australia's first national lottery game. Originally known as 'The Australian Lotto,' it was created to provide Australians with bigger jackpots and more exciting prizes.",
          },
          {
            subtitle: "🔄 Evolution",
            text: "The game format has evolved over the years. Initially, players selected 6 numbers from 1 to 45, but in 2005, the format changed to the current 7 numbers from 1 to 45 to create even larger jackpots.",
          },
          {
            subtitle: "🏆 Victoria's Success",
            text: "Victoria has been home to some of the biggest Oz Lotto winners in history. The state's love affair with the lottery has produced numerous millionaires and contributed significantly to community projects.",
          },
        ],
      },
    },
    {
      title: "🏛️ Key Milestones",
      icon: "🎯",
      content: {
        title: "Historic Moments in Oz Lotto",
        milestones: [
          { year: "1994", event: "First Oz Lotto draw held", icon: "🎊" },
          { year: "1999", event: "First $10 million jackpot reached", icon: "💰" },
          { year: "2005", event: "Format changed to 7 numbers from 45", icon: "🔄" },
          { year: "2009", event: "First $50 million jackpot offered", icon: "🚀" },
          { year: "2012", event: "Record jackpot of $106 million won", icon: "🏆" },
          { year: "2018", event: "Online ticket sales introduced", icon: "💻" },
          { year: "2020", event: "Mobile app launched", icon: "📱" },
          { year: "2023", event: "Over $2 billion in prizes awarded", icon: "🎉" },
        ],
      },
    },
    {
      title: "🌟 Victoria Impact",
      icon: "🏙️",
      content: {
        title: "Oz Lotto's Impact on Victoria",
        impacts: [
          {
            category: "Community Impact",
            icon: "🤝",
            items: [
              "Healthcare facility upgrades",
              "School infrastructure improvements",
              "Sports and recreation facilities",
              "Arts and cultural programs",
              "Emergency services equipment",
              "Community support programs",
            ],
          },
          {
            category: "Economic Contribution",
            icon: "💼",
            items: [
              "Employment for thousands of Victorians",
              "Support for small businesses",
              "Tax revenue for state government",
              "Tourism boost from major events",
              "Funding for public infrastructure",
            ],
          },
        ],
      },
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      id="history-section"
    >
      <div className="container mx-auto">
        <h2
          className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transform transition-all duration-1000 px-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          📜 History of Oz Lotto 📜
        </h2>

        {/* Tab Navigation */}
        <div
          className={`flex flex-col xs:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === index
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl"
                  : "bg-white text-gray-700 shadow-lg hover:shadow-xl border-2 border-gray-200"
              }`}
            >
              <span className="text-lg sm:text-xl md:text-2xl mr-1 sm:mr-2">{tab.icon}</span>
              <span className="hidden xs:inline">{tab.title}</span>
              <span className="xs:hidden">{tab.title.split(" ")[1] || tab.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 overflow-hidden">
            <CardHeader className="relative z-10 text-center pb-4 sm:pb-6 md:pb-8 p-4 sm:p-6">
              <CardTitle className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 px-2">
                {tabs[activeTab].content.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8 p-4 sm:p-6">
              {/* Story Tab Content */}
              {activeTab === 0 && (
                <div className="space-y-8">
                  {tabs[0].content.sections?.map((section, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-500 transform transition-all duration-500 hover:scale-105 ${isVisible ? "animate-slideInLeft" : ""}`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <h3 className="text-xl font-bold text-indigo-800 mb-3">{section.subtitle}</h3>
                      <p className="text-gray-700 leading-relaxed">{section.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Milestones Tab Content */}
              {activeTab === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {tabs[1].content.milestones?.map((milestone, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-purple-200 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? "animate-bounceIn" : ""}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                        <span className="text-2xl sm:text-3xl">{milestone.icon}</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-black text-purple-800">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-gray-700 font-medium text-sm sm:text-base">{milestone.event}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Impact Tab Content */}
              {activeTab === 2 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {tabs[2].content.impacts?.map((impact, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-200 transform transition-all duration-500 hover:scale-105 ${isVisible ? "animate-slideInUp" : ""}`}
                      style={{ animationDelay: `${index * 300}ms` }}
                    >
                      <div className="text-center mb-4 sm:mb-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 block">{impact.icon}</span>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-black text-blue-800">{impact.category}</h4>
                      </div>
                      <ul className="space-y-2 sm:space-y-3">
                        {impact.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base"
                          >
                            <span className="text-blue-500 mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0 mt-0.5">
                              ✨
                            </span>
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Future Section */}
              <div className="mt-8 sm:mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-white text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4">
                  🚀 The Future of Oz Lotto 🚀
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 px-2">
                  As technology continues to evolve, so does Oz Lotto. The game embraces digital transformation while
                  maintaining its core values of integrity, transparency, and responsible gambling. The dream of winning
                  continues to inspire millions of Australians every Tuesday night.
                </p>
                <div className="flex flex-col xs:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 text-indigo-200">
                  <span className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl sm:text-2xl">🔒</span>
                    <span className="font-semibold text-sm sm:text-base">Secure</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl sm:text-2xl">🎯</span>
                    <span className="font-semibold text-sm sm:text-base">Fair</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl sm:text-2xl">🤝</span>
                    <span className="font-semibold text-sm sm:text-base">Responsible</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
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
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
