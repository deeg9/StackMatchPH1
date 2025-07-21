# CLAUDE-TECHNICAL.md - StackMatch Technical Documentation

This file contains technical implementation details, API documentation, and development patterns for the StackMatch project. For project overview and business context, see [CLAUDE.md](./CLAUDE.md).

## Phase 1 Go-to-Market Focus

**Current Implementation**: Phase 1 - AI-powered RFQ creation tool with single-player utilities

### Phase 1 Technical Architecture
- **Core Feature**: AI-powered RFQ builder using TurboTax-style workflow
- **Utility Features**: StackTalk forum, Browse Vendors (read-only), My Tech Stack management
- **Hidden Features**: Marketplace transactions, deal rooms, proposals (showing "Coming Soon")
- **Navigation**: Simplified 3-item navigation (Dashboard, Browse Vendors, StackTalk)
- **Messaging**: Positioned as "RFQ creation tool" rather than "marketplace"

## Tech Stack & Architecture

### Frontend Framework
- **Next.js 15.3.4** with App Router (Latest Stable)
- **React 18.3.1** with TypeScript for type safety
- **Tailwind CSS** with custom StackMatch brand colors
- **shadcn/ui** components for professional B2B interface
- **Lucide React** icons throughout

### Backend & Database
- **Supabase** (PostgreSQL) as backend-as-a-service
- **Real-time capabilities** for live messaging and updates
- **Row Level Security (RLS)** for data protection
- **Comprehensive database schema** with 25+ tables

### State Management
- **React hooks** (useState, useEffect) for component state
- **Session-based authentication** with Supabase Auth
- **Real-time data fetching** from authenticated API endpoints
- **TypeScript interfaces** for type safety and data structure

## Supabase Database Configuration

### Environment Variables (.env.local)
```
# IMPORTANT: All environment variables use StackMatch_ prefix
StackMatch_SUPABASE_URL=https://sgitnzeilyytxofqlhrd.supabase.co
StackMatch_NEXT_PUBLIC_SUPABASE_URL=https://sgitnzeilyytxofqlhrd.supabase.co
StackMatch_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnaXRuemVpbHl5dHhvZnFsaHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMzE5NjksImV4cCI6MjA1MjgwNzk2OX0.2EGTQRGDhusQqOLQhTQJ0i-AiT5sLNL3vXLagTaU_D8
StackMatch_NEXT_PUBLIC_SUPABASE_ANON_KEY=[same as above]
StackMatch_SUPABASE_SERVICE_ROLE_KEY=[your service role key]
StackMatch_SUPABASE_JWT_SECRET=[your JWT secret]
```

> **Note**: For Vercel deployment, ensure all environment variables are prefixed with `StackMatch_` to match the production configuration.

### Database Schema & Enums (Critical for Development)

#### Core Tables
- **profiles**: User profiles with user_type enum (`buyer` | `seller`)
- **buyer_profiles**: Extended buyer information and company details
- **listings**: Project listings with category relationships
- **proposals**: Seller proposals with budget and status tracking
- **deal_rooms**: Collaboration spaces with participant management
- **project_categories**: Software categories (CRM, ERP, E-commerce, etc.)
- **deal_room_messages**: Real-time messaging system

#### Critical Enum Values (Must Use Exact Values)
- **Listing Status**: `"DRAFT" | "ACTIVE" | "CLOSED" | "AWARDED" | "CANCELLED"`
- **Proposal Status**: `"DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "ACCEPTED" | "REJECTED" | "WITHDRAWN"`
- **Deal Room Status**: `"ACTIVE" | "COMPLETED" | "CLOSED" | "CANCELLED" | "PENDING_CLOSURE"`
- **User Types**: `"buyer" | "seller"`

### Supabase Client Setup
- **Client-side**: `/lib/supabase/client.ts` for React components
- **Server-side**: `/lib/supabase/server.ts` for API routes with cookies
- **TypeScript Types**: `/types/supabase.ts` with comprehensive database schema

## API Architecture - Production Ready

