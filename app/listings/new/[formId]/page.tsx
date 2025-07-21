'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { RfqFormRenderer } from '@/components/rfq-forms/RfqFormRenderer'
import { AiCoPilot } from '@/components/rfq-forms/AiCoPilot'
import { getBlueprintById } from '@/lib/rfq-blueprints'
import { type FormData, type FormSection } from '@/types/rfq-forms'
import { NavigationWrapper } from '@/components/navigation/navigation-wrapper'
import { TickerBanner } from '@/components/ticker/ticker-banner'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PageProps {
  params: Promise<{ formId: string }>
}

export default function DynamicRfqFormPage({ params }: PageProps) {
  const router = useRouter()
  const resolvedParams = use(params)
  const [formData, setFormData] = useState<FormData>({})
  const [currentSection, setCurrentSection] = useState<FormSection | undefined>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load the blueprint
  const blueprint = getBlueprintById(resolvedParams.formId)

  useEffect(() => {
    if (!blueprint) {
      setError('Form not found')
      setIsLoading(false)
      return
    }

    // Set initial section
    if (blueprint.sections.length > 0) {
      setCurrentSection(blueprint.sections[0])
    }
    setIsLoading(false)
  }, [blueprint])

  // Handle form submission
  const handleFormSubmit = async (data: FormData) => {
    console.log('Form submitted:', data)
    
    // TODO: Integration with existing listing creation API
    // For now, redirect to success page
    router.push('/my-listings?success=true')
  }

  // Handle form data updates (for AI Co-Pilot)
  const handleFormDataChange = (newData: FormData) => {
    setFormData(newData)
  }

  // Handle section changes
  const handleSectionChange = (sectionId: string) => {
    const section = blueprint?.sections.find(s => s.sectionId === sectionId)
    setCurrentSection(section)
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background-gray via-white to-background-gray">
        <TickerBanner />
        <NavigationWrapper />
        
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-stackmatch-navy">Form Not Found</h1>
            <p className="text-medium-gray">The requested form could not be found.</p>
            <Button 
              onClick={() => router.push('/create-listing')}
              className="bg-stackmatch-blue hover:bg-stackmatch-blue/90"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background-gray via-white to-background-gray">
        <TickerBanner />
        <NavigationWrapper />
        
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-stackmatch-blue border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-medium-gray">Loading questionnaire...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!blueprint) {
    return null
  }

  // Extract category name from the form title (e.g., "Fixed Assets Management (FAM)" -> "Fixed Assets Management")
  const categoryName = blueprint.formTitle.split('(')[0].trim()

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
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-stackmatch-blue" />
                <h1 className="text-xl font-semibold text-stackmatch-navy">
                  {blueprint.formTitle}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Renderer - Left Side (2/3 width on desktop) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-light-gray">
              <RfqFormRenderer
                blueprint={blueprint}
                onSubmit={handleFormSubmit}
                onDataChange={handleFormDataChange}
                onSectionChange={handleSectionChange}
              />
            </div>
          </div>

          {/* AI Co-Pilot - Right Side (1/3 width on desktop) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AiCoPilot
                currentSection={currentSection}
                currentQuestions={
                  currentSection?.components
                    .filter(c => c.componentType === 'QuestionList' && 'questions' in c)
                    .flatMap(c => 'questions' in c ? c.questions : [])
                }
                formData={formData}
                categoryName={categoryName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}