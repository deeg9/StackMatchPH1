'use client'

import { type RadioGroupProps } from '@/types/rfq-forms'
import { Label } from '@/components/ui/label'
import { RadioGroup as UIRadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

export function RadioGroup({
  id,
  label,
  options,
  value,
  onChange,
  error,
  required = false
}: RadioGroupProps) {
  return (
    <div className="space-y-3 animate-fade-in">
      <Label 
        htmlFor={id}
        className="text-sm font-medium text-stackmatch-navy"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
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