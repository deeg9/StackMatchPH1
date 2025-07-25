# CLAUDE.md - StackMatch Project Memory

> **Important**: This file provides a concise overview of the StackMatch platform. For detailed information, please refer to the specialized documentation files below.

## Documentation Structure

- **[CLAUDE-TECHNICAL.md](./CLAUDE-TECHNICAL.md)** - Technical implementation, API documentation, database schema, and development patterns
- **[CLAUDE-FEATURES.md](./CLAUDE-FEATURES.md)** - Comprehensive documentation of all completed features
- **[CLAUDE-RECENT.md](./CLAUDE-RECENT.md)** - Recent achievements, enhancements, and bug fixes (January 2025)

## Phase 1 Go-to-Market Strategy

### Current Focus
StackMatch is currently in **Phase 1** of our strategic go-to-market plan, focusing on user acquisition through high-value "single-player" tools:

- **AI-Powered RFQ Creation**: Revolutionary TurboTax-style workflow and dynamic form engine that creates comprehensive RFQs in minutes
- **Vendor Research**: Browse and research 500+ verified B2B software vendors
- **Tech Stack Management**: Comprehensive software asset tracking and renewal management
- **Community Engagement**: StackTalk forum for peer discussions and advice

### Phase 1 Implementation Status
✅ **Completed**:
- AI-powered Create Listing workflow (8 comprehensive sections)
- Dynamic RFQ Form Engine with AI Assistant for structured questionnaires
- Interactive AI Assistant sidebar with Chat and Section Info tabs
- Smart Prompt system for one-click form field assistance
- Browse Vendors marketplace with enterprise vendors
- My Tech Stack software management platform
- StackTalk community forum
- Global navigation (Dashboard, Browse Vendors, StackTalk)
- Buyer dashboard simplified for Phase 1 focus
- Middleware routing to "Coming Soon" pages for Phase 2/3 features

🚧 **In Progress**:
- Seller dashboard Phase 1 simplification
- RFQ PDF export with watermarking
- Navigation visibility fixes

📋 **Hidden Until Phase 2/3**:
- Deal Rooms (Phase 3)
- Active marketplace features (proposals, quotes)
- Real-time collaboration tools

## Project Overview

StackMatch is an intelligent, three-sided B2B software procurement marketplace connecting buyers (mid-market companies), sellers (software vendors), and consultants (procurement experts). The platform transforms the broken $260B annual software procurement process through structured workflows, AI-powered matching, and expert guidance.

## Key Business Metrics
- **Target Market**: Mid-market companies ($10M-$1B revenue) in North America
- **Market Size**: $384B B2B SaaS market growing to $1.887T by 2034
- **Problem Solved**: 66% of software projects fail, 121-day average sales cycles, $260B annual waste
- **Revenue Model**: 5-15% seller commissions, 15-20% consultant fees, $500-$5K monthly subscriptions

## Tech Stack & Architecture

### Quick Overview
- **Frontend**: Next.js 15.3.4 + React 18.3.1 + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Supabase (PostgreSQL) with real-time capabilities and RLS
- **Authentication**: Session-based with Supabase Auth
- **State Management**: React hooks with TypeScript interfaces
- **Design System**: Steve Jobs-level attention to detail with pixel-perfect execution

