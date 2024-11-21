// Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#A21CAF] text-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="px-4 py-2 rounded-md hover:bg-[#C084FC]">
                  Home
                </Link>
                <Link href="/about-us" className="px-4 py-2 rounded-md hover:bg-[#C084FC]">
                  About Us
                </Link>
                <Link href="/classes" className="px-4 py-2 rounded-md hover:bg-[#C084FC]">
                  Classes
                </Link>
                <Link href="/gallery" className="px-4 py-2 rounded-md hover:bg-[#C084FC]">
                  Gallery
                </Link>
                <Link href="/contact" className="px-4 py-2 rounded-md hover:bg-[#C084FC]">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-[#FFFFFF] hover:bg-[#C084FC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#A21CAF] focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              &#9776;  {/* Using HTML entity for menu icon */}
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md hover:bg-[#C084FC]">
            Home
          </Link>
          <Link href="/about-us" className="block px-3 py-2 rounded-md hover:bg-[#C084FC]">
            About Us
          </Link>
          <Link href="/classes" className="block px-3 py-2 rounded-md hover:bg-[#C084FC]">
            Classes
          </Link>
          <Link href="/gallery" className="block px-3 py-2 rounded-md hover:bg-[#C084FC]">
            Gallery
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md hover:bg-[#C084FC]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;