'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  Users, 
  MessageSquare, 
  Eye, 
  Star,
  Calendar,
  ExternalLink
} from 'lucide-react'

interface Contact {
  id: string
  name: string
  title: string
  department: string
  email: string
  phone: string
  avatarUrl: string
  isPrimary: boolean
}

interface SimilarVendor {
  id: string
  name: string
  logo: string
  industry: string
  rating: number
  similarity: string
}

interface CompanySidebarProps {
  companyId: string
}

export function CompanySidebar({ companyId }: CompanySidebarProps) {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [similarVendors, setSimilarVendors] = useState<SimilarVendor[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data for different companies
  const mockData: Record<string, { contacts: Contact[], dealRooms: any[], similarVendors: SimilarVendor[] }> = {
    'salesforce': {
      contacts: [
        {
          id: '1',
          name: 'Sarah Chen',
          title: 'Enterprise Account Executive',
          department: 'Sales',
          email: 'sarah.chen@salesforce.com',
          phone: '+1 (555) 123-4567',
          avatarUrl: '/api/placeholder/40/40',
          isPrimary: true
        },
        {
          id: '2',
          name: 'Michael Rodriguez',
          title: 'Solutions Engineer',
          department: 'Presales',
          email: 'michael.rodriguez@salesforce.com',
          phone: '+1 (555) 123-4568',
          avatarUrl: '/api/placeholder/40/40',
          isPrimary: false
        },
        {
          id: '3',
          name: 'Jennifer Kim',
          title: 'Customer Success Manager',
          department: 'Customer Success',
          email: 'jennifer.kim@salesforce.com',
          phone: '+1 (555) 123-4569',
          avatarUrl: '/api/placeholder/40/40',
          isPrimary: false
        }
      ],
      dealRooms: [
        {
          id: 'dr-1',
          name: 'Sales Cloud Implementation',
          status: 'active',
          lastActivity: '2 hours ago',
          participants: 8
        },
        {
          id: 'dr-2',
          name: 'Service Cloud Expansion',
          status: 'completed',
          lastActivity: '3 days ago',
          participants: 6
        }
      ],
      similarVendors: [
        {
          id: 'microsoft',
          name: 'Microsoft',
          logo: '/api/placeholder/32/32',
          industry: 'Cloud Computing',
          rating: 4.7,
          similarity: '85% match'
        },
        {
          id: 'hubspot',
          name: 'HubSpot',
          logo: '/api/placeholder/32/32',
          industry: 'Marketing Automation',
          rating: 4.6,
          similarity: '78% match'
        },
        {
          id: 'oracle',
          name: 'Oracle',
          logo: '/api/placeholder/32/32',
          industry: 'Database & Cloud',
          rating: 4.6,
          similarity: '72% match'
        }
      ]
    },
    'microsoft': {
      contacts: [
        {
          id: '1',
          name: 'David Thompson',
          title: 'Enterprise Sales Director',
          department: 'Sales',
          email: 'david.thompson@microsoft.com',
          phone: '+1 (555) 234-5678',
          avatarUrl: '/api/placeholder/40/40',
          isPrimary: true
        },
        {
          id: '2',
          name: 'Lisa Wang',
          title: 'Technical Specialist',
          department: 'Technical Sales',
          email: 'lisa.wang@microsoft.com',
          phone: '+1 (555) 234-5679',
          avatarUrl: '/api/placeholder/40/40',
          isPrimary: false
        }
      ],
      dealRooms: [
        {
          id: 'dr-3',
          name: 'Microsoft 365 Enterprise',
          status: 'active',
          lastActivity: '1 hour ago',
          participants: 12
        }
      ],
      similarVendors: [
        {
          id: 'salesforce',
          name: 'Salesforce',
          logo: '/api/placeholder/32/32',
          industry: 'Enterprise Software',
          rating: 4.8,
          similarity: '80% match'
        },
        {
          id: 'google',
          name: 'Google Workspace',
          logo: '/api/placeholder/32/32',
          industry: 'Productivity Software',
          rating: 4.5,
          similarity: '75% match'
        }
      ]
    },
    'oracle': {
      contacts: [
        {
          id: '1',
          name: 'Robert Martinez',
          title: 'Senior Sales Manager',
          department: 'Enterprise Sales',
          email: 'robert.martinez@oracle.com',
          phone: '+1 (555) 345-6789',
          avatarUrl: '/api/placeholder/40/40',
          isPrimary: true
        }
      ],
      dealRooms: [],
      similarVendors: [
        {
          id: 'salesforce',
          name: 'Salesforce',
          logo: '/api/placeholder/32/32',
          industry: 'Enterprise Software',
          rating: 4.8,
          similarity: '70% match'
        },
        {
          id: 'sap',
          name: 'SAP',
          logo: '/api/placeholder/32/32',
          industry: 'Enterprise Software',
          rating: 4.5,
          similarity: '68% match'
        }
      ]
    }
  }

  useEffect(() => {
    const fetchSidebarData = async () => {
      setLoading(true)
      try {
        // Try API calls first
        const [contactsRes, similarRes] = await Promise.all([
          fetch(`/api/companies/${companyId}/contacts`),
          fetch(`/api/companies/${companyId}/similar`)
        ])

        if (contactsRes.ok && similarRes.ok) {
          const [contactsData, similarData] = await Promise.all([
            contactsRes.json(),
            similarRes.json()
          ])
          setContacts(contactsData.contacts)
          setSimilarVendors(similarData.vendors)
        } else {
          // Fallback to mock data
          const mock = mockData[companyId] || mockData['salesforce']
          setContacts(mock.contacts)
          setSimilarVendors(mock.similarVendors)
        }
      } catch (error) {
        console.error('Error fetching sidebar data:', error)
        // Fallback to mock data
        const mock = mockData[companyId] || mockData['salesforce']
        setContacts(mock.contacts)
        setSimilarVendors(mock.similarVendors)
      } finally {
        setLoading(false)
      }
    }

    fetchSidebarData()
  }, [companyId])

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-4 bg-slate-200 rounded w-24 mb-3"></div>
              <div className="space-y-3">
                <div className="h-12 bg-slate-200 rounded"></div>
                <div className="h-12 bg-slate-200 rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Key Contacts */}
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-stackmatch-blue" />
            <h3 className="font-semibold text-stackmatch-navy">Key Contacts</h3>
          </div>
          
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                  <AvatarFallback className="bg-stackmatch-blue text-white text-sm">
                    {contact.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm text-stackmatch-navy truncate">
                      {contact.name}
                    </h4>
                    {contact.isPrimary && (
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green text-xs">
                        Primary
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-medium-gray truncate">{contact.title}</p>
                  <p className="text-xs text-medium-gray">{contact.department}</p>
                  
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

      {/* Similar Vendors */}
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-stackmatch-blue" />
            <h3 className="font-semibold text-stackmatch-navy">Users Also Viewed</h3>
          </div>
          
          <div className="space-y-3">
            {similarVendors.map((vendor) => (
              <div key={vendor.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center">
                  <img
                    src={vendor.logo}
                    alt={`${vendor.name} logo`}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const fallback = document.createElement('div')
                        fallback.className = 'w-6 h-6 bg-stackmatch-blue text-white rounded text-xs flex items-center justify-center font-bold'
                        fallback.textContent = vendor.name.charAt(0)
                        parent.appendChild(fallback)
                      }
                    }}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-stackmatch-navy">{vendor.name}</h4>
                  <p className="text-xs text-medium-gray">{vendor.industry}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-stackmatch-navy">{vendor.rating}</span>
                    </div>
                    <Badge variant="secondary" className="bg-stackmatch-blue/10 text-stackmatch-blue text-xs">
                      {vendor.similarity}
                    </Badge>
                  </div>
                </div>
                
                <ExternalLink className="w-4 h-4 text-medium-gray" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}