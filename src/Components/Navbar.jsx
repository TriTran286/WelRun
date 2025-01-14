import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo-pack/logo-white.png";
import { 
  Home,
  Navigation,
  BookOpen,
  MessageCircle,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: "/", label: "HOME", icon: Home },
    { path: "/runningguide", label: "RUNNING GUIDE", icon: Navigation },
    { path: "/story", label: "STORY", icon: BookOpen },
    { path: "/contact", label: "CONTACT", icon: MessageCircle }
  ];

  const handleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? 'unset' : 'hidden';
  };

  return (
    <>
      {/* Main Navbar - Fixed width container */}
      <div 
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
                  ${isScrolled 
                    ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'}`}
      >
        {/* Content wrapper with max-width and fixed padding */}
        <div className="w-full max-w-[1536px] mx-auto">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20 
                         px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Logo Container with fixed width */}
            <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] flex items-center">
              <Link to="/" className="block">
                <img 
                  src={logo}
                  className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto object-contain" 
                  alt="Welrun Logo" 
                />
              </Link>
            </div>

            {/* Centered space - helps maintain balance */}
            <div className="flex-1"></div>

            {/* Menu Button with fixed position */}
            <div className="w-[40px] sm:w-[44px] md:w-[48px] flex justify-end">
              <button
                onClick={handleNav}
                className="p-2 cursor-pointer hover:scale-105 transition-transform
                         touch-target"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-[#52d406]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={handleNav}
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Fixed width */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 h-full 
                     w-[280px] sm:w-[320px] md:w-[380px] 
                     bg-gray-900/95 backdrop-blur-md shadow-2xl z-50"
          >
            {/* Sidebar Header with fixed height */}
            <div className="h-16 sm:h-18 md:h-20 
                          flex items-center justify-end 
                          px-4 sm:px-6 
                          border-b border-gray-800">
              <button
                onClick={handleNav}
                className="p-2 hover:bg-gray-800/50 rounded-full transition-colors touch-target"
                aria-label="Close menu"
              >
                <X className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-[#52d406]" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="h-[calc(100vh-4rem)] overflow-y-auto">
              <nav className="py-4 md:py-6">
                <ul>
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index}>
                        <Link
                          to={item.path}
                          onClick={handleNav}
                          className="flex items-center gap-4 px-6 py-4 text-gray-300 
                                   hover:bg-[#52d406]/10 hover:text-[#52d406]
                                   transition-all duration-300 group"
                        >
                          <Icon className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6" />
                          <span className="font-medium text-sm sm:text-base md:text-lg">
                            {item.label}
                          </span>
                          <ChevronRight 
                            className="ml-auto w-5 h-5 md:w-6 md:h-6 opacity-0 
                                     group-hover:opacity-100 transition-all duration-300 
                                     transform group-hover:translate-x-1" 
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 
                          border-t border-gray-800 bg-gray-900/95">
              <div className="text-gray-400 text-xs sm:text-sm md:text-base">
                <p>© 2024 WELRUN.</p>
                <p>All rights reserved.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;