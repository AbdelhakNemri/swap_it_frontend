import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function BrowseSkillsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1EFEC]">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-4xl font-bold text-[#030303] mb-4 md:mb-0">Browse Skills</h1>
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search skills..."
                className="w-full px-4 py-2 pl-10 rounded-md border border-[#D4C9BE] focus:outline-none focus:ring-2 focus:ring-[#123458]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#123458]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-[#030303] mb-4">Creative Arts</h2>
              <ul className="space-y-2">
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Photography</li>
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Painting</li>
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Music</li>
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Writing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-[#030303] mb-4">Technology</h2>
              <ul className="space-y-2">
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Web Development</li>
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Graphic Design</li>
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Digital Marketing</li>
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Data Analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-[#030303] mb-4">Life Skills</h2>
              <ul className="space-y-2">
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Cooking</li>
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Gardening</li>
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Home Repair</li>
                <li className="text-[#030303] hover:text-[#123458] cursor-pointer">Financial Planning</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#123458] hover:bg-[#123458]/90 text-white">
              View All Categories
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 