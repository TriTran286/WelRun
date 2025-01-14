import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Heart, Brain, Trophy, Clock, 
  Activity, Bot, Leaf, ChevronRight, 
  BarChart3, Users, Target
} from 'lucide-react';
import Footer from '../../Components/Footer';
import runningHero from '../../assets/running-image/5.jpeg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <motion.div 
        className="fixed top-8 left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link 
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm 
                   rounded-full text-gray-700 hover:text-[#52d406] 
                   shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowLeft size={20} />
          <span>ホームに戻る</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={runningHero}
            alt="Running Track"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-8">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              About <br />
              <span className="text-[#52d406]">WelRun</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              WelRunは「Welcome to Running」の略称です。ランニングを通じて、
              より健康で充実した生活を実現するためのプラットフォームとして誕生しました。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div 
            className="max-w-4xl mx-auto prose prose-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              なぜWelRunなのか
            </h2>
            <p className="text-gray-700 mb-6">
              私たちは、ランニングを単なる運動としてではなく、人生を豊かにする手段として捉えています。
              ストレス社会と呼ばれる現代において、ランニングは身体的な健康だけでなく、
              メンタルヘルスの向上や自己実現のための強力なツールとなります。
            </p>
            <p className="text-gray-700 mb-6">
              しかし、ランニングを始めようとする多くの人が、適切なガイダンスや
              モチベーション維持の難しさに直面しています。WelRunは、そんな課題を
              最新のテクノロジーとコミュニティの力で解決します。
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              WelRunの特徴
            </h3>
            <ul className="space-y-6 list-none pl-0">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#52d406]/10 rounded-lg mt-1">
                  <Target className="w-5 h-5 text-[#52d406]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    個別最適化されたトレーニング
                  </h4>
                  <p className="text-gray-600">
                    AIが年齢、体重、目標などのデータを分析し、あなたに最適な
                    トレーニングプランを提案。進捗に応じて継続的に調整を行います。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#52d406]/10 rounded-lg mt-1">
                  <Leaf className="w-5 h-5 text-[#52d406]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    科学的な栄養管理
                  </h4>
                  <p className="text-gray-600">
                    ランナーに必要な栄養素を効率的に摂取できる食事プランを提供。
                    体重管理や体力向上に必要な栄養バランスを詳しくガイドします。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#52d406]/10 rounded-lg mt-1">
                  <Users className="w-5 h-5 text-[#52d406]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    コミュニティサポート
                  </h4>
                  <p className="text-gray-600">
                    同じ目標を持つランナーとの交流や、経験者からのアドバイスにより、
                    モチベーション維持とスキルアップをサポートします。
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              WelRunの提供する価値
            </h2>

            <div className="space-y-16">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  1. カスタマイズされたトレーニングプラン
                </h3>
                <p className="text-gray-700 mb-6">
                  初心者から経験者まで、それぞれのレベルと目標に合わせた
                  トレーニングプランを提供します。ウォーミングアップから
                  本格的なトレーニングまで、段階的に進められる内容で、
                  無理なく確実にスキルアップできます。
                </p>
                <ul className="space-y-3">
                  <li className="text-gray-600">
                    <span className="font-semibold text-gray-900">初心者向け：</span>
                    基礎体力作りから始める安全で効果的なプログラム
                  </li>
                  <li className="text-gray-600">
                    <span className="font-semibold text-gray-900">中級者向け：</span>
                    スピードと持久力を高めるバランスの取れたトレーニング
                  </li>
                  <li className="text-gray-600">
                    <span className="font-semibold text-gray-900">上級者向け：</span>
                    大会参加を視野に入れた本格的なトレーニング内容
                  </li>
                </ul>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  2. 科学的な栄養管理サポート
                </h3>
                <p className="text-gray-700 mb-6">
                  ランナーに必要な栄養素を効率的に摂取できるよう、
                  詳細な食事プランとアドバイスを提供します。目的に応じて、
                  体重管理や体力向上に最適な食事内容を提案します。
                </p>
                <ul className="space-y-3">
                  <li className="text-gray-600">
                    健康的な体重管理のための栄養バランス指導
                  </li>
                  <li className="text-gray-600">
                    レース前後の効果的な栄養摂取方法
                  </li>
                  <li className="text-gray-600">
                    トレーニング強度に応じた補給プラン
                  </li>
                </ul>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  3. AIによるパーソナライズ機能
                </h3>
                <p className="text-gray-700 mb-6">
                  最新のAI技術を活用し、あなたのデータを分析して最適な
                  トレーニング内容を提案します。進捗状況や体調に応じて、
                  プログラムを継続的に調整します。
                </p>
                <ul className="space-y-3">
                  <li className="text-gray-600">
                    個人の目標と現在の体力レベルに基づく最適化
                  </li>
                  <li className="text-gray-600">
                    トレーニング結果の詳細な分析とフィードバック
                  </li>
                  <li className="text-gray-600">
                    進捗に応じたプログラムの自動調整
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              WelRunと共に、新しいランニングライフを
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              私たちは、あなたのランニングの旅路に寄り添い、
              目標達成をサポートします。一歩ずつ、着実に、
              より健康で充実した生活への道を歩んでいきましょう。
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;