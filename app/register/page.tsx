"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import LoginModal from "@/components/login-modal"

export default function RegisterPage() {
  const router = useRouter()
  const [showLogin, setShowLogin] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    title: "",
    firstName: "",
    lastName: "",
    birthName: "",
    zip: "",
    location: "",
    street: "",
    houseNumber: "",
    dateOfBirth: "",
    placeOfBirth: "",
    phone: "",
    iban: "",
    agreeToTerms: false,
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"

    if (!formData.password) newErrors.password = "Password is required"
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters"

    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms"

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
          setShowLogin(true)
        }, 2000)
      }, 1500)
    }
  }

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card
            className={`border-2 border-yellow-200 transform transition-all duration-1000 hover:shadow-2xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-blue-800 animate-in slide-in-from-top-4">
                SIGN UP
              </CardTitle>
              <p
                className="text-center text-gray-600 text-lg animate-in slide-in-from-top-4"
                style={{ animationDelay: "200ms" }}
              >
                Join thousands of winners and start your lottery journey today
              </p>
            </CardHeader>

            <CardContent>
              {showSuccess ? (
                <Alert className="border-green-200 bg-green-50 mb-6 animate-in zoom-in-50">
                  <AlertDescription className="text-green-800 text-center font-medium text-lg animate-slow-pulse">
                    Registration successful! Redirecting to login...
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "300ms" }}>
                      <Label htmlFor="email" className="text-base font-semibold">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="Enter your email address"
                        className={`mt-2 h-12 transition-all duration-300 focus:scale-105 ${errors.email ? "border-red-500 animate-shake" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 animate-in slide-in-from-left-2">{errors.email}</p>
                      )}
                    </div>

                    <div className="animate-in slide-in-from-right-4" style={{ animationDelay: "400ms" }}>
                      <Label htmlFor="password" className="text-base font-semibold">
                        Password *
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => updateFormData("password", e.target.value)}
                        placeholder="Create a strong password"
                        className={`mt-2 h-12 transition-all duration-300 focus:scale-105 ${errors.password ? "border-red-500 animate-shake" : ""}`}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1 animate-in slide-in-from-right-2">{errors.password}</p>
                      )}
                    </div>
                  </div>

                  <div className="border-t pt-6 animate-in fade-in-50" style={{ animationDelay: "500ms" }}>
                    <h3 className="text-xl font-bold text-blue-800 mb-6">ACCOUNT</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "600ms" }}>
                        <Label htmlFor="title" className="text-base font-semibold">
                          Title *
                        </Label>
                        <Select onValueChange={(value) => updateFormData("title", value)}>
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Select title" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mr">Mr.</SelectItem>
                            <SelectItem value="mrs">Mrs.</SelectItem>
                            <SelectItem value="ms">Ms.</SelectItem>
                            <SelectItem value="dr">Dr.</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "700ms" }}>
                        <Label htmlFor="firstName" className="text-base font-semibold">
                          First name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          placeholder="Your first name"
                          className={`mt-2 h-12 transition-all duration-300 focus:scale-105 ${errors.firstName ? "border-red-500 animate-shake" : ""}`}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1 animate-in slide-in-from-left-2">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "800ms" }}>
                        <Label htmlFor="lastName" className="text-base font-semibold">
                          Last name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          placeholder="Your last name"
                          className={`mt-2 h-12 transition-all duration-300 focus:scale-105 ${errors.lastName ? "border-red-500 animate-shake" : ""}`}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1 animate-in slide-in-from-left-2">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "900ms" }}>
                        <Label htmlFor="birthName" className="text-base font-semibold">
                          Birth name
                        </Label>
                        <Input
                          id="birthName"
                          value={formData.birthName}
                          onChange={(e) => updateFormData("birthName", e.target.value)}
                          placeholder="Birth name (if different)"
                          className="mt-2 h-12"
                        />
                      </div>

                      <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "1000ms" }}>
                        <Label htmlFor="zip" className="text-base font-semibold">
                          Zip *
                        </Label>
                        <Input
                          id="zip"
                          value={formData.zip}
                          onChange={(e) => updateFormData("zip", e.target.value)}
                          placeholder="Postal code"
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "1100ms" }}>
                        <Label htmlFor="location" className="text-base font-semibold">
                          Location *
                        </Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => updateFormData("location", e.target.value)}
                          placeholder="City/Location"
                          className="mt-2 h-12"
                        />
                      </div>

                      <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "1200ms" }}>
                        <Label htmlFor="street" className="text-base font-semibold">
                          Street *
                        </Label>
                        <Input
                          id="street"
                          value={formData.street}
                          onChange={(e) => updateFormData("street", e.target.value)}
                          placeholder="Street address"
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "1300ms" }}>
                        <Label htmlFor="houseNumber" className="text-base font-semibold">
                          House number *
                        </Label>
                        <Input
                          id="houseNumber"
                          value={formData.houseNumber}
                          onChange={(e) => updateFormData("houseNumber", e.target.value)}
                          placeholder="House number"
                          className="mt-2 h-12"
                        />
                      </div>

                      <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "1400ms" }}>
                        <Label htmlFor="dateOfBirth" className="text-base font-semibold">
                          Date of birth *
                        </Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                          className="mt-2 h-12"
                        />
                      </div>

                      <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "1500ms" }}>
                        <Label htmlFor="placeOfBirth" className="text-base font-semibold">
                          Place of birth *
                        </Label>
                        <Input
                          id="placeOfBirth"
                          value={formData.placeOfBirth}
                          onChange={(e) => updateFormData("placeOfBirth", e.target.value)}
                          placeholder="Place of birth"
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>

                    <div className="mt-6 animate-in slide-in-from-left-4" style={{ animationDelay: "1600ms" }}>
                      <Label htmlFor="phone" className="text-base font-semibold">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="+XX X XXXX XXXX"
                        className="mt-2 h-12"
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6 animate-in fade-in-50" style={{ animationDelay: "1700ms" }}>
                    <h3 className="text-xl font-bold text-blue-800 mb-6">BANK</h3>

                    <div className="animate-in slide-in-from-left-4" style={{ animationDelay: "1800ms" }}>
                      <Label htmlFor="iban" className="text-base font-semibold">
                        IBAN *
                      </Label>
                      <Input
                        id="iban"
                        value={formData.iban}
                        onChange={(e) => updateFormData("iban", e.target.value)}
                        placeholder="Enter your IBAN"
                        className="mt-2 h-12"
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6 animate-in fade-in-50" style={{ animationDelay: "1900ms" }}>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => updateFormData("agreeToTerms", checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-base">
                        I agree with the policies of ozbigwinaustralia.com and data processing for my inquiry
                      </Label>
                    </div>
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm mt-2 animate-in slide-in-from-left-2">{errors.agreeToTerms}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-14 text-lg font-bold transform transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-4"
                    style={{ animationDelay: "800ms" }}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      "Sign Up"
                    )}
                  </Button>

                  <p
                    className="text-center text-base text-gray-600 animate-in slide-in-from-bottom-4"
                    style={{ animationDelay: "2000ms" }}
                  >
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setShowLogin(true)}
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Log In
                    </button>
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={() => {
          setShowLogin(false)
          router.push("/")
        }}
      />

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes slow-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animate-slow-pulse {
          animation: slow-pulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
