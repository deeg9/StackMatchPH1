'use client'

import { useState, useEffect } from 'react'
import { GlobalNavigation } from './global-navigation'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  userType: 'buyer' | 'seller'
  isVerified: boolean
  isOnline: boolean
  profileCompletion: number
}

export function NavigationWrapper() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [notificationCount, setNotificationCount] = useState(2)
  const [messageCount, setMessageCount] = useState(0)

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/user/profile')
        if (response.ok) {
          const data = await response.json()
          setUser({
            id: data.id,
            name: data.full_name || 'User',
            email: data.email,
            avatar: data.avatar_url,
            userType: data.user_type || 'buyer',
            isVerified: data.is_verified || false,
            isOnline: true, // Mock online status
            profileCompletion: data.profile_completion || 75
          })
        }
      } catch (error) {
        console.log('No authenticated user')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Show navigation skeleton during loading
  if (loading) {
    return (
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-stackmatch-navy to-stackmatch-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-2xl font-bold text-stackmatch-navy">StackMatch</span>
              </div>
            </div>
            {/* Loading placeholder */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </nav>
    )
  }

  // For Phase 1, show navigation with default user if not authenticated
  const defaultUser = user || {
    id: 'default',
    name: 'User',
    email: 'user@example.com',
    userType: 'buyer' as const,
    isVerified: false,
    isOnline: false,
    profileCompletion: 0
  }

  return (
    <GlobalNavigation
      user={defaultUser}
      notificationCount={notificationCount}
      messageCount={messageCount}
    />
  )
}