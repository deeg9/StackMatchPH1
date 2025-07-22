'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { QuestionList } from '../form-components/QuestionList'
import { MagicButton } from '../form-components/MagicButton'
import { type StepComponentProps } from '@/types/rfq-wizard'
import { type Question, type RfqFormBlueprint } from '@/types/rfq-forms'

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
  // Get questions from blueprint or use defaults
  const getQuestions = (): Question[] => {
    if (blueprint) {
      // Find the additional-process section in the blueprint
      const additionalProcessSection = blueprint.sections.find(s => s.sectionId === 'additional-process')
      if (additionalProcessSection) {
        // Extract questions from the QuestionList component
        const questionListComponent = additionalProcessSection.components.find(c => c.componentType === 'QuestionList')
        if (questionListComponent && 'questions' in questionListComponent) {
          return questionListComponent.questions
        }
      }
    }
    // Fallback to default questions
    return defaultAdditionalProcessQuestions
  }

  const questions = getQuestions()

  const handleQuestionChange = (questionId: string, value: any) => {
    const newData = {
      ...formData,
      additionalProcess: {
        ...formData.additionalProcess,
        [questionId]: value
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
    
    handleQuestionChange('ap_03', formData.additionalProcess['ap_03'] 
      ? formData.additionalProcess['ap_03'] + '\n\n' + suggestedIntegrations 
      : suggestedIntegrations
    )
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

          <QuestionList
            questions={questions}
            values={formData.additionalProcess}
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