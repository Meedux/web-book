"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Book1() {
  // State to track checkbox states
  const [coverChecked, setCoverChecked] = useState(false);
  const [page1Checked, setPage1Checked] = useState(false);
  const [page2Checked, setPage2Checked] = useState(false);
  const [page3Checked, setPage3Checked] = useState(false);

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
        <Link href="/home" className="home-btn">
          <i className="fas fa-home">&#8962;</i>
        </Link>
      </header>

      <div className="book-container">
        <div className="book-title">
          <h1>Fractured Fairy Tale</h1>
        </div>
        <div className="book-area">
          {/* Hidden checkboxes to maintain original functionality - we won't interact with these directly */}
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

          {/* Book with proper class names that match CSS selectors */}
          <div className={`book ${coverChecked ? 'cover-checked' : ''} ${page1Checked ? 'page1-checked' : ''} ${page2Checked ? 'page2-checked' : ''} ${page3Checked ? 'page3-checked' : ''}`}>
            <div className="cover">
              <div className="front-cover" onClick={toggleCover}>
                <img src="/imgs/Book1/cover1.webp" alt="Cover Image" loading="lazy" />
              </div>
              <div className="inside-cover" onClick={toggleCover}></div>
            </div>

            <div className="page" id="page1">
              <div className="front-page">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className="next" onClick={togglePage1}>
                  <i className="fas fa-chevron-right">›</i>
                </div>
              </div>
              <div className="back-page">
                <img src="/imgs/Book1/b11.webp" alt="Page Image" />
                <div className="prev" onClick={togglePage1}>
                  <i className="fas fa-chevron-left">‹</i>
                </div>
              </div>
            </div>

            <div className="page" id="page2">
              <div className="front-page">
                <h2>Page 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="next" onClick={togglePage2}>
                  <i className="fas fa-chevron-right">›</i>
                </div>
              </div>
              <div className="back-page">
                <img src="/imgs/Book1/b12.webp" alt="Page Image" />
                <div className="prev" onClick={togglePage2}>
                  <i className="fas fa-chevron-left">‹</i>
                </div>
              </div>
            </div>

            <div className="page" id="page3">
              <div className="front-page">
                <h2>Page 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="next" onClick={togglePage3}>
                  <i className="fas fa-chevron-right">›</i>
                </div>
              </div>
              <div className="back-page">
                <img src="/imgs/Book1/b123.webp" alt="Page Image" />
                <div className="prev" onClick={togglePage3}>
                  <i className="fas fa-chevron-left">‹</i>
                </div>
              </div>
            </div>

            <div className="page" id="page4">
              <div className="front-page">
                <h2>Page 4</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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