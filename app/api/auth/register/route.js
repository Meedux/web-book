import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createUser, findUserByEmail } from '@/app/lib/auth/users';
import { generateToken } from '@/app/lib/auth/jwt';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password, confirmPassword } = body;
    
    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' }, 
        { status: 400 }
      );
    }
    
    // Validate password match
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'Passwords do not match' }, 
        { status: 400 }
      );
    }
    
    // Check if user already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' }, 
        { status: 409 }
      );
    }
    
    // Create user
    const user = await createUser({ name, email, password });
    
    // Generate token
    const token = generateToken(user);
    
    // Set cookie
    const cookieStore = cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });
    
    // Return success with user data
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: error.message || 'Registration failed' }, 
      { status: 500 }
    );
  }
}