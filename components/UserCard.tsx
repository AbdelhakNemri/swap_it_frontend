import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Star } from "lucide-react"

interface UserCardProps {
  name: string
  role: string
  skills: string[]
  rating?: number
  onMessage?: () => void
}

export function UserCard({ name, role, skills, rating, onMessage }: UserCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
          {rating && (
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
        <Button
          variant="outline"
          className="w-full"
          onClick={onMessage}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Message
        </Button>
      </CardContent>
    </Card>
  )
} 