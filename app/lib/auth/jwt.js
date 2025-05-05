import jwt from 'jsonwebtoken';

// Secret key for signing JWT tokens - in production, use environment variables
const JWT_SECRET = 'your-secret-key-should-be-in-env-vars';

// Token expiration time
const JWT_EXPIRES_IN = '7d'; // 7 days

/**
 * Generate a JWT token for a user
 * @param {Object} user - User object (without password)
 * @returns {String} JWT token
 */
export function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

/**
 * Verify and decode a JWT token
 * @param {String} token - JWT token to verify
 * @returns {Object|null} Decoded token payload or null if invalid
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return null;
  }
}

/**
 * Parse the Authorization header and return the token
 * @param {Object} req - Next.js request object
 * @returns {String|null} JWT token or null
 */
export function getTokenFromHeader(req) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.split(' ')[1];
}

/**
 * Get token from cookies
 * @param {Object} cookies - Next.js cookies object
 * @returns {String|null} JWT token or null
 */
export function getTokenFromCookies(cookies) {
  return cookies.get('auth-token') || null;
}