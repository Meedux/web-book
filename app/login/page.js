"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const mockUsers = [
  { email: 'user@example.com', password: '1234' },
  { email: 'user2@example.com', password: 'abcd' },
];

const LoginPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = mockUsers.find((user) => user.email === email && user.password === password);

    if (!user) {
      setEmailError('Invalid email or password');
      setPasswordError('');
      setEmail('');
      setPassword('');
    } else {
      router.push('http://localhost:3005/home');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError('Name is required');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    // Simulate successful registration
    router.push('/welcome');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e9c04a] ">
      <div className="text-center mb-8">
        <Image src="/imgs/logo1.png" alt="Logo" width={100} height={100} className="mx-auto" />
        <span className="block text-2xl font-bold text-[#1a2253] text-shadow">ADONAI & GRACE SCHOOL INC.</span>
      </div>
      <h1 className="text-7xl font-bold text-[#1a2253] mb-16 text-shadow">Story Books</h1>
      <button
        className="w-48 py-2 bg-[#1a2253] text-white rounded hover:bg-[#1a2253]/90 mb-4"
        onClick={() => {
          setIsActive(true);
          setIsRegister(false);
        }}
      >
        Login
      </button>
      <button
        className="w-48 py-2 bg-[#1a2253] text-white rounded hover:bg-[#1a2253]/90"
        onClick={() => {
          setIsActive(true);
          setIsRegister(true);
        }}
      >
        Register
      </button>

      <div
        className={`fixed inset-y-0 right-0 bg-white shadow-lg w-96 transform transition-transform duration-500 ${isActive ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            onClick={() => setIsActive(false)}
          >
            &times;
          </button>
          <div className="text-center mb-4">
            <div className="h-20"></div> {/* Empty space for the logo */}
            <h2 className="text-3xl font-bold text-[#1a2253]">
              {isRegister ? 'Create Your Account' : 'Welcome Back!'}
            </h2>
            <p className="text-sm text-gray-600">
              {isRegister ? 'Sign up to get started' : 'Login to continue'}
            </p>
          </div>
          <form className="space-y-4" onSubmit={isRegister ? handleRegisterSubmit : handleSubmit}>
            {isRegister && (
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError('');
                }}
                placeholder={nameError || 'Full Name'}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a2253]"
              />
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
              placeholder={emailError || 'Email'}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a2253] bg-white text-black"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
              }}
              placeholder={passwordError || 'Password'}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a2253] bg-white text-black"
            />
            {isRegister && (
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setConfirmPasswordError('');
                }}
                placeholder={confirmPasswordError || 'Confirm Password'}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a2253] bg-white text-black"
              />
            )}
            <button
              type="submit"
              className="w-full py-2 bg-[#1a2253] text-white rounded hover:bg-[#1a2253]/90"
            >
              {isRegister ? 'Register' : 'Login'}
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .text-shadow {
          text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;