### Authentication Pattern
```typescript
const { data: { user }, error } = await supabase.auth.getUser()
if (error || !user) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}
```

### API Structure Pattern
- `/api/dashboard/{user_type}/{endpoint}`
- `/api/auth/{action}/route.ts`
- `/api/user/{resource}/route.ts`

### Completed API Endpoints
- **Authentication**: `/api/auth/login/route.ts` - Session management
- **User Profile**: `/api/user/profile/route.ts` - Dynamic profile data
- **AI Listing APIs**:
  - `/api/ai-listing/analyze/route.ts` - AI-powered RFQ analysis and generation with enhanced 8-section responses
  - `/api/ai-listing/submit/route.ts` - Intelligent listing submission with vendor matching predictions
- **Buyer APIs**: 
  - `/api/dashboard/buyer/stats/route.ts` - Real KPI data
  - `/api/dashboard/buyer/listings/route.ts` - Live listings
  - `/api/dashboard/buyer/proposals/route.ts` - Live proposals with error handling
- **My Listings APIs**:
  - `/api/my-listings/route.ts` - Comprehensive listings management with search, filter, sort
  - `/api/my-listings/stats/route.ts` - KPI statistics with trend calculations
- **Received Proposals APIs**:
  - `/api/received-proposals/route.ts` - Advanced proposal management with filtering, search, and status mapping
  - `/api/received-proposals/stats/route.ts` - Real-time KPI calculations with trend analysis
- **Seller APIs**:
  - `/api/dashboard/seller/stats/route.ts` - Seller KPIs
  - `/api/dashboard/seller/proposals/route.ts` - Seller proposals
  - `/api/dashboard/seller/recommendations/route.ts` - AI suggestions

