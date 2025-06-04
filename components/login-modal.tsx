"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          onLogin()
        }, 2000)
      }, 1000)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md transform transition-all duration-300 animate-in slide-in-from-bottom-4">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-800 animate-fadeIn">
            Login to Your Account
          </DialogTitle>
        </DialogHeader>

        {showSuccess ? (
          <Alert className="border-green-200 bg-green-50 animate-in slide-in-from-top-2">
            <AlertDescription className="text-green-800 text-center font-medium animate-slow-pulse">
              Login successful! Redirecting...
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="animate-in slide-in-from-left-2" style={{ animationDelay: "100ms" }}>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`transition-all duration-300 focus:scale-105 ${errors.email ? "border-red-500 animate-shake" : ""}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 animate-in slide-in-from-left-1">{errors.email}</p>
              )}
            </div>

            <div className="animate-in slide-in-from-right-2" style={{ animationDelay: "200ms" }}>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`transition-all duration-300 focus:scale-105 ${errors.password ? "border-red-500 animate-shake" : ""}`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 animate-in slide-in-from-right-1">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-2"
              style={{ animationDelay: "300ms" }}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Logging in...</span>
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        )}

        <style jsx>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slow-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          .animate-shake {
            animation: shake 0.5s ease-in-out;
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
          
          .animate-slow-pulse {
            animation: slow-pulse 2.5s ease-in-out infinite;
          }
        `}</style>
      </DialogContent>
    </Dialog>
  )
}
