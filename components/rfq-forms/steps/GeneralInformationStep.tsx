'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import { MagicButton } from '../form-components/MagicButton'
import { type StepComponentProps } from '@/types/rfq-wizard'
import { cn } from '@/lib/utils'

export function GeneralInformationStep({
  formData,
  onDataChange,
  onNext,
  isFirstStep
}: StepComponentProps) {
  const [isPrefilling, setIsPrefilling] = useState(false)
  const [highlightedFields, setHighlightedFields] = useState<string[]>([])

  const handlePrefill = async () => {
    setIsPrefilling(true)
    
    // Simulate AI prefill from company URL
    setTimeout(() => {
      const prefilledData = {
        ...formData,
        generalInfo: {
          ...formData.generalInfo,
          companyName: 'Acme Corporation',
          primaryContact: {
            name: 'John Smith',
            email: 'john.smith@acme.com',
            phone: '+1 (555) 123-4567'
          }
        }
      }
      
      onDataChange(prefilledData)
      setHighlightedFields(['companyName', 'primaryContact.name', 'primaryContact.email', 'primaryContact.phone'])
      setIsPrefilling(false)
      
      // Remove highlights after 3 seconds
      setTimeout(() => setHighlightedFields([]), 3000)
    }, 1500)
  }

  const handleFieldChange = (field: string, value: string) => {
    const newData = { ...formData }
    
    // Handle nested fields
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      ;(newData.generalInfo as any)[parent][child] = value
    } else {
      ;(newData.generalInfo as any)[field] = value
    }
    
    onDataChange(newData)
  }

  const isFieldHighlighted = (field: string) => highlightedFields.includes(field)

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-stackmatch-navy mb-6">
          General Information
        </h2>

        <div className="space-y-6">
          {/* Project Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-stackmatch-navy">
              Project Title <span className="text-danger-red">*</span>
            </label>
            <Input
              value={formData.generalInfo.projectTitle}
              onChange={(e) => handleFieldChange('projectTitle', e.target.value)}
              placeholder="e.g., ERP System Implementation"
              className={cn(
                "transition-all duration-300",
                isFieldHighlighted('projectTitle') && "ring-2 ring-stackmatch-blue bg-stackmatch-blue/5"
              )}
            />
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-stackmatch-navy">Company Details</h3>
              {formData.generalInfo.companyUrl && (
                <MagicButton
                  text="Pre-fill from URL"
                  onClick={handlePrefill}
                  loading={isPrefilling}
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-medium-gray">
                  Company Name <span className="text-danger-red">*</span>
                </label>
                <Input
                  value={formData.generalInfo.companyName}
                  onChange={(e) => handleFieldChange('companyName', e.target.value)}
                  placeholder="Your company name"
                  className={cn(
                    "transition-all duration-300",
                    isFieldHighlighted('companyName') && "ring-2 ring-stackmatch-blue bg-stackmatch-blue/5"
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-medium-gray">
                  Company URL
                </label>
                <Input
                  value={formData.generalInfo.companyUrl || ''}
                  onChange={(e) => handleFieldChange('companyUrl', e.target.value)}
                  placeholder="https://www.yourcompany.com"
                  type="url"
                />
              </div>
            </div>
          </div>

          {/* Primary Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-stackmatch-navy">Primary Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-medium-gray">
                  Full Name <span className="text-danger-red">*</span>
                </label>
                <Input
                  value={formData.generalInfo.primaryContact.name}
                  onChange={(e) => handleFieldChange('primaryContact.name', e.target.value)}
                  placeholder="John Smith"
                  className={cn(
                    "transition-all duration-300",
                    isFieldHighlighted('primaryContact.name') && "ring-2 ring-stackmatch-blue bg-stackmatch-blue/5"
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-medium-gray">
                  Email <span className="text-danger-red">*</span>
                </label>
                <Input
                  value={formData.generalInfo.primaryContact.email}
                  onChange={(e) => handleFieldChange('primaryContact.email', e.target.value)}
                  placeholder="john@company.com"
                  type="email"
                  className={cn(
                    "transition-all duration-300",
                    isFieldHighlighted('primaryContact.email') && "ring-2 ring-stackmatch-blue bg-stackmatch-blue/5"
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-medium-gray">
                  Phone <span className="text-danger-red">*</span>
                </label>
                <Input
                  value={formData.generalInfo.primaryContact.phone}
                  onChange={(e) => handleFieldChange('primaryContact.phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  type="tel"
                  className={cn(
                    "transition-all duration-300",
                    isFieldHighlighted('primaryContact.phone') && "ring-2 ring-stackmatch-blue bg-stackmatch-blue/5"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Technical Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-stackmatch-navy">Technical Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-medium-gray">
                  Full Name <span className="text-danger-red">*</span>
                </label>
                <Input
                  value={formData.generalInfo.technicalContact.name}
                  onChange={(e) => handleFieldChange('technicalContact.name', e.target.value)}
                  placeholder="Jane Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-medium-gray">
                  Email <span className="text-danger-red">*</span>
                </label>
                <Input
                  value={formData.generalInfo.technicalContact.email}
                  onChange={(e) => handleFieldChange('technicalContact.email', e.target.value)}
                  placeholder="jane@company.com"
                  type="email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-medium-gray">
                  Phone <span className="text-danger-red">*</span>
                </label>
                <Input
                  value={formData.generalInfo.technicalContact.phone}
                  onChange={(e) => handleFieldChange('technicalContact.phone', e.target.value)}
                  placeholder="+1 (555) 123-4568"
                  type="tel"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex justify-end">
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