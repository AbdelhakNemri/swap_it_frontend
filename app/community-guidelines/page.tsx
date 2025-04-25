import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, AlertCircle, Users, Heart, Shield } from "lucide-react"

export default function CommunityGuidelinesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1EFEC]">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-[#030303] mb-8 text-center">Community Guidelines</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-[#123458] mr-3" />
              <h2 className="text-2xl font-bold text-[#030303]">Our Community Values</h2>
            </div>
            <p className="text-[#030303] mb-6">
              At Swap, we believe in creating a safe, inclusive, and respectful environment for all members. 
              These guidelines help us maintain a positive community where everyone can learn and grow together.
            </p>
          </div>

          <div className="space-y-8">
            {/* Respect and Inclusion */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-[#123458] mr-3" />
                <h3 className="text-xl font-semibold text-[#030303]">Respect and Inclusion</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Treat all members with respect and kindness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Embrace diversity and different perspectives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Use inclusive language and avoid discriminatory remarks</span>
                </li>
              </ul>
            </div>

            {/* Safety and Privacy */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-[#123458] mr-3" />
                <h3 className="text-xl font-semibold text-[#030303]">Safety and Privacy</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Keep personal information private</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Meet in public spaces for in-person sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Report any suspicious or inappropriate behavior</span>
                </li>
              </ul>
            </div>

            {/* Quality of Content */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-[#123458] mr-3" />
                <h3 className="text-xl font-semibold text-[#030303]">Quality of Content</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Share accurate and helpful information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Be honest about your skill level and experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Provide constructive feedback when appropriate</span>
                </li>
              </ul>
            </div>

            {/* Prohibited Behavior */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-[#123458] mr-3" />
                <h3 className="text-xl font-semibold text-[#030303]">Prohibited Behavior</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Harassment, bullying, or discrimination of any kind</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Spam, scams, or commercial solicitation</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-[#123458] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#030303]">Sharing inappropriate or offensive content</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-2xl font-bold text-[#030303] mb-4">Reporting Violations</h2>
            <p className="text-[#030303] mb-6">
              If you encounter any behavior that violates these guidelines, please report it immediately. 
              Our team will review all reports and take appropriate action to maintain a safe and welcoming community.
            </p>
            <p className="text-[#030303]">
              By participating in the Swap community, you agree to follow these guidelines. 
              Failure to comply may result in temporary or permanent suspension of your account.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 