import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="border border-[#D4C9BE] bg-white hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <QuoteIcon className="h-8 w-8 text-[#123458]/30 mb-4" />
        <p className="text-[#030303]/80 mb-6 italic">"{quote}"</p>
        <div>
          <p className="font-bold text-[#030303]">{author}</p>
          <p className="text-[#030303]/60 text-sm">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
