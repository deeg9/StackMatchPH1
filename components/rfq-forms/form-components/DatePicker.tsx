'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface DatePickerProps {
  label: string
  value: string | undefined
  onChange: (date: string | undefined) => void
  placeholder?: string
  helpText?: string
  minDate?: Date
  maxDate?: Date
  className?: string
  required?: boolean
  error?: string
}

export function DatePicker({
  label,
  value,
  onChange,
  placeholder = 'Select date',
  helpText,
  minDate,
  maxDate,
  className,
  required = false,
  error
}: DatePickerProps) {
  const [open, setOpen] = useState(false)
  
  const date = value ? new Date(value) : undefined

  const handleSelect = (selectedDate: Date | undefined) => {
    onChange(selectedDate ? selectedDate.toISOString() : undefined)
    setOpen(false)
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

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-medium-gray",
              error && "border-danger-red"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {error && (
        <p className="text-sm text-danger-red">{error}</p>
      )}
    </div>
  )
}