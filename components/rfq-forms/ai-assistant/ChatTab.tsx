'use client'

import { useState, useEffect, useRef, forwardRef, useImperativeHandle, useCallback } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send, Bot, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type ChatTabProps, type Message, type SmartPrompt } from '@/types/ai-assistant'

export interface ChatTabRef {
  handleSmartPrompt: (prompt: SmartPrompt) => void
}

// Mock AI responses for different sections
const sectionWelcomeMessages: Record<string, string> = {
  'general-info': "Welcome to the Project Details section! I'm here to help you provide comprehensive information about your project. Feel free to ask me about company details, project scope, or any other questions you might have.",
  'sales-qual': "Let's dive into your current processes and requirements. I can help you articulate your pain points, desired outcomes, and specific needs for this software category. What would you like to know?",
  'sc-qual': "This section focuses on your technical and business requirements. I can provide examples, best practices, and help you think through important considerations. How can I assist you?",
}

// Mock AI responses for common questions
const aiResponses: Record<string, string> = {
  'example': "Here's an example response for your field:\n\nFor a Fixed Asset Management system, you might say: 'We currently track approximately 5,000 assets across 3 locations using Excel spreadsheets. This process takes our accounting team 20+ hours monthly and is prone to errors. We need automated depreciation calculations, barcode scanning, and real-time reporting.'",
  'timeline': "Based on similar projects, here's a typical timeline:\n\n• Discovery & Requirements: 2-3 weeks\n• Vendor Evaluation: 2-4 weeks\n• Implementation Planning: 1-2 weeks\n• System Setup & Data Migration: 4-8 weeks\n• Training & Go-Live: 2-3 weeks\n\nTotal: 3-5 months for a standard implementation",
  'budget': "For Fixed Asset Management software, typical pricing ranges:\n\n• Small Business (< 500 assets): $200-500/month\n• Mid-Market (500-5000 assets): $500-2000/month\n• Enterprise (5000+ assets): $2000-10000/month\n\nFactors affecting cost: number of users, assets, locations, and integration requirements.",
  'default': "I understand your question. Let me provide some guidance based on best practices in software procurement. Could you be more specific about what aspect you'd like help with?"
}

export const ChatTab = forwardRef<ChatTabRef, ChatTabProps>(
  ({ currentSection, categoryName, onSmartPromptReceived }, ref) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Handle smart prompts sent from parent
  const handleSmartPrompt = useCallback((prompt: SmartPrompt) => {
    // Add user message
    const userMessage: Message = {
      id: `smart-${Date.now()}`,
      role: 'user',
      content: prompt.question,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)
    
    // Generate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: `ai-smart-${Date.now()}`,
        role: 'ai',
        content: aiResponses.example, // Use example response for smart prompts
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }, [])
  
  // Expose handleSmartPrompt to parent
  useImperativeHandle(ref, () => ({
    handleSmartPrompt
  }), [handleSmartPrompt])

  // Generate welcome message when section changes
  useEffect(() => {
    if (currentSection) {
      const welcomeMessage = sectionWelcomeMessages[currentSection.sectionId] || 
        `Welcome to the ${currentSection.sectionTitle} section! I'm here to help you complete this part of your ${categoryName} RFQ. What questions do you have?`
      
      const newMessage: Message = {
        id: `welcome-${currentSection.sectionId}-${Date.now()}`,
        role: 'ai',
        content: welcomeMessage,
        timestamp: new Date()
      }
      
      setMessages(prev => {
        // Only add if this isn't already the last message
        const lastMessage = prev[prev.length - 1]
        if (!lastMessage || lastMessage.content !== welcomeMessage) {
          return [...prev, newMessage]
        }
        return prev
      })
    }
  }, [currentSection, categoryName])

  // Handle smart prompt triggers
  useEffect(() => {
    if (onSmartPromptReceived) {
      // This will be connected later when we implement smart prompts
    }
  }, [onSmartPromptReceived])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate AI response with a delay
    setTimeout(() => {
      // Determine appropriate response based on keywords
      let response = aiResponses.default
      const lowerInput = inputValue.toLowerCase()
      
      if (lowerInput.includes('example') || lowerInput.includes('show')) {
        response = aiResponses.example
      } else if (lowerInput.includes('timeline') || lowerInput.includes('how long')) {
        response = aiResponses.timeline
      } else if (lowerInput.includes('budget') || lowerInput.includes('cost') || lowerInput.includes('price')) {
        response = aiResponses.budget
      }

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'ai',
        content: response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <ScrollArea className="flex-1 px-4 py-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3",
                message.role === 'user' ? "justify-end" : "justify-start"
              )}
            >
              {message.role === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stackmatch-blue to-information-blue flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  message.role === 'user' 
                    ? "bg-stackmatch-blue text-white" 
                    : "bg-background-gray text-charcoal"
                )}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p className={cn(
                  "text-xs mt-1",
                  message.role === 'user' ? "text-white/70" : "text-medium-gray"
                )}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stackmatch-blue to-information-blue flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-background-gray rounded-lg p-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-medium-gray rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-medium-gray rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-medium-gray rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-light-gray p-4">
        <div className="flex gap-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about your RFQ..."
            className="flex-1 min-h-[80px] resize-none"
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-stackmatch-blue hover:bg-stackmatch-blue/90 self-end"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-medium-gray mt-2">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  )
})

ChatTab.displayName = 'ChatTab'