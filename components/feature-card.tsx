import { Lightbulb, BookOpen, Users, Rocket, Heart, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Lightbulb":
        return <Lightbulb className="h-8 w-8 text-[#123458]" />
      case "BookOpen":
        return <BookOpen className="h-8 w-8 text-[#123458]" />
      case "Users":
        return <Users className="h-8 w-8 text-[#123458]" />
      case "Rocket":
        return <Rocket className="h-8 w-8 text-[#123458]" />
      case "Heart":
        return <Heart className="h-8 w-8 text-[#123458]" />
      case "Star":
        return <Star className="h-8 w-8 text-[#123458]" />
      default:
        return <Lightbulb className="h-8 w-8 text-[#123458]" />
    }
  }

  return (
    <Card className="border border-[#D4C9BE] bg-white hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="text-xl font-bold mb-2 text-[#030303]">{title}</h3>
        <p className="text-[#030303]/80">{description}</p>
      </CardContent>
    </Card>
  )
}
