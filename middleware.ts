import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes
const isPublicRoute = createRouteMatcher([
  '/',
  '/productDetails/(.*)',
]);

export default clerkMiddleware((auth, req) => {
  // Automatically allow public routes
  if (isPublicRoute(req)) return;

  // If not public, Clerk will automatically protect
  auth(); // Just calling it enforces protection
});

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
