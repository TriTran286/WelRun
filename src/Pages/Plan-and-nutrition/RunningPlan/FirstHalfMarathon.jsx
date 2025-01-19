import React, { useState } from 'react';
import { ArrowLeft, Award, Activity, Clock, Target, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingWeek = ({ week, schedule, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold text-gray-900">第{week}週目</span>
          <div className="hidden sm:flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Activity size={16} />
              {schedule.filter(s => s.includes('km')).length}回のラン
            </span>
          </div>
        </div>
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-4">
          <div className="grid grid-cols-7 gap-2 bg-gray-50 rounded-xl p-4">
            {['月', '火', '水', '木', '金', '土', '日'].map((day, index) => (
              <div key={day} className={`flex flex-col ${schedule[index].includes('休息') ? 'opacity-50' : ''}`}>
                <span className="text-sm font-medium text-gray-700 mb-2">{day}</span>
                <div className={`p-3 rounded-lg ${
                  schedule[index].includes('ロングラン') ? 'bg-[#52d406]/10 text-[#52d406]' :
                  schedule[index].includes('テンポラン') ? 'bg-blue-50 text-blue-600' :
                  schedule[index].includes('クロス') ? 'bg-purple-50 text-purple-600' :
                  schedule[index].includes('リカバリー') ? 'bg-orange-50 text-orange-600' :
                  'bg-gray-100 text-gray-500'
                } text-sm min-h-[80px] flex items-center justify-center text-center`}>
                  {schedule[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const IconBlock = ({ icon: Icon, title, text }) => (
  <div className="bg-gray-50 rounded-xl p-6">
    <div className="flex items-center gap-3 text-[#52d406] mb-2">
      <Icon size={20} />
      <span className="font-semibold">{title}</span>
    </div>
    <p className="text-gray-600">{text}</p>
  </div>
);

const TrainingElement = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6">
    <div className="flex items-center gap-3 mb-4">
      <Icon size={24} className="text-[#52d406]" />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AdviceCard = ({ title, points }) => (
  <div className="bg-gray-50 rounded-xl p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-3">
          <Target className="text-[#52d406] mt-1 flex-shrink-0" />
          <span className="text-gray-600">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FirstHalfMarathon = () => {
  const [openWeek, setOpenWeek] = useState(1);

  // Training schedule data - 12 weeks for half marathon
  const trainingData = Array.from({ length: 12 }, (_, i) => ({
    week: i + 1,
    schedule: [
      '休息',
      `${3 + Math.floor(i/3)}km イージーラン`,
      'クロストレーニング',
      `${3 + Math.floor(i/3)}km ${i % 2 === 0 ? 'テンポラン' : 'インターバル'}`,
      '休息',
      `${5 + i * 1.5}km ロングラン`,
      `${3 + Math.floor(i/4)}km リカバリーラン`
    ]
  }));

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link 
          to="/runningguide/plan"
          className="inline-flex items-center text-gray-600 hover:text-[#52d406] transition-colors mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          プラン一覧に戻る
        </Link>

        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1587287503374-f6f3d7e90da4?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ハーフマラソン"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">ハーフマラソンへの挑戦</h1>
          <div className="flex gap-4 text-gray-600">
            <span className="inline-flex items-center">
              <Clock size={18} className="mr-2" />
              12週間プログラム
            </span>
            <span className="inline-flex items-center">
              <Activity size={18} className="mr-2" />
              21.0975km完走を目指す
            </span>
          </div>
        </div>

        <section className="prose max-w-none mb-12">
          <p className="text-gray-600">
            この12週間のトレーニングプランは、5kmや10kmのレース経験者、またはランニング初心者で
            基礎体力のある方向けに設計されています。週3-4回のランニングと適切な休養を組み合わせることで、
            無理なくハーフマラソンの完走を目指します。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">プログラム構成</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IconBlock 
              icon={Clock} 
              title="週3-4回のランニング" 
              text="ロングラン、テンポラン、イージーランを中心に構成"
            />
            <IconBlock 
              icon={Activity} 
              title="週1-2回のクロストレーニング" 
              text="体力づくりと怪我予防に効果的"
            />
            <IconBlock 
              icon={Heart} 
              title="適切な休息" 
              text="週2回の休息日で疲労を防止"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">トレーニング要素</h2>
          <div className="grid gap-6">
            <TrainingElement 
              icon={Award}
              title="ロングラン（土曜日）"
              description="週末に行う最も長い距離のランニング。5kmから始めて徐々に距離を伸ばし、最大で18kmまで走ります。"
            />
            <TrainingElement 
              icon={Activity}
              title="テンポラン（木曜日）"
              description="3-5kmをやや速いペースで走る持続走。レースペースの感覚をつかむために重要です。"
            />
            <TrainingElement 
              icon={Clock}
              title="イージーラン（火・日曜日）"
              description="3-5kmを会話ができるペースでのリラックスした走り。基礎体力の向上と回復を促します。"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">週間スケジュール</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <p className="text-sm text-gray-600">各週のスケジュールをクリックして詳細を確認できます</p>
            </div>
            
            <div className="divide-y divide-gray-200">
              {trainingData.map((week) => (
                <TrainingWeek
                  key={week.week}
                  week={week.week}
                  schedule={week.schedule}
                  isOpen={openWeek === week.week}
                  onToggle={() => setOpenWeek(openWeek === week.week ? null : week.week)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">トレーニングアドバイス</h2>
          <div className="grid gap-6">
            <AdviceCard 
              title="初心者向けアドバイス"
              points={[
                "最初の4週間は3-5kmの距離に慣れることを目標にしましょう",
                "走る距離よりも継続することを重視しましょう",
                "適切な休養を取り、オーバーワークを避けましょう",
                "体調管理と水分補給を忘れずに行いましょう"
              ]}
            />
            <AdviceCard 
              title="レース準備のポイント"
              points={[
                "レース2週間前から距離を徐々に減らし、最長距離は15km程度にしましょう",
                "レース1週間前は5km程度の軽いランニングのみにしましょう",
                "レース前日は十分な睡眠を取りましょう",
                "レース当日は余裕を持って会場に到着しましょう"
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">レース当日のアドバイス</h2>
          <div className="bg-[#52d406]/10 rounded-xl p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="text-[#52d406] mt-1 flex-shrink-0" />
                <span className="text-gray-800">レース2時間前に軽い朝食を取りましょう</span>
              </li>
              <li className="flex items-start gap-3">
                <Activity className="text-[#52d406] mt-1 flex-shrink-0" />
                <span className="text-gray-800">最初の5kmは特に抑え気味で走りましょう</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="text-[#52d406] mt-1 flex-shrink-0" />
                <span className="text-gray-800">5kmごとに必ず給水を取りましょう</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="text-[#52d406] mt-1 flex-shrink-0" />
                <span className="text-gray-800">後半の10kmに向けて余力を残しましょう！</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FirstHalfMarathon;