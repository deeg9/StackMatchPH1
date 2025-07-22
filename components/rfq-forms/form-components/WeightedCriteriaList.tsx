'use client'

import { useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus, X, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WeightedCriterion {
  id: string
  criterion: string
  weight: number
}

interface WeightedCriteriaListProps {
  label: string
  items: WeightedCriterion[]
  onChange: (items: WeightedCriterion[]) => void
  placeholder?: string
  helpText?: string
  className?: string
  suggestedCriteria?: string[]
}

export function WeightedCriteriaList({
  label,
  items,
  onChange,
  placeholder = 'Evaluation criterion',
  helpText,
  className,
  suggestedCriteria = []
}: WeightedCriteriaListProps) {
  const totalWeight = items.reduce((sum, item) => sum + (item.weight || 0), 0)
  const isValidTotal = totalWeight === 100

  // Auto-adjust weights when adding/removing items
  const redistributeWeights = (updatedItems: WeightedCriterion[]) => {
    if (updatedItems.length === 0) return updatedItems
    
    const equalWeight = Math.floor(100 / updatedItems.length)
    const remainder = 100 - (equalWeight * updatedItems.length)
    
    return updatedItems.map((item, index) => ({
      ...item,
      weight: equalWeight + (index === 0 ? remainder : 0)
    }))
  }

  const addItem = (criterion?: string) => {
    const newItem: WeightedCriterion = {
      id: `criterion-${Date.now()}`,
      criterion: criterion || '',
      weight: 0
    }
    
    const updatedItems = [...items, newItem]
    onChange(redistributeWeights(updatedItems))
  }

  const removeItem = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id)
    onChange(redistributeWeights(updatedItems))
  }

  const updateItem = (id: string, field: keyof WeightedCriterion, value: any) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    )
    onChange(updatedItems)
  }

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-stackmatch-navy">
          {label}
        </label>
        <div className="flex items-center gap-2">
          {!isValidTotal && items.length > 0 && (
            <span className="flex items-center gap-1 text-xs text-danger-red">
              <AlertCircle className="w-3 h-3" />
              Must total 100%
            </span>
          )}
          <span className={cn(
            "text-sm font-medium",
            isValidTotal ? "text-trust-green" : "text-medium-gray"
          )}>
            Total: {totalWeight}%
          </span>
        </div>
      </div>

      {helpText && (
        <p className="text-sm text-medium-gray">{helpText}</p>
      )}

      {/* Suggested criteria */}
      {suggestedCriteria.length > 0 && items.length === 0 && (
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-medium-gray">Common criteria:</span>
          {suggestedCriteria.map((criterion) => (
            <button
              key={criterion}
              type="button"
              onClick={() => addItem(criterion)}
              className="text-xs px-2 py-1 rounded bg-stackmatch-blue/10 text-stackmatch-blue hover:bg-stackmatch-blue/20 transition-colors"
            >
              + {criterion}
            </button>
          ))}
        </div>
      )}

      {/* Criteria list */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-2 p-3 bg-background-gray rounded-lg"
          >
            <span className="text-sm font-medium text-medium-gray w-6">
              {index + 1}.
            </span>
            
            <Input
              value={item.criterion}
              onChange={(e) => updateItem(item.id, 'criterion', e.target.value)}
              placeholder={placeholder}
              className="flex-1"
            />
            
            <div className="flex items-center gap-1">
              <Input
                type="number"
                value={item.weight || ''}
                onChange={(e) => updateItem(item.id, 'weight', parseInt(e.target.value) || 0)}
                className="w-16 text-center"
                min="0"
                max="100"
              />
              <span className="text-sm text-medium-gray">%</span>
            </div>
            
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className="p-1 rounded text-medium-gray hover:text-danger-red transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => addItem()}
        className="w-full"
      >
        <Plus className="w-4 h-4 mr-1" />
        Add Criterion
      </Button>

      {/* Weight distribution helper */}
      {items.length > 0 && !isValidTotal && (
        <div className="p-3 bg-attention-orange/10 rounded-lg">
          <p className="text-xs text-attention-orange flex items-start gap-1">
            <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
            Weights must add up to exactly 100%. Currently at {totalWeight}%.
          </p>
        </div>
      )}
    </div>
  )
}