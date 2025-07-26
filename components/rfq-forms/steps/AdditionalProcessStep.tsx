'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { QuestionList } from '../form-components/QuestionList'
import { KeyValueTable } from '../form-components/KeyValueTable'
import { InstructionalText } from '../form-components/InstructionalText'
import { MagicButton } from '../form-components/MagicButton'
import { type StepComponentProps } from '@/types/rfq-wizard'
import { type Question, type RfqFormBlueprint, type FormSection } from '@/types/rfq-forms'

interface AdditionalProcessStepProps extends StepComponentProps {
  blueprint?: RfqFormBlueprint | null
}

// Default technical/additional questions
const defaultAdditionalProcessQuestions: Question[] = [
  {
    id: 'ap_01',
    questionText: 'What are your technical infrastructure requirements?',
    helpText: 'Include hosting preferences, performance needs, uptime requirements',
    inputType: 'textarea',
    smartPrompts: [
      {
        text: 'Show Example',
        question: 'Can you show me an example of technical infrastructure requirements?'
      }
    ]
  },
  {
    id: 'ap_02',
    questionText: 'What security and compliance standards must be met?',
    inputType: 'checkboxgroup',
    options: [
      'SOC 2 Type II',
      'ISO 27001',
      'HIPAA',
      'GDPR',
      'PCI DSS',
      'FedRAMP',
      'CCPA',
      'Other'
    ]
  },
  {
    id: 'ap_03',
    questionText: 'Which systems need to integrate with the new solution?',
    helpText: 'List all current systems that will need to exchange data',
    inputType: 'textarea',
    smartPrompts: [
      {
        text: 'Common Integrations',
        question: 'What are common system integrations for my industry?'
      }
    ]
  },
  {
    id: 'ap_04',
    questionText: 'What are your data migration requirements?',
    helpText: 'Volume of data, types of data, migration timeline',
    inputType: 'textarea'
  },
  {
    id: 'ap_05',
    questionText: 'What level of customization do you require?',
    inputType: 'radiogroup',
    options: [
      'Out-of-the-box solution preferred',
      'Minor customizations acceptable',
      'Moderate customizations expected',
      'Extensive customizations required'
    ]
  },
  {
    id: 'ap_06',
    questionText: 'What are your training and support requirements?',
    helpText: 'Number of users to train, preferred training methods, ongoing support needs',
    inputType: 'textarea'
  }
]

export function AdditionalProcessStep({
  formData,
  onDataChange,
  onNext,
  onPrevious,
  blueprint
}: AdditionalProcessStepProps) {
  // Get the second half of blueprint sections for additional process
  const getAdditionalProcessSections = (): FormSection[] => {
    if (blueprint && blueprint.sections.length > 0) {
      // Take the second half of sections
      const halfIndex = Math.ceil(blueprint.sections.length / 2)
      return blueprint.sections.slice(halfIndex)
    }
    return []
  }

  const sections = getAdditionalProcessSections()
  const hasBlueprint = sections.length > 0

  const handleQuestionChange = (componentId: string, questionId: string, value: any) => {
    const newData = {
      ...formData,
      additionalProcess: {
        ...formData.additionalProcess,
        [`${componentId}_${questionId}`]: value
      }
    }
    onDataChange(newData)
  }

  const handleTableChange = (componentId: string, label: string, value: string) => {
    const newData = {
      ...formData,
      additionalProcess: {
        ...formData.additionalProcess,
        [`${componentId}_${label}`]: value
      }
    }
    onDataChange(newData)
  }

  const handleSmartPrompt = (questionId: string, prompt: { text: string; question: string }) => {
    // This will be handled by the AI Assistant
    console.log('Smart prompt triggered:', { questionId, prompt })
  }

  const handleSuggestIntegrations = () => {
    // Simulate AI suggestion based on industry
    const suggestedIntegrations = [
      'Salesforce CRM',
      'Microsoft 365',
      'Slack',
      'QuickBooks',
      'Google Workspace'
    ].join('\n')
    
    const key = hasBlueprint ? 'blueprint_ap_03' : 'default_ap_03'
    handleQuestionChange('default', 'ap_03', formData.additionalProcess[key] 
      ? formData.additionalProcess[key] + '\n\n' + suggestedIntegrations 
      : suggestedIntegrations
    )
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
        Object.entries(formData.additionalProcess || {}).forEach(([key, value]) => {
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
        Object.entries(formData.additionalProcess || {}).forEach(([key, value]) => {
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
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-stackmatch-navy">
            Additional Process Requirements
          </h2>
          <MagicButton
            text="Suggest Common Integrations"
            onClick={handleSuggestIntegrations}
            variant="standalone"
          />
        </div>

        <div className="space-y-6">
          <div className="bg-information-blue/10 rounded-lg p-4 mb-6">
            <p className="text-sm text-charcoal">
              <strong>🔧 Technical Details:</strong> This section covers technical, security, 
              and integration requirements. The "Show Example" buttons can help you understand 
              what level of detail to provide.
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
              questions={defaultAdditionalProcessQuestions}
              values={formData.additionalProcess}
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