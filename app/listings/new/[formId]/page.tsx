'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { NavigationWrapper } from '@/components/navigation/navigation-wrapper'
import { TickerBanner } from '@/components/ticker/ticker-banner'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getBlueprintById } from '@/lib/rfq-blueprints'

// Wizard Components
import { StepperNavigation } from '@/components/rfq-forms/StepperNavigation'
import { AiAssistant } from '@/components/rfq-forms/AiAssistant'
import { RfqDataInputStep } from '@/components/rfq-forms/steps/RfqDataInputStep'
import { GeneralInformationStep } from '@/components/rfq-forms/steps/GeneralInformationStep'
import { ProjectScopeStep } from '@/components/rfq-forms/steps/ProjectScopeStep'
import { CurrentProcessStep } from '@/components/rfq-forms/steps/CurrentProcessStep'
import { AdditionalProcessStep } from '@/components/rfq-forms/steps/AdditionalProcessStep'
import { FinalizeReviewStep } from '@/components/rfq-forms/steps/FinalizeReviewStep'

// Types
import { type WizardState, type StepFormData, type WizardStep } from '@/types/rfq-wizard'
import { type FormSection } from '@/types/rfq-forms'

interface PageProps {
  params: Promise<{ formId: string }>
}

// Initial form data structure
const initialFormData: StepFormData = {
  dataInput: {
    websiteUrl: '',
    linkedinUrl: '',
    documents: []
  },
  generalInfo: {
    projectTitle: '',
    companyName: '',
    companyUrl: '',
    primaryContact: {
      name: '',
      email: '',
      phone: ''
    },
    technicalContact: {
      name: '',
      email: '',
      phone: ''
    }
  },
  projectScope: {
    primaryChallenges: '',
    desiredOutcomes: '',
    successMetrics: [],
    targetGoLiveDate: '',
    implementationPhases: [],
    budgetRange: {
      min: undefined,
      max: undefined
    },
    budgetBreakdown: [],
    evaluationCriteria: []
  },
  currentProcess: {},
  additionalProcess: {}
}

// Step definitions
const wizardSteps = [
  { id: 1, label: 'Let\'s Build Your RFQ', shortLabel: 'Data Input' },
  { id: 2, label: 'General Information', shortLabel: 'General' },
  { id: 3, label: 'Project Scope, Budget & Timeline', shortLabel: 'Scope & Budget' },
  { id: 4, label: 'Current Process Requirements', shortLabel: 'Current Process' },
  { id: 5, label: 'Additional Process Requirements', shortLabel: 'Additional' },
  { id: 6, label: 'Finalize and Review', shortLabel: 'Review' }
]

