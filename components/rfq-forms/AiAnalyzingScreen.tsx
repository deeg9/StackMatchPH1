'use client'

import { useState, useEffect } from 'react'
import { 
  Sparkles, 
  Globe,
  FileText,
  Database,
  CheckCircle,
  Brain,
  Zap,
  Loader2,
  Target,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Award
} from 'lucide-react'

interface AiAnalyzingScreenProps {
  onComplete: () => void
  categoryName?: string
}

interface AnalysisStep {
  id: string
  message: string
  duration: number
}

const analysisSteps: AnalysisStep[] = [
  {
    id: 'website',
    message: 'Analyzing your website to understand your business model...',
    duration: 2500
  },
  {
    id: 'document',
    message: 'Scanning your document for key requirements...',
    duration: 2000
  },
  {
    id: 'database',
    message: 'Cross-referencing with data from 500+ similar RFQs...',
    duration: 3000
  },
  {
    id: 'checklist',
    message: 'Populating your requirements checklist...',
    duration: 2000
  },
  {
    id: 'draft',
    message: 'Preparing your draft RFQ...',
    duration: 2000
  },
  {
    id: 'finalize',
    message: 'Finalizing AI recommendations...',
    duration: 1500
  }
]

const didYouKnowTips = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    text: "Companies using AI-assisted RFQ creation see 40% faster vendor response times and 60% more relevant proposals."
  },
  {
    icon: <Clock className="h-5 w-5" />,
    text: "The average RFQ takes 8-12 hours to create manually. With AI assistance, this drops to under 1 hour."
  },
  {
    icon: <Users className="h-5 w-5" />,
    text: "Well-structured RFQs receive 3x more vendor responses than generic templates."
  },
  {
    icon: <Shield className="h-5 w-5" />,
    text: "Including clear evaluation criteria in your RFQ reduces vendor selection time by 50%."
  },
  {
    icon: <Award className="h-5 w-5" />,
    text: "RFQs with detailed requirements have a 75% higher success rate in finding the right vendor match."
  },
  {
    icon: <Target className="h-5 w-5" />,
    text: "AI can identify missing requirements that cause 90% of project delays and budget overruns."
  }
]

export function AiAnalyzingScreen({ onComplete, categoryName = 'software' }: AiAnalyzingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])
  const [currentTipIndex, setCurrentTipIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  // Process analysis steps
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const processNextStep = () => {
      if (currentStep < analysisSteps.length) {
        const step = analysisSteps[currentStep]
        
        timeoutId = setTimeout(() => {
          setCompletedSteps(prev => [...prev, step.id])
          setCurrentStep(prev => prev + 1)
          setProgress((currentStep + 1) / analysisSteps.length * 100)
        }, step.duration)
      } else {
        // All steps completed
        timeoutId = setTimeout(() => {
          onComplete()
        }, 500)
      }
    }

    processNextStep()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [currentStep, onComplete])

  // Rotate tips
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex(prev => (prev + 1) % didYouKnowTips.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  const currentTip = didYouKnowTips[currentTipIndex]

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 py-12 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-stackmatch-blue to-trust-green rounded-full flex items-center justify-center animate-pulse">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-stackmatch-navy">
            AI is Analyzing Your Information
          </h1>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Creating a comprehensive, personalized RFQ draft based on your business context.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {analysisSteps.map((step, index) => {
            const isActive = index === currentStep
            const isCompleted = completedSteps.includes(step.id)
            const isPending = index > currentStep

            return (
              <div
                key={step.id}
                className={`
                  flex items-center gap-4 p-4 rounded-lg transition-all duration-500
                  ${isActive ? 'bg-stackmatch-blue/5 border-2 border-stackmatch-blue shadow-sm' : ''}
                  ${isCompleted ? 'bg-trust-green/5 border-2 border-trust-green' : ''}
                  ${isPending ? 'opacity-50' : ''}
                `}
              >
                {/* Icon */}
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${isCompleted ? 'bg-trust-green text-white' : ''}
                  ${isActive ? 'bg-stackmatch-blue text-white' : ''}
                  ${isPending ? 'bg-light-gray text-medium-gray' : ''}
                `}>
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : isActive ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    <div className="w-2 h-2 bg-current rounded-full" />
                  )}
                </div>

                {/* Message */}
                <div className="flex-1">
                  <p className={`
                    text-base font-medium transition-colors duration-300
                    ${isCompleted ? 'text-trust-green' : ''}
                    ${isActive ? 'text-stackmatch-blue' : ''}
                    ${isPending ? 'text-medium-gray' : ''}
                  `}>
                    {step.message}
                  </p>
                </div>

                {/* Status indicator */}
                {isActive && (
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-stackmatch-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-stackmatch-blue rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-stackmatch-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto space-y-2">
          <div className="flex justify-between text-sm text-medium-gray">
            <span>Processing your {categoryName} requirements...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-stackmatch-blue to-trust-green rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Did You Know Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-trust-green/5 border border-trust-green/20 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="text-trust-green mt-0.5">
                {currentTip.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-stackmatch-navy flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-trust-green" />
                  Did you know?
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  {currentTip.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}