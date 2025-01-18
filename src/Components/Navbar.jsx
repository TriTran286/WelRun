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
      {/* Main Navbar */}
      <div 
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 px-safe
                  ${isScrolled 
                    ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'}`}
      >
        <div className="max-w-[2000px] mx-auto flex justify-between items-center 
                      h-16 sm:h-18 md:h-20 
                      px-4 sm:px-6 md:px-8 lg:px-40">
          {/* Logo Container */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="block">
              <img 
                src={logo}
                className="w-auto h-7 sm:h-8 md:h-10 lg:h-12 object-contain" 
                alt="Welrun Logo" 
              />
            </Link>
          </motion.div>

          {/* Menu Button */}
          <motion.button
            onClick={handleNav}
            className="relative cursor-pointer z-50 hover:scale-105 transition-transform
                     p-2 -mr-2 touch-target" // Added touch-target and padding
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-[#52d406]" />
          </motion.button>
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

      {/* Sidebar */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 h-full 
                     w-[280px] sm:w-[320px] md:w-[380px] 
                     bg-gray-900/95 backdrop-blur-md shadow-2xl z-50
                     px-safe-right" // Added safe area for notched devices
          >
            {/* Sidebar Header */}
            <div className="h-16 sm:h-18 md:h-20 
                          flex items-center justify-end 
                          px-4 sm:px-6 
                          border-b border-gray-800">
              <motion.button
                onClick={handleNav}
                className="p-2 hover:bg-gray-800/50 rounded-full transition-colors touch-target"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-[#52d406]" />
              </motion.button>
            </div>

            {/* Menu Items */}
            <ul className="py-4 md:py-6 overflow-y-auto h-[calc(100%-4rem)]">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={handleNav}
                      className="flex items-center gap-4 px-6 py-4 text-gray-300 
                               hover:bg-[#52d406]/10 hover:text-[#52d406]
                               transition-all duration-300 group touch-target"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6" />
                        <span className="font-medium text-sm sm:text-base md:text-lg">
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight 
                        className="ml-auto w-5 h-5 md:w-6 md:h-6 opacity-0 
                                 group-hover:opacity-100 transition-all duration-300 
                                 transform group-hover:translate-x-1" 
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

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