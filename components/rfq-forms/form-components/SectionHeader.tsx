'use client'

import { type SectionHeaderProps } from '@/types/rfq-forms'
import { cn } from '@/lib/utils'

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-6 pb-4 border-b border-light-gray">
      <h2 className={cn(
        "text-2xl font-display-bold text-stackmatch-navy",
        "animate-fade-in"
      )}>
        {title}
      </h2>
    </div>
  )
}