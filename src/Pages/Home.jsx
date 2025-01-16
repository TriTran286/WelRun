import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { ReactTyped } from "react-typed";
import { 
  Heart, Brain, Scale, Shield, Moon, Zap, 
  Target, Users, ChevronRight, Flame, Smile, HeartPulse 
} from 'lucide-react';
import { PiMouseScrollLight } from "react-icons/pi";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import photo from "../assets/running-image/main.jpeg";
import aboutphoto from "../assets/running-image/5.jpeg";
import whyrunning from "../assets/running-image/3.jpeg";

// Hero Section Component
const HeroSection = () => {
  const heroStyle = useMemo(() => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${photo})`,
    backgroundAttachment: "fixed"
  }), []);

  return (
    <motion.div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between relative"
      style={heroStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      
      {/* Hero Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            <span className="block mb-2 sm:mb-4">Running makes me</span>
            <ReactTyped
              className="text-maincolor inline-block"
              strings={["BRAVER", "FOCUSED", "HAPPIER", "FASTER"]}
              typeSpeed={80}
              backSpeed={120}
              startDelay={1000}
              loop
            />
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-bold max-w-2xl mx-auto px-4">
            ランニングの力で人生を変えましょう。一歩一歩が、より良い自分への道となります。
          </p>

          <button
            className="bg-maincolor text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold 
                     hover:bg-opacity-90 transform hover:scale-105 transition-all
                     shadow-lg hover:shadow-maincolor/50 text-sm sm:text-base"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="flex justify-center items-center flex-col mb-6 sm:mb-10 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0] 
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <PiMouseScrollLight className="text-white text-2xl sm:text-3xl" />
        <p className="text-white text-xs sm:text-sm tracking-wider uppercase">scroll down</p>
      </motion.div>
    </motion.div>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <div id="about" className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image Side */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-maincolor/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutphoto} 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                alt="About Running"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 sm:space-y-8 px-4 sm:px-0"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-maincolor">ABOUT</h2>
              <div className="w-16 sm:w-20 h-1 bg-maincolor" />
            </div>

            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                ランニングへようこそ及びWelRun、ランニングを始める方のための最適なガイドです。
                初心者向けに設計されたこのプラットフォームでは、ランニングがもたらす身体的および
                精神的な健康の素晴らしい効果を発見できるようサポートします。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-maincolor/10 flex items-center justify-center">
                    <Target className="w-5 sm:w-6 h-5 sm:h-6 text-maincolor" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">パーソナライズプラン</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-maincolor/10 flex items-center justify-center">
                    <Users className="w-5 sm:w-6 h-5 sm:h-6 text-maincolor" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">コミュニティサポート</span>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-maincolor border-2 border-maincolor 
                       px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base
                       hover:bg-maincolor hover:text-white transition-all duration-300
                       transform hover:scale-105 group"
            >
              Learn More
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 
               hover:bg-white/15 transition-all duration-300 
               border border-white/10 hover:border-maincolor/50"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-maincolor/20 rounded-lg 
                  flex items-center justify-center mb-4 sm:mb-6">
      <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-maincolor" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{title}</h3>
    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

// Effects Card Component
const EffectCard = ({ item, index }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 border-2 border-gray-100 
                hover:border-maincolor relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute -top-4 -right-4 bg-maincolor h-12 sm:h-16 w-12 sm:w-16 
                    rounded-full flex items-center justify-center text-white 
                    font-bold text-lg sm:text-xl transform rotate-12">
        {index + 1}
      </div>
      
      <div className="mb-4 sm:mb-6">
        <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-maincolor" />
      </div>
      
      <div className="flex items-end gap-1 mb-3 sm:mb-4">
        <h3 className="text-4xl sm:text-5xl font-bold text-maincolor">{item.value}</h3>
        {item.suffix && (
          <span className="text-lg sm:text-xl font-bold text-maincolor mb-1 sm:mb-2">
            {item.suffix}
          </span>
        )}
      </div>

      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
        {item.title}
      </h4>
      
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
        {item.text}
      </p>
    </motion.div>
  );
};

// Main HomePage Component
const HomePage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <HeroSection />
      <AboutSection />
      
      {/* Why Running Section */}
      <motion.section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: scrollYProgress * 100 }}
            className="w-full h-[120%]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${whyrunning})`,
              backgroundAttachment: "fixed",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              なぜ<span className="text-maincolor">ランニング</span>なのか
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              ランニングは単なる運動ではありません。<br className="hidden sm:block"/>
              それは、あなたの人生を変える可能性を秘めています。
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {MIDDLE_FEATURES.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>

          {/* Bottom Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
            {BOTTOM_FEATURES.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>

          {/* Bottom Tagline */}
          <motion.div 
            className="text-center mt-12 sm:mt-16 lg:mt-20"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                <span className="text-maincolor">何でも</span> • 
                <span className="text-maincolor">いつでも</span> • 
                <span className="text-maincolor">どこでも</span>
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                あなたの新しいランニングライフ、今日から始めませんか？
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Effects Section */}
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondcolor mb-3 sm:mb-4">
              ランニングによる効果
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              ランニングは単なるスポーツではなく、そのもたらす価値は計り知れません。
              毎日たった1時間のランニングで、あなたの人生を変えることができます！
            </p>
          </motion.div>

          {/* Effects Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {EFFECTS_DATA.map((item, index) => (
              <EffectCard key={index} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Data Constants
const MIDDLE_FEATURES = [
  {
    icon: Brain,
    title: "精神的な健康を向上",
    description: "ランニングはストレス、不安、うつ病を軽減し、自信や幸福感を高めます。"
  },
  {
    icon: Scale,
    title: "体重を減らし、体型を維持",
    description: "カロリーを効率的に消費し、体重管理や健康的な体型の維持に役立ちます。"
  },
  {
    icon: Shield,
    title: "免疫力を強化",
    description: "定期的なランニングは免疫システムを改善し、病気に対する抵抗力を高めます。"
  }
];

const BOTTOM_FEATURES = [
  {
    icon: Moon,
    title: "睡眠の質を向上",
    description: "ランニングはリラックスを促し、深い睡眠を得やすくします。夜間の良質な睡眠は、心身の回復と健康維持に重要な役割を果たします。"
  },
  {
    icon: Zap,
    title: "持久力とエネルギーを増強",
    description: "ランニングは日常生活の中でのスタミナやエネルギーを向上させます。継続的なトレーニングで、より活動的な生活を送ることができます。"
  }
];

const EFFECTS_DATA = [
  {
    value: "45%",
    title: "心臓病リスクの低減",
    text: "毎日30分走るだけで、心臓の健康を強化し、心血管疾患のリスクを45％も減少させることができます。",
    icon: Heart
  },
  {
    value: "40%",
    title: "脳機能の向上",
    text: "ランニングは脳への血流を増加させ、記憶力を向上させます。さらに、アルツハイマー病のリスクを40%低減する効果もあります。",
    icon: Brain
  },
  {
    value: "600",
    title: "効果的なカロリー消費",
    suffix: "kcal",
    text: "最も効果的なカロリー消費法の一つであり、体重70kgの人が中程度のペースで一時間走ると、600 kcalキロカロリーを消費できます。",
    icon: Flame
  },
  {
    value: "70%",
    title: "メンタルヘルスの改善",
    text: "「幸せホルモン」と呼ばれるエンドルフィンの分泌を促進し、ストレスや不安をも70%軽減します。",
    icon: Smile
  },
  {
    value: "30%",
    title: "健康寿命の延伸",
    text: "ランニングを定期的に行うことで、全ての原因による早期死亡のリスクを約30％減少させることができます。",
    icon: HeartPulse
  },
  {
    value: "65%",
    title: "睡眠の質を改善",
    text: "ランニングは深い眠りをサポートし、不眠症の症状を65％改善します。翌朝にはエネルギーが満ち溢れることでしょう。",
    icon: Moon
  }
];

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default HomePage;