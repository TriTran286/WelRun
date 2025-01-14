import React from 'react';
import { ArrowLeft, AlertCircle, Activity, Clock, Heart, Target } from 'lucide-react';
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

const ListSection = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <Target className="text-[#52d406] mt-1 flex-shrink-0" size={16} />
        <span className="text-gray-600">{item}</span>
      </li>
    ))}
  </ul>
);

const AfterRunning = () => {
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
            src="https://images.unsplash.com/photo-1608354580394-f7961a034347?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="食後のトレーニング"
            className="w-full object-cover"
          />
        </div>

        {/* Title and Introduction */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            食後のトレーニングは控えめに：安全で効果的なアプローチ
          </h1>
          <p className="text-gray-600">
            トレーニングは日々の生活リズムや目的に応じて、適切なタイミングで行うことが重要です。
            特に食後のトレーニングにはいくつかの注意点があります。以下では、食後の運動のリスクや
            推奨される運動強度、さらに効果的なタイミングや具体的な例を含めて詳しく解説します。
          </p>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          {/* Reasons Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. 食後のトレーニングが推奨されない理由
            </h2>
            <div className="space-y-4">
              <InfoCard icon={Activity} title="内臓の血流量低下">
                食後は消化吸収のため、胃や腸に多くの血液が必要になります。
                この状態で激しい運動を行うと、内臓への血流が不足し、消化不良や腹痛を引き起こす可能性があります。
              </InfoCard>
              <InfoCard icon={Activity} title="運動の効果減少">
                消化中の体はエネルギーを運動よりも消化に優先して使うため、トレーニング効果が下がることがあります。
              </InfoCard>
            </div>
          </section>

          {/* Timing Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. 食後トレーニングの適切なタイミング
            </h2>
            <div className="space-y-4">
              <InfoCard icon={Clock} title="推奨される間隔">
                食後にトレーニングを行う場合、少なくとも2時間以上空けてから行うことが理想的です。
                これにより、消化がある程度進み、体が運動に適した状態になります。
              </InfoCard>
              <InfoCard icon={Clock} title="例外的なケース">
                軽い運動（最大酸素摂取量の40%以下）であれば、食後30分~1時間後でも可能です。
              </InfoCard>
            </div>
          </section>

          {/* Exercise Types Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. 食後に適した運動の強度と種類
            </h2>
            <p className="text-gray-600 mb-4">
              食後すぐの運動では、軽いペースの運動に限定することが重要です。
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">るんるんペース</h3>
              <p className="text-gray-600 mb-4">
                「にこにこペース」よりさらに軽い、会話が余裕でできる程度のスピードが適切です。
                ウォーキングやジョギングが該当します。
              </p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 mb-2">運動例：</h4>
                <ListSection items={[
                  'ゆっくりとしたウォーキング（20~30分程度）',
                  '軽いストレッチやヨガ',
                  '呼吸を意識した軽負荷エクササイズ'
                ]} />
              </div>
            </div>
          </section>

          {/* Special Cases Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. 特別なケース：糖尿病患者の場合
            </h2>
            <div className="space-y-4">
              <InfoCard icon={Heart} title="注意点">
                糖尿病の方は、医師の指導に従い、食後30分後に軽い運動を行うことで血糖値をコントロールすることがあります。
                るんるんペースを厳守し、心拍数や体調をしっかり確認しながら運動を行いましょう。
              </InfoCard>
              <InfoCard icon={Heart} title="推奨される運動">
                ゆっくりした散歩や軽いストレッチ。
              </InfoCard>
            </div>
          </section>

          {/* Pre-meal Exercise Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. 効果的なトレーニングタイミング：食前の運動
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">食前運動のメリット</h3>
              <ListSection items={[
                '脂肪燃焼効果が高まる: 食事前に運動することで、体内のエネルギー源が不足し、脂肪がより使われやすくなります。',
                '消化器への負担軽減: 消化の妨げを防ぎ、運動と栄養摂取のバランスを保ちやすくなります。'
              ]} />
              
              <h3 className="font-semibold text-gray-900 mt-4 mb-3">食前の運動例</h3>
              <ListSection items={[
                '朝の空腹状態での軽いジョギング（20~30分）',
                '昼食前の短時間のインターバルトレーニング（10~15分）'
              ]} />
            </div>
          </section>

          {/* Daily Life Tips Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. 日常生活における工夫
            </h2>
            <div className="space-y-4">
              <InfoCard icon={Target} title="朝の通勤での運動">
                朝食後のウォーキングや自転車通勤は、軽運動に該当し、健康維持に役立ちます。
              </InfoCard>
              <InfoCard icon={Target} title="日常での軽いアクティビティ">
                立ち仕事や階段の利用など、軽運動を日常生活に取り入れることも推奨されます。
              </InfoCard>
            </div>
          </section>

          {/* Summary Section */}
          <section className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">まとめ</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertCircle className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  食後のトレーニングを行う際は、消化を妨げない程度の軽運動（るんるんペース）を基本とし、
                  できる限り食前に運動を行うことが理想です。
                </p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  また、糖尿病患者など特別なケースでは医師の指導に従いながら、安全な運動を取り入れることが大切です。
                </p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  日常生活やトレーニングにおける工夫を通じて、健康的で効果的なライフスタイルを目指しましょう。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AfterRunning;