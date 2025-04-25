"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { FormField } from "@/components/form-field"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle login logic here
    }, 1500)
  }

  return (
    <Card className="border border-[#D4C9BE] bg-white">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-[#030303]">Welcome back</CardTitle>
        <CardDescription className="text-center text-[#030303]/70">Log in to your account to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Enter your password"
              required
              className="border-[#D4C9BE] focus:border-[#123458] focus:ring-[#123458]"
            />
          </FormField>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#030303]/80"
              >
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-[#123458] hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-[#123458] hover:bg-[#123458]/90 text-white" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm text-[#030303]/70 w-full">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#123458] hover:underline">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
