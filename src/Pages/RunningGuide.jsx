import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Search, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchResult = ({ result, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    onClick={onSelect}
    className="flex items-center gap-3 p-3 hover:bg-black/5 cursor-pointer transition-colors backdrop-blur-md"
  >
    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
      <img src={result.img} alt={result.title} className="w-full h-full object-cover" />
    </div>
    <div className="flex-grow">
      <h4 className="text-sm font-medium text-gray-900">{result.title}</h4>
      <div className="flex gap-2 mt-1">
        {result.tags.map((tag, index) => (
          <span key={index} className="text-xs text-gray-500">#{tag}</span>
        ))}
      </div>
    </div>
    <ChevronRight size={16} className="text-gray-400" />
  </motion.div>
);

const RunningGuide = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/runningguide/plan', label: 'Running Plan' },
    { path: '/runningguide/nutrition', label: 'Nutrition' },
    { path: '/runningguide/all', label: 'All' }
  ];

  const allContent = [
    // Running Plans
    {
      id: 1,
      title: "ウォークから走るへ",
      type: "plan",
      categories: "Plan Running",
      tags: ['ウォーカー', '初心者'],
      path: "/runningguide/plan/walktorun",
      img: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "初心者向け5Kランニング",
      type: "plan",
      categories: "Plan Running",
      tags: ['初心者', '5k'],
      path: "/runningguide/plan/beginner5k",
      img: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "初めての10Kランニングに挑戦",
      type: "plan",
      categories: "Plan Running",
      tags: ['初心者', '10k', '中級者'],
      path: "/runningguide/plan/first10k",
      img: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "初めてのハーフマラソンを走る",
      type: "plan",
      categories: "Plan Running",
      tags: ['マラソン', 'ハーフマラソン', '中級者'],
      path: "/runningguide/plan/firsthalfmarathon",
      img: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "初めてのフルマラソンを完走する",
      type: "plan",
      categories: "Plan Running",
      tags: ['マラソン', 'フルマラソン'],
      path: "/runningguide/plan/firstfullmarathon",
      img: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  // Filter search results
  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return allContent.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    ).slice(0, 5); // Limit to 5 results
  }, [searchQuery]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowResults(true);
    if (value) {
      navigate(`?search=${encodeURIComponent(value)}`, { replace: true });
    } else {
      navigate('.', { replace: true });
    }
  };

  const handleSelectResult = (result) => {
    navigate(result.path);
    setShowResults(false);
    setSearchQuery('');
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-container')) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Background */}
      <div className="relative min-h-[100vh] flex items-center">
        {/* Background Image and Overlay remain the same */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1530655638484-de9ff231551e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Running Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-12"
          >
            {/* Title sections remain the same */}
            <motion.h1 
              className="text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#52d406]">Running</span> Plan for Everyone
            </motion.h1>
            <motion.h2 
              className="text-3xl font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Running is Funny: <br />
              <span className="text-gray-200">トレーニングと栄養に関する完全ガイド</span>
            </motion.h2>

            {/* Search Section */}
            <motion.div 
              className="max-w-4xl mx-auto space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* Search Bar with Results Dropdown */}
              <div className="relative search-container">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="プランやタグを検索..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => setShowResults(true)}
                  className="w-full pl-12 pr-12 py-4 text-lg text-black bg-white/95 backdrop-blur-md border-2 
                           rounded-2xl focus:outline-none focus:border-[#52d406] 
                           transition-all duration-300 shadow-lg hover:shadow-xl"
                />
                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => {
                        setSearchQuery('');
                        setShowResults(false);
                        navigate('.');
                      }}
                      className="absolute inset-y-0 right-4 flex items-center"
                    >
                      <X size={20} className="text-gray-400 hover:text-gray-600" />
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Search Results Dropdown */}
                <AnimatePresence>
                  {showResults && searchQuery && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl 
                               shadow-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden z-50"
                      style={{ maxHeight: '300px', overflowY: 'auto' }}
                    >
                      {searchResults.map((result) => (
                        <SearchResult
                          key={result.id}
                          result={result}
                          onSelect={() => handleSelectResult(result)}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Menu */}
              <motion.nav className="pt-2">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={location.pathname}
                    className="flex justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {menuItems.map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -2, scale: 1.05 }}
                        whileTap={{ y: 0, scale: 0.95 }}
                      >
                        <Link 
                          to={item.path} 
                          className={`px-6 py-3 rounded-full bg-white/90 shadow-lg hover:shadow-xl
                                   text-gray-700 hover:text-[#52d406] transition-all duration-300
                                   border-2 border-transparent hover:border-[#52d406]
                                   backdrop-blur-md font-medium ${
                                     location.pathname === item.path ? 'border-[#52d406] text-[#52d406]' : ''
                                   }`}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </motion.nav>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Content Section with AnimatePresence */}
      <div className="max-w-7xl mx-auto px-6 -mt-60 mb-20 relative z-20">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet context={{ searchQuery }} />
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer/>          
    </div>
  );
};

export default RunningGuide;