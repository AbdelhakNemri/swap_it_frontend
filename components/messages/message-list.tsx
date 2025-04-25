import { useState, useEffect } from 'react';
import { User } from '@/lib/auth';
import Image from 'next/image';

interface Message {
  id: number;
  sender: User;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

  useEffect(() => {
    // TODO: Fetch messages from API
    const mockMessages: Message[] = [
      {
        id: 1,
        sender: {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          profile_image: null,
        },
        lastMessage: 'Hey, how are you?',
        timestamp: '10:30 AM',
        unread: true,
      },
      {
        id: 2,
        sender: {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          profile_image: null,
        },
        lastMessage: 'Can we meet tomorrow?',
        timestamp: 'Yesterday',
        unread: false,
      },
    ];
    setMessages(mockMessages);
  }, []);

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-4 rounded-lg cursor-pointer transition-colors ${
            selectedMessage === message.id
              ? 'bg-blue-50'
              : 'hover:bg-gray-50'
          }`}
          onClick={() => setSelectedMessage(message.id)}
        >
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              {message.sender.profile_image ? (
                <Image
                  src={message.sender.profile_image}
                  alt={message.sender.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    {message.sender.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium truncate">
                  {message.sender.name}
                </h3>
                <span className="text-xs text-gray-500">{message.timestamp}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">
                {message.lastMessage}
              </p>
            </div>
            {message.unread && (
              <div className="w-2 h-2 rounded-full bg-blue-500" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 