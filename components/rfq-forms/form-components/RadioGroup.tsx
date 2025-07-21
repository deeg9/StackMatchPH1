'use client'

import { type RadioGroupProps } from '@/types/rfq-forms'
import { Label } from '@/components/ui/label'
import { RadioGroup as UIRadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { HelpCircle } from 'lucide-react'

export function RadioGroup({
  id,
  label,
  options,
  value,
  onChange,
  error,
  required = false,
  helpText
}: RadioGroupProps & { helpText?: string }) {
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
      <UIRadioGroup
        id={id}
        value={value}
        onValueChange={onChange}
        className="space-y-2"
      >
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem
              value={option}
              id={`${id}-${option}`}
              className={cn(
                "border-light-gray text-stackmatch-blue",
                "focus:ring-2 focus:ring-stackmatch-blue/20",
                error && "border-red-500"
              )}
            />
            <Label
              htmlFor={`${id}-${option}`}
              className="text-sm text-charcoal cursor-pointer hover:text-stackmatch-navy transition-colors"
            >
              {option}
            </Label>
          </div>
        ))}
      </UIRadioGroup>
      {error && (
        <p className="text-sm text-red-500 animate-fade-in">{error}</p>
      )}
    </div>
  )
}