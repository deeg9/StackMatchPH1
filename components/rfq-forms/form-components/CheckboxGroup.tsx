'use client'

import { type CheckboxGroupProps } from '@/types/rfq-forms'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

export function CheckboxGroup({
  id,
  label,
  options,
  value,
  onChange,
  error,
  required = false
}: CheckboxGroupProps) {
  const handleToggle = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(v => v !== option)
      : [...value, option]
    onChange(newValue)
  }

  return (
    <div className="space-y-3 animate-fade-in">
      <Label 
        htmlFor={id}
        className="text-sm font-medium text-stackmatch-navy"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`${id}-${option}`}
              checked={value.includes(option)}
              onCheckedChange={() => handleToggle(option)}
              className={cn(
                "border-light-gray data-[state=checked]:bg-stackmatch-blue data-[state=checked]:border-stackmatch-blue",
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
      </div>
      {error && (
        <p className="text-sm text-red-500 animate-fade-in">{error}</p>
      )}
    </div>
  )
}