import { useState, useEffect, useRef } from 'react';
import { User } from '@/lib/auth';
import Image from 'next/image';

interface Message {
  id: number;
  sender: User;
  content: string;
  timestamp: string;
}

export function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TODO: Connect to WebSocket for real-time chat
    const mockMessages: Message[] = [
      {
        id: 1,
        sender: {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          profile_image: undefined,
        },
        content: 'Hey, how are you?',
        timestamp: '10:30 AM',
      },
      {
        id: 2,
        sender: {
          id: 2,
          name: 'You',
          email: 'you@example.com',
          profile_image: undefined,
        },
        content: "I'm good, thanks! How about you?",
        timestamp: '10:31 AM',
      },
    ];
    setMessages(mockMessages);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // TODO: Send message to WebSocket
    const message: Message = {
      id: messages.length + 1,
      sender: {
        id: 2,
        name: 'You',
        email: 'you@example.com',
        profile_image: undefined,
      },
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender.name === 'You' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender.name === 'You'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  {message.sender.profile_image ? (
                    <Image
                      src={message.sender.profile_image}
                      alt={message.sender.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">
                        {message.sender.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium">
                  {message.sender.name}
                </span>
              </div>
              <p className="text-sm">{message.content}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="mt-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
} 