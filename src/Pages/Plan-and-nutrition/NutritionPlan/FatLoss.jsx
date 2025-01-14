import React from 'react';
import { ArrowLeft, Droplets, Battery, Scale, TestTube, AlertCircle, Gauge } from 'lucide-react';
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

const PointList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <Gauge className="text-[#52d406] mt-1 flex-shrink-0" size={16} />
        <span className="text-gray-600">{item}</span>
      </li>
    ))}
  </ul>
);

const FatLoss = () => {
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
            src="https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="マラソンの水分補給"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Title and Introduction */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            マラソンにおける水分補給とグリコーゲンローディングのポイント
          </h1>
          <p className="text-gray-600">
            マラソンや長距離ランニングでは、水分補給とグリコーゲンローディングが重要な要素となります。
            しかし、正しい方法を理解しないとパフォーマンスの低下や健康リスクを引き起こす可能性もあります。
            本記事では、水分補給の適量やグリコーゲンローディングの効果的な方法についてわかりやすく解説します。
          </p>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          {/* Hydration Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. 水分補給の適量：取りすぎも危険
            </h2>
            <div className="space-y-4">
              <InfoCard icon={Droplets} title="水分補給の必要性">
                マラソン中の水分補給は脱水症状を防ぐために重要ですが、取りすぎは逆効果になる場合があります。
                市民ランナーは、給水地点ごとにしっかり飲む傾向がありますが、これが必要以上のエネルギー消費や
                体内バランスの乱れを引き起こすことがあります。
              </InfoCard>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">プロランナーの給水事情</h3>
                <PointList items={[
                  'エリートランナーは、レース前半では給水地点で水分をほとんど取らないことが多い',
                  'トレーニングで体温調節能力を高め、暑さに慣れているため',
                  '給水時のスピード低下を防ぐため',
                  '練習中に10~20kmを水分摂取なしで走ることで、身体を適応させている'
                ]} />
              </div>

              <InfoCard icon={Scale} title="適切な水分補給量の計算方法">
                事前に確認: レース1週間前に10~15kmを水分補給せずに走り、前後の体重差を測定します。
                その体重減少量が水分の喪失量となります。レース中の補給量は、測定した体重減少量を、
                レース距離に応じて換算し、それ以下に抑えるようにします。
              </InfoCard>
            </div>
          </section>

          {/* Glycogen Loading Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. グリコーゲンローディングをさらに高める方法
            </h2>
            <div className="space-y-4">
              <InfoCard icon={Battery} title="グリコーゲンローディングとは">
                グリコーゲンは筋肉に蓄えられ、運動時の主要エネルギー源として使われます。
                マラソンのような持久力スポーツでは、グリコーゲンの量がパフォーマンスを左右します。
                レース前に高炭水化物食を摂取し、筋肉中のグリコーゲンを最大限に蓄える手法を
                「グリコーゲンローディング」と呼びます。
              </InfoCard>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">効率を高める実験結果</h3>
                <p className="text-gray-600 mb-4">
                  カロリンスカ研究所の研究では、筋肉中のグリコーゲンを一度枯渇させた後に
                  高炭水化物食を摂ると、グリコーゲン濃度が通常以上に蓄えられることが示されました。
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <TestTube size={16} className="text-[#52d406] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">方法: 右脚だけ疲労困憊まで自転車をこぐ。その後、高炭水化物食を摂取。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TestTube size={16} className="text-[#52d406] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">結果: 右脚（枯渇後）は左脚よりもグリコーゲン濃度が飛躍的に増加。</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practical Advice Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. 実践的なアドバイス
            </h2>
            <div className="space-y-4">
              <InfoCard icon={Droplets} title="レース中の水分補給のポイント">
                暑い夏場を除き、喉の渇きを感じる前から無理に水分を摂取する必要はありません。
                冬場のレースでは、給水地点ごとに少量ずつ補給し、取りすぎを防ぐことを意識しましょう。
              </InfoCard>

              <InfoCard icon={AlertCircle} title="グリコーゲンローディング時の注意点">
                高炭水化物食を摂取する際、脂肪や食物繊維が多い食品（揚げ物、豆類）は控え、
                消化の良い食品を選びましょう。レース前に胃腸の調子を整えることも重要です。
              </InfoCard>
            </div>
          </section>

          {/* Summary Section */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">まとめ</h2>
            <p className="text-gray-600">
              マラソンの成功には、適切な水分補給と効率的なグリコーゲンローディングが欠かせません。
              ただし、水分補給のしすぎやグリコーゲンローディングの誤った方法は逆効果になる可能性があります。
              事前に自分の体に合った方法を試し、調整することが、ベストなパフォーマンスを発揮する鍵となります。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FatLoss;