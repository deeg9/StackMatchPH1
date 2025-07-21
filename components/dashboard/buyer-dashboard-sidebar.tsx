'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SidebarWidget } from '@/components/ui/sidebar-widget'
import { 
  Sparkles,
  TrendingUp,
  AlertCircle,
  ArrowRight,
  Calendar,
  Clock,
  FileText,
  Users,
  MessageSquare,
  Upload,
  Video,
  Bell,
  CalendarDays,
  Lightbulb,
  Target,
  DollarSign,
  Zap
} from 'lucide-react'

export function BuyerDashboardSidebar() {
  // Mock Pending Actions data
  const pendingActions = [
    {
      id: 1,
      title: 'Sign NDA for RetailFlow project',
      project: 'CRM Implementation',
      dueDate: '2024-02-03',
      priority: 'high',
      link: '/deal-rooms/DR-001/documents'
    },
    {
      id: 2,
      title: 'Review proposal from DataCorp',
      project: 'Analytics Platform',
      dueDate: '2024-02-05',
      priority: 'high',
      link: '/proposals/PR-003'
    },
    {
      id: 3,
      title: 'Complete vendor security assessment',
      project: 'New Vendor Onboarding',
      dueDate: '2024-02-07',
      priority: 'medium',
      link: '/vendors/assessment'
    },
    {
      id: 4,
      title: 'Schedule demo with SaaS vendor',
      project: 'HR Management',
      dueDate: '2024-02-10',
      priority: 'low',
      link: '/calendar/schedule'
    },
    {
      id: 5,
      title: 'Approve budget for Q2 licenses',
      project: 'Software Licenses',
      dueDate: '2024-02-12',
      priority: 'medium',
      link: '/budget/approval'
    }
  ]

  const getPendingActionPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500'
      case 'medium':
        return 'bg-orange-500'
      case 'low':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  // Mock AI Insights data
  const aiInsights = [
    {
      id: 1,
      icon: TrendingUp,
      text: 'Your CRM proposals increased 40% this month',
      link: '/analytics'
    },
    {
      id: 2,
      icon: DollarSign,
      text: 'Potential savings of $15K on analytics tools',
      link: '/browse-sellers?category=analytics'
    },
    {
      id: 3,
      icon: Lightbulb,
      text: 'Consider bundling HR and Payroll systems',
      link: '/create-listing'
    },
    {
      id: 4,
      icon: Target,
      text: '3 vendors match your ERP requirements',
      link: '/listings/TEST3'
    }
  ]

  // Mock Upcoming Deadlines data
  const upcomingDeadlines = [
    {
      id: 1,
      title: 'Proposal review deadline',
      project: 'CRM Implementation',
      dueDate: '2024-02-03',
      dueTime: '5:00 PM',
      priority: 'high',
      overdue: false
    },
    {
      id: 2,
      title: 'Contract signature required',
      project: 'Analytics Platform',
      dueDate: '2024-02-05',
      dueTime: '11:59 PM',
      priority: 'high',
      overdue: false
    },
    {
      id: 3,
      title: 'Salesforce renewal',
      project: 'Software Licenses',
      dueDate: '2024-02-15',
      dueTime: 'EOD',
      priority: 'medium',
      overdue: false
    },
    {
      id: 4,
      title: 'Security assessment due',
      project: 'New Vendor Onboarding',
      dueDate: '2024-01-30',
      dueTime: '3:00 PM',
      priority: 'high',
      overdue: true
    },
    {
      id: 5,
      title: 'Quarterly software review',
      project: 'Tech Stack Optimization',
      dueDate: '2024-02-20',
      dueTime: '2:00 PM',
      priority: 'low',
      overdue: false
    }
  ]

  const getPriorityColor = (priority: string, overdue: boolean) => {
    if (overdue) return 'bg-red-500 text-white'
    switch (priority) {
      case 'high':
        return 'bg-attention-orange text-white'
      case 'medium':
        return 'bg-stackmatch-blue text-white'
      case 'low':
        return 'bg-medium-gray text-white'
      default:
        return 'bg-light-gray text-charcoal'
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* AI Insights Card */}
      <SidebarWidget
        title="AI Insights"
        icon={Sparkles}
        actionLabel="View All Insights"
        onAction={() => window.location.href = '/analytics'}
      >
        {aiInsights.map((insight) => {
          const Icon = insight.icon
          return (
            <a
              key={insight.id}
              href={insight.link}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 cursor-pointer group"
            >
              <div className="p-1.5 rounded-full bg-stackmatch-blue/10 group-hover:bg-stackmatch-blue/20 transition-colors">
                <Icon className="w-4 h-4 text-stackmatch-blue" />
              </div>
              <p className="text-sm text-charcoal group-hover:text-stackmatch-navy flex-1">
                {insight.text}
              </p>
            </a>
          )
        })}
      </SidebarWidget>

{/* Quick Actions Card - Hidden for Phase 1 */}

      {/* Pending Actions Card */}
      <SidebarWidget
        title="Pending Actions"
        icon={AlertCircle}
        actionLabel="View All Actions"
        onAction={() => window.location.href = '/actions'}
      >
        {pendingActions.map((action) => (
          <a
            key={action.id}
            href={action.link}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 cursor-pointer group"
          >
            <div className={`w-1 h-12 ${getPendingActionPriorityColor(action.priority)} rounded-full flex-shrink-0`}></div>
            <div className="flex-1 space-y-1">
              <h4 className="text-sm font-medium text-stackmatch-navy group-hover:text-stackmatch-blue">
                {action.title}
              </h4>
              <p className="text-xs text-medium-gray">
                {action.project}
              </p>
              <div className="flex items-center gap-2 text-xs text-medium-gray">
                <Calendar className="w-3 h-3" />
                <span>Due: {action.dueDate}</span>
              </div>
            </div>
          </a>
        ))}
      </SidebarWidget>

      {/* Upcoming Deadlines Card */}
      <SidebarWidget
        title="Upcoming Deadlines"
        icon={Clock}
        actionLabel="View All Deadlines"
        onAction={() => window.location.href = '/deadlines'}
      >
        {upcomingDeadlines.map((deadline) => (
          <div
            key={deadline.id}
            className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors duration-200 space-y-2"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-stackmatch-navy">
                  {deadline.title}
                </h4>
                <p className="text-xs text-medium-gray">
                  {deadline.project}
                </p>
              </div>
              <Badge className={getPriorityColor(deadline.priority, deadline.overdue)}>
                {deadline.overdue ? 'Overdue' : deadline.priority}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-xs text-medium-gray">
              <Calendar className="w-3 h-3" />
              <span>{deadline.dueDate}</span>
              <span>•</span>
              <span>{deadline.dueTime}</span>
              {deadline.overdue && (
                <>
                  <span>•</span>
                  <AlertCircle className="w-3 h-3 text-red-500" />
                </>
              )}
            </div>
          </div>
        ))}
      </SidebarWidget>
    </div>
  )
}