export default function DynamicRfqFormPage({ params }: PageProps) {
  const router = useRouter()
  const resolvedParams = use(params)
  
  // Load blueprint
  const blueprint = getBlueprintById(resolvedParams.formId)
  
  // Wizard state
  const [wizardState, setWizardState] = useState<WizardState>({
    currentStep: 1,
    completedSteps: [],
    formData: initialFormData,
    completenessScore: 0,
    isValid: false
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [smartPromptHandler, setSmartPromptHandler] = useState<((questionId: string, prompt: { text: string; question: string }) => void) | null>(null)

  // Calculate completeness score whenever form data changes
  useEffect(() => {
    const calculateCompleteness = () => {
      let totalFields = 0
      let filledFields = 0

      // Data Input (10%)
      const di = wizardState.formData.dataInput
      if (di) {
        totalFields += 3
        if (di.websiteUrl) filledFields++
        if (di.linkedinUrl) filledFields++
        if (di.documents.length > 0) filledFields++
      }

      // General Info (20%)
      const gi = wizardState.formData.generalInfo
      totalFields += 7
      if (gi.projectTitle) filledFields++
      if (gi.companyName) filledFields++
      if (gi.companyUrl) filledFields++
      if (gi.primaryContact.name) filledFields++
      if (gi.primaryContact.email) filledFields++
      if (gi.technicalContact.name) filledFields++
      if (gi.technicalContact.email) filledFields++

      // Project Scope (25%)
      const ps = wizardState.formData.projectScope
      totalFields += 8
      if (ps.primaryChallenges) filledFields++
      if (ps.desiredOutcomes) filledFields++
      if (ps.successMetrics.length > 0) filledFields++
      if (ps.targetGoLiveDate) filledFields++
      if (ps.implementationPhases.length > 0) filledFields++
      if (ps.budgetRange.min && ps.budgetRange.max) filledFields++
      if (ps.budgetBreakdown.length > 0) filledFields++
      if (ps.evaluationCriteria.length > 0) filledFields++

      // Current Process (20%)
      totalFields += 5
      const cpCount = Object.keys(wizardState.formData.currentProcess).length
      filledFields += Math.min(cpCount, 5)

      // Additional Process (25%)
      totalFields += 6
      const apCount = Object.keys(wizardState.formData.additionalProcess).length
      filledFields += Math.min(apCount, 6)

      const score = Math.round((filledFields / totalFields) * 100)
      setWizardState(prev => ({ ...prev, completenessScore: score }))
    }

    calculateCompleteness()
  }, [wizardState.formData])

  // Handle step navigation
  const goToStep = (step: WizardStep) => {
    setWizardState(prev => ({ ...prev, currentStep: step }))
  }

  const handleNext = () => {
    if (wizardState.currentStep < 6) {
      setWizardState(prev => ({
        ...prev,
        currentStep: (prev.currentStep + 1) as WizardStep,
        completedSteps: [...new Set([...prev.completedSteps, prev.currentStep as WizardStep])]
      }))
    } else {
      // Handle final submission
      handleFormSubmit()
    }
  }

  const handlePrevious = () => {
    if (wizardState.currentStep > 1) {
      setWizardState(prev => ({
        ...prev,
        currentStep: (prev.currentStep - 1) as WizardStep
      }))
    }
  }

  const handleDataChange = (data: Partial<StepFormData>) => {
    setWizardState(prev => ({
      ...prev,
      formData: { ...prev.formData, ...data }
    }))
  }

  const handleFormSubmit = async () => {
    setIsLoading(true)
    console.log('Submitting RFQ:', wizardState.formData)
    
    // TODO: Integration with existing listing creation API
    setTimeout(() => {
      router.push('/my-listings?success=true')
    }, 1500)
  }

  const handleAIAnalysis = async (data: {
    websiteUrl: string
    linkedinUrl: string
    documents: File[]
  }) => {
    try {
      // TODO: Call AI analysis API
      const response = await fetch('/api/ai-listing/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          websiteUrl: data.websiteUrl,
          linkedinUrl: data.linkedinUrl,
          categoryName: categoryName
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        // Pre-fill form data with AI analysis results
        setWizardState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            generalInfo: {
              ...prev.formData.generalInfo,
              companyName: result.data.companyName || prev.formData.generalInfo.companyName,
              companyUrl: data.websiteUrl || prev.formData.generalInfo.companyUrl
            },
            dataInput: {
              ...prev.formData.dataInput!,
              aiAnalysisResults: result.data
            }
          }
        }))
      }
    } catch (error) {
      console.error('AI analysis error:', error)
    }
  }

  // Get category name from formId
  const categoryName = resolvedParams.formId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  // Render current step component
  const renderStepContent = () => {
    const stepProps = {
      formData: wizardState.formData,
      onDataChange: handleDataChange,
      onNext: handleNext,
      onPrevious: handlePrevious,
      isFirstStep: wizardState.currentStep === 1,
      isLastStep: wizardState.currentStep === 6
    }

    switch (wizardState.currentStep) {
      case 1:
        return <RfqDataInputStep 
          {...stepProps} 
          categoryName={categoryName}
          onAnalyze={handleAIAnalysis}
        />
      case 2:
        return <GeneralInformationStep {...stepProps} />
      case 3:
        return <ProjectScopeStep {...stepProps} />
      case 4:
        return <CurrentProcessStep {...stepProps} blueprint={blueprint} />
      case 5:
        return <AdditionalProcessStep {...stepProps} blueprint={blueprint} />
      case 6:
        return <FinalizeReviewStep {...stepProps} />
      default:
        return null
    }
  }

  // Get current section for AI Assistant
  const getCurrentSection = (): FormSection | undefined => {
    const sectionMap: Record<WizardStep, string> = {
      1: 'data-input',
      2: 'general-info',
      3: 'project-scope',
      4: 'current-process',
      5: 'additional-process',
      6: 'review'
    }
    
    return {
      sectionId: sectionMap[wizardState.currentStep],
      sectionTitle: wizardSteps[wizardState.currentStep - 1].label,
      components: []
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-gray via-white to-background-gray">
      <TickerBanner />
      <NavigationWrapper />

      {/* Header */}
      <div className="bg-white border-b border-light-gray shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => router.push('/create-listing')}
                className="text-stackmatch-blue hover:text-stackmatch-blue/80"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Categories
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-stackmatch-navy">
                  Create Your {categoryName} RFQ
                </h1>
                <p className="text-sm text-medium-gray mt-1">
                  Complete all steps to generate a comprehensive RFQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="bg-white border-b border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StepperNavigation
            steps={wizardSteps}
            currentStep={wizardState.currentStep}
            completedSteps={wizardState.completedSteps}
            onStepClick={(step) => {
              if (wizardState.completedSteps.includes(step as WizardStep) || step < wizardState.currentStep) {
                goToStep(step as WizardStep)
              }
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step Content - Left Side (2/3 width on desktop) */}
          <div className="lg:col-span-2">
            {renderStepContent()}
          </div>

          {/* AI Assistant - Right Side (1/3 width on desktop) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AiAssistant
                currentSection={getCurrentSection()}
                currentQuestions={[]}
                formData={wizardState.formData}
                categoryName={categoryName}
                completenessScore={wizardState.completenessScore}
                onSmartPromptTrigger={setSmartPromptHandler}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="w-16 h-16 border-4 border-stackmatch-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-lg font-medium text-stackmatch-navy">Submitting your RFQ...</p>
          </div>
        </div>
      )}
    </div>
  )
}