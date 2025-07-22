'use client'

import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MagicButtonProps {
  text: string
  onClick: () => void
  variant?: 'inline' | 'standalone'
  className?: string
  disabled?: boolean
  loading?: boolean
}

export function MagicButton({
  text,
  onClick,
  variant = 'inline',
  className,
  disabled = false,
  loading = false
}: MagicButtonProps) {
  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center gap-1 px-2 py-0.5 rounded",
          "text-xs font-medium",
          "bg-stackmatch-blue/10 text-stackmatch-blue",
          "hover:bg-stackmatch-blue/20 transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
      >
        <Sparkles className={cn("w-3 h-3", loading && "animate-pulse")} />
        {loading ? 'Working...' : text}
      </button>
    )
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "gap-1.5",
        "border-stackmatch-blue/20 text-stackmatch-blue",
        "hover:bg-stackmatch-blue/10 hover:border-stackmatch-blue/30",
        className
      )}
    >
      <Sparkles className={cn("w-4 h-4", loading && "animate-pulse")} />
      {loading ? 'Working...' : text}
    </Button>
  )
}