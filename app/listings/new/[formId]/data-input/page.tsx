'use client'

import { useState, use } from 'react'
import { useRouter } from 'next/navigation'
import { NavigationWrapper } from '@/components/navigation/navigation-wrapper'
import { TickerBanner } from '@/components/ticker/ticker-banner'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { AiAnalyzingScreen } from '@/components/rfq-forms/AiAnalyzingScreen'
import { RfqDataInputStep } from '@/components/rfq-forms/steps/RfqDataInputStep'

interface PageProps {
  params: Promise<{ formId: string }>
}

export default function DataInputPage({ params }: PageProps) {
  const router = useRouter()
  const resolvedParams = use(params)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  
  // Get category name from formId and remove version suffix (e.g., V1, V2)
  const categoryName = resolvedParams.formId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\s+V\d+$/, '') // Remove version suffix like V1, V2, etc.
  
  // Store data input values locally since this is now a separate page
  const [dataInputValues, setDataInputValues] = useState({
    websiteUrl: '',
    linkedinUrl: '',
    documents: [] as File[]
  })

  const handleAIAnalysis = async (data: {
    websiteUrl: string
    linkedinUrl: string
    documents: File[]
  }) => {
    // Store the data
    setDataInputValues(data)
    
    // Show analyzing screen
    setIsAnalyzing(true)
    
    try {
      // Simulate API call with minimum delay to show animation
      const analysisPromise = fetch('/api/ai-listing/analyze', {
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
      
      // Ensure minimum animation time
      const minimumDelay = new Promise(resolve => setTimeout(resolve, 13000))
      
      const [response] = await Promise.all([analysisPromise, minimumDelay])
      const result = await response.json()
      
      // Store analysis results in sessionStorage to pass to wizard
      if (result.success) {
        sessionStorage.setItem('rfqAnalysisData', JSON.stringify({
          dataInput: data,
          analysisResults: result.data
        }))
      }
    } catch (error) {
      console.error('AI analysis error:', error)
      // Still continue even if API fails
      sessionStorage.setItem('rfqAnalysisData', JSON.stringify({
        dataInput: data,
        analysisResults: null
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-gray via-white to-background-gray">
      <TickerBanner />
      <NavigationWrapper />

      {/* Header - No stepper navigation on this page */}
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
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <RfqDataInputStep
          formData={{
            dataInput: dataInputValues,
            generalInfo: {
              projectTitle: '',
              companyName: '',
              companyUrl: '',
              primaryContact: { name: '', email: '', phone: '' },
              technicalContact: { name: '', email: '', phone: '' }
            },
            projectScope: {
              primaryChallenges: '',
              desiredOutcomes: '',
              successMetrics: [],
              targetGoLiveDate: '',
              implementationPhases: [],
              budgetRange: { min: undefined, max: undefined },
              budgetBreakdown: [],
              evaluationCriteria: []
            },
            currentProcess: {},
            additionalProcess: {}
          }}
          onDataChange={() => {}} // Not needed for standalone page
          onNext={() => {}} // Not needed for standalone page
          onPrevious={() => router.push('/create-listing')} // Go back to category selection
          categoryName={categoryName}
          onAnalyze={handleAIAnalysis}
          isFirstStep={true}
          isLastStep={false}
        />
      </div>

      {/* AI Analyzing Screen */}
      {isAnalyzing && (
        <AiAnalyzingScreen 
          categoryName={categoryName}
          onComplete={() => {
            // Navigate to the main wizard page
            router.push(`/listings/new/${resolvedParams.formId}`)
          }}
        />
      )}
    </div>
  )
}