## Current File Structure
```
/app/
├── page.tsx (Landing page)
├── layout.tsx (Root layout with fonts)
├── globals.css (Brand styles & animations)
├── login/page.tsx (Authentication with real Supabase)
├── signup/page.tsx 
├── create-listing/page.tsx (Multi-step wizard)
├── browse-sellers/
│   ├── page.tsx (Seller marketplace with advanced filtering)
│   └── loading.tsx (Professional loading skeleton)
├── stacktalk/
│   ├── page.tsx (Community forum with discussion threads)
│   └── loading.tsx (Forum loading skeleton)
├── deal-rooms/
│   ├── page.tsx (Deal rooms hub with KPI dashboard)
│   ├── loading.tsx (Professional loading skeleton)
│   ├── [id]/page.tsx (Individual deal room collaboration workspace)
│   └── [id]/esignature/add-fields/page.tsx (Full-page eSignature field editor)
├── company/
│   └── [id]/
│       ├── page.tsx (Comprehensive company profile with 5-tab navigation)
│       └── loading.tsx (Professional company profile skeleton)
├── dashboard/
│   ├── buyer/page.tsx (Live data dashboard with fixed routing)
│   └── seller/page.tsx (Complete seller command center with sidebar)
├── my-listings/page.tsx (Core listing management center)
├── my-tech-stack/page.tsx (Software asset management platform)
├── proposals/page.tsx (Comprehensive received proposals management center)
├── quote-requests/page.tsx (Seller opportunity management hub)
├── your-clients/page.tsx (Lightweight CRM hub for sellers)
├── clients/
│   └── [id]/page.tsx (Individual client record pages)
├── browse-listings/page.tsx (Seller opportunity discovery)
├── listings/
│   └── [id]/page.tsx (RFQ Details "Command Center" with 5-tab interface)
├── create-proposal/
│   └── [listingId]/page.tsx (AI-powered proposal creation workflow)
└── api/
    ├── auth/login/route.ts (Session management)
    ├── user/profile/route.ts (Dynamic profile data)
    ├── sellers/route.ts (Seller data for browse page)
    ├── ai-listing/
    │   ├── analyze/route.ts (AI RFQ analysis and generation)
    │   └── submit/route.ts (Intelligent listing submission)
    ├── dashboard/buyer/
    │   ├── stats/route.ts (Real KPI data)
    │   ├── listings/route.ts (Live listings)
    │   └── proposals/route.ts (Live proposals with error handling)
    ├── my-listings/
    │   ├── route.ts (Comprehensive listings management)
    │   └── stats/route.ts (KPI statistics with trends)
    ├── received-proposals/
    │   ├── route.ts (Advanced proposal management with filtering)
    │   └── stats/route.ts (Real-time KPI calculations)
    └── dashboard/seller/
        ├── stats/route.ts (Seller KPIs)
        ├── proposals/route.ts (Seller proposals)
        └── recommendations/route.ts (AI suggestions)

/components/
├── ui/ (Complete shadcn/ui library)
│   ├── sidebar-widget.tsx (Centralized sidebar portlet component)
├── navigation/
├── browse-sellers/
├── browse-listings/
│   ├── browse-listings-header.tsx
│   ├── browse-listings-filters.tsx
│   ├── browse-listings-stats.tsx
│   ├── browse-listings-grid.tsx
│   ├── listing-opportunity-card.tsx
│   └── browse-listings-sidebar.tsx
├── listings/ (RFQ Details page components)
│   ├── listing-detail-header.tsx (Enhanced with context-aware actions)
│   ├── listing-detail-sidebar.tsx
│   ├── listing-detail-tabs.tsx (5-tab navigation system)
│   ├── listing-detail-stats.tsx
│   ├── listing-project-summary-tab.tsx (NEW - Curated dashboard view)
│   ├── listing-full-requirements-tab.tsx (NEW - Comprehensive requirements)
│   ├── listing-business-context-tab.tsx (NEW - Company & organizational details)
│   ├── listing-budget-evaluation-tab.tsx (NEW - Financial & evaluation criteria)
│   └── listing-activity-qa-tab.tsx (NEW - Timeline and Q&A system)
├── company/
├── dashboard/
│   ├── buyer-dashboard-sidebar.tsx (Buyer-specific sidebar)
│   ├── seller-dashboard-sidebar.tsx (Seller-specific sidebar)
│   └── portlets/
│       ├── recent-listings-portlet.tsx (Enhanced listings portlet with stacked stats)
│       ├── recent-proposals-portlet.tsx (Enhanced proposals portlet with Timeline metric)
│       └── utils.ts (Formatting utilities: formatCompactBudget, formatDate, getStatusColor)
├── deal-rooms/
├── my-listings/ (Complete listing management components)
├── my-tech-stack/ (Software asset management components)
├── received-proposals/ (Comprehensive proposal management components)
├── quote-requests/ (Quote request management components)
├── your-clients/ (CRM hub components)
│   ├── your-clients-header.tsx
│   ├── your-clients-stats.tsx
│   ├── your-clients-filters.tsx
│   ├── your-clients-grid.tsx
│   ├── client-card.tsx
│   └── your-clients-sidebar.tsx
├── clients/ (Client record components)
│   ├── client-record-header.tsx
│   ├── client-record-tabs.tsx
│   ├── client-record-sidebar.tsx
│   ├── overview/client-overview.tsx
│   ├── agreements/
│   │   ├── client-agreements.tsx
│   │   └── agreement-card.tsx
│   ├── contacts/
│   │   ├── client-contacts.tsx
│   │   └── contact-card.tsx
│   ├── activity/
│   │   ├── client-activity.tsx
│   │   └── activity-item.tsx
│   └── modals/
│       ├── new-proposal-modal.tsx
│       ├── log-activity-modal.tsx
│       └── add-contact-modal.tsx
├── ai-listing/ (AI-powered RFQ creation components)
│   ├── intelligent-ingestion.tsx (Document analysis intake)
│   ├── ai-working-screen.tsx (Processing animations)
│   ├── ai-assisted-review.tsx (Split-screen collaborative review)
│   └── final-approval.tsx (Submission confirmation)
├── create-proposal/ (AI-powered proposal submission components)
│   ├── intelligent-analysis.tsx (Seller context capture)
│   ├── ai-processing-screen.tsx (4-step processing animation)
│   ├── ai-guided-response.tsx (8-section split-screen review)
│   ├── final-review.tsx (Comprehensive proposal review)
│   └── proposal-success.tsx (Success confirmation)
├── ticker/
└── guided-listing/

/lib/
└── supabase/
    ├── client.ts (Browser client)
    └── server.ts (Async server client with cookies)

/types/
├── supabase.ts (Complete database schema types)
├── ai-listing.ts (Enhanced AI workflow with 8-section RFQ generation types)
├── ai-proposal.ts (AI-powered proposal submission workflow types)
└── quote-request.ts (Request quote workflow types)
```