### Environment Variables
Environment variables use `StackMatch_` prefix for Vercel deployment:
- `StackMatch_SUPABASE_URL`
- `StackMatch_NEXT_PUBLIC_SUPABASE_URL`
- `StackMatch_SUPABASE_ANON_KEY`
- `StackMatch_NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `StackMatch_SUPABASE_SERVICE_ROLE_KEY`

> **Note**: For detailed technical documentation, see [CLAUDE-TECHNICAL.md](./CLAUDE-TECHNICAL.md)

## Phase 1 Features

### Core User Value
1. **AI-Powered RFQ Creation** - TurboTax-style workflow and dynamic form engine that reduces RFQ creation from weeks to minutes
2. **Dynamic Form Engine** - Structured questionnaires with interactive AI Assistant guidance for comprehensive requirements gathering
3. **Interactive AI Assistant** - Conversational AI chat interface with smart prompts for form field assistance
4. **Vendor Discovery** - Research and compare enterprise software vendors
5. **Tech Stack Management** - Track software costs, renewals, and optimization opportunities
6. **Community Support** - StackTalk forum for peer advice and discussions

### Hidden Features (Phase 2/3)
- Deal Rooms and real-time collaboration
- Proposal submission and management
- Quote requests and active marketplace
- Seller-specific features (temporarily showing "Coming Soon")

## Key Directories
- `/app/` - Next.js pages and API routes
- `/components/` - Reusable UI components organized by feature
- `/lib/` - Utility functions, Supabase clients, and RFQ blueprints
- `/types/` - TypeScript type definitions
- `/middleware.ts` - Route management for Phase 1 feature gating

> **Note**: For complete file structure and technical architecture, see [CLAUDE-TECHNICAL.md](./CLAUDE-TECHNICAL.md)

## Design System

### Brand Colors
- **Primary**: StackMatch Navy (#1A2B4C), StackMatch Blue (#4A73CC)
- **Success**: Trust Green (#22C55E)
- **Typography**: Inter (display) + Source Sans 3 (body)

### Design Principles
1. **Clarity Over Clutter**: Clean, uncluttered interfaces
2. **Guided at Every Step**: Clear navigation and progress indicators
3. **Trust Through Transparency**: Visual cues and progress tracking
4. **Intelligent Simplicity**: AI features without overwhelming UI
5. **Connection-Focused**: Emphasize human relationships and collaboration

## Next Phase 1 Priorities
1. **RFQ PDF Export**: Enable users to download and share their AI-generated RFQs
2. **Seller Onboarding**: Waitlist and early access for Phase 2
3. **User Feedback Integration**: Iterate based on early adopter feedback
4. **Content Marketing**: SEO-optimized content for RFQ creation
5. **Analytics Implementation**: Track user behavior and feature adoption

## Phase 2/3 Preview
**Phase 2** (Q2 2025): Active marketplace with proposals and quotes
**Phase 3** (Q3 2025): Deal rooms and real-time collaboration tools

## Current Development Status
✅ **Phase 1 ACTIVE**: AI RFQ Creation, Vendor Research, Tech Stack Management, Community
🚧 **Phase 2 PLANNED**: Marketplace activation, proposal system, seller tools
📋 **Phase 3 FUTURE**: Deal rooms, real-time collaboration, advanced workflows

## Quick Start

### Development Commands
- **Dev Server**: `npm run dev --turbo`
- **Build**: `npm run build`
- **Type Check**: `npm run type-check`
- **Lint**: `npm run lint`

### Testing Approach
For Phase 1, focus on:
- RFQ creation workflow testing
- Vendor browsing experience
- Tech stack management features
- Navigation and routing

## Technical Documentation

For comprehensive technical documentation including:
- Complete API endpoint documentation
- Database schema and enum values
- Development patterns and best practices
- Security implementation details
- Performance optimization strategies
- Component development guidelines

**See [CLAUDE-TECHNICAL.md](./CLAUDE-TECHNICAL.md)**

## Latest Updates

> **Note**: For comprehensive recent updates and bug fixes, see [CLAUDE-RECENT.md](./CLAUDE-RECENT.md)

### January 2025 Phase 1 Implementation:
- **Complete Dynamic RFQ Creation Flow**: Revolutionary implementation with separated data input and 5-step wizard
  - Standalone data input page for initial context gathering (website, LinkedIn, documents)
  - AI analyzing transition screen with progress animations
  - 5-step wizard: General Info → Project Scope → Current Process → Additional Process → Review
  - Visual stepper navigation with progress tracking and step validation
  - Completeness Score (0-100%) integrated into AI Assistant sidebar
  - New component library: DynamicList, DatePicker, NumberRangeInput, DynamicKeyValueTable, WeightedCriteriaList
  - AI Magic Buttons: Proactive pre-fill, data enrichment, inline writing tools, show examples
- **Dynamic RFQ Form Engine**: JSON-based questionnaire system with interactive AI Assistant companion
  - 11 reusable form components for comprehensive requirements gathering
  - Split-screen layout with contextual AI guidance
  - Blueprint system now covering 29 categories (up from 2) - achieving near-complete software category coverage
  - Smart routing between dynamic forms and AI workflow
  - Categories covered: Financial Management, Account Reconciliation, Collections Management, Planning & Budgeting, Procurement Management, Multi-Book Accounting, Vendor Bill Processing, Tax Management, Rebate Management, HR, Payroll, Workforce Management, Incentive Compensation, Field Service Management, Demand Planning, Quality Management, Warehouse Management, WIP & Routing, Work Orders & Assemblies, Analytics Warehouse, Connector/Integration, Project Management, E-commerce Website, Customer Account Management, Billing, EPM, Advanced Accounting, CPQ
- **AI Assistant Sidebar Enhancement**: Revolutionary transformation from static AI Assistant to interactive command center
  - Tabbed interface with Chat (default) and Section Info tabs
  - RFQ Completeness Score display with animated progress visualization
  - Full conversational UI with message history and AI responses
  - Smart Prompt system enabling one-click assistance for complex form fields
  - Seamless integration with Dynamic RFQ Form Engine
  - Proactive welcome messages for each form section
- **Phase 1 Dashboard Refactoring**: Simplified buyer dashboard removing Phase 2/3 features
- **Navigation Updates**: Showing only Dashboard, Browse Vendors, and StackTalk
- **Middleware Implementation**: Routes to "Coming Soon" pages for hidden features
- **RFQ Focus**: Messaging changed from "marketplace" to "RFQ creation tool"
- **Seller Experience**: "Coming Soon" page with early access waitlist
- **Create Listing Redesign**: Two-step hierarchical category selection for 30+ software categories
  - 6 parent categories with professional Lucide React icons
  - Smooth navigation between parent and sub-category views
  - Intelligent routing to dynamic forms or AI workflow based on blueprint availability

## Project Impact

Phase 1 positions StackMatch as the industry's first AI-powered RFQ creation platform, solving the immediate pain point of complex software procurement documentation. By focusing on single-player utility before marketplace features, we're building trust and adoption while gathering valuable data for Phase 2/3 optimization.

Key Phase 1 differentiators:
- **AI-First RFQ Creation**: Industry's first TurboTax-style RFQ workflow with scalable category selection
- **Dynamic Form Engine**: Structured questionnaires with interactive AI Assistant for comprehensive requirements
- **10 Category Blueprints**: Comprehensive coverage of financial and operational software categories (Fixed Assets, Financial Management, Account Reconciliation, Collections, Planning & Budgeting, Procurement, Multi-Book Accounting, Vendor Bill Processing, Tax Management, Field Service)
- **Interactive AI Experience**: Conversational chat interface replacing static help documentation
- **Smart Prompt Innovation**: One-click assistance for complex form fields reducing user friction
- **Immediate Value**: Users get value without waiting for marketplace liquidity
- **Vendor Research**: Comprehensive vendor profiles without commitment
- **Software Cost Control**: Tech stack management saves money today
- **Scalable Category System**: Two-step selection handles 30+ categories elegantly
- **Dual Approach**: AI workflow for flexibility, dynamic forms for structure

The phased approach de-risks the platform launch while building a loyal user base that will drive marketplace adoption in Phase 2.