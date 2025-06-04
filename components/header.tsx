"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeaderProps {
  onSignUp: () => void
  onLogin: () => void
}

export default function Header({ onSignUp, onLogin }: HeaderProps) {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  useState(() => {
    setIsLoaded(true)
  })

  const handleSignUpClick = () => {
    router.push("/register")
  }

  return (
    <header
      className={`bg-white shadow-md border-b-4 border-yellow-400 transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 group">
            <Image src="/logo.png" alt="Big Aussie Chance Logo" width={50} height={50} />
            <span className="text-lg sm:text-2xl font-bold text-blue-800 transform transition-all duration-300 group-hover:scale-105">
              <span className="hidden xs:inline">Big Aussie Chance</span>
              <span className="xs:hidden">BAC</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              About Us
            </Link>
            <Link
              href="/privacy"
              className="text-gray-700 hover:text-blue-600 font-medium transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-gray-700 hover:text-blue-600 font-medium transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              Cookie Policy
            </Link>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button
              onClick={onLogin}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-2 sm:px-4 py-1 sm:py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-xs sm:text-sm"
            >
              <span className="hidden xs:inline">LOGIN</span>
              <span className="xs:hidden">IN</span>
            </Button>
            <Button
              onClick={handleSignUpClick}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-slow-pulse hover:animate-none text-xs sm:text-sm"
            >
              <span className="hidden xs:inline">SIGN UP</span>
              <span className="xs:hidden">UP</span>
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slow-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-slow-pulse {
          animation: slow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  )
}
