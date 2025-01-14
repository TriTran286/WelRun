import React from 'react';
import { ArrowLeft, Apple, AlertCircle, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NutritionPoint = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <Icon className="text-[#52d406] mt-1 flex-shrink-0" size={20} />
    <div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

const BeforeRunning = () => {
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
            src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ランニングの食事管理"
            className="w-full object-cover"
          />
        </div>

        {/* Title and Introduction */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            ランニング能力を上げる食事とトレーニングのポイント
          </h1>
          <p className="text-gray-600">
            ランニングのパフォーマンスを最大化するためには、食事とトレーニングを効果的に組み合わせることが重要です。
            本記事では、基本的な食事管理からトレーニングとの相乗効果を高める方法までを詳しく解説します。
          </p>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          {/* Basic Diet Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 基本となる食事：低炭水化物・高脂肪食</h2>
            <p className="text-gray-600 mb-6">
              普段の食事は「低炭水化物・高脂肪食」を基本にしましょう。これは、炭水化物の摂取量を抑え、
              脂肪をエネルギー源として使う能力を高めるための方法です。
            </p>
            <div className="space-y-4">
              <NutritionPoint icon={Target} title="比率">
                炭水化物が総エネルギー摂取量の30%、脂肪が50~60%を目安にします。
              </NutritionPoint>
              <NutritionPoint icon={Target} title="具体例">
                1日2000kcal摂取する場合、炭水化物からの摂取カロリーは約600kcal（ご飯約2膳半）に調整します。
              </NutritionPoint>
              <NutritionPoint icon={Target} title="タンパク質">
                体重1kgあたり1.5g以上を摂取。魚、大豆、脂肪の少ない肉（鶏ささみ、ヒレ肉など）が理想的です。
              </NutritionPoint>
            </div>
          </section>

          {/* Training Timing Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. トレーニング前後の食事タイミング</h2>
            <div className="space-y-4">
              <NutritionPoint icon={CheckCircle} title="トレーニング前">
                低GI食品（玄米、さつまいも、バナナなど）を摂ることで、持続的なエネルギー供給が可能です。
              </NutritionPoint>
              <NutritionPoint icon={CheckCircle} title="トレーニング後">
                筋肉の回復を促進するため、タンパク質（プロテイン、卵）と糖質（果物、米）を組み合わせて摂取しましょう。
              </NutritionPoint>
            </div>
          </section>

          {/* Hydration Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 水分と電解質の補給</h2>
            <div className="space-y-4">
              <NutritionPoint icon={AlertCircle} title="水分補給">
                長時間の運動にはスポーツドリンクを活用。運動強度や気温に応じて適切な量を摂取しましょう。
              </NutritionPoint>
              <NutritionPoint icon={AlertCircle} title="電解質バランス">
                ナトリウム、カリウム、マグネシウムを補うため、塩タブレットや味噌汁を摂取します。
              </NutritionPoint>
            </div>
          </section>

          {/* Additional Tips */}
          <section className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">実践のためのまとめ</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Apple className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  ランニング能力を上げるには、適切な栄養バランスとトレーニングの計画的な実施が不可欠です。
                </p>
              </div>
              <div className="flex items-start">
                <Apple className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  日々の食事に工夫を凝らし、トレーニングと組み合わせて、持久力とパフォーマンスを向上させましょう。
                </p>
              </div>
              <div className="flex items-start">
                <Apple className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  レースやハードな練習の前後では特に栄養管理に注意を払い、身体をしっかりと整えてください。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BeforeRunning;