## Development Patterns Established

### Component Architecture
- **TypeScript Interfaces**: Comprehensive type safety
- **Modular Components**: Reusable with clear separation of concerns
- **Error Boundaries**: Graceful error handling with user-friendly messages
- **Loading States**: Professional skeleton components

### API Patterns
- **Authentication Guard**: All endpoints require valid sessions
- **Error Handling**: Comprehensive try-catch with status codes
- **Type Safety**: Request/Response typing throughout
- **Real-time Integration**: Supabase subscriptions ready

### UI/UX Patterns
- **Animation System**: `animate-fade-in`, `animate-slide-up`, etc.
- **Responsive Design**: Mobile-first with desktop enhancement
- **Status Management**: Consistent color coding and icons
- **Progress Tracking**: Visual indicators throughout
- **Accessibility**: Radix UI components for WCAG compliance

### State Management Patterns
- **Local State**: useState for component-level state
- **Session State**: Supabase auth for user context
- **Real-time State**: Supabase subscriptions for live updates
- **Form State**: Controlled components with validation

## Performance & Build

### Optimization Strategies
- **Static Generation**: Landing pages pre-rendered
- **Dynamic Imports**: Code splitting for large components
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Local font loading

### Build Configuration
- **Next.js 15.3.4**: Latest stable with App Router
- **Turbopack**: Fast development builds (`npm run dev --turbo`)
- **TypeScript**: Strict mode enabled
- **ESLint**: Custom configuration for code quality

## Development Commands
- **Dev Server**: `npm run dev --turbo`
- **Build**: `npm run build`
- **Type Check**: `npm run type-check`
- **Lint**: `npm run lint`

## Security & Authentication
- **Production Auth**: Real Supabase authentication with session management
- **Session-based APIs**: All endpoints require valid user authentication
- **RLS Policies**: Row Level Security enabled on all database tables
- **Environment Security**: All keys in .env.local (never committed)
- **Type Safety**: TypeScript throughout prevents data structure errors

## Testing Credentials

### Phase 1 Development Database
The project has been migrated to a new Supabase instance for Phase 1 development:

- **Project URL**: https://sgitnzeilyytxofqlhrd.supabase.co
- **Test User**: Create using the SQL scripts in the deployment section

### Legacy Database (Reference Only)
- **Buyer**: christopherfill9@gmail.com / 123456 (Christopher Fill, StackMatch)
- **Seller**: bigdfill@gmail.com / [password] (Diego Fill, BiltLocal)

## Recent Technical Improvements

### Browse Project Listings Implementation (January 2025)
- **Complete Seller Opportunity Discovery System**: Revolutionary project listing page for sellers
  - **Component Architecture**: 7 specialized components following established StackMatch patterns
  - **Advanced Filtering System**: Multi-dimensional filters with expandable advanced options
  - **ListingOpportunityCard Interface**: Comprehensive type with 18+ fields for opportunity data
  - **State Management**: Complex filter states for category, industry, budget, company size, deadline, scope, location
  - **Mock Listing Data**: 6 realistic enterprise opportunities with varied budgets ($25K-$1M) and industries
