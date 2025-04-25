"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { FormField } from "@/components/form-field"

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle signup logic here
    }, 1500)
  }

  return (
    <Card className="border border-[#D4C9BE] bg-white">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-[#030303]">Create an account</CardTitle>
        <CardDescription className="text-center text-[#030303]/70">
          Join our community and start sharing your skills
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField label="Full Name" htmlFor="name">
            <Input
              id="name"
              placeholder="Enter your full name"
              required
              className="border-[#D4C9BE] focus:border-[#123458] focus:ring-[#123458]"
            />
          </FormField>

          <FormField label="Email" htmlFor="email">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="border-[#D4C9BE] focus:border-[#123458] focus:ring-[#123458]"
            />
          </FormField>

          <FormField label="Password" htmlFor="password">
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              required
              className="border-[#D4C9BE] focus:border-[#123458] focus:ring-[#123458]"
            />
          </FormField>

          <FormField label="Confirm Password" htmlFor="confirmPassword">
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
              className="border-[#D4C9BE] focus:border-[#123458] focus:ring-[#123458]"
            />
          </FormField>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#030303]/80"
            >
              I agree to the{" "}
              <Link href="/terms" className="text-[#123458] hover:underline">
                terms of service
              </Link>
            </label>
          </div>

          <Button type="submit" className="w-full bg-[#123458] hover:bg-[#123458]/90 text-white" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm text-[#030303]/70 w-full">
          Already have an account?{" "}
          <Link href="/login" className="text-[#123458] hover:underline">
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
