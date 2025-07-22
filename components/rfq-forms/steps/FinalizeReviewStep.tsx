'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { type StepComponentProps } from '@/types/rfq-wizard'
import { cn } from '@/lib/utils'

export function FinalizeReviewStep({
  formData,
  onDataChange,
  onNext,
  onPrevious,
  isLastStep
}: StepComponentProps) {
  // Calculate section completeness
  const getSectionCompleteness = (section: string) => {
    switch (section) {
      case 'generalInfo':
        const gi = formData.generalInfo
        const filledFields = [
          gi.projectTitle,
          gi.companyName,
          gi.primaryContact.name,
          gi.primaryContact.email,
          gi.technicalContact.name,
          gi.technicalContact.email
        ].filter(Boolean).length
        return (filledFields / 6) * 100
      
      case 'projectScope':
        const ps = formData.projectScope
        const hasBasics = ps.primaryChallenges && ps.desiredOutcomes && ps.targetGoLiveDate
        const hasMetrics = ps.successMetrics.length > 0
        const hasBudget = ps.budgetRange.min && ps.budgetRange.max
        const hasCriteria = ps.evaluationCriteria.length > 0
        const score = [hasBasics, hasMetrics, hasBudget, hasCriteria].filter(Boolean).length
        return (score / 4) * 100
      
      case 'currentProcess':
        const cpKeys = Object.keys(formData.currentProcess)
        return cpKeys.length > 0 ? Math.min((cpKeys.length / 5) * 100, 100) : 0
      
      case 'additionalProcess':
        const apKeys = Object.keys(formData.additionalProcess)
        return apKeys.length > 0 ? Math.min((apKeys.length / 6) * 100, 100) : 0
      
      default:
        return 0
    }
  }

  const handleSubmit = () => {
    // This would submit the RFQ
    onNext()
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not specified'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="space-y-6">
      {/* Final Quality Check */}
      <Card className="p-6 bg-gradient-to-r from-stackmatch-blue/5 to-trust-green/5">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-trust-green mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-stackmatch-navy mb-2">
              Final Quality Check
            </h3>
            <p className="text-sm text-medium-gray mb-4">
              Your RFQ is nearly complete. Review the summary below and make any final adjustments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="bg-white">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                General Info: {Math.round(getSectionCompleteness('generalInfo'))}%
              </Badge>
              <Badge variant="outline" className="bg-white">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Project Scope: {Math.round(getSectionCompleteness('projectScope'))}%
              </Badge>
              <Badge variant="outline" className="bg-white">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Current Process: {Math.round(getSectionCompleteness('currentProcess'))}%
              </Badge>
              <Badge variant="outline" className="bg-white">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Additional Requirements: {Math.round(getSectionCompleteness('additionalProcess'))}%
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* RFQ Summary */}
      <div className="space-y-6">
        {/* General Information */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-stackmatch-navy mb-4">
            General Information
          </h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-medium-gray">Project Title</dt>
              <dd className="text-sm text-charcoal mt-1">{formData.generalInfo.projectTitle || 'Not specified'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-medium-gray">Company</dt>
              <dd className="text-sm text-charcoal mt-1">{formData.generalInfo.companyName || 'Not specified'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-medium-gray">Primary Contact</dt>
              <dd className="text-sm text-charcoal mt-1">
                {formData.generalInfo.primaryContact.name || 'Not specified'}<br />
                {formData.generalInfo.primaryContact.email}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-medium-gray">Technical Contact</dt>
              <dd className="text-sm text-charcoal mt-1">
                {formData.generalInfo.technicalContact.name || 'Not specified'}<br />
                {formData.generalInfo.technicalContact.email}
              </dd>
            </div>
          </dl>
        </Card>

        {/* Project Scope */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-stackmatch-navy mb-4">
            Project Scope & Timeline
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-medium-gray mb-2">Primary Challenges</h4>
              <p className="text-sm text-charcoal whitespace-pre-wrap">
                {formData.projectScope.primaryChallenges || 'Not specified'}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-medium-gray mb-2">Desired Outcomes</h4>
              <p className="text-sm text-charcoal whitespace-pre-wrap">
                {formData.projectScope.desiredOutcomes || 'Not specified'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-medium-gray mb-2">Target Go-Live</h4>
                <p className="text-sm text-charcoal">{formatDate(formData.projectScope.targetGoLiveDate)}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-medium-gray mb-2">Budget Range</h4>
                <p className="text-sm text-charcoal">
                  ${formData.projectScope.budgetRange.min?.toLocaleString() || '0'} - 
                  ${formData.projectScope.budgetRange.max?.toLocaleString() || '0'}
                </p>
              </div>
            </div>
            {formData.projectScope.successMetrics.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-medium-gray mb-2">Success Metrics</h4>
                <ul className="list-disc list-inside space-y-1">
                  {formData.projectScope.successMetrics.map(metric => (
                    <li key={metric.id} className="text-sm text-charcoal">
                      {metric.value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>

        {/* Requirements Summary */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-stackmatch-navy mb-4">
            Requirements Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-medium-gray mb-2">Current Process Responses</h4>
              <p className="text-sm text-charcoal">
                {Object.keys(formData.currentProcess).length} questions answered
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-medium-gray mb-2">Technical Requirements</h4>
              <p className="text-sm text-charcoal">
                {Object.keys(formData.additionalProcess).length} questions answered
              </p>
            </div>
          </div>
        </Card>

        {/* AI Recommendations */}
        <Card className="p-6 border-stackmatch-blue/20">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-stackmatch-blue mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-stackmatch-navy mb-2">
                AI Recommendations
              </h3>
              <ul className="space-y-2 text-sm text-charcoal">
                <li>✓ Your RFQ provides comprehensive project scope and goals</li>
                <li>✓ Budget and timeline are clearly defined</li>
                {formData.projectScope.successMetrics.length < 3 && (
                  <li>⚠️ Consider adding more success metrics for better vendor alignment</li>
                )}
                {Object.keys(formData.currentProcess).length < 3 && (
                  <li>⚠️ Adding more detail about current processes will help vendors understand your needs</li>
                )}
              </ul>
            </div>
          </div>
        </Card>
      </div>

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
          onClick={handleSubmit}
          className="bg-trust-green hover:bg-trust-green/90"
          size="lg"
        >
          <Send className="w-4 h-4 mr-2" />
          Submit RFQ
        </Button>
      </div>
    </div>
  )
}