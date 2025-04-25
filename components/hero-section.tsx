import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#123458]/10 to-transparent z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#030303] leading-tight mb-6">
              Share Knowledge, <span className="text-[#123458]">Empower</span> Community
            </h1>
            <p className="text-xl text-[#030303]/80 mb-8 max-w-lg">
              A peer-to-peer platform where community members teach and learn from each other. Share your skills,
              discover new ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#123458] hover:bg-[#123458]/90 text-white">
                <Link href="/signup">Join Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#123458] text-[#123458]">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-[#123458]/20 to-transparent z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="People collaborating and sharing skills in a modern workspace"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F1EFEC] to-transparent"></div>
    </section>
  )
}
