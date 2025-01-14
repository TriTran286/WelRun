import React from 'react';
import { ArrowLeft, Sunrise, Timer, Droplets, AlertCircle, Dumbbell, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const BenefitCard = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <Icon className="text-[#52d406] mt-1 flex-shrink-0" size={20} />
    <div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

const TrainingProgram = ({ level, items }) => (
  <div className="bg-gray-50 rounded-lg p-4">
    <h4 className="font-semibold text-gray-900 mb-3">{level}向け</h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <Timer className="text-[#52d406] mt-1 flex-shrink-0" size={16} />
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const RunningInMorning = () => {
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
            src="https://images.unsplash.com/photo-1590646299329-ac2652afd477?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="朝のランニング"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Title and Introduction */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            朝食前・空腹時トレーニングのすすめ
          </h1>
          <p className="text-gray-600">
            早朝の空腹時に行うトレーニングは、多くの一流ランナーが取り入れている方法であり、
            脂肪燃焼や持久力向上に大きなメリットがあります。特にフルマラソンを目指すランナーにとって、
            この方法は効果的なトレーニング法とされています。
          </p>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          {/* Benefits Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. なぜ早朝の空腹トレーニングが良いのか
            </h2>
            <div className="space-y-4">
              <BenefitCard icon={Sunrise} title="脂肪燃焼の促進">
                空腹時は血糖値が低いため、インスリンの分泌も少なくなっています。
                インスリンには脂肪分解を抑える作用があるため、空腹時は脂肪がエネルギー源として優先的に利用されます。
                また、アドレナリンの分泌も増加し、脂肪分解をさらに促進します。
              </BenefitCard>
              <BenefitCard icon={Trophy} title="持久力向上">
                長時間の空腹状態でトレーニングを行うことで、体は脂肪をエネルギーとして使う能力を高めます。
                この「脂肪を効率的にエネルギー源として利用する能力」は、持久力を必要とするスポーツにおいて非常に重要です。
              </BenefitCard>
            </div>
          </section>

          {/* Key Points Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. 空腹トレーニングを取り入れる際のポイント
            </h2>
            <div className="space-y-4">
              <BenefitCard icon={Dumbbell} title="無理をしない">
                空腹時の運動に慣れていない場合は、ウォーキングや軽いジョギングから始めると良いでしょう。
                初めは10～20分程度の短時間の運動からスタートし、徐々に運動時間を延ばしていきます。
              </BenefitCard>
              <BenefitCard icon={Droplets} title="水分補給">
                朝起きた直後は体が軽度の脱水状態になっています。運動前にコップ一杯の水やお茶を飲むことで、
                パフォーマンスを向上させるだけでなく、体への負担を軽減します。
              </BenefitCard>
              <BenefitCard icon={AlertCircle} title="エネルギー不足に注意">
                長時間の運動（1時間以上）を予定している場合は、軽いスナック（バナナや少量のナッツ）を
                摂取するのも選択肢の一つです。ただし、本格的な空腹トレーニングを目指す場合は、
                体が脂肪を使う仕組みに慣れる必要があります。
              </BenefitCard>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. 空腹トレーニングのメリット
            </h2>
            <div className="space-y-4">
              <BenefitCard icon={Trophy} title="脂肪燃焼能力の向上">
                早朝空腹時のトレーニングを習慣化することで、脂肪をエネルギー源として利用する能力が高まり、
                効率的な体脂肪の減少が期待できます。
              </BenefitCard>
              <BenefitCard icon={Trophy} title="エネルギー効率の改善">
                空腹時に運動を行うことで、エネルギー供給のバランスが良くなり、
                マラソンや持久系スポーツでのパフォーマンスが向上します。
              </BenefitCard>
              <BenefitCard icon={Trophy} title="メンタル強化">
                朝の運動は一日のスタートを良い気分で切るだけでなく、規則的な生活習慣の確立にも役立ちます。
                特に空腹での運動を行うことで、体力的・精神的な耐久力が養われます。
              </BenefitCard>
            </div>
          </section>

          {/* Cautions Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. 注意点と対策
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-[#52d406] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-semibold">低血糖のリスク:</span> 空腹時に激しい運動を行うと
                    低血糖のリスクがあるため、急なめまいや疲労感を感じたらすぐに運動を中止し、
                    休息を取ってください。
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-[#52d406] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-semibold">無理な運動を避ける:</span> いきなり長時間や
                    高強度の運動を行わず、徐々に負荷を上げていきましょう。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Training Menu Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. 実践例：早朝空腹時トレーニングメニュー
            </h2>
            <div className="space-y-4">
              <TrainingProgram 
                level="初心者"
                items={[
                  'ウォーキング：20～30分',
                  '軽いジョギング：15～20分'
                ]}
              />
              <TrainingProgram 
                level="中級者"
                items={[
                  'ジョギング：30～60分',
                  'インターバルトレーニング（短いダッシュ＋ウォーキングの繰り返し）：15～30分'
                ]}
              />
              <TrainingProgram 
                level="上級者"
                items={[
                  'ロングラン：60分～90分（徐々に距離を伸ばす）'
                ]}
              />
            </div>
          </section>

          {/* Summary Section */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">まとめ</h2>
            <p className="text-gray-600">
              早朝の空腹トレーニングは脂肪燃焼能力を高め、持久力を向上させる効果的な方法です。
              ただし、体調や運動レベルに応じた調整が必要です。適切な準備と注意点を守りながら
              実践することで、ランニングの成果をさらに引き上げることができます。
              一度試してみれば、空腹時でも走れる体の適応力を実感できるはずです！
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RunningInMorning;