- **UI/UX Enhancement Implementation**: Strategic layout improvements for better readability
  - **Grid Layout Change**: Modified from `grid-cols-1 lg:grid-cols-2 xl:grid-cols-3` to `grid-cols-1 lg:grid-cols-2`
  - **Spacing Improvements**: Increased card padding (p-6 to p-8), section margins (mb-4 to mb-6), gaps (gap-4/6 to gap-6/8)
  - **Status Badge Repositioning**: Moved from title row to below company name with dedicated spacing
  - **Button Enhancement**: Increased height to h-12 with font-medium for better prominence
  - **Hover Effect Removal**: Eliminated category tag hover to reduce visual clutter
- **TypeScript Excellence**: Complete type safety across all components
  - **Filter Props Interface**: BrowseListingsFiltersProps with 18 state management props
  - **Grid Props Interface**: BrowseListingsGridProps with all filter values
  - **Component Integration**: Proper prop drilling from page to all child components
  - **Mock Data Types**: Comprehensive listing data with proper status union types

### Your Clients & Client Record Pages Implementation (January 2025)
- **Your Clients CRM Hub Architecture**: Lightweight client relationship management system
  - **Component Structure**: 7 specialized components following established patterns
  - **Data Interface**: ClientRecord interface with comprehensive business metrics
  - **State Management**: Filter states for service/product, status, sort, and view modes
  - **Mock Client Data**: 8 enterprise clients with realistic revenue and agreement data
- **Client Record Page Implementation**: 360-degree view of individual client relationships
  - **Dynamic Routing**: `/clients/[id]` with Next.js 15 async params
  - **Tabbed Interface**: 4 comprehensive tabs (Overview, Agreements, Contacts, Activity)
  - **Extended ClientRecord Interface**: Complete profile with financial metrics and contact info
  - **Modal Workflows**: New Proposal, Log Activity, Add Contact with TypeScript safety
  - **Activity Tracking System**: 7 activity types with rich metadata and timeline display
- **TypeScript Excellence**: Complete type safety across all components
  - **Client Interfaces**: ClientRecord, Agreement, Contact, Activity types
  - **Component Props**: Full typing for all components and modals
  - **Mock Data**: Comprehensive client portfolio with varied industries and metrics

### Seller Dashboard & Quote Requests Implementation (January 2025)
- **Complete Seller Dashboard Architecture**: Mirror of buyer dashboard with seller-specific features
  - **Component Structure**: Main page with integrated sidebar component (`seller-dashboard-sidebar.tsx`)
  - **Data Interfaces**: QuoteRequest, Client, Proposal types with TypeScript safety
  - **State Management**: Multiple loading states for granular UI control
  - **Mock Data Integration**: Realistic quote requests, clients, and calendar events
- **Quote Requests Page Implementation**: Comprehensive opportunity management system
  - **Advanced Filtering**: Industry and budget range filters with "all" value handling
  - **View Mode Toggle**: List/Grid view state management with responsive layouts
  - **Status Management**: New/Viewed/Responded status system with color-coded badges
  - **Request Type System**: Direct Request vs Public listing differentiation
  - **Empty States**: Professional messaging for no results scenarios
- **TypeScript Excellence**: Complete type safety across all new components
  - **QuoteRequest Interface**: Comprehensive type with all required fields
  - **Filter State Types**: Proper typing for all filter values and state
  - **Component Props**: Full prop typing for maintainability

### AI-Powered Create Listing Workflow (January 2025)
- **Revolutionary TurboTax-Style Architecture**: Complete transformation of RFQ creation from complex forms to conversational AI experience
  - **Workflow State Management**: AIWorkflowStep union type managing 6 distinct states ('category' | 'ingestion' | 'processing' | 'review' | 'approval' | 'submitted')
  - **Component Integration**: 4 specialized React components with seamless data flow and state transitions
  - **TypeScript Excellence**: Expanded interfaces in `/types/ai-listing.ts` supporting 8-section workflow
