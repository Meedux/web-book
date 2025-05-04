'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './login.css';

export default function LoginPage() {
  const router = useRouter();
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    setIsLoginActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    if (email && password) {
      router.push('/'); // Navigate to home page after login
    }
  };

  return (
    <div className={`login-page ${isLoginActive ? 'active' : ''}`}>
      <div className="main-content" id="mainContent">
        <div className="top">
          <Image src="/imgs/logo1.png" alt="Logo" width={40} height={40} className="logo" />
          <span className="school-name">ADONAI & GRACE SCHOOL INC.</span>
        </div>
        <h1 className="title">Story Books</h1>
        <button className="login-btn" id="loginBtn" onClick={handleLoginClick}>Login</button>
      </div>

      <div className="login-container" id="loginContainer">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              id="password" 
              placeholder="Password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" id="submitBtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}