"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../lib/auth/AuthProvider';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  const handleLogout = async () => {
    await logout();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Will be redirected by the useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-[#e9c04a] p-4 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-[1000]">
        <div className="flex items-center gap-4">
          <img src="/imgs/logo1.png" alt="Logo" className="h-12" />
          <div>
            <h1 className="text-base font-bold text-[#1a2253]">ADONAI AND GRACE</h1>
            <h2 className="text-base font-bold text-[#1a2253]">SCHOOL INC.</h2>
          </div>
        </div>
        <h1 className="text-xl font-bold text-[#1a2253] absolute left-1/2 transform -translate-x-1/2">Story Books</h1>
        <div className="relative">
          <button
            className="text-xl text-[#1a2253] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded p-3 w-48">
              <div className="mb-4 pb-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-800">Signed in as:</p>
                <p className="text-sm text-gray-600">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <ul className="space-y-1">
                <li>
                  <button
                    className="w-full text-left py-2 px-2 hover:bg-gray-100 rounded text-sm text-red-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Welcome, {user.name}!</h2>
        
        <div className="text-center mb-8">
          <p className="text-lg">Please select a book to read:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Book 1 */}
          <Link href="/book1" className="block">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60">
                <img 
                  src="/imgs/Book1/cover1.webp" 
                  alt="Book 1 Cover" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">Fractured Fairy Tale</h3>
                <p className="text-gray-600 mt-1 text-sm">An interactive story book</p>
              </div>
            </div>
          </Link>

          {/* Book 2 */}
          <Link href="/book2" className="block">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60">
                <img 
                  src="/imgs/Book2/cover2.png" 
                  alt="Book 2 Cover" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">Book 2</h3>
                <p className="text-gray-600 mt-1 text-sm">An interactive story book</p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;