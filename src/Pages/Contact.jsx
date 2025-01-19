import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, ExternalLink, MessageCircle } from 'lucide-react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactPage = () => {
  const socialLinks = [
    {
      platform: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      handle: "@welrun.official",
      url: "https://instagram.com/welrun.official",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500"
    },
    {
      platform: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      handle: "WelRun Community",
      url: "https://facebook.com/welrun",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600"
    },
    {
      platform: "Email",
      icon: <Mail className="w-6 h-6" />,
      handle: "contact@welrun.com",
      url: "mailto:contact@welrun.com",
      gradientFrom: "from-red-500",
      gradientTo: "to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      <Navbar />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#52d406] opacity-5 rounded-full blur-3xl" />
        <div className="absolute top-20 -left-40 w-80 h-80 bg-[#52d406] opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-[#52d406] to-green-400 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
                WelRun Community
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl"
            >
              Let's Connect
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-xl mt-5 mx-auto text-xl text-gray-600"
            >
              ランニングコミュニティに参加して、一緒に走りましょう
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 relative">
        {/* Connect Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-green-100"
        >
          {/* Brand Header */}
          <div className="bg-gradient-to-r from-[#52d406] to-green-400 px-6 py-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" />
            <div className="relative">
              <h2 className="text-6xl font-bold mb-2">WelRun</h2>
              <p className="text-white/90">Welcome to Running</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-8">
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.agit
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group block"
                >
                  <div className={`flex items-center justify-between p-4 rounded-xl 
                                bg-gradient-to-r hover:from-opacity-10 hover:to-opacity-10 
                                ${link.gradientFrom} ${link.gradientTo} 
                                hover:bg-opacity-5 transition-all duration-300`}>
                    <div className="flex items-center gap-4">
                      <div className="text-white p-2 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800">
                        {link.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{link.platform}</div>
                        <div className="text-sm text-gray-700">{link.handle}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#52d406] transition-colors" />
                  </div>
                </motion.agit>
              ))}
            </div>
          </div>

          {/* Direct Message Section */}
        </motion.div>

        {/* Community Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center bg-white/60 backdrop-blur-sm p-8 rounded-xl border border-green-100"
        >
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            コミュニティに参加しよう
          </h3>
          <p className="text-gray-600">
            毎週のランニングイベントやトレーニングセッションで<br />
            一緒に目標を達成しましょう
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;