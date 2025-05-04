import React from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  const handleBookClick = (url) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <header className="w-full bg-yellow-400 p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <img src="/imgs/logo1.png" alt="Logo" className="h-10" />
          <div>
            <h1 className="text-lg font-bold text-blue-900">ADONAI AND GRACE</h1>
            <h2 className="text-lg font-bold text-blue-900">SCHOOL INC.</h2>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-blue-900">Story Books</h1>
      </header>

      <main className="flex gap-8 mt-16">
        <div
          className="w-64 h-96 bg-gray-200 rounded shadow-lg cursor-pointer hover:scale-105 transform transition"
          onClick={() => handleBookClick('/book1')}
        >
          <img src="/imgs/Book1/cover1.png" alt="Book 1" className="w-full h-full object-cover rounded" />
          <h3 className="text-center text-lg font-bold mt-2">Story Book 1</h3>
        </div>
        <div
          className="w-64 h-96 bg-gray-200 rounded shadow-lg cursor-pointer hover:scale-105 transform transition"
          onClick={() => handleBookClick('/book2')}
        >
          <img src="/imgs/Book2/cover2.png" alt="Book 2" className="w-full h-full object-cover rounded" />
          <h3 className="text-center text-lg font-bold mt-2">Story Book 2</h3>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;