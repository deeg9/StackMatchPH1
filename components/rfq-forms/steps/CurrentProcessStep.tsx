'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { QuestionList } from '../form-components/QuestionList'
import { KeyValueTable } from '../form-components/KeyValueTable'
import { InstructionalText } from '../form-components/InstructionalText'
import { type StepComponentProps } from '@/types/rfq-wizard'
import { type Question, type RfqFormBlueprint, type FormSection } from '@/types/rfq-forms'

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
  // Get the first half of blueprint sections for current process
  const getCurrentProcessSections = (): FormSection[] => {
    if (blueprint && blueprint.sections.length > 0) {
      // Take the first half of sections (rounded up)
      const halfIndex = Math.ceil(blueprint.sections.length / 2)
      return blueprint.sections.slice(0, halfIndex)
    }
    return []
  }

  const sections = getCurrentProcessSections()
  const hasBlueprint = sections.length > 0

  const handleQuestionChange = (componentId: string, questionId: string, value: any) => {
    const newData = {
      ...formData,
      currentProcess: {
        ...formData.currentProcess,
        [`${componentId}_${questionId}`]: value
      }
    }
    onDataChange(newData)
  }

  const handleTableChange = (componentId: string, label: string, value: string) => {
    const newData = {
      ...formData,
      currentProcess: {
        ...formData.currentProcess,
        [`${componentId}_${label}`]: value
      }
    }
    onDataChange(newData)
  }

  const handleSmartPrompt = (questionId: string, prompt: { text: string; question: string }) => {
    // This will be handled by the AI Assistant
    console.log('Smart prompt triggered:', { questionId, prompt })
  }

  // Render component based on type
  const renderComponent = (component: any, sectionId: string) => {
    const componentKey = `${sectionId}_${component.id || component.componentType}`
    
    switch (component.componentType) {
      case 'InstructionalText':
        return (
          <InstructionalText
            key={componentKey}
            content={component.content}
          />
        )
      
      case 'KeyValueTable':
        const tableValues: { [key: string]: string } = {}
        // Extract values for this specific table
        Object.entries(formData.currentProcess || {}).forEach(([key, value]) => {
          if (key.startsWith(`${component.id}_`)) {
            const label = key.replace(`${component.id}_`, '')
            tableValues[label] = value as string
          }
        })
        return (
          <KeyValueTable
            key={componentKey}
            rows={component.rows}
            values={tableValues}
            onChange={(label, value) => handleTableChange(component.id, label, value)}
          />
        )
      
      case 'QuestionList':
        const questionValues: { [key: string]: any } = {}
        // Extract values for this specific question list
        Object.entries(formData.currentProcess || {}).forEach(([key, value]) => {
          if (key.startsWith(`${component.id}_`)) {
            const questionId = key.replace(`${component.id}_`, '')
            questionValues[questionId] = value
          }
        })
        return (
          <QuestionList
            key={componentKey}
            questions={component.questions}
            values={questionValues}
            onChange={(questionId, value) => handleQuestionChange(component.id, questionId, value)}
            onSmartPromptClick={handleSmartPrompt}
          />
        )
      
      default:
        return null
    }
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

          {hasBlueprint ? (
            // Render blueprint sections
            sections.map((section) => (
              <div key={section.sectionId} className="space-y-6">
                <h3 className="text-lg font-semibold text-stackmatch-navy">
                  {section.sectionTitle}
                </h3>
                {section.components.map((component) => 
                  renderComponent(component, section.sectionId)
                )}
              </div>
            ))
          ) : (
            // Fallback to default questions
            <QuestionList
              questions={defaultCurrentProcessQuestions}
              values={formData.currentProcess}
              onChange={(questionId, value) => handleQuestionChange('default', questionId, value)}
              onSmartPromptClick={handleSmartPrompt}
            />
          )}
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