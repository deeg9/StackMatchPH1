'use client'

import { type TextAreaInputProps } from '@/types/rfq-forms'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { HelpCircle } from 'lucide-react'

export function TextAreaInput({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  rows = 4,
  helpText
}: TextAreaInputProps) {
  return (
    <div className="space-y-2 animate-fade-in">
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
      <Textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          "w-full resize-none",
          "border-light-gray focus:border-stackmatch-blue",
          "focus:ring-2 focus:ring-stackmatch-blue/20",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
        )}
      />
      {error && (
        <p className="text-sm text-red-500 animate-fade-in">{error}</p>
      )}
    </div>
  )
}