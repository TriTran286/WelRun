import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white">
      {/* Decorative Element */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: '#52d406' }}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-8">
        {/* Logo and Subtitle */}
        <div className="text-center mb-12">
          <h2 
            className="text-5xl font-bold mb-3"
            style={{ color: '#52d406' }}
          >
            WelRun
          </h2>
          <p className="text-xl text-gray-300">ランニングへようこそ</p>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 
                        bg-gray-900 px-6 py-3 rounded-full hover:bg-gray-800 
                        transition-colors duration-300">
            <Mail className="w-5 h-5" style={{ color: '#52d406' }} />
            <a href="/contact" className="text-gray-300">
              お問い合わせはこちらからどうぞ
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>WelRun © A21DC553 TRAN MINH TRI | 卒業制作 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
