'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Sparkles, MessageSquare, InfoIcon } from 'lucide-react'
import { ChatTab, type ChatTabRef } from './ai-assistant/ChatTab'
import { SectionInfoTab } from './ai-assistant/SectionInfoTab'
import { type AiAssistantProps, type SmartPrompt, type Message } from '@/types/ai-assistant'

export function AiAssistant({ 
  currentSection, 
  currentQuestions,
  formData,
  categoryName,
  onSmartPromptTrigger
}: AiAssistantProps) {
  const [activeTab, setActiveTab] = useState('chat')
  const chatTabRef = useRef<ChatTabRef>(null)

  // Create a handler for smart prompts that can be called from parent
  const handleSmartPrompt = useCallback((questionId: string, prompt: { text: string; question: string }) => {
    // Switch to chat tab
    setActiveTab('chat')
    
    // Wait for tab to render and then send the prompt
    setTimeout(() => {
      const smartPrompt: SmartPrompt = {
        id: `prompt-${Date.now()}`,
        fieldId: questionId,
        promptText: prompt.text,
        question: prompt.question
      }
      
      chatTabRef.current?.handleSmartPrompt(smartPrompt)
    }, 100)
  }, [])
  
  // Expose the handler to parent through callback
  useEffect(() => {
    if (onSmartPromptTrigger) {
      onSmartPromptTrigger(handleSmartPrompt)
    }
  }, [onSmartPromptTrigger, handleSmartPrompt])

  return (
    <Card className="h-full bg-white shadow-lg border-light-gray flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-light-gray">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-stackmatch-blue to-information-blue rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stackmatch-navy">AI Assistant</h3>
            <p className="text-sm text-medium-gray">Helping you complete your {categoryName} RFQ</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="flex-1 flex flex-col"
      >
        <TabsList className="w-full rounded-none border-b border-light-gray bg-background-gray">
          <TabsTrigger 
            value="chat" 
            className="flex-1 flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Chat
          </TabsTrigger>
          <TabsTrigger 
            value="info" 
            className="flex-1 flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <InfoIcon className="w-4 h-4" />
            Section Info
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex-1 m-0">
          <ChatTab
            ref={chatTabRef}
            currentSection={currentSection}
            categoryName={categoryName}
          />
        </TabsContent>

        <TabsContent value="info" className="flex-1 m-0">
          <SectionInfoTab
            currentSection={currentSection}
            currentQuestions={currentQuestions}
            formData={formData}
            categoryName={categoryName}
          />
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <div className="p-4 border-t border-light-gray bg-background-gray">
        <div className="flex items-center gap-2 text-sm text-medium-gray">
          <Sparkles className="w-4 h-4" />
          <span>AI suggestions update as you progress</span>
        </div>
      </div>
    </Card>
  )
}