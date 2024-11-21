// Footer.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#A21CAF] text-[#FFFFFF] py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://www.facebook.com" aria-label="Facebook" className="hover:text-[#E879F9]">
              <Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter" className="hover:text-[#E879F9]">
              <Image src="/twitter-icon.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram" className="hover:text-[#E879F9]">
              <Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-4 md:mb-0">
            <p>Email: <a href="mailto:info@example.com" className="hover:text-[#E879F9]">info@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-[#E879F9]">+1 (234) 567-890</a></p>
          </div>

          {/* Copyright Notice */}
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Mystery Co. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;