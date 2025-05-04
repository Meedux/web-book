"use client"
import React, { useState } from 'react';

const Book2 = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    {
      id: 'page1',
      leftContent: '/imgs/Book2/2.png',
      rightContent: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      id: 'page2',
      leftContent: '/imgs/Book2/3.png',
      rightContent: 'Page 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 'page3',
      leftContent: '/imgs/Book2/4.png',
      rightContent: 'Page 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 'page4',
      leftContent: '/imgs/Book2/5.png',
      rightContent: 'Page 4: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 'page5',
      leftContent: '/imgs/Book2/7.png',
      rightContent: 'Page 5: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
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

      <div className="text-center mt-4">
        <h1 className="text-3xl pt-6 font-bold text-[#1a2253]">Book 2</h1>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <div className="relative w-[800px] h-[500px] bg-white shadow-lg rounded-lg flex overflow-hidden">
          {/* Left Page */}
          <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${pages[currentPage].leftContent})` }}></div>

          {/* Right Page */}
          <div className="w-1/2 h-full p-8 flex flex-col justify-between">
            <h2 className="text-2xl font-bold">{`Page ${currentPage + 1}`}</h2>
            <p className="text-lg text-gray-700">{pages[currentPage].rightContent}</p>
          </div>

          {/* Navigation Buttons */}
          {currentPage > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#8249;
            </button>
          )}
          {currentPage < pages.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#8250;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book2;