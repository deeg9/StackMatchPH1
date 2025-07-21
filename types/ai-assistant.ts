// AI Assistant Type Definitions

import { type FormSection, type Question, type FormData } from '@/types/rfq-forms'

export interface Message {
  id: string
  role: 'user' | 'ai'
  content: string
  timestamp: Date
}

export interface ChatState {
  messages: Message[]
  isLoading: boolean
}

export interface SmartPrompt {
  id: string
  fieldId: string
  promptText: string
  question: string
}

export interface AiAssistantProps {
  currentSection?: FormSection
  currentQuestions?: Question[]
  formData: FormData
  categoryName: string
  onSmartPromptTrigger?: (handler: (questionId: string, prompt: { text: string; question: string }) => void) => void
}

export interface ChatTabProps {
  currentSection?: FormSection
  categoryName: string
  onSmartPromptReceived?: (prompt: SmartPrompt) => void
}

export interface SectionInfoTabProps {
  currentSection?: FormSection
  currentQuestions?: Question[]
  formData: FormData
  categoryName: string
}