"use client"
import React, { useState } from 'react';

const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { id: 'page1', leftContent: '/imgs/Book1/b11.webp', rightContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit, ante sed vehicula dignissim, turpis lectus semper lectus, in lacinia quam nisi ut metus. Nulla dignissim dolor ut augue condimentum sollicitudin. Nulla mattis, ipsum a elementum tincidunt, risus ligula lacinia libero, ac aliquet sem purus vel ex. Vestibulum et neque faucibus, ullamcorper massa id, rutrum ante. Curabitur tristique orci turpis. .' },
    { id: 'page2', leftContent: '/imgs/Book1/b12.webp', rightContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Nulla hendrerit malesuada egestas. Nunc dapibus aliquet nibh a ultricies. Mauris in purus scelerisque, rutrum nunc porta, consequat augue. Phasellus tempor nisl metus, vel pharetra nibh euismod vel. Phasellus convallis iaculis malesuada. Donec ante sem, luctus eget erat vel, vulputate placerat metus. Etiam sed est ornare, maximus odio sit amet, consectetur ante. Vivamus varius ligula et viverra accumsan..' },
    { id: 'page3', leftContent: '/imgs/Book1/b123.webp', rightContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Nulla hendrerit malesuada egestas. Nunc dapibus aliquet nibh a ultricies. Mauris in purus scelerisque, rutrum nunc porta, consequat augue. Phasellus tempor nisl metus, vel pharetra nibh euismod vel. Phasellus convallis iaculis malesuada. Donec ante sem, luctus eget erat vel, vulputate placerat metu..' },
    { id: 'page4', leftContent: '/imgs/Book1/b1234.webp', rightContent: 'Praesent pharetra risus tincidunt suscipit scelerisque. Integer a ipsum sit amet mauris pretium rutrum. Cras a imperdiet mauris. Ut auctor dolor ac ante porta convallis. Phasellus rhoncus, elit a tristique efficitur, nibh mauris consectetur lacus, quis pulvinar purus ligula vitae libero. Praesent tempor fermentum libero id convallis..' },
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
    <div className="flex flex-col h-screen bg-gray-100">
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
        <h1 className="text-3xl pt-6 font-bold text-[#1a2253]">Fractured Fairy Tale</h1>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <div className="relative w-[800px] h-[500px] bg-white shadow-lg rounded-lg flex overflow-hidden">
          {/* Left Page */}
          <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${pages[currentPage].leftContent})` }}></div>

          {/* Right Page */}
          <div className="w-1/2 h-full p-8 flex flex-col justify-between">
            <p className="text-lg text-gray-700">{pages[currentPage].rightContent}</p>
            <h2 className="text-2xl font-bold self-end text-gray-900">{`Page ${currentPage + 1}`}</h2>
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

export default FlipBook;