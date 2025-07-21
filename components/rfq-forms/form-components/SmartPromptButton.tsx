'use client'

import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SmartPromptButtonProps {
  promptText: string
  onClick: () => void
  className?: string
}

export function SmartPromptButton({ promptText, onClick, className }: SmartPromptButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={onClick}
      className={cn(
        "h-7 px-2 text-xs text-stackmatch-blue hover:text-stackmatch-blue/80 hover:bg-stackmatch-blue/10",
        "border border-stackmatch-blue/20 hover:border-stackmatch-blue/40",
        "transition-all duration-200",
        className
      )}
    >
      <Sparkles className="w-3 h-3 mr-1" />
      {promptText}
    </Button>
  )
}