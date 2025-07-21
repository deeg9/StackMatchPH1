import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Phase 1 hidden routes that should redirect to coming soon pages
const PHASE_2_ROUTES = [
  '/proposals',
  '/quote-requests',
  '/your-clients',
  '/browse-listings',
  '/clients'
];

const PHASE_3_ROUTES = [
  '/deal-rooms'
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the current path starts with any Phase 2 routes
  for (const route of PHASE_2_ROUTES) {
    if (pathname.startsWith(route)) {
      // Special handling for nested routes
      if (pathname === route || pathname === `${route}/`) {
        return NextResponse.redirect(new URL(`${route}/coming-soon`, request.url));
      }
      // If it's already the coming-soon page, allow it
      if (pathname === `${route}/coming-soon`) {
        return NextResponse.next();
      }
      // For any other nested routes, redirect to coming soon
      return NextResponse.redirect(new URL(`${route}/coming-soon`, request.url));
    }
  }
  
  // Check if the current path starts with any Phase 3 routes
  for (const route of PHASE_3_ROUTES) {
    if (pathname.startsWith(route)) {
      // Special handling for nested routes
      if (pathname === route || pathname === `${route}/`) {
        return NextResponse.redirect(new URL(`${route}/coming-soon`, request.url));
      }
      // If it's already the coming-soon page, allow it
      if (pathname === `${route}/coming-soon`) {
        return NextResponse.next();
      }
      // For any other nested routes, redirect to coming soon
      return NextResponse.redirect(new URL(`${route}/coming-soon`, request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};