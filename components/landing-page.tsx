import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card"
import { HeroSection } from "@/components/hero-section"
import { TestimonialCard } from "@/components/testimonial-card"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1EFEC]">
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Features Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#030303] mb-12">
              Share Skills. Learn Together. Grow Community.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Teach Your Skills"
                description="Share your expertise with others in your community. Everyone has something valuable to teach."
                icon="Lightbulb"
              />
              <FeatureCard
                title="Learn From Peers"
                description="Discover new skills from people around you. Direct, personal learning experiences."
                icon="BookOpen"
              />
              <FeatureCard
                title="Build Community"
                description="Connect with like-minded individuals and strengthen local bonds through skill sharing."
                icon="Users"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#D4C9BE]">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#030303] mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#123458] text-white flex items-center justify-center text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Create an Account</h3>
                <p className="text-[#030303]">Sign up and tell us about your skills and what you'd like to learn.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#123458] text-white flex items-center justify-center text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Connect with Others</h3>
                <p className="text-[#030303]">Find people with complementary skills and interests in your area.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#123458] text-white flex items-center justify-center text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Share & Learn</h3>
                <p className="text-[#030303]">Arrange skill-sharing sessions and track your learning journey.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button asChild className="bg-[#123458] hover:bg-[#123458]/90 text-white">
                <Link href="/signup">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#030303] mb-12">Community Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="I taught basic coding and learned gardening in return. This platform has enriched my life in ways I never expected."
                author="Alex Johnson"
                role="Software Developer"
              />
              <TestimonialCard
                quote="As a retired chef, I love sharing my culinary skills with young people and learning digital skills from them."
                author="Maria Rodriguez"
                role="Retired Chef"
              />
              <TestimonialCard
                quote="Swap connected me with a mentor who helped me start my small business. Now I mentor others too."
                author="Jamal Williams"
                role="Entrepreneur"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#123458] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Share Your Skills?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community today and be part of a movement that values knowledge exchange and community building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="bg-white text-[#123458] hover:bg-[#F1EFEC]">
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
