'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Sparkles, 
  Info, 
  CheckCircle2, 
  AlertCircle,
  Lightbulb,
  Target,
  BookOpen,
  MessageSquare,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { type FormSection, type Question, type FormData } from '@/types/rfq-forms'

interface AiCoPilotProps {
  currentSection?: FormSection
  currentQuestions?: Question[]
  formData: FormData
  categoryName: string
}

interface Tip {
  id: string
  type: 'info' | 'success' | 'warning' | 'tip'
  title: string
  content: string
  icon: any
}

// Section-specific tips and guidance
const sectionTips: Record<string, Tip[]> = {
  'general-info': [
    {
      id: '1',
      type: 'info',
      title: 'Company Information',
      content: 'Ensure the company name matches your legal entity. This helps vendors provide accurate pricing and compliance information.',
      icon: Info
    },
    {
      id: '2',
      type: 'tip',
      title: 'NSCorp Record',
      content: 'Having your NSCorp record link handy speeds up vendor verification and can lead to faster proposal turnaround.',
      icon: Lightbulb
    }
  ],
  'sales-qual': [
    {
      id: '3',
      type: 'tip',
      title: 'Be Specific About Current Processes',
      content: 'The more detail you provide about your current depreciation management, the better vendors can tailor their solutions to your needs.',
      icon: Target
    },
    {
      id: '4',
      type: 'warning',
      title: 'Asset Count Matters',
      content: 'If you have over 1,000 assets, consider mentioning this early as it may require enterprise-level solutions.',
      icon: AlertCircle
    },
    {
      id: '5',
      type: 'info',
      title: 'ASC-842 Compliance',
      content: 'If you have lease tracking needs, make sure to mention ASC-842 compliance requirements as this significantly impacts solution selection.',
      icon: BookOpen
    }
  ],
  'sc-qual': [
    {
      id: '6',
      type: 'tip',
      title: 'Capitalization Policy',
      content: 'Be clear about your minimum capitalization threshold (e.g., $5,000). This helps vendors configure their systems appropriately.',
      icon: Target
    },
    {
      id: '7',
      type: 'info',
      title: 'Depreciation Methods',
      content: 'Common methods include: Straight-line, Declining balance, Sum-of-years-digits, and Units of production. List all that apply.',
      icon: Info
    },
    {
      id: '8',
      type: 'success',
      title: 'Reports Are Key',
      content: 'Listing specific reports you need (depreciation schedules, asset registers, tax reports) helps vendors showcase relevant features.',
      icon: CheckCircle2
    }
  ]
}

// Question-specific help
const questionHelp: Record<string, string> = {
  'sq_01': 'Examples: Excel spreadsheets, QuickBooks Fixed Asset Manager, manual journal entries, or specialized software like Sage Fixed Assets.',
  'sq_02': 'Consider all time spent: calculating depreciation, creating journal entries, reconciling, and reviewing. A typical range is 4-16 hours per month.',
  'sq_03': 'Include all tracked assets: furniture, equipment, vehicles, buildings, leasehold improvements, and intangible assets.',
  'scq_02': 'Most companies use thresholds between $1,000-$5,000. Also mention if you have different policies for different asset types.',
  'scq_06': 'List all methods used for book and tax purposes. Note if you need different methods for different asset classes.',
  'scq_11': 'Common reports: Monthly depreciation expense, Asset additions/disposals, Tax depreciation schedules, Asset location reports.'
}

