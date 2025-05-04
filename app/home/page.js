"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-[#e9c04a] p-4 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <img src="/imgs/logo1.png" alt="Logo" className="h-12" />
          <div>
            <h1 className="text-base font-bold text-[#1a2253]">ADONAI AND GRACE</h1>
            <h2 className="text-base font-bold text-[#1a2253]">SCHOOL INC.</h2>
          </div>
        </div>
        <h1 className="text-xl font-bold text-[#1a2253] absolute left-1/2 transform -translate-x-1/2">Story Books</h1>
        <button
          className="text-xl text-[#1a2253] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        {isMenuOpen && (
          <div className="absolute top-14 right-6 bg-white shadow-lg rounded p-3 w-36">
            <ul className="space-y-2">
              <li>
                <button
                  className="w-full text-left text-[#1a2253] hover:bg-gray-100 p-2 rounded text-sm"
                  onClick={() => alert('Logging out...')}
                >
                  Log Out
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left text-[#1a2253] hover:bg-gray-100 p-2 rounded text-sm"
                  onClick={() => alert('About Us clicked')}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left text-[#1a2253] hover:bg-gray-100 p-2 rounded text-sm"
                  onClick={() => alert('Contact clicked')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="container mx-auto mt-8 flex justify-center items-center space-x-6">
        <Link href="/book1" className="book block text-center w-72 transform transition-transform duration-300 hover:scale-105">
          <div className="image-wrapper relative w-72 h-96 mx-auto">
            <Image src="/imgs/Book1/cover1.webp" alt="Book 1" layout="fill" objectFit="cover" className="rounded shadow-md" />
          </div>
          <h3 className="mt-4 text-2xl font-bold text-[#1a2253]">Story Book 1</h3>
        </Link>
        <Link href="/book2" className="book block text-center w-72 transform transition-transform duration-300 hover:scale-105">
          <div className="image-wrapper relative w-72 h-96 mx-auto">
            <Image src="/imgs/Book2/cover2.png" alt="Book 2" layout="fill" objectFit="cover" className="rounded shadow-md" />
          </div>
          <h3 className="mt-4 text-2xl font-bold text-[#1a2253]">Story Book 2</h3>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;