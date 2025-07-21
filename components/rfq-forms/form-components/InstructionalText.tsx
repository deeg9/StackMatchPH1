'use client'

import { type InstructionalTextProps } from '@/types/rfq-forms'
import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export function InstructionalText({ content }: InstructionalTextProps) {
  return (
    <div className={cn(
      "flex items-start gap-3 p-4 mb-6",
      "bg-stackmatch-blue/5 border border-stackmatch-blue/20 rounded-lg",
      "animate-fade-in"
    )}>
      <Info className="w-5 h-5 text-stackmatch-blue mt-0.5 flex-shrink-0" />
      <p className="text-sm text-charcoal leading-relaxed">
        {content}
      </p>
    </div>
  )
}