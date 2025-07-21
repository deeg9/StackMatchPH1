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
  initialData = {},
  onDataChange,
  onSectionChange
}: RfqFormRendererProps & {
  onDataChange?: (data: FormData) => void
  onSectionChange?: (sectionId: string) => void
}) {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [isSaving, setIsSaving] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  // Auto-save indicator
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  // Handle form data updates
  const handleDataChange = (key: string, value: any) => {
    const newData = {
      ...formData,
      [key]: value
    }
    setFormData(newData)
    
    // Notify parent component of data changes
    if (onDataChange) {
      onDataChange(newData)
    }
  }

  // Handle KeyValueTable data
  const handleTableDataChange = (tableId: string, label: string, value: string) => {
    const newData = {
      ...formData,
      [tableId]: {
        ...(formData[tableId] || {}),
        [label]: value
      }
    }
    setFormData(newData)
    
    if (onDataChange) {
      onDataChange(newData)
    }
  }

  // Handle QuestionList data
  const handleQuestionDataChange = (listId: string, questionId: string, value: any) => {
    const newData = {
      ...formData,
      [listId]: {
        ...(formData[listId] || {}),
        [questionId]: value
      }
    }
    setFormData(newData)
    
    if (onDataChange) {
      onDataChange(newData)
    }
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

  // Notify parent when section changes
  useEffect(() => {
    if (onSectionChange && blueprint.sections[currentSectionIndex]) {
      onSectionChange(blueprint.sections[currentSectionIndex].sectionId)
    }
  }, [currentSectionIndex, blueprint.sections, onSectionChange])

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

        {/* Section Navigation */}
        {blueprint.sections.length > 1 && (
          <div className="mb-6 flex items-center justify-center gap-2">
            {blueprint.sections.map((section, index) => (
              <button
                key={section.sectionId}
                onClick={() => setCurrentSectionIndex(index)}
                className={cn(
                  "px-3 py-1 text-sm font-medium rounded-full transition-all",
                  index === currentSectionIndex
                    ? "bg-stackmatch-blue text-white"
                    : "bg-light-gray text-medium-gray hover:bg-stackmatch-blue/10"
                )}
              >
                {index + 1}. {section.sectionTitle}
              </button>
            ))}
          </div>
        )}

        {/* Current Section */}
        <div className="space-y-8">
          {blueprint.sections.length > 0 && (
            <Card 
              key={blueprint.sections[currentSectionIndex].sectionId}
              className="p-6 shadow-sm border-light-gray animate-fade-in"
            >
              <SectionHeader title={blueprint.sections[currentSectionIndex].sectionTitle} />
              <div className="space-y-6">
                {blueprint.sections[currentSectionIndex].components.map((component) => 
                  renderComponent(component, blueprint.sections[currentSectionIndex].sectionId)
                )}
              </div>
            </Card>
          )}
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