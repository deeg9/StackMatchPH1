'use client'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface NumberRangeInputProps {
  label: string
  minValue: number | undefined
  maxValue: number | undefined
  onMinChange: (value: number | undefined) => void
  onMaxChange: (value: number | undefined) => void
  minPlaceholder?: string
  maxPlaceholder?: string
  helpText?: string
  prefix?: string // e.g., "$"
  suffix?: string // e.g., "USD"
  step?: number
  className?: string
  required?: boolean
  error?: string
}

export function NumberRangeInput({
  label,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  minPlaceholder = 'Minimum',
  maxPlaceholder = 'Maximum',
  helpText,
  prefix,
  suffix,
  step = 1,
  className,
  required = false,
  error
}: NumberRangeInputProps) {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    onMinChange(value ? parseFloat(value) : undefined)
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    onMaxChange(value ? parseFloat(value) : undefined)
  }

  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm font-medium text-stackmatch-navy">
        {label}
        {required && <span className="text-danger-red ml-1">*</span>}
      </label>

      {helpText && (
        <p className="text-sm text-medium-gray">{helpText}</p>
      )}

      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="relative">
            {prefix && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-medium-gray">
                {prefix}
              </span>
            )}
            <Input
              type="number"
              value={minValue || ''}
              onChange={handleMinChange}
              placeholder={minPlaceholder}
              step={step}
              className={cn(
                prefix && "pl-8",
                suffix && "pr-12",
                error && "border-danger-red"
              )}
            />
            {suffix && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-gray text-sm">
                {suffix}
              </span>
            )}
          </div>
        </div>

        <span className="text-medium-gray">to</span>

        <div className="flex-1">
          <div className="relative">
            {prefix && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-medium-gray">
                {prefix}
              </span>
            )}
            <Input
              type="number"
              value={maxValue || ''}
              onChange={handleMaxChange}
              placeholder={maxPlaceholder}
              step={step}
              className={cn(
                prefix && "pl-8",
                suffix && "pr-12",
                error && "border-danger-red"
              )}
            />
            {suffix && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-gray text-sm">
                {suffix}
              </span>
            )}
          </div>
        </div>
      </div>

      {error && (
        <p className="text-sm text-danger-red">{error}</p>
      )}

      {/* Validation warning */}
      {minValue && maxValue && minValue > maxValue && (
        <p className="text-sm text-attention-orange">
          Minimum value should be less than maximum value
        </p>
      )}
    </div>
  )
}