import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, Share2 } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1EFEC]">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-[#030303] mb-8 text-center">How Swap Works</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-[#123458]" />
              </div>
              <h2 className="text-xl font-semibold text-[#030303] mb-4">1. Create Your Profile</h2>
              <p className="text-[#030303]">
                Sign up and create your profile to showcase your skills and what you'd like to learn.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-[#123458]" />
              </div>
              <h2 className="text-xl font-semibold text-[#030303] mb-4">2. Browse or List Skills</h2>
              <p className="text-[#030303]">
                Explore available skills in your area or list your own skills to share with others.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <Share2 className="h-12 w-12 text-[#123458]" />
              </div>
              <h2 className="text-xl font-semibold text-[#030303] mb-4">3. Connect and Learn</h2>
              <p className="text-[#030303]">
                Connect with others, schedule sessions, and start sharing knowledge in your community.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#030303] mb-6">Getting Started</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#123458] text-white flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#030303] mb-2">Sign Up</h3>
                  <p className="text-[#030303]">
                    Create your free account and complete your profile. Tell us about your skills and what you'd like to learn.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#123458] text-white flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#030303] mb-2">Find or List Skills</h3>
                  <p className="text-[#030303]">
                    Browse available skills in your area or list your own skills to share with the community.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#123458] text-white flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#030303] mb-2">Connect and Schedule</h3>
                  <p className="text-[#030303]">
                    Message other members, schedule sessions, and start your skill-sharing journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-[#123458] hover:bg-[#123458]/90 text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 