export function AiCoPilot({ 
  currentSection, 
  currentQuestions,
  formData,
  categoryName 
}: AiCoPilotProps) {
  const [activeTip, setActiveTip] = useState<string | null>(null)
  const [sectionProgress, setSectionProgress] = useState(0)

  // Calculate section progress based on filled fields
  useEffect(() => {
    if (currentSection && formData) {
      let totalFields = 0
      let filledFields = 0

      currentSection.components.forEach(component => {
        if (component.componentType === 'KeyValueTable' && 'rows' in component) {
          totalFields += component.rows.length
          const tableData = formData[component.id || ''] as Record<string, string>
          if (tableData) {
            filledFields += Object.values(tableData).filter(v => v && v.trim() !== '').length
          }
        } else if (component.componentType === 'QuestionList' && 'questions' in component) {
          totalFields += component.questions.length
          const questionData = formData[component.id || ''] as Record<string, any>
          if (questionData) {
            filledFields += Object.values(questionData).filter(v => {
              if (typeof v === 'string') return v.trim() !== ''
              if (Array.isArray(v)) return v.length > 0
              return v !== null && v !== undefined
            }).length
          }
        }
      })

      const progress = totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0
      setSectionProgress(progress)
    }
  }, [currentSection, formData])

  const getSectionTips = () => {
    if (!currentSection) return []
    return sectionTips[currentSection.sectionId] || []
  }

  const getIconForTip = (tip: Tip) => {
    const Icon = tip.icon
    return <Icon className={cn(
      "w-5 h-5",
      tip.type === 'info' && "text-stackmatch-blue",
      tip.type === 'success' && "text-trust-green",
      tip.type === 'warning' && "text-attention-orange",
      tip.type === 'tip' && "text-information-blue"
    )} />
  }

  return (
    <Card className="h-full bg-white shadow-lg border-light-gray">
      {/* Header */}
      <div className="p-6 border-b border-light-gray">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-stackmatch-blue to-information-blue rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stackmatch-navy">AI Assistant</h3>
            <p className="text-sm text-medium-gray">Helping you complete your {categoryName} RFQ</p>
          </div>
        </div>

        {/* Section Progress */}
        {currentSection && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-medium-gray">Section Progress</span>
              <span className="font-medium text-stackmatch-navy">{sectionProgress}%</span>
            </div>
            <div className="w-full bg-light-gray rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-stackmatch-blue to-trust-green h-2 rounded-full transition-all duration-500"
                style={{ width: `${sectionProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-6">
          {/* Current Section Info */}
          {currentSection && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-stackmatch-blue/10 text-stackmatch-blue">
                  Current Section
                </Badge>
                <h4 className="font-medium text-stackmatch-navy">
                  {currentSection.sectionTitle}
                </h4>
              </div>

              {/* Section Tips */}
              <div className="space-y-3">
                {getSectionTips().map((tip) => (
                  <div
                    key={tip.id}
                    className={cn(
                      "p-4 rounded-lg border cursor-pointer transition-all duration-200",
                      activeTip === tip.id ? "border-stackmatch-blue bg-stackmatch-blue/5" : "border-light-gray hover:border-stackmatch-blue/50"
                    )}
                    onClick={() => setActiveTip(activeTip === tip.id ? null : tip.id)}
                  >
                    <div className="flex items-start gap-3">
                      {getIconForTip(tip)}
                      <div className="flex-1">
                        <h5 className="font-medium text-sm text-stackmatch-navy mb-1">
                          {tip.title}
                        </h5>
                        <p className="text-sm text-medium-gray leading-relaxed">
                          {tip.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* General Tips */}
          <div className="space-y-3">
            <h4 className="font-medium text-stackmatch-navy flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              General Tips
            </h4>
            <div className="space-y-2">
              <div className="p-3 bg-background-gray rounded-lg">
                <p className="text-sm text-charcoal">
                  💡 <strong>Pro tip:</strong> The more detailed your answers, the more accurate and tailored the vendor proposals will be.
                </p>
              </div>
              <div className="p-3 bg-background-gray rounded-lg">
                <p className="text-sm text-charcoal">
                  ⏱️ <strong>Save time:</strong> Your responses are auto-saved every 30 seconds. Feel free to take breaks and return later.
                </p>
              </div>
              <div className="p-3 bg-background-gray rounded-lg">
                <p className="text-sm text-charcoal">
                  📊 <strong>Better matches:</strong> Vendors appreciate specific requirements. Include numbers, timelines, and success criteria where possible.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <h4 className="font-medium text-stackmatch-navy">Quick Actions</h4>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-between group hover:border-stackmatch-blue"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  View Best Practices Guide
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-between group hover:border-stackmatch-blue"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Get Help from Community
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-6 border-t border-light-gray bg-background-gray">
        <div className="flex items-center gap-2 text-sm text-medium-gray">
          <Sparkles className="w-4 h-4" />
          <span>AI suggestions update as you progress</span>
        </div>
      </div>
    </Card>
  )
}