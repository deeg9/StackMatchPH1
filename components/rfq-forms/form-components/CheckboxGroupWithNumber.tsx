'use client'

import { type CheckboxGroupWithNumberProps, type CheckboxWithNumberValue } from '@/types/rfq-forms'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { HelpCircle } from 'lucide-react'

export function CheckboxGroupWithNumber({
  id,
  label,
  options,
  value,
  onChange,
  error,
  required = false,
  helpText
}: CheckboxGroupWithNumberProps) {
  const handleToggle = (optionLabel: string) => {
    const newValue = value.map(item => {
      if (item.label === optionLabel) {
        return { ...item, checked: !item.checked }
      }
      return item
    })
    
    // If this option doesn't exist in the value array yet, add it
    if (!value.find(item => item.label === optionLabel)) {
      newValue.push({ label: optionLabel, checked: true })
    }
    
    onChange(newValue)
  }

  const handleNumberChange = (optionLabel: string, number: string) => {
    const numValue = number === '' ? undefined : parseInt(number, 10)
    const newValue = value.map(item => {
      if (item.label === optionLabel) {
        return { ...item, number: numValue }
      }
      return item
    })
    
    // If this option doesn't exist in the value array yet, add it
    if (!value.find(item => item.label === optionLabel)) {
      newValue.push({ label: optionLabel, checked: false, number: numValue })
    }
    
    onChange(newValue)
  }

  const getValueForOption = (optionLabel: string): CheckboxWithNumberValue => {
    return value.find(item => item.label === optionLabel) || {
      label: optionLabel,
      checked: false,
      number: undefined
    }
  }

  return (
    <div className="space-y-3 animate-fade-in">
      <div className="flex items-start justify-between">
        <Label 
          htmlFor={id}
          className="text-sm font-medium text-stackmatch-navy"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        {helpText && (
          <div className="group relative">
            <HelpCircle className="w-4 h-4 text-medium-gray hover:text-stackmatch-blue cursor-help" />
            <div className="absolute right-0 top-6 w-64 p-3 bg-white border border-light-gray rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <p className="text-xs text-charcoal">{helpText}</p>
            </div>
          </div>
        )}
      </div>
      <div className="space-y-3">
        {options.map((option) => {
          const optionValue = getValueForOption(option.label)
          return (
            <div key={option.label} className="flex items-center space-x-3">
              <Checkbox
                id={`${id}-${option.label}`}
                checked={optionValue.checked}
                onCheckedChange={() => handleToggle(option.label)}
                className={cn(
                  "border-light-gray data-[state=checked]:bg-stackmatch-blue data-[state=checked]:border-stackmatch-blue",
                  "focus:ring-2 focus:ring-stackmatch-blue/20",
                  error && "border-red-500"
                )}
              />
              <Label
                htmlFor={`${id}-${option.label}`}
                className="text-sm text-charcoal cursor-pointer hover:text-stackmatch-navy transition-colors flex-1"
              >
                {option.label}
              </Label>
              {optionValue.checked && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-medium-gray">Quantity:</span>
                  <Input
                    type="number"
                    value={optionValue.number || ''}
                    onChange={(e) => handleNumberChange(option.label, e.target.value)}
                    className="w-20 h-8 text-sm"
                    placeholder="0"
                    min="0"
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
      {error && (
        <p className="text-sm text-red-500 animate-fade-in">{error}</p>
      )}
    </div>
  )
}