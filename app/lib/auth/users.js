// File-based user database simulation since we don't have a real database
import { nanoid } from 'nanoid';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

// Path to our "database" file
const dbPath = path.join(process.cwd(), 'app', 'lib', 'auth', 'users.json');

// Initialize the database if it doesn't exist
const initializeDB = () => {
  if (!fs.existsSync(dbPath)) {
    // Create an empty users array
    fs.writeFileSync(dbPath, JSON.stringify({ users: [] }), 'utf-8');
    return { users: [] };
  }
  
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading user database:', error);
    return { users: [] };
  }
};

// Save the database
const saveDB = (db) => {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
};

// Get all users
export const getAllUsers = () => {
  const db = initializeDB();
  return db.users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt
  }));
};

// Find user by email
export const findUserByEmail = (email) => {
  const db = initializeDB();
  return db.users.find(user => user.email === email);
};

// Find user by ID
export const findUserById = (id) => {
  const db = initializeDB();
  const user = db.users.find(user => user.id === id);
  if (!user) return null;
  
  // Return without password
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

// Create a new user
export const createUser = async (userData) => {
  const db = initializeDB();
  
  // Check if user with this email already exists
  const existingUser = db.users.find(user => user.email === userData.email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }
  
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);
  
  // Create new user
  const newUser = {
    id: nanoid(),
    name: userData.name,
    email: userData.email,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  };
  
  // Add to database
  db.users.push(newUser);
  saveDB(db);
  
  // Return user without password
  const { password, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

// Verify user credentials
export const verifyCredentials = async (email, password) => {
  const user = findUserByEmail(email);
  if (!user) return null;
  
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;
  
  // Return user without password
  const { password: pwd, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

// Create the initial demo users if database is empty
export const seedInitialUsers = async () => {
  const db = initializeDB();
  if (db.users.length === 0) {
    await createUser({
      name: 'Demo User',
      email: 'user@example.com',
      password: '1234'
    });
    
    await createUser({
      name: 'Demo User 2',
      email: 'user2@example.com',
      password: 'abcd'
    });
    
    console.log('Initial users created');
  }
};

// Seed the initial users
seedInitialUsers().catch(console.error);