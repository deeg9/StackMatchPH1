'use client'

import { useState, useEffect } from 'react'
import { type RfqFormRendererProps, type FormData } from '@/types/rfq-forms'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Save, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

// Import all form components
import { SectionHeader } from './form-components/SectionHeader'
import { InstructionalText } from './form-components/InstructionalText'
import { KeyValueTable } from './form-components/KeyValueTable'
import { QuestionList } from './form-components/QuestionList'

export function RfqFormRenderer({
  blueprint,
  onSubmit,
  initialData = {}
}: RfqFormRendererProps) {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [isSaving, setIsSaving] = useState(false)

  // Auto-save indicator
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  // Handle form data updates
  const handleDataChange = (key: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }))
  }

  // Handle KeyValueTable data
  const handleTableDataChange = (tableId: string, label: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [tableId]: {
        ...(prev[tableId] || {}),
        [label]: value
      }
    }))
  }

  // Handle QuestionList data
  const handleQuestionDataChange = (listId: string, questionId: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [listId]: {
        ...(prev[listId] || {}),
        [questionId]: value
      }
    }))
  }

  // Auto-save every 30 seconds
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      setIsSaving(true)
      // Simulate save
      setTimeout(() => {
        setLastSaved(new Date())
        setIsSaving(false)
      }, 500)
    }, 30000)

    return () => clearInterval(autoSaveInterval)
  }, [formData])

  // Handle form submission
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  // Render individual components based on type
  const renderComponent = (component: any, sectionId: string) => {
    switch (component.componentType) {
      case 'InstructionalText':
        return (
          <InstructionalText
            key={`${sectionId}-${component.componentType}`}
            content={component.content}
          />
        )
      
      case 'KeyValueTable':
        return (
          <KeyValueTable
            key={component.id}
            rows={component.rows}
            values={formData[component.id] || {}}
            onChange={(label, value) => handleTableDataChange(component.id, label, value)}
          />
        )
      
      case 'QuestionList':
        return (
          <QuestionList
            key={component.id}
            questions={component.questions}
            values={formData[component.id] || {}}
            onChange={(questionId, value) => handleQuestionDataChange(component.id, questionId, value)}
          />
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background-gray py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Form Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display-bold text-stackmatch-navy mb-2">
            {blueprint.formTitle}
          </h1>
          <p className="text-medium-gray">
            Complete all sections to submit your qualification questionnaire
          </p>
        </div>

        {/* Auto-save indicator */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-sm text-medium-gray">
            {isSaving ? (
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-stackmatch-blue rounded-full animate-pulse" />
                Saving...
              </span>
            ) : lastSaved ? (
              <span>Last saved: {lastSaved.toLocaleTimeString()}</span>
            ) : (
              <span>Changes will be auto-saved</span>
            )}
          </div>
        </div>

        {/* Form Sections */}
        <div className="space-y-8">
          {blueprint.sections.map((section) => (
            <Card 
              key={section.sectionId}
              className="p-6 shadow-sm border-light-gray animate-fade-in"
            >
              <SectionHeader title={section.sectionTitle} />
              <div className="space-y-6">
                {section.components.map((component) => 
                  renderComponent(component, section.sectionId)
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Form Actions */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => {
              setIsSaving(true)
              setTimeout(() => {
                setLastSaved(new Date())
                setIsSaving(false)
              }, 500)
            }}
          >
            <Save className="w-4 h-4" />
            Save Progress
          </Button>
          
          <Button
            onClick={handleSubmit}
            className={cn(
              "flex items-center gap-2",
              "bg-stackmatch-blue hover:bg-stackmatch-blue/90",
              "text-white"
            )}
          >
            <Send className="w-4 h-4" />
            Submit Questionnaire
          </Button>
        </div>

        {/* Debug: Show form data in development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-12 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Form Data (Debug)</h3>
            <pre className="text-xs text-gray-600 overflow-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}