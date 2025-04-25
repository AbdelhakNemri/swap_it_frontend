import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1EFEC]">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-[#030303] mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#030303] mb-4">1. Acceptance of Terms</h2>
              <p className="text-[#030303]">
                By accessing and using Swap, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#030303] mb-4">2. User Responsibilities</h2>
              <p className="text-[#030303] mb-4">
                As a user of Swap, you agree to:
              </p>
              <ul className="list-disc pl-6 text-[#030303]">
                <li>Provide accurate and complete information when creating your account</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the platform in accordance with all applicable laws and regulations</li>
                <li>Treat other users with respect and professionalism</li>
                <li>Not engage in any fraudulent or harmful activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#030303] mb-4">3. Skill Sharing Guidelines</h2>
              <p className="text-[#030303] mb-4">
                When participating in skill sharing:
              </p>
              <ul className="list-disc pl-6 text-[#030303]">
                <li>Be honest about your skill level and experience</li>
                <li>Provide accurate descriptions of the skills you offer</li>
                <li>Maintain professional conduct during all interactions</li>
                <li>Respect the time and effort of other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#030303] mb-4">4. Content and Intellectual Property</h2>
              <p className="text-[#030303]">
                Users retain ownership of their content but grant Swap a license to use, display, and distribute the content on the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#030303] mb-4">5. Termination</h2>
              <p className="text-[#030303]">
                Swap reserves the right to terminate or suspend accounts that violate these terms or engage in harmful behavior.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#030303] mb-4">6. Changes to Terms</h2>
              <p className="text-[#030303]">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#030303] mb-4">7. Contact Information</h2>
              <p className="text-[#030303]">
                For questions about these terms, please contact us through our contact form on the About page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 