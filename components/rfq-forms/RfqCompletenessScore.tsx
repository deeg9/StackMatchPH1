'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react'

interface RfqCompletenessScoreProps {
  score: number // 0-100
  className?: string
  showDetails?: boolean
}

export function RfqCompletenessScore({ 
  score, 
  className,
  showDetails = true 
}: RfqCompletenessScoreProps) {
  const [displayScore, setDisplayScore] = useState(0)

  // Animate score changes
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayScore(prev => {
        if (prev < score) {
          return Math.min(prev + 2, score)
        } else if (prev > score) {
          return Math.max(prev - 2, score)
        }
        return prev
      })
    }, 20)

    return () => clearInterval(interval)
  }, [score])

  // Get color based on score
  const getScoreColor = () => {
    if (displayScore >= 80) return 'text-trust-green'
    if (displayScore >= 50) return 'text-attention-orange'
    return 'text-danger-red'
  }

  const getProgressColor = () => {
    if (displayScore >= 80) return 'from-trust-green to-trust-green/80'
    if (displayScore >= 50) return 'from-attention-orange to-attention-orange/80'
    return 'from-danger-red to-danger-red/80'
  }

  const getStatusIcon = () => {
    if (displayScore >= 80) return <CheckCircle2 className="w-4 h-4 text-trust-green" />
    if (displayScore >= 50) return <AlertCircle className="w-4 h-4 text-attention-orange" />
    return <AlertCircle className="w-4 h-4 text-danger-red" />
  }

  const getStatusText = () => {
    if (displayScore >= 80) return 'Excellent'
    if (displayScore >= 50) return 'Good Progress'
    return 'Needs More Detail'
  }

  return (
    <div className={cn("bg-white rounded-lg border border-light-gray p-4", className)}>
      {/* Score Header */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-stackmatch-navy">RFQ Completeness</h4>
        <TrendingUp className="w-4 h-4 text-stackmatch-blue" />
      </div>

      {/* Circular Progress */}
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="w-32 h-32 transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="currentColor"
            strokeWidth="12"
            fill="none"
            className="text-light-gray"
          />
          {/* Progress circle */}
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 56}`}
            strokeDashoffset={`${2 * Math.PI * 56 * (1 - displayScore / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className={cn("transition-all", getProgressColor())} stopColor="currentColor" />
              <stop offset="100%" className={cn("transition-all", getProgressColor())} stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Score Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("text-3xl font-bold transition-colors", getScoreColor())}>
            {displayScore}%
          </span>
          <span className="text-xs text-medium-gray">Complete</span>
        </div>
      </div>

      {showDetails && (
        <>
          {/* Status */}
          <div className="flex items-center justify-center gap-2 mb-3">
            {getStatusIcon()}
            <span className="text-sm font-medium text-charcoal">{getStatusText()}</span>
          </div>

          {/* Tips based on score */}
          <div className="space-y-2 text-xs text-medium-gray">
            {displayScore < 50 && (
              <p className="flex items-start gap-1">
                <span className="text-danger-red">•</span>
                Add more details to your project requirements
              </p>
            )}
            {displayScore < 80 && displayScore >= 50 && (
              <p className="flex items-start gap-1">
                <span className="text-attention-orange">•</span>
                Complete budget and timeline information
              </p>
            )}
            {displayScore >= 80 && (
              <p className="flex items-start gap-1">
                <span className="text-trust-green">•</span>
                Your RFQ is comprehensive and ready
              </p>
            )}
          </div>

          {/* Progress bar (alternative view) */}
          <div className="mt-4 pt-3 border-t border-light-gray">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-medium-gray">Overall Progress</span>
              <span className={cn("font-medium", getScoreColor())}>{displayScore}%</span>
            </div>
            <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full bg-gradient-to-r transition-all duration-500",
                  getProgressColor()
                )}
                style={{ width: `${displayScore}%` }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}