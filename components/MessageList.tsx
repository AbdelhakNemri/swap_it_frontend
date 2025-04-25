import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare, Clock } from "lucide-react"

interface Message {
  id: string
  sender: {
    name: string
    avatar?: string
  }
  lastMessage: string
  timestamp: string
  unread: boolean
}

interface MessageListProps {
  messages: Message[]
  onSelectMessage: (messageId: string) => void
}

export function MessageList({ messages, onSelectMessage }: MessageListProps) {
  return (
    <div className="space-y-2">
      {messages.length === 0 ? (
        <Card>
          <CardContent className="p-4 text-center text-muted-foreground">
            No messages yet
          </CardContent>
        </Card>
      ) : (
        messages.map((message) => (
          <Button
            key={message.id}
            variant="ghost"
            className="w-full justify-start p-2 h-auto"
            onClick={() => onSelectMessage(message.id)}
          >
            <div className="flex items-center space-x-3 w-full">
              <Avatar>
                <AvatarImage src={message.sender.avatar} />
                <AvatarFallback>
                  {message.sender.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="font-medium truncate">{message.sender.name}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {message.timestamp}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {message.lastMessage}
                </p>
              </div>
              {message.unread && (
                <div className="w-2 h-2 rounded-full bg-primary" />
              )}
            </div>
          </Button>
        ))
      )}
    </div>
  )
} 