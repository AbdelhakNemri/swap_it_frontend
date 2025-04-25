"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#F1EFEC]/70 backdrop-blur-md border-b border-[#D4C9BE]/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Share2 className="h-6 w-6 text-[#123458]" />
            <span className="text-2xl font-bold text-[#123458] font-mono tracking-tight">Swap</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-[#030303] hover:text-[#123458] font-medium transition-colors">
              How It Works
            </Link>
            <Link href="/browse-skills" className="text-[#030303] hover:text-[#123458] font-medium transition-colors">
              Browse Skills
            </Link>
            <Link href="/about" className="text-[#030303] hover:text-[#123458] font-medium transition-colors">
              About Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-[#123458] text-[#123458]">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-[#123458] hover:bg-[#123458]/90 text-white">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#030303]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F1EFEC]/90 backdrop-blur-sm border-t border-[#D4C9BE]/30 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/how-it-works"
                className="text-[#030303] hover:text-[#123458] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/browse-skills"
                className="text-[#030303] hover:text-[#123458] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Skills
              </Link>
              <Link
                href="/about"
                className="text-[#030303] hover:text-[#123458] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="border-[#123458] text-[#123458] w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/login">Log In</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#123458] hover:bg-[#123458]/90 text-white w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
