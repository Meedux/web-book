import { NextResponse } from 'next/server';
import { withAuth } from '@/app/lib/auth/middleware';

// Handler for GET /api/auth/me endpoint
async function handler(request) {
  // User is attached by the withAuth middleware
  const user = request.user;
  
  return NextResponse.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
}

// Wrap the handler with auth middleware
export const GET = withAuth(handler);