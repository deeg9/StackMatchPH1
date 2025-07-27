'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin } from 'lucide-react'

interface GlobalOfficesData {
  offices: string[]
}

interface GlobalOfficesProps {
  companyId: string
}

export function GlobalOffices({ companyId }: GlobalOfficesProps) {
  const [data, setData] = useState<GlobalOfficesData | null>(null)
  const [loading, setLoading] = useState(true)

  // Mock data for global offices
  const mockData: Record<string, GlobalOfficesData> = {
    'salesforce': {
      offices: [
        'San Francisco, CA (HQ)',
        'Indianapolis, IN',
        'Atlanta, GA',
        'Chicago, IL',
        'New York, NY',
        'London, UK',
        'Tokyo, Japan',
        'Sydney, Australia'
      ]
    },
    'microsoft': {
      offices: [
        'Redmond, WA (HQ)',
        'Mountain View, CA',
        'New York, NY',
        'Austin, TX',
        'Dublin, Ireland',
        'Bangalore, India',
        'Shanghai, China'
      ]
    },
    'oracle': {
      offices: [
        'Austin, TX (HQ)',
        'Redwood City, CA',
        'Seattle, WA',
        'Denver, CO',
        'London, UK',
        'Dubai, UAE',
        'Singapore'
      ]
    }
  }

  useEffect(() => {
    const fetchGlobalOffices = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/companies/${companyId}/offices`)
        if (response.ok) {
          const apiData = await response.json()
          setData(apiData)
        } else {
          // Fallback to mock data
          const mock = mockData[companyId] || mockData['salesforce']
          setData(mock)
        }
      } catch (error) {
        console.error('Error fetching global offices:', error)
        // Fallback to mock data
        const mock = mockData[companyId] || mockData['salesforce']
        setData(mock)
      } finally {
        setLoading(false)
      }
    }

    fetchGlobalOffices()
  }, [companyId])

  if (loading || !data) {
    return (
      <Card className="animate-pulse border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="h-6 bg-slate-200 rounded w-32 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 bg-slate-200 rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-6 h-6 text-stackmatch-blue" />
          <h3 className="text-xl font-bold text-stackmatch-navy">Global Offices</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.offices.map((office, index) => (
            <Badge key={index} variant="outline" className="justify-start p-3 border-slate-300">
              <MapPin className="w-3 h-3 mr-2 text-stackmatch-blue" />
              {office}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}