import React from 'react';
import { ArrowLeft, Dumbbell, Flame, Battery, Calendar, AlertCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <Icon className="text-[#52d406] mt-1 flex-shrink-0" size={20} />
    <div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

const WeeklySchedule = ({ day, activity }) => (
  <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-gray-100">
    <Calendar className="text-[#52d406] mt-1 flex-shrink-0" size={16} />
    <div>
      <span className="font-medium text-gray-900">{day}：</span>
      <span className="text-gray-600">{activity}</span>
    </div>
  </div>
);

const Carb = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Link 
          to="/runningguide/nutrition"
          className="inline-flex items-center text-gray-600 hover:text-[#52d406] transition-colors mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          栄養管理ガイドに戻る
        </Link>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1559058789-672da06263d8?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="低炭水化物食とトレーニング"
            className="w-full object-cover"
          />
        </div>

        {/* Title and Introduction */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            低炭水化物食で1日おきのトレーニングはダブル効果？
          </h1>
          <p className="text-gray-600">
            ランニングや持久系トレーニングにおいて、低炭水化物・高脂肪食と1日おきのトレーニングを
            組み合わせる方法が注目されています。このアプローチには、脂肪燃焼能力の向上や
            ミトコンドリア機能の改善といった相乗効果が期待できるとされています。
          </p>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          {/* Low Carb Effects Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. 低炭水化物・高脂肪食がもたらす効果
            </h2>
            <div className="space-y-4">
              <InfoCard icon={Flame} title="脂肪燃焼能力の向上">
                炭水化物の摂取を制限すると、身体は脂肪をエネルギー源として優先的に利用するようになります。
                研究結果によると、わずか1週間の低炭水化物食でも、ランニング中に脂肪燃焼能力が向上し、
                運動中のグリコーゲン（炭水化物）の消費が約30%抑えられることが明らかになっています。
              </InfoCard>
              <InfoCard icon={Battery} title="ミトコンドリア機能の改善">
                脂肪はミトコンドリア内で酸化されてエネルギーを生み出します。この過程で必要な酵素の
                活性が高まると、脂肪の利用効率が上がり、糖の消費を抑えることが可能になります。
                低炭水化物状態でのトレーニングは、ミトコンドリアの機能を向上させ、持久力の向上にも寄与します。
              </InfoCard>
            </div>
          </section>

          {/* Alternate Day Training Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. 1日おきのトレーニングがもたらす効果
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">研究概要</h3>
              <p className="text-gray-600 mb-4">
                デンマークのハンセンら（2005年）の研究では、以下の実験が行われました：
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside ml-4">
                <li>片脚トレーニング: 片方の脚は毎日1時間、もう片方の脚は1日おきに2時間トレーニングを行う。</li>
                <li>期間: 10週間継続。</li>
                <li>結果: 両脚ともミトコンドリア機能が高まったが、1日おきにトレーニングした脚の方がより大きな改善を示した。</li>
              </ul>
            </div>
            <div className="space-y-4">
              <InfoCard icon={Zap} title="メリット">
                トレーニング後の回復期間を設けることで、疲労が抜けやすくなり、身体が効率的に適応。
                1回のトレーニングで負荷を高められるため、結果的に効果が向上します。
              </InfoCard>
            </div>
          </section>

          {/* Training Plan Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. 実践方法：効果的なトレーニングプラン
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">食事計画</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <Flame size={16} className="text-[#52d406] mt-1 flex-shrink-0" />
                  炭水化物摂取量を総カロリーの30%以下に抑える
                </li>
                <li className="flex items-start gap-2">
                  <Flame size={16} className="text-[#52d406] mt-1 flex-shrink-0" />
                  高脂肪食品（アボカド、ナッツ、オリーブオイル、魚油）を積極的に摂取
                </li>
                <li className="flex items-start gap-2">
                  <Flame size={16} className="text-[#52d406] mt-1 flex-shrink-0" />
                  タンパク質は体重1kgあたり1.5g以上を目安に
                </li>
              </ul>
            </div>

            <h3 className="font-semibold text-gray-900 mb-3">週のスケジュール例</h3>
            <div className="space-y-2">
              <WeeklySchedule day="月曜日" activity="ロングラン（20~30km）" />
              <WeeklySchedule day="火曜日" activity="休息" />
              <WeeklySchedule day="水曜日" activity="高強度インターバルトレーニング（60~90分）" />
              <WeeklySchedule day="木曜日" activity="休息" />
              <WeeklySchedule day="金曜日" activity="ロングランまたはペース走（20~30km）" />
              <WeeklySchedule day="土曜日" activity="休息" />
              <WeeklySchedule day="日曜日" activity="ウォーキングまたは軽いクロストレーニング" />
            </div>
          </section>

          {/* Cautions Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 注意点</h2>
            <div className="space-y-4">
              <InfoCard icon={AlertCircle} title="慣れるまで時間がかかる">
                低炭水化物食は体の適応に時間がかかるため、初期段階ではパフォーマンスが一時的に低下する可能性があります。
              </InfoCard>
              <InfoCard icon={AlertCircle} title="脱水に注意">
                高脂肪食では水分が不足しやすくなるため、適切な水分補給を行いましょう。
              </InfoCard>
              <InfoCard icon={AlertCircle} title="長期的なモニタリング">
                専門家の指導を受け、食事とトレーニングを定期的に見直すことが大切です。
              </InfoCard>
            </div>
          </section>

          {/* Summary Section */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">まとめ</h2>
            <p className="text-gray-600">
              低炭水化物・高脂肪食と1日おきのトレーニングを組み合わせることで、脂肪燃焼能力の向上、
              持久力の改善、疲労軽減といった多くの効果が期待できます。適切な計画と無理のない範囲での
              実践を心がけ、効率的にランニング能力を向上させましょう。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Carb;