'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const IndexPage = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [animatingBooks, setAnimatingBooks] = useState(false);
  
  const book1Ref = useRef(null);
  const book2Ref = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutUs = (e) => {
    e.preventDefault();
    setAboutUsOpen(!aboutUsOpen);
  };

  const toggleContacts = (e) => {
    e.preventDefault();
    setContactsOpen(!contactsOpen);
  };

  const showLogout = (e) => {
    e.preventDefault();
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    // Replace with actual logout logic
    router.push('/login');
  };

  const handleBookClick = (url, bookId) => {
    if (animatingBooks) return;
    setAnimatingBooks(true);
    
    const currentBookRef = bookId === 'book1' ? book1Ref : book2Ref;
    const otherBookRef = bookId === 'book1' ? book2Ref : book1Ref;
    
    currentBookRef.current.classList.add('zoomed-fade-out');
    otherBookRef.current.classList.add('shrink-out');
    
    setTimeout(() => {
      router.push(url);
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center  min-h-screen bg-white">
      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal-overlay flex">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-[90%] text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Are you sure you want to leave this page?</h2>
            <p className="text-gray-700 mb-6">{"You'll"} need to log in again to access your account.</p>
            <div className="flex justify-around">
              <button 
                onClick={confirmLogout}
                className="px-5 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Confirm
              </button>
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="px-5 py-2 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="w-full bg-yellow-400 p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <Image src="/imgs/logo1.png" alt="Logo" width={40} height={40} className="h-10" />
          <div>
            <h1 className="text-lg font-bold text-blue-900">ADONAI AND GRACE</h1>
            <h2 className="text-lg font-bold text-blue-900">SCHOOL INC.</h2>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-blue-900">Story Books</h1>
        
        {/* Burger Menu Button */}
        <div className="mr-5">
          <button 
            onClick={toggleMenu} 
            className="flex flex-col justify-between w-6 h-[18px] bg-transparent border-none cursor-pointer"
            aria-label="Menu"
          >
            <span className={`h-[3px] w-full bg-white rounded-sm transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`h-[3px] w-full bg-white rounded-sm transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-[3px] w-full bg-white rounded-sm transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Sliding Tray Menu */}
      <nav className={`menu-tray ${menuOpen ? 'open' : ''}`}>
        <ul className="list-none">
          <li className="my-5">
            <a 
              href="#" 
              onClick={showLogout} 
              className="text-white font-bold text-lg hover:text-blue-300 transition"
            >
              Log out
            </a>
          </li>
          <li id="about-us" className={`my-5 ${aboutUsOpen ? 'open' : ''}`}>
            <a 
              href="#" 
              onClick={toggleAboutUs} 
              className="text-white font-bold text-lg hover:text-blue-300 transition"
            >
              About Us
            </a>
            {aboutUsOpen && (
              <div className="p-4 mt-3 rounded bg-blue-900 animate-[slideDown_0.3s_ease_forwards]">
                <p className="text-white font-bold">Active Minds, Gracious Hearts</p>
                <p className="text-white leading-relaxed">An INCLUSIVE COMMUNITY where everyone is PART of it and not APART from it.</p>
                <div className="flex justify-center mt-3">
                  <Image src="/imgs/logo1.png" alt="Logo" width={100} height={100} className="w-24 h-auto" />
                </div>
              </div>
            )}
          </li>
          <li id="contacts" className={`my-5 ${contactsOpen ? 'open' : ''}`}>
            <a 
              href="#" 
              onClick={toggleContacts} 
              className="text-white font-bold text-lg hover:text-blue-300 transition"
            >
              Contacts
            </a>
            {contactsOpen && (
              <div className="p-4 mt-3 rounded bg-blue-900 animate-[slideDown_0.3s_ease_forwards]">
                <div className="flex items-start gap-2 mb-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                  <span className="text-sm text-white leading-relaxed">P9 B12 L18 Eastwood Residences, San Isidro, Rodriguez, Philippines</span>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.12.45 2.33.69 3.58.69a1 1 0 011 1v3.5a1 1 0 01-1 1C10.29 21.97 2.03 13.71 2.03 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58.16.4.07.86-.21 1.11l-2.2 2.2z" />
                  </svg>
                  <span className="text-sm text-white">0960 462 0070</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 13.065L2 6V18h20V6l-10 7.065zM12 11L2 4h20L12 11z" />
                  </svg>
                  <span className="text-sm text-white">AdonaiAndGraceSchool@yahoo.com</span>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex gap-8 mt-16 animation-zoom-in">
        <div
          ref={book1Ref}
          className="w-64 h-96 bg-gray-200 rounded shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
          onClick={() => handleBookClick('/book1', 'book1')}
        >
          <div className="w-full h-full overflow-hidden rounded">
            <Image src="/imgs/Book1/cover1.webp" alt="Book 1" width={256} height={384} className="w-full h-full object-cover rounded" />
          </div>
          <h3 className="text-center text-lg font-bold mt-2">Story Book 1</h3>
        </div>
        <div
          ref={book2Ref}
          className="w-64 h-96 bg-gray-200 rounded shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
          onClick={() => handleBookClick('/book2', 'book2')}
        >
          <div className="w-full h-full overflow-hidden rounded">
            <Image src="/imgs/Book2/cover2.png" alt="Book 2" width={256} height={384} className="w-full h-full object-cover rounded" />
          </div>
          <h3 className="text-center text-lg font-bold mt-2">Story Book 2</h3>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;