'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Rocket,
  Users,
  MessageSquare,
  Star,
  TrendingUp,
  DollarSign,
  Briefcase,
  Bell,
  Mail,
  ArrowRight,
  Building2,
  CheckCircle
} from "lucide-react"
import Link from "next/link"
import { NavigationWrapper } from '@/components/navigation/navigation-wrapper'
import { cn } from "@/lib/utils"

export default function SellerDashboard() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setEmail('')
  }

  const phase2Features = [
    {
      icon: Briefcase,
      title: "Quote Requests & Leads",
      description: "Receive and respond to buyer RFQs directly through the platform"
    },
    {
      icon: DollarSign,
      title: "Proposal Management",
      description: "Submit detailed proposals with pricing and track their status"
    },
    {
      icon: Users,
      title: "Client Relationship Management",
      description: "Manage your client relationships and track deal progress"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track your success rate, revenue, and business growth"
    }
  ]

  const availableToday = [
    {
      icon: Users,
      title: "Browse Vendors",
      description: "Research competitors and understand the market landscape",
      link: "/browse-sellers",
      linkText: "Explore Vendors"
    },
    {
      icon: MessageSquare,
      title: "StackTalk Community",
      description: "Join discussions with buyers and other vendors",
      link: "/stacktalk",
      linkText: "Join Community"
    },
    {
      icon: Star,
      title: "Company Profile",
      description: "Set up your company profile for when the marketplace launches",
      link: "/profile",
      linkText: "Complete Profile"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] via-white to-[#F9FAFB]">
      {/* Global Navigation */}
      <NavigationWrapper />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#1A2B4C] to-[#4A73CC] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <Rocket className="h-4 w-4 mr-2" />
            Coming in Phase 2
          </div>
          
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            The Seller Marketplace is Coming Soon
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto animate-slide-up">
            We're building a revolutionary B2B software marketplace. Be among the first vendors 
            to access high-quality leads when we launch Phase 2.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* What's Coming in Phase 2 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1A2B4C] text-center mb-12">
            What's Coming in Phase 2
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phase2Features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card 
                  key={index}
                  className="border-2 hover:border-[#4A73CC] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4A73CC]/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#4A73CC]" />
                    </div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[#6B7280]">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Early Access Waitlist */}
        <Card className="max-w-2xl mx-auto mb-16 border-2 border-[#22C55E]">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="h-8 w-8 text-[#22C55E]" />
            </div>
            <CardTitle className="text-2xl">Get Early Access</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-[#6B7280]">
              Join our waitlist to be the first to know when the seller marketplace launches. 
              Early access members will receive:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Priority access to high-quality buyer RFQs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Reduced commission rates for the first 6 months</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Featured vendor status in search results</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Early access to new features and tools</span>
              </li>
            </ul>

            {!isSubscribed ? (
              <form onSubmit={handleWaitlist} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Join Waitlist
                </Button>
              </form>
            ) : (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                <CheckCircle className="h-6 w-6 mx-auto mb-2" />
                <p className="font-medium">You're on the list!</p>
                <p className="text-sm mt-1">We'll notify you as soon as the marketplace launches.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* What You Can Do Today */}
        <div>
          <h2 className="text-3xl font-bold text-[#1A2B4C] text-center mb-12">
            What You Can Do Today
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availableToday.map((item, index) => {
              const Icon = item.icon
              return (
                <Card 
                  key={index}
                  className="border-2 hover:border-[#4A73CC] transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4A73CC]/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#4A73CC]" />
                    </div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6B7280] mb-4">{item.description}</p>
                    <Link href={item.link}>
                      <Button variant="outline" className="w-full">
                        {item.linkText}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Why StackMatch */}
        <Card className="mt-16 bg-gradient-to-br from-[#F9FAFB] to-white border-0">
          <CardContent className="p-12 text-center">
            <h3 className="text-2xl font-bold text-[#1A2B4C] mb-6">
              Why Sell on StackMatch?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-[#4A73CC] mb-2">$260B</div>
                <p className="text-sm text-[#6B7280]">Annual market opportunity in B2B software</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#22C55E] mb-2">121 days</div>
                <p className="text-sm text-[#6B7280]">Average B2B sales cycle we'll help reduce</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F59E0B] mb-2">66%</div>
                <p className="text-sm text-[#6B7280]">Of software projects that fail - we'll change that</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}