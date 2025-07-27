'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  Users, 
  MessageSquare, 
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Leadership {
  name: string
  title: string
  tenure: string
}

interface KeyContactsData {
  leadership: Leadership[]
}

interface KeyContactsProps {
  companyId: string
}

export function KeyContacts({ companyId }: KeyContactsProps) {
  const [data, setData] = useState<KeyContactsData | null>(null)
  const [loading, setLoading] = useState(true)

  // Mock data for key contacts
  const mockData: Record<string, KeyContactsData> = {
    'salesforce': {
      leadership: [
        {
          name: 'Marc Benioff',
          title: 'Chairman & CEO',
          tenure: '25 years'
        },
        {
          name: 'Amy Weaver',
          title: 'President & CFO',
          tenure: '8 years'
        },
        {
          name: 'Brian Millham',
          title: 'President & COO',
          tenure: '12 years'
        }
      ]
    },
    'microsoft': {
      leadership: [
        {
          name: 'Satya Nadella',
          title: 'Chairman & CEO',
          tenure: '10 years'
        },
        {
          name: 'Amy Hood',
          title: 'CFO',
          tenure: '11 years'
        }
      ]
    },
    'oracle': {
      leadership: [
        {
          name: 'Safra Catz',
          title: 'CEO',
          tenure: '25 years'
        },
        {
          name: 'Larry Ellison',
          title: 'Executive Chairman & CTO',
          tenure: '47 years'
        }
      ]
    }
  }

  useEffect(() => {
    const fetchKeyContacts = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/companies/${companyId}/leadership`)
        if (response.ok) {
          const apiData = await response.json()
          setData(apiData)
        } else {
          // Fallback to mock data
          const mock = mockData[companyId] || mockData['salesforce']
          setData(mock)
        }
      } catch (error) {
        console.error('Error fetching key contacts:', error)
        // Fallback to mock data
        const mock = mockData[companyId] || mockData['salesforce']
        setData(mock)
      } finally {
        setLoading(false)
      }
    }

    fetchKeyContacts()
  }, [companyId])

  if (loading || !data) {
    return (
      <Card className="animate-pulse border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="h-6 bg-slate-200 rounded w-32 mb-4"></div>
          <div className="space-y-3">
            <div className="h-20 bg-slate-200 rounded"></div>
            <div className="h-20 bg-slate-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-6 h-6 text-stackmatch-blue" />
          <h3 className="text-xl font-bold text-stackmatch-navy">Key Contacts</h3>
        </div>
        
        <div className="space-y-3">
          {data.leadership.map((contact, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <Avatar className="w-10 h-10">
                <AvatarImage src={`/api/placeholder/40/40`} alt={contact.name} />
                <AvatarFallback className="bg-stackmatch-blue text-white text-sm">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm text-stackmatch-navy truncate">
                    {contact.name}
                  </h4>
                  {index === 0 && (
                    <Badge variant="secondary" className="bg-trust-green/10 text-trust-green text-xs">
                      Primary
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-medium-gray truncate">{contact.title}</p>
                <p className="text-xs text-medium-gray">Tenure: {contact.tenure}</p>
                
                <div className="flex gap-2 mt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 px-2 text-xs text-stackmatch-blue hover:bg-stackmatch-blue/10"
                  >
                    <MessageSquare className="w-3 h-3 mr-1" />
                    Message
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 px-2 text-xs text-stackmatch-blue hover:bg-stackmatch-blue/10"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    Schedule
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}