import { SignupForm } from "@/components/signup-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1EFEC]">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
