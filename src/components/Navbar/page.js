// components/Navbar.js
"use client"
import Link from 'next/link';
import React from 'react';


const Navbar = () => {
  
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg	uppercase font-bold	">
              TODO APP
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              
              <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              
              
              <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              
              
              <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              
              
              <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
