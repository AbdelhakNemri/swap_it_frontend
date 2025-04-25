import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MessageSquare, Users, Settings } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or skill..."
              className="pl-8 w-[300px]"
            />
          </div>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="browse">
            <Users className="mr-2 h-4 w-4" />
            Browse People
          </TabsTrigger>
          <TabsTrigger value="messages">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* People Cards will go here */}
            <Card>
              <CardHeader>
                <CardTitle>John Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Web Developer</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                    Node.js
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="mt-6">
          <div className="space-y-4">
            {/* Message list will go here */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">No messages yet</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Profile Picture</label>
                  <div className="mt-2">
                    <Button variant="outline">Upload Photo</Button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Skills</label>
                  <div className="mt-2">
                    <Input placeholder="Add your skills" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Bio</label>
                  <div className="mt-2">
                    <textarea
                      className="w-full p-2 border rounded-md"
                      rows={4}
                      placeholder="Tell us about yourself"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 