- **Two-Step Category Selection Architecture**: Scalable hierarchical system for 30+ software categories
  - **Hierarchical Data Structure**: 6 parent categories (Finance & ERP, Sales & Marketing, HR & Workforce, Engineering & Product, Operations & Supply Chain, Commerce & Service)
  - **Sub-Category Organization**: Each parent contains 4-12 specific software sub-categories for precise classification
  - **Icon System Migration**: Professional Lucide React icons replacing emojis (Briefcase, TrendingUp, Users, Code, Package, ShoppingCart)
  - **State Management**: selectedParentCategory and showSubCategories states managing navigation flow
  - **User Experience**: Smooth transitions between parent and sub-category views with consistent back navigation
- **Enhanced AI API Architecture**: Production-ready endpoints generating comprehensive 8-section RFQs
  - **Analysis Endpoint**: `/api/ai-listing/analyze/route.ts` with category-specific data generation for all 8 sections
  - **Submission Endpoint**: `/api/ai-listing/submit/route.ts` with vendor matching calculations and response predictions
  - **Category Customization**: HR & Payroll and Web Development specific content with dynamic business processes
  - **Error Handling**: Comprehensive try-catch patterns with realistic fallback data for demonstration purposes
- **Component Design Patterns**:
  - **Category Selection**: Two-step hierarchical navigation replacing flat 6-category grid
    - **Parent Category View**: 6 large cards with icons, descriptions, and sub-category counts
    - **Sub-Category View**: Responsive grid (2-3 columns) with back navigation
    - **Seamless Integration**: Category selection flows directly into AI workflow
  - **Intelligent Ingestion**: Multi-source validation (website, LinkedIn, files) with real-time form validation
  - **AI Working Screen**: 5-step processing animation with dynamic progress tracking and professional transitions
  - **Enhanced Split-Screen Review**: Revolutionary collaborative interface with 8 comprehensive sections
    - **Navigation Implementation**: useCallback hooks for proper function memoization preventing stale closures
    - **Transition State Management**: isTransitioning state preventing navigation conflicts during section changes
    - **Auto-Scroll Functionality**: Form container scrolls to top, chat container to bottom on section changes
    - **Console Logging**: Debug logging for navigation flow tracking and troubleshooting
  - **Final Approval**: Comprehensive summary with completion statistics and vendor matching predictions
- **Expanded Data Flow Architecture**: Seamless prop drilling with enhanced state management
  - **Category Selection**: Triggers AI workflow initiation with selected category context
  - **Ingestion Data**: Company information collection with validation and analysis preparation
  - **AI Generated RFQ**: Expanded business requirements structure with 8 comprehensive sections
  - **Final Submission**: Complete RFQ data with vendor matching metrics and success predictions

### My Listings & Received Proposals System (January 2025)
- **Core Listing Management Architecture**: Complete implementation of centralized listing management
  - **Component Modularity**: 7 specialized components (Header, Stats, Filters, Grid, Card, Sidebar)
  - **API Integration**: 2 dedicated endpoints with comprehensive error handling and mock data fallbacks
  - **Database Enum Handling**: Proper mapping between frontend status values and database constraints
  - **TypeScript Excellence**: All components pass strict type checking with proper interfaces
- **Comprehensive Received Proposals Management Center**: Revolutionary proposal review and comparison system
  - **Modular Architecture**: 7 specialized components following established StackMatch patterns
  - **Advanced Filtering System**: Multi-dimensional search with status tabs, listing filters, and real-time updates
  - **Professional ProposalCard Design**: Rich vendor comparison cards with key metrics and action buttons
  - **KPI Dashboard**: 4 animated metric cards tracking proposals, review status, and value metrics
  - **API Excellence**: 2 production-ready endpoints with comprehensive error handling and mock data fallbacks

### My Tech Stack & Request Quote System Implementation (January 2025)
- **Software Asset Management Architecture**: Complete tech stack management platform
  - **Component Architecture**: 8 specialized components (Header, Stats, Filters, Grid, Card, Sidebar, Modal)
  - **KPI Dashboard**: 4 animated metric cards with sparkline visualizations and trend indicators
  - **Advanced Filtering**: Multi-dimensional search, status tabs, department filtering, and intelligent sorting
  - **Sample Data Excellence**: 14 realistic enterprise software subscriptions with varied utilization and renewal dates
