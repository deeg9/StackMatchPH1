'use client'

import { type TextInputProps } from '@/types/rfq-forms'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function TextInput({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  type = 'text'
}: TextInputProps) {
  return (
    <div className="space-y-2 animate-fade-in">
      <Label 
        htmlFor={id}
        className="text-sm font-medium text-stackmatch-navy"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full",
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