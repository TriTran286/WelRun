import React from 'react';
import { ArrowLeft, Clock, Calendar, Target, AlertCircle, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhaseCard = ({ phase, weeks, description, points }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase}</h3>
    <p className="text-sm text-[#52d406] font-medium mb-3">{weeks}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-2">
          <Target size={16} className="text-[#52d406] mt-1 flex-shrink-0" />
          <span className="text-gray-600">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const First10K = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Link 
          to="/runningguide/plan"
          className="inline-flex items-center text-gray-600 hover:text-[#52d406] transition-colors mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          プラン一覧に戻る
        </Link>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2944&auto=format&fit=crop"
            alt="10Kランニング"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Title and Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">10Kトレーニングプラン</h1>
          <div className="flex gap-4 text-gray-600">
            <span className="inline-flex items-center">
              <Clock size={18} className="mr-2" />
              8週間プログラム
            </span>
            <span className="inline-flex items-center">
              <Heart size={18} className="mr-2" />
              初級〜中級者向け
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-8">
            この8週間のトレーニングプランは、さまざまなランニング経験者向けに設計されており、
            特定のタイムを目指すものではなく、自分のペースで安全かつ適切に10Kを完走することを
            目標としています。ただし、開始時点で少なくとも2マイル（約3.2km）を走るまたは
            歩きと走りを組み合わせて移動できることが条件です。
          </p>

          {/* Training Phases */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">8週間のトレーニングプラン概要</h2>
          <div className="grid gap-6 mb-12">
            <PhaseCard
              phase="第1フェーズ：準備と基礎づくり"
              weeks="第1週～第3週"
              description="基礎体力を構築する期間で、短い距離から徐々に増やしていきます。"
              points={[
                "基礎体力を構築する期間",
                "無理な負荷を避け、心拍数を適切に保つ",
                "ランニングとウォーキングを組み合わせて実施"
              ]}
            />
            
            <PhaseCard
              phase="第2フェーズ：負荷増加期"
              weeks="第4週～第6週"
              description="4週目からはトレーニングの強度を徐々に増やします。"
              points={[
                "距離を伸ばし、ランニング速度を上げる",
                "第6週は最も負荷が高い週",
                "持久力と耐久性を高める期間"
              ]}
            />

            <PhaseCard
              phase="第3フェーズ：調整期"
              weeks="第7週～第8週"
              description="体の回復に集中し、レース当日に備えます。"
              points={[
                "トレーニング量を減らし体の回復に集中",
                "軽いランニングと十分な休息",
                "レース当日の準備を整える"
              ]}
            />
          </div>

          {/* Training Tips */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">トレーニングのコツ</h2>
          <div className="bg-gray-50 rounded-xl p-6 space-y-6 mb-12">
            <div>
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                <Zap size={20} className="text-[#52d406] mr-2" />
                軽い運動の日を有効に活用する
              </h3>
              <p className="text-gray-600">
                軽いペースで走り、体の回復を助けます。友人と一緒に走ると会話を楽しみながら進められます。
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                <AlertCircle size={20} className="text-[#52d406] mr-2" />
                過度なトレーニングを避ける
              </h3>
              <p className="text-gray-600">
                ハードなトレーニングは重要ですが、休息日も同じくらい重要です。
                連続したハードトレーニングを避け、疲労や怪我のリスクを減らしましょう。
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                <Heart size={20} className="text-[#52d406] mr-2" />
                栄養とサプリメント
              </h3>
              <p className="text-gray-600">
                トレーニング中に自分に合う補給食を試してみてください。
                エネルギージェルやバーなどの使用感を確認して、レース中に何を使うべきかを判断します。
              </p>
            </div>
          </div>

          {/* Final Notes */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">大切なポイント</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Target className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  第1週から第3週で基礎体力を構築し、短い距離からスタートします。
                </p>
              </li>
              <li className="flex items-start">
                <Target className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  第4週から第6週で負荷を増やし、耐久性を高めていきます。
                </p>
              </li>
              <li className="flex items-start">
                <Target className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  第7週と第8週は軽めのトレーニングで体を回復させ、レースに備えます。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First10K;