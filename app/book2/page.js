"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '../lib/auth/AuthProvider';
import { useRouter } from 'next/navigation';

export default function Book2() {
  // Auth protection
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  // State to track checkbox states
  const [coverChecked, setCoverChecked] = useState(false);
  const [page1Checked, setPage1Checked] = useState(false);
  const [page2Checked, setPage2Checked] = useState(false);
  const [page3Checked, setPage3Checked] = useState(false);
  const [page4Checked, setPage4Checked] = useState(false);
  const [page5Checked, setPage5Checked] = useState(false);

  // Toggle functions for each checkbox
  const toggleCover = (e) => {
    e.preventDefault(); // Prevent default to ensure it works
    setCoverChecked(!coverChecked);
  };
  
  const togglePage1 = (e) => {
    e.preventDefault(); // Prevent default to ensure it works
    setPage1Checked(!page1Checked);
  };
  
  const togglePage2 = (e) => {
    e.preventDefault(); // Prevent default to ensure it works
    setPage2Checked(!page2Checked);
  };
  
  const togglePage3 = (e) => {
    e.preventDefault(); // Prevent default to ensure it works
    setPage3Checked(!page3Checked);
  };
  
  const togglePage4 = (e) => {
    e.preventDefault(); // Prevent default to ensure it works
    setPage4Checked(!page4Checked);
  };
  
  const togglePage5 = (e) => {
    e.preventDefault(); // Prevent default to ensure it works
    setPage5Checked(!page5Checked);
  };
  
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
    <>
      <header className="header">
        <div className="logo-area">
          <img src="/imgs/logo1.png" alt="Logo" className="logo-img" />
          <div className="school-name">
            <span className="name-line1">ADONAI AND GRACE</span><br />
            <span className="name-line2">SCHOOL INC.</span>
          </div>
        </div>
        <div className="relative">
          <button
            className="home-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-home">&#8962;</i>
          </button>
          {isMenuOpen && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded p-3 w-48">
              <div className="mb-4 pb-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-800">Signed in as:</p>
                <p className="text-sm text-gray-600">{user.name}</p>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/home" className="block py-2 px-2 hover:bg-gray-100 rounded text-sm">
                    Home
                  </Link>
                </li>
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

      <div className="book-container">
        <div className="book-title">
          <h1>Book 2</h1>
        </div>
        <div className="book-area">
          {/* Hidden checkboxes to maintain original functionality */}
          <input 
            type="checkbox" 
            id="checkbox-cover"
            checked={coverChecked}
            readOnly
          />
          <input 
            type="checkbox" 
            id="checkbox-page1"
            checked={page1Checked}
            readOnly
          />
          <input 
            type="checkbox" 
            id="checkbox-page2"
            checked={page2Checked}
            readOnly
          />
          <input 
            type="checkbox" 
            id="checkbox-page3"
            checked={page3Checked}
            readOnly
          />
          <input 
            type="checkbox" 
            id="checkbox-page4"
            checked={page4Checked}
            readOnly
          />
          <input 
            type="checkbox" 
            id="checkbox-page5"
            checked={page5Checked}
            readOnly
          />

          {/* Book with proper class names that match CSS selectors */}
          <div className={`book ${coverChecked ? 'cover-checked' : ''} ${page1Checked ? 'page1-checked' : ''} ${page2Checked ? 'page2-checked' : ''} ${page3Checked ? 'page3-checked' : ''} ${page4Checked ? 'page4-checked' : ''} ${page5Checked ? 'page5-checked' : ''}`}>
            <div className="cover">
              <div className="front-cover" onClick={toggleCover}>
                <img src="/imgs/Book2/cover2.png" alt="Cover Image" loading="lazy" />
              </div>
              <div className="inside-cover" onClick={toggleCover}></div>
            </div>

            <div className="page" id="page1">
              <div className="front-page">
                <h2>PAGE 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className="next" onClick={togglePage1}>
                  <i className="fas fa-chevron-right">›</i>
                </div>
              </div>
              <div className="back-page">
                <img src="/imgs/Book2/2.png" alt="Page Image" />
                <div className="prev" onClick={togglePage1}>
                  <i className="fas fa-chevron-left">‹</i>
                </div>
              </div>
            </div>

            <div className="page" id="page2">
              <div className="front-page">
                <h2>PAGE 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="next" onClick={togglePage2}>
                  <i className="fas fa-chevron-right">›</i>
                </div>
              </div>
              <div className="back-page">
                <img src="/imgs/Book2/3.png" alt="Page Image" />
                <div className="prev" onClick={togglePage2}>
                  <i className="fas fa-chevron-left">‹</i>
                </div>
              </div>
            </div>

            <div className="page" id="page3">
              <div className="front-page">
                <h2>PAGE 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="next" onClick={togglePage3}>
                  <i className="fas fa-chevron-right">›</i>
                </div>
              </div>
              <div className="back-page">
                <img src="/imgs/Book2/4.png" alt="Page Image" />
                <div className="prev" onClick={togglePage3}>
                  <i className="fas fa-chevron-left">‹</i>
                </div>
              </div>
            </div>

            <div className="page" id="page4">
              <div className="front-page">
                <h2>PAGE 4</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="next" onClick={togglePage4}>
                  <i className="fas fa-chevron-right">›</i>
                </div>
              </div>
              <div className="back-page">
                <img src="/imgs/Book2/5.png" alt="Page Image" />
                <div className="prev" onClick={togglePage4}>
                  <i className="fas fa-chevron-left">‹</i>
                </div>
              </div>
            </div>

            <div className="page" id="page5">
              <div className="front-page">
                <h2>PAGE 5</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="next" onClick={togglePage5}>
                  <i className="fas fa-chevron-right">›</i>
                </div>
              </div>
              <div className="back-page">
                <img src="/imgs/Book2/7.png" alt="Page Image" />
                <div className="prev" onClick={togglePage5}>
                  <i className="fas fa-chevron-left">‹</i>
                </div>
              </div>
            </div>

            <div className="back-cover"></div>
          </div>
        </div>
      </div>
      
      {/* Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </>
  );
}