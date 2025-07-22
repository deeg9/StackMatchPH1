'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { QuestionList } from '../form-components/QuestionList'
import { type StepComponentProps } from '@/types/rfq-wizard'
import { type Question, type RfqFormBlueprint } from '@/types/rfq-forms'

interface CurrentProcessStepProps extends StepComponentProps {
  blueprint?: RfqFormBlueprint | null
}

// Default questions for current process requirements
const defaultCurrentProcessQuestions: Question[] = [
  {
    id: 'cp_01',
    questionText: 'How do you currently manage this process?',
    helpText: 'Describe your existing tools, systems, or manual processes',
    inputType: 'textarea',
    smartPrompts: [
      {
        text: 'Improve Writing',
        question: 'Can you help me better describe my current process management approach?'
      },
      {
        text: 'Show Example',
        question: 'Can you show me an example of how to describe current process management?'
      }
    ]
  },
  {
    id: 'cp_02',
    questionText: 'What are your biggest pain points with the current system?',
    helpText: 'List specific challenges, inefficiencies, or limitations',
    inputType: 'textarea',
    smartPrompts: [
      {
        text: 'Common Pain Points',
        question: 'What are common pain points companies face with legacy systems?'
      }
    ]
  },
  {
    id: 'cp_03',
    questionText: 'How many users will need access to the new system?',
    inputType: 'text'
  },
  {
    id: 'cp_04',
    questionText: 'What are your core functional requirements?',
    inputType: 'checkboxgroup',
    options: [
      'User Management',
      'Reporting & Analytics',
      'Workflow Automation',
      'Mobile Access',
      'API Integration',
      'Real-time Collaboration',
      'Document Management',
      'Audit Trail'
    ]
  },
  {
    id: 'cp_05',
    questionText: 'What is your current data volume?',
    helpText: 'Approximate number of records, transactions, or files',
    inputType: 'textarea'
  }
]

export function CurrentProcessStep({
  formData,
  onDataChange,
  onNext,
  onPrevious,
  blueprint
}: CurrentProcessStepProps) {
  // Get questions from blueprint or use defaults
  const getQuestions = (): Question[] => {
    if (blueprint) {
      // Find the current-process section in the blueprint
      const currentProcessSection = blueprint.sections.find(s => s.sectionId === 'current-process')
      if (currentProcessSection) {
        // Extract questions from the QuestionList component
        const questionListComponent = currentProcessSection.components.find(c => c.componentType === 'QuestionList')
        if (questionListComponent && 'questions' in questionListComponent) {
          return questionListComponent.questions
        }
      }
    }
    // Fallback to default questions
    return defaultCurrentProcessQuestions
  }

  const questions = getQuestions()

  const handleQuestionChange = (questionId: string, value: any) => {
    const newData = {
      ...formData,
      currentProcess: {
        ...formData.currentProcess,
        [questionId]: value
      }
    }
    onDataChange(newData)
  }

  const handleSmartPrompt = (questionId: string, prompt: { text: string; question: string }) => {
    // This will be handled by the AI Assistant
    console.log('Smart prompt triggered:', { questionId, prompt })
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-stackmatch-navy mb-6">
          Current Process Requirements
        </h2>

        <div className="space-y-6">
          <div className="bg-information-blue/10 rounded-lg p-4 mb-6">
            <p className="text-sm text-charcoal">
              <strong>💡 Tip:</strong> The more detail you provide about your current processes, 
              the better vendors can tailor their solutions to your needs. Use the AI assistant 
              to help improve your responses.
            </p>
          </div>

          <QuestionList
            questions={questions}
            values={formData.currentProcess}
            onChange={handleQuestionChange}
            onSmartPromptClick={handleSmartPrompt}
          />
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <Button
          onClick={onNext}
          className="bg-stackmatch-blue hover:bg-stackmatch-blue/90"
        >
          Next Step
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}