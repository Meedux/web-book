import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const tempEmail = 'user1';
    const tempPassword = '1234';

    if (email !== tempEmail) {
      setError('Email does not exist');
      setEmail('');
    } else if (password !== tempPassword) {
      setError('Re-enter password');
      setPassword('');
    } else {
      router.push('/index');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-yellow-400">
      <div className="text-center">
        <div className="mb-8">
          <img src="/imgs/logo1.png" alt="Logo" className="h-10 mx-auto" />
          <h1 className="text-2xl font-bold text-blue-900">ADONAI & GRACE SCHOOL INC.</h1>
        </div>
        <h1 className="text-6xl font-bold text-blue-900 mb-8">Story Books</h1>
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;