- **Request Quote Workflow System**: Revolutionary vendor engagement architecture
  - **Multi-Modal System**: RequestQuoteModal with 3-step workflow (Initial Choice → Listing Selection → Customization)
  - **TypeScript Excellence**: Comprehensive interfaces in `/types/quote-request.ts` with full workflow state management
  - **Success Feedback**: Professional toast notifications and detailed confirmation modals
  - **Vendor Integration**: Seamless connection with Browse Vendors cards and vendor data conversion
- **Navigation Integration**: Complete buyer workflow connectivity
  - **Dashboard Integration**: "Manage Software" button routing from Buyer Dashboard to My Tech Stack page
  - **Vendor Discovery**: "Explore Alternatives" buttons connecting software management to vendor marketplace
  - **Quote Request Flow**: "Request Quote" buttons on vendor cards triggering contextual modal workflows

### Critical Navigation Routing Fixes
- **Buyer Dashboard Links**: Fixed "View All" routing from `/listings` to `/my-listings`
- **Proposals Page**: Created dedicated proposal management page at `/proposals`
- **My Tech Stack Navigation**: Connected dashboard portlet to comprehensive software management platform
- **API Error Resilience**: Enhanced proposals API with database constraint error handling
- **Seamless User Flow**: Complete end-to-end navigation without 404/500 errors

### TypeScript Compliance
- Next.js 15 async params with Promise<> structure
- Radix UI Select component value handling
- Database enum type mapping for status values
- Clean import optimization

### Component Integration
- Dialog components for modals
- DropdownMenu for actions
- ScrollArea for navigation
- Select components for filtering

### Build Optimization
- Zero TypeScript errors
- Resolved JSX structure issues
- Clean Vercel deployment
- Optimized bundle size

### RFQ Details Page Implementation (January 2025)
- **Revolutionary "RFQ Command Center" Architecture**: Complete transformation from linear wizard to comprehensive tabbed interface
  - **Mock Data System**: Comprehensive `mockRfqData` object containing all 8 AI-generated sections with realistic enterprise data
  - **Component Structure**: 5 new tab components plus enhanced header with role-based UI
  - **Tab Navigation**: 5 comprehensive tabs (Summary, Requirements, Business, Budget, Activity) replacing simple overview
  - **Role-Based Interface**: Dynamic UI adapting to buyer vs seller context with appropriate actions
- **Technical Implementation Details**:
  - **Route Architecture**: `/app/listings/[id]/page.tsx` with mock data replacing database fetch
  - **Extended Interface**: ListingDetail type extended with 8 new section fields
  - **Tab State Management**: useState for activeTab with default 'summary' value
  - **Mock User Simulation**: Configurable mockUserId and mockUserType for testing different views
  - **Performance Optimization**: 500ms simulated loading for realistic UX
- **Component Excellence**:
  - **Project Summary Tab**: At-a-glance dashboard with goals, key details, requirements, evaluation criteria
  - **Full Requirements Tab**: Nested tabs for technical specs with deployment, scalability, security, data
  - **Business Context Tab**: Company overview, geographic presence, stakeholders, success metrics
  - **Budget & Evaluation Tab**: Financial breakdown, timeline phases, resources, evaluation weights
  - **Activity & Q&A Tab**: Rich timeline with event types, public Q&A with seller question submission
- **Build Error Resolutions**:
  - **JSX Structure Fix**: Added missing closing div tag in header component
  - **Badge Enhancement**: Removed invalid size prop, added custom styling
  - **Import Corrections**: Added DollarSign and MessageSquare icons
  - **Tab Label Responsiveness**: Mobile-friendly abbreviations with hidden/shown classes

### Proposal Submission System Implementation (January 2025)
- **Complete AI-Powered Architecture**: Revolutionary TurboTax-style proposal creation workflow
  - **Component Structure**: 5 specialized components with TypeScript excellence
  - **Workflow State Management**: ProposalWorkflowStep union type with 5 states
  - **8-Section Data Structure**: Comprehensive AIGeneratedProposal interface
  - **Mock Data Generation**: Realistic AI responses with 92% match scoring
