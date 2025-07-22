'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { DynamicList } from '../form-components/DynamicList'
import { DatePicker } from '../form-components/DatePicker'
import { NumberRangeInput } from '../form-components/NumberRangeInput'
import { DynamicKeyValueTable } from '../form-components/DynamicKeyValueTable'
import { WeightedCriteriaList } from '../form-components/WeightedCriteriaList'
import { MagicButton } from '../form-components/MagicButton'
import { type StepComponentProps, type SuccessMetric, type ImplementationPhase, type BudgetBreakdownItem, type EvaluationCriterion } from '@/types/rfq-wizard'

export function ProjectScopeStep({
  formData,
  onDataChange,
  onNext,
  onPrevious
}: StepComponentProps) {
  const handleFieldChange = (field: string, value: any) => {
    const newData = {
      ...formData,
      projectScope: {
        ...formData.projectScope,
        [field]: value
      }
    }
    onDataChange(newData)
  }

  const handleSuggestMetrics = () => {
    // Simulate AI suggestion
    const suggestedMetrics: SuccessMetric[] = [
      { id: 'metric-1', metric: 'Reduce manual data entry by 50%', target: '6 months' },
      { id: 'metric-2', metric: 'Improve processing speed by 75%', target: '3 months' },
      { id: 'metric-3', metric: 'Achieve 99.9% system uptime', target: 'Ongoing' }
    ]
    handleFieldChange('successMetrics', suggestedMetrics)
  }

  const handleSuggestBudget = () => {
    // Simulate AI budget breakdown
    const total = formData.projectScope.budgetRange.max || 100000
    const breakdown: BudgetBreakdownItem[] = [
      { id: 'budget-1', category: 'Software Licenses', amount: total * 0.4, percentage: 40 },
      { id: 'budget-2', category: 'Implementation', amount: total * 0.35, percentage: 35 },
      { id: 'budget-3', category: 'Training', amount: total * 0.15, percentage: 15 },
      { id: 'budget-4', category: 'Support & Maintenance', amount: total * 0.1, percentage: 10 }
    ]
    handleFieldChange('budgetBreakdown', breakdown)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-stackmatch-navy mb-6">
          Project Scope, Budget & Timeline
        </h2>

        <div className="space-y-8">
          {/* Project Goals */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-stackmatch-navy">Project Goals</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-medium-gray">
                Primary Challenges <span className="text-danger-red">*</span>
              </label>
              <Textarea
                value={formData.projectScope.primaryChallenges}
                onChange={(e) => handleFieldChange('primaryChallenges', e.target.value)}
                placeholder="Describe the main challenges your organization is facing..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-medium-gray">
                Desired Outcomes <span className="text-danger-red">*</span>
              </label>
              <Textarea
                value={formData.projectScope.desiredOutcomes}
                onChange={(e) => handleFieldChange('desiredOutcomes', e.target.value)}
                placeholder="What do you hope to achieve with this solution..."
                rows={4}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-medium-gray">Success Metrics</h4>
                <MagicButton
                  text="Suggest Metrics"
                  onClick={handleSuggestMetrics}
                />
              </div>
              <DynamicList
                label="Success Metrics"
                items={formData.projectScope.successMetrics}
                onChange={(items) => handleFieldChange('successMetrics', items)}
                placeholder="e.g., Reduce processing time by 50%"
                helpText="Define measurable success criteria"
                itemLabel={(index) => `Metric ${index + 1}`}
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-stackmatch-navy">Project Timeline</h3>
            
            <DatePicker
              label="Target Go-Live Date"
              value={formData.projectScope.targetGoLiveDate}
              onChange={(date) => handleFieldChange('targetGoLiveDate', date)}
              helpText="When do you need the solution operational?"
              minDate={new Date()}
              required
            />

            <DynamicList
              label="Implementation Phases"
              items={formData.projectScope.implementationPhases}
              onChange={(items) => handleFieldChange('implementationPhases', items)}
              placeholder="e.g., Phase 1: Core Setup (3 months)"
              helpText="Break down your implementation into phases"
              inputType="text"
              itemLabel={(index) => `Phase ${index + 1}`}
            />
          </div>

          {/* Budget */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-stackmatch-navy">Project Budget</h3>
            
            <NumberRangeInput
              label="Total Budget Range"
              minValue={formData.projectScope.budgetRange.min}
              maxValue={formData.projectScope.budgetRange.max}
              onMinChange={(value) => handleFieldChange('budgetRange', { ...formData.projectScope.budgetRange, min: value })}
              onMaxChange={(value) => handleFieldChange('budgetRange', { ...formData.projectScope.budgetRange, max: value })}
              prefix="$"
              suffix="USD"
              required
              helpText="Provide a budget range for the entire project"
            />

            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-medium-gray">Budget Breakdown</h4>
                <MagicButton
                  text="Suggest Breakdown"
                  onClick={handleSuggestBudget}
                  disabled={!formData.projectScope.budgetRange.max}
                />
              </div>
              <DynamicKeyValueTable
                label="Budget Allocation"
                items={formData.projectScope.budgetBreakdown}
                onChange={(items) => handleFieldChange('budgetBreakdown', items)}
                keyPlaceholder="Category"
                valuePlaceholder="Amount"
                valuePrefix="$"
                showPercentage
                calculatePercentage
                suggestedKeys={['Software Licenses', 'Implementation', 'Training', 'Support']}
              />
            </div>
          </div>

          {/* Evaluation Criteria */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-stackmatch-navy">Vendor Evaluation</h3>
            
            <WeightedCriteriaList
              label="Evaluation Criteria"
              items={formData.projectScope.evaluationCriteria}
              onChange={(items) => handleFieldChange('evaluationCriteria', items)}
              helpText="Define how you'll evaluate vendor proposals (weights must total 100%)"
              suggestedCriteria={[
                'Functional Fit',
                'Total Cost of Ownership',
                'Implementation Timeline',
                'Vendor Experience',
                'Support Quality'
              ]}
            />
          </div>
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