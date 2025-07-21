'use client'

import React from 'react'
import { ESignatureAddFields } from '@/components/deal-rooms/esignature/esignature-add-fields'

interface AddFieldsPageProps {
  params: Promise<{
    id: string
  }>
  searchParams: Promise<{
    documentId?: string
  }>
}

export default function AddFieldsPage({ params, searchParams }: AddFieldsPageProps) {
  // Since this is a client component, we'll handle the promises differently
  const [resolvedParams, setResolvedParams] = React.useState<{ id: string } | null>(null)
  const [resolvedSearchParams, setResolvedSearchParams] = React.useState<{ documentId?: string } | null>(null)
  
  React.useEffect(() => {
    params.then(setResolvedParams)
    searchParams.then(setResolvedSearchParams)
  }, [params, searchParams])
  
  if (!resolvedParams || !resolvedSearchParams) {
    return <div>Loading...</div>
  }
  // In a real app, you would fetch the document and recipient data based on documentId
  const mockDocument = {
    id: resolvedSearchParams.documentId || '1',
    title: 'Master Service Agreement v3.2',
    pages: 12,
    recipients: [
      {
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah@healthtech.com',
        jobTitle: 'CTO',
        color: '#4A73CC', // StackMatch Blue
        role: 'buyer' as const
      },
      {
        id: '2',
        name: 'Michael Chen',
        email: 'michael@crmexperts.com',
        jobTitle: 'Solutions Architect',
        color: '#F59E0B', // Attention Orange
        role: 'seller' as const
      },
      {
        id: '3',
        name: 'David Kim',
        email: 'david@healthtech.com',
        jobTitle: 'Project Manager',
        color: '#22C55E', // Trust Green
        role: 'buyer' as const
      }
    ]
  }

  return <ESignatureAddFields dealRoomId={resolvedParams.id} document={mockDocument} />
}