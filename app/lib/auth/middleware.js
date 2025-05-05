import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { verifyToken } from './jwt';
import { findUserById } from './users';

/**
 * Authentication middleware for API routes
 * @param {Function} handler - The API route handler
 */
export function withAuth(handler) {
  return async function(request, ...args) {
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    
    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
    
    // Find the user
    const user = findUserById(payload.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }
    
    // Attach user to the request
    request.user = user;
    
    // Call the original handler
    return handler(request, ...args);
  };
}

/**
 * Check if user is authenticated based on their cookie
 * @returns {Object|null} User object if authenticated, null otherwise
 */
export function getAuthUser() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth-token')?.value;
  
  if (!token) return null;
  
  const payload = verifyToken(token);
  if (!payload) return null;
  
  return findUserById(payload.id);
}

/**
 * Client-side authentication check
 * Used in React components to verify authentication
 */
export async function checkAuth() {
  try {
    const response = await fetch('/api/auth/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error('Authentication check failed:', error);
    return null;
  }
}