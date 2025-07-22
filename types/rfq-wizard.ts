// RFQ Wizard Type Definitions

export type WizardStep = 1 | 2 | 3 | 4 | 5

export interface WizardState {
  currentStep: WizardStep
  completedSteps: WizardStep[]
  formData: StepFormData
  completenessScore: number
  isValid: boolean
}

export interface StepFormData {
  // Step 1: General Information
  generalInfo: {
    projectTitle: string
    companyName: string
    companyUrl?: string
    primaryContact: {
      name: string
      email: string
      phone: string
    }
    technicalContact: {
      name: string
      email: string
      phone: string
    }
  }
  
  // Step 2: Project Scope, Budget & Timeline
  projectScope: {
    primaryChallenges: string
    desiredOutcomes: string
    successMetrics: SuccessMetric[]
    targetGoLiveDate: string
    implementationPhases: ImplementationPhase[]
    budgetRange: {
      min: number | undefined
      max: number | undefined
    }
    budgetBreakdown: BudgetBreakdownItem[]
    evaluationCriteria: EvaluationCriterion[]
  }
  
  // Step 3: Current Process Requirements
  currentProcess: {
    [questionId: string]: any // Dynamic based on blueprint
  }
  
  // Step 4: Additional Process Requirements
  additionalProcess: {
    [questionId: string]: any // Dynamic based on blueprint
  }
}

export interface SuccessMetric {
  id: string
  value: string // Changed from 'metric' to 'value' to match DynamicListItem
  target?: string
}

export interface ImplementationPhase {
  id: string
  value: string // Changed from 'name' to 'value' to match DynamicListItem
  duration?: string // e.g., "3 months", "6 weeks"
  description?: string
}

export interface BudgetBreakdownItem {
  id: string
  key: string // Changed from 'category' to 'key' to match DynamicKeyValueItem
  value: number // Changed from 'amount' to 'value' to match DynamicKeyValueItem
  percentage?: number
}

export interface EvaluationCriterion {
  id: string
  criterion: string
  weight: number // Percentage (0-100)
}

// Magic Button Types
export interface MagicButtonAction {
  type: 'prefill' | 'enrich' | 'improve' | 'example' | 'suggest'
  fieldId: string
  context: any
}

export interface ProactivePrefillData {
  companyName: string
  primaryContact?: {
    name: string
    email: string
  }
  companyUrl?: string
  industry?: string
  size?: string
}

export interface DataEnrichmentSuggestion {
  type: 'success_metrics' | 'budget_breakdown' | 'evaluation_criteria' | 'integrations'
  suggestions: string[]
  context: string
}

export interface ImproveWritingResult {
  original: string
  improved: string
  suggestions: string[]
}

export interface ShowExampleResult {
  fieldId: string
  example: string
  explanation: string
}

// Step Component Props
export interface StepComponentProps {
  formData: StepFormData
  onDataChange: (data: Partial<StepFormData>) => void
  onNext: () => void
  onPrevious: () => void
  isFirstStep: boolean
  isLastStep: boolean
}

// Completeness Calculation
export interface CompletenessConfig {
  weights: {
    generalInfo: number
    projectScope: number
    currentProcess: number
    additionalProcess: number
  }
  requiredFields: {
    [step: string]: string[]
  }
  optionalFields: {
    [step: string]: string[]
  }
}