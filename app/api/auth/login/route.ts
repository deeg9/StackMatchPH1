import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.StackMatch_SUPABASE_URL || !process.env.StackMatch_SUPABASE_ANON_KEY) {
      console.error('Missing environment variables:', {
        StackMatch_SUPABASE_URL: !!process.env.StackMatch_SUPABASE_URL,
        StackMatch_SUPABASE_ANON_KEY: !!process.env.StackMatch_SUPABASE_ANON_KEY
      })
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    let supabase;
    try {
      supabase = await createClient()
    } catch (clientError) {
      console.error('Failed to create Supabase client:', clientError)
      return NextResponse.json(
        { error: 'Failed to initialize authentication service' },
        { status: 500 }
      )
    }

    // Authenticate with Supabase
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      console.error('Auth error:', authError)
      console.error('Auth error details:', {
        message: authError.message,
        status: authError.status,
        code: authError.code
      })
      return NextResponse.json(
        { error: authError.message || 'Invalid email or password' },
        { status: 401 }
      )
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      )
    }

    // Get user profile to determine user type
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('user_type, full_name, company_name')
      .eq('id', authData.user.id)
      .single()

    if (profileError) {
      console.error('Profile error:', profileError)
      return NextResponse.json(
        { error: 'Failed to fetch user profile' },
        { status: 500 }
      )
    }

    // Return success with user type for routing
    return NextResponse.json({
      success: true,
      user: {
        id: authData.user.id,
        email: authData.user.email,
        user_type: profile.user_type,
        full_name: profile.full_name,
        company_name: profile.company_name,
      },
      user_type: profile.user_type, // For easy access in frontend
    })

  } catch (error) {
    console.error('Login API error:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}