- **Technical Implementation Details**:
  - **Route Architecture**: `/create-proposal/[listingId]` with dynamic params
  - **Local Storage Draft Saving**: Auto-save functionality with 30-second intervals
  - **Section Navigation**: useCallback hooks preventing stale closures
  - **Auto-Scroll Implementation**: Form and chat containers with smooth scrolling
  - **File Upload Simulation**: Custom div replacing Button component for 'as' prop
- **TypeScript Excellence**: Complete type safety with comprehensive interfaces
  - **ProposalSectionId**: 8 kebab-case section identifiers
  - **Section Property Mapping**: sectionToPropertyMap for data consistency
  - **Build Error Fixes**: Resolved all TypeScript compilation issues
  - **Spread Operator Safety**: Type checking for object spread operations

## Next Technical Priorities

### Phase 1 Priorities
1. **RFQ PDF Export**: Generate downloadable RFQs from AI-created listings
2. **User Onboarding Flow**: Streamlined registration focused on RFQ creation
3. **StackTalk Enhancement**: Community features for procurement discussions
4. **Analytics Integration**: Track RFQ creation and utility feature usage
5. **SEO Optimization**: Landing pages for RFQ creation keywords

### Phase 2/3 Features (Deferred)
1. **eSignature Backend Integration**: API endpoints for document signing workflow
2. **Deal Room APIs**: Real-time messaging and collaboration
3. **Marketplace Transactions**: Proposal submission and vendor matching
4. **Calendar Sync APIs**: Google Calendar/Outlook integration
5. **Real-time Features**: WebSocket subscriptions for live updates

## API Development Guidelines
- Always validate user authentication
- Use TypeScript for request/response types
- Implement proper error handling
- Follow RESTful conventions
- Document all endpoints
- Test with both user types (buyer/seller)

## Component Development Guidelines

### Phase 1 Guidelines
- **Coming Soon Pages**: Use consistent design for features deferred to Phase 2/3
- **Navigation Simplification**: Show only Phase 1 features in navigation
- **Messaging Consistency**: Focus on "RFQ creation" rather than "marketplace"
- **Responsive Priority**: Ensure excellent mobile experience for utility features

### General Guidelines
- Use TypeScript interfaces for all props
- Implement loading and error states
- Follow StackMatch design system
- Ensure mobile responsiveness
- Add proper ARIA labels
- Test with keyboard navigation
- Use SidebarWidget component for all sidebar portlets
- Maintain consistent bold navy titles (#1A2B4C) across UI

## Phase 1 Deployment Notes

### Environment Variable Configuration
When deploying to Vercel or other hosting platforms:

1. **Use StackMatch_ Prefix**: All environment variables must be prefixed with `StackMatch_`
2. **Required Variables**:
   - `StackMatch_SUPABASE_URL`
   - `StackMatch_NEXT_PUBLIC_SUPABASE_URL`
   - `StackMatch_SUPABASE_ANON_KEY`
   - `StackMatch_NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Database Setup
For new Supabase instances, create the minimal tables needed for Phase 1:

```sql
-- Create profiles table
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    user_type TEXT CHECK (user_type IN ('buyer', 'seller')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create test user
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at)
VALUES (
    '1cae22cb-1311-48ca-9caa-47d474c0a20e',
    'test@stackmatch.com',
    crypt('password123', gen_salt('bf')),
    NOW()
);

INSERT INTO profiles (id, email, full_name, user_type)
VALUES (
    '1cae22cb-1311-48ca-9caa-47d474c0a20e',
    'test@stackmatch.com',
    'Test User',
    'buyer'
);
```

### Navigation Configuration
- **Desktop**: Shows 3 main navigation items at medium breakpoint (md:flex)
- **Mobile**: Hamburger menu with same 3 items
- **Loading State**: Shows skeleton navigation during auth check
- **Fallback User**: Default buyer navigation if not authenticated

---

For business context, features overview, and design guidelines, see [CLAUDE.md](./CLAUDE.md).