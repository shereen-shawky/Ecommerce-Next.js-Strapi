import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware({
    // Optionally, you can specify the paths that should be protected
    publicRoutes: ['/', '/productDetails/(.*)'],
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}