import React, { useState } from 'react';
import { ArrowLeft, Calendar, Award, Activity, Clock, Target, Heart, AlertCircle, ChevronDown } from 'lucide-react';
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
              {schedule.filter(s => s.includes('マイル')).length}回のラン
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

const FirstFullMarathon = () => {
  const [openWeek, setOpenWeek] = useState(1);

  // Training schedule data
  const trainingData = Array.from({ length: 18 }, (_, i) => ({
    week: i + 1,
    schedule: [
      '休息',
      `${3 + Math.floor(i/4)}マイル イージーラン`,
      'クロストレーニング',
      `${3 + Math.floor(i/4)}マイル ${i % 2 === 0 ? 'テンポラン' : 'インターバル'}`,
      '休息',
      `${5 + i}マイル ロングラン`,
      `${2 + Math.floor(i/6)}マイル リカバリーラン`
    ]
  }));

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
            src="https://images.unsplash.com/photo-1524646349956-1590eacfa324?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="フルマラソン"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Title and Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">フルマラソンへの挑戦</h1>
          <div className="flex gap-4 text-gray-600">
            <span className="inline-flex items-center">
              <Clock size={18} className="mr-2" />
              18週間プログラム
            </span>
            <span className="inline-flex items-center">
              <Activity size={18} className="mr-2" />
              42.195km完走を目指す
            </span>
          </div>
        </div>

        {/* Introduction */}
        <section className="prose max-w-none mb-12">
          <p className="text-gray-600">
            この18週間のトレーニングプランは、初心者または中級者向けに設計されています。
            計画的に距離を増やしながら、ランニングの基礎体力、クロストレーニング、休息日を
            バランスよく取り入れることで、レース当日に向けて自信と体力を築いていきます。
          </p>
        </section>

        {/* Program Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">プログラム構成</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IconBlock 
              icon={Clock} 
              title="週4回のランニング" 
              text="ロングラン、テンポラン、イージーラン、インターバルトレーニング"
            />
            <IconBlock 
              icon={Activity} 
              title="週1-2回のクロストレーニング" 
              text="サイクリング、水泳、ヨガなど"
            />
            <IconBlock 
              icon={Heart} 
              title="週1-2回の休息日" 
              text="回復と怪我の防止に不可欠"
            />
          </div>
        </section>

        {/* Training Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">トレーニング要素</h2>
          <div className="grid gap-6">
            <TrainingElement 
              icon={Award}
              title="ロングラン（土曜日）"
              description="マラソン準備の柱となるトレーニングで、持久力を高めます。ペースは会話ができる程度で、距離に集中しましょう。"
            />
            <TrainingElement 
              icon={Activity}
              title="テンポラン（木曜日）"
              description="通常より速めのペースで走り、持久力を向上させます。持続可能な速度を目指しましょう。"
            />
            <TrainingElement 
              icon={Clock}
              title="インターバル（木曜日、隔週）"
              description="短時間の速いランニングと回復ジョグまたはウォークを繰り返します。スピードと持久力を向上させる練習です。"
            />
          </div>
        </section>

        {/* Weekly Schedule */}
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

        {/* Training Advice */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">トレーニングアドバイス</h2>
          <div className="grid gap-6">
            <AdviceCard 
              title="基本的なアドバイス"
              points={[
                "計画を守り、ロングランをスキップしないようにしましょう",
                "体の声を聞き、痛みや疲労を感じたら適切に休息を取りましょう",
                "水分補給と栄養摂取を忘れずに行いましょう",
                "適切なランニングシューズと吸湿速乾性のウェアを用意しましょう"
              ]}
            />
            <AdviceCard 
              title="メンタル面のアドバイス"
              points={[
                "マラソンを小さな区間に分けて考えましょう",
                "ロングランで本番のシミュレーションを行いましょう",
                "最後の3週間のテーパリングを守りましょう",
                "目標を設定し、段階的に達成していきましょう"
              ]}
            />
          </div>
        </section>

        {/* Race Day Tips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">レース当日のアドバイス</h2>
          <div className="bg-[#52d406]/10 rounded-xl p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="text-[#52d406] mt-1 flex-shrink-0" />
                <span className="text-gray-800">レースの2〜3時間前に軽い朝食をとりましょう</span>
              </li>
              <li className="flex items-start gap-3">
                <Activity className="text-[#52d406] mt-1 flex-shrink-0" />
                <span className="text-gray-800">最初のペースを抑え、最後まで力を残すよう心がけます</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="text-[#52d406] mt-1 flex-shrink-0" />
                <span className="text-gray-800">給水ステーションを活用し、練習通りの補給を心がけましょう</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="text-[#52d406] mt-1 flex-shrink-0" />
                <span className="text-gray-800">ゴールの瞬間を心から楽しみましょう！</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FirstFullMarathon;