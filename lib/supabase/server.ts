import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Database } from '@/types/supabase'

export const createClient = async () => {
  // Validate environment variables
  if (!process.env.StackMatch_SUPABASE_URL || !process.env.StackMatch_SUPABASE_ANON_KEY) {
    console.error('Environment variables check:', {
      StackMatch_SUPABASE_URL: !!process.env.StackMatch_SUPABASE_URL,
      StackMatch_SUPABASE_ANON_KEY: !!process.env.StackMatch_SUPABASE_ANON_KEY,
      NODE_ENV: process.env.NODE_ENV
    })
    throw new Error('Missing Supabase environment variables')
  }

  const cookieStore = await cookies()

  return createServerClient<Database>(
    process.env.StackMatch_SUPABASE_URL,
    process.env.StackMatch_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch (error) {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

// Create a service role client for admin operations (server-only)
export const createServiceRoleClient = () => {
  return createServerClient<Database>(
    process.env.StackMatch_SUPABASE_URL!,
    process.env.StackMatch_SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll: () => [],
        setAll: () => {},
      },
    }
  )
}