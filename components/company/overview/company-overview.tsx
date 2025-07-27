'use client'

import { CompanySnapshot } from './company-snapshot'
import { KeyContacts } from './key-contacts'
import { GlobalOffices } from './global-offices'
import { MetricsCards } from './metrics-cards'
import { FeaturedCaseStudies } from './featured-case-studies'
import { FeaturedProducts } from './featured-products'

interface CompanyOverviewProps {
  companyId: string
}

export function CompanyOverview({ companyId }: CompanyOverviewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Company Snapshot */}
      <CompanySnapshot companyId={companyId} />
      
      {/* Key Contacts */}
      <KeyContacts companyId={companyId} />
      
      {/* Global Offices */}
      <GlobalOffices companyId={companyId} />
      
      {/* At-a-Glance Metrics */}
      <MetricsCards companyId={companyId} />
      
      {/* Featured Case Studies */}
      <FeaturedCaseStudies companyId={companyId} />
      
      {/* Featured Products */}
      <FeaturedProducts companyId={companyId} />
    </div>
  )
}