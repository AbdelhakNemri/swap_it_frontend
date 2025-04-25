import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1EFEC]">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-[#030303] mb-8">About Swap</h1>
          
          <div className="prose prose-lg mb-12">
            <p className="text-[#030303]">
              Swap is a platform dedicated to fostering community growth through peer-to-peer skill sharing.
            </p>
            <p className="text-[#030303]">
              Founded in 2024, Swap began as a simple idea: what if we could make it easier for people
              to share their knowledge and learn from others in their community? Today, we're proud to
              be connecting people across the globe through the power of shared learning.
            </p>
            <p className="text-[#030303]">
              Whether you're looking to share your expertise or learn something new, Swap welcomes you.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#030303] mb-6">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#030303] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#030303] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#030303] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#030303] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#123458]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#123458] text-white py-2 px-4 rounded-md hover:bg-[#0a1f3a] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 