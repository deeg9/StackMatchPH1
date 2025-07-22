'use client'

import { Check, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Step {
  id: number
  label: string
  shortLabel?: string
}

interface StepperNavigationProps {
  steps: Step[]
  currentStep: number
  completedSteps: number[]
  onStepClick: (stepNumber: number) => void
}

export function StepperNavigation({
  steps,
  currentStep,
  completedSteps,
  onStepClick
}: StepperNavigationProps) {
  return (
    <div className="w-full px-4 py-6">
      {/* Desktop Stepper */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const stepNumber = index + 1
            const isCompleted = completedSteps.includes(stepNumber)
            const isCurrent = currentStep === stepNumber
            const isClickable = isCompleted || stepNumber < currentStep

            return (
              <div key={step.id} className="flex items-center flex-1">
                <button
                  onClick={() => isClickable && onStepClick(stepNumber)}
                  disabled={!isClickable}
                  className={cn(
                    "relative flex flex-col items-center group",
                    isClickable && "cursor-pointer"
                  )}
                >
                  {/* Step Circle */}
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-200",
                    isCompleted && "bg-trust-green text-white",
                    isCurrent && !isCompleted && "bg-stackmatch-blue text-white ring-4 ring-stackmatch-blue/20",
                    !isCompleted && !isCurrent && "bg-light-gray text-medium-gray",
                    isClickable && !isCurrent && "group-hover:ring-2 group-hover:ring-stackmatch-blue/50"
                  )}>
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span>{stepNumber}</span>
                    )}
                  </div>

                  {/* Step Label */}
                  <div className="mt-3 text-center">
                    <p className={cn(
                      "text-sm font-medium transition-colors",
                      isCurrent && "text-stackmatch-navy",
                      !isCurrent && "text-medium-gray",
                      isClickable && "group-hover:text-stackmatch-blue"
                    )}>
                      {step.label}
                    </p>
                  </div>
                </button>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-4 mt-[-28px]">
                    <div className="h-1 bg-light-gray relative">
                      <div
                        className={cn(
                          "absolute top-0 left-0 h-full bg-trust-green transition-all duration-500",
                          completedSteps.includes(stepNumber + 1) ? "w-full" : "w-0"
                        )}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile Stepper */}
      <div className="md:hidden">
        <div className="space-y-3">
          {steps.map((step, index) => {
            const stepNumber = index + 1
            const isCompleted = completedSteps.includes(stepNumber)
            const isCurrent = currentStep === stepNumber
            const isClickable = isCompleted || stepNumber < currentStep

            return (
              <button
                key={step.id}
                onClick={() => isClickable && onStepClick(stepNumber)}
                disabled={!isClickable}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-lg transition-all",
                  isCurrent && "bg-stackmatch-blue/10 border border-stackmatch-blue",
                  !isCurrent && isClickable && "hover:bg-light-gray",
                  !isClickable && "cursor-default opacity-60"
                )}
              >
                {/* Step Circle */}
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-semibold flex-shrink-0",
                  isCompleted && "bg-trust-green text-white",
                  isCurrent && !isCompleted && "bg-stackmatch-blue text-white",
                  !isCompleted && !isCurrent && "bg-light-gray text-medium-gray"
                )}>
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </div>

                {/* Step Label */}
                <div className="text-left">
                  <p className={cn(
                    "text-sm font-medium",
                    isCurrent && "text-stackmatch-navy",
                    !isCurrent && "text-medium-gray"
                  )}>
                    {step.shortLabel || step.label}
                  </p>
                  {isCurrent && (
                    <p className="text-xs text-medium-gray mt-0.5">Current Step</p>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Mobile Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-medium-gray">Progress</span>
            <span className="font-medium text-stackmatch-navy">
              {Math.round((completedSteps.length / steps.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-light-gray rounded-full h-2">
            <div
              className="bg-gradient-to-r from-stackmatch-blue to-trust-green h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}