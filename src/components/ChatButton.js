"use client"

import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"

import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Input } from "./ui/input"

function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "system", content: "Hello! How can I help you with your legal questions today?" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])

    // Simulate response (in a real app, this would call an API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content:
            "Thank you for your message. One of our attorneys will get back to you shortly. For immediate assistance, please call our office at (212) 555-1234.",
        },
      ])
    }, 1000)

    setInput("")
  }

  return (
    <>
      <Button
        className="fixed bottom-16 right-6 h-14 w-14 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        <span className="sr-only">Toggle chat</span>
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 shadow-lg border-primary/20">
          <CardHeader className="bg-primary text-primary-foreground py-3">
            <div className="text-sm font-medium">RD Stewart Law Firm Chat</div>
          </CardHeader>
          <CardContent className="p-3 h-80 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div key={i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-3 pt-0">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button size="icon" onClick={handleSend}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

export default ChatButton

