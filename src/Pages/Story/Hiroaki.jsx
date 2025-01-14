import React from 'react';
import { ArrowLeft } from 'lucide-react';
import profile from '../../assets/running-image/Hiroaki.jpg';
import heroimg from '../../assets/running-image/Hiroaki-1.jpg';
import content from '../../assets/running-image/Hiroaki.png';

const Hiroaki = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-20">
        <button
          onClick={() => window.history.back()}
          className="group flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
        >
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 text-maincolor group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-gray-700 font-medium">Back to Stories</span>
          </div>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen md:h-[32rem]">
        <div className="absolute inset-0">
          <img
            src={heroimg}
            alt="田中宏暁教授のランニング"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              誤診から始まった新しい人生
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              ニコニコペースで見つけた人生の新しい道
            </p>
          </div>
        </div>
      </div>

      {/* Character Profile Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 transition transform hover:scale-105 duration-300">
              <img
                src={profile}
                alt="田中宏暁教授"
                className="w-64 h-64 rounded-full object-cover shadow-lg"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">田中 宏暁</h2>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">最初の診断:</span>
                    <span className="text-gray-900">19歳</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">最速記録:</span>
                    <span className="text-green-600 font-medium">2時間38分50秒</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">マラソン完走:</span>
                    <span className="text-gray-900">65回以上</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">走破国:</span>
                    <span className="text-gray-900">13カ国</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">現在の目標:</span>
                    <span className="text-gray-900">70歳でサブ3達成</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <section className="mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ランニングとの出会い</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            私のランナーとしての人生は小学校時代に始まりました。1964年の東京オリンピック開催が決定し、
            全国の子どもたちがスポーツに関心を持ち、オリンピック出場を夢見るようになりました。
            私も走ることに情熱を感じ、トラックで最初の一歩を踏み出しました。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">挫折と転機</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            高校では400メートルから1500メートルの距離を専門にしましたが、怪我が多く、目立った成果は得られませんでした。
            大学では箱根駅伝への出場を夢見て長距離走へ転向しましたが、体がついていけず、最終的には大学病院での診断で
            先天的な心臓疾患と診断されました。
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 italic">
              「診断結果は先天的な心臓疾患で、激しいトレーニングは禁止され、ウォーキングや軽い体操などの
              低強度の運動しか許されませんでした。私はわずか19歳でした。」
            </p>
          </div>

          <div className="mb-8">
            <img
              src={content}
              alt="田中教授の研究成果"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 text-center mt-2 italic">
              ニコニコペースの研究と実践
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">研究者としての道</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            打ちひしがれたものの、陸上競技への思いを断ち切ることはできず、箱根駅伝を走る学生たちのチームマネージャーになりました。
            卒業後は大学で運動生理学や持久力トレーニングの研究を続けることを決意し、心血管機能を改善するための運動処方について研究を行いました。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">転機となったモントリオール</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            37歳の時、モントリオールでの研究滞在中に初めてのマラソンに挑戦。4時間11分で完走しましたが、
            これが人生最初で最後のマラソンになると確信していました。しかし、その後の研究と実践を通じて、
            ゆっくりとしたペースでのランニングの効果を発見していきました。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">驚くべき進化</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            その後のホノルルマラソンでは3時間30分03秒を記録。さらなる研究と実践を重ね、50歳で2時間40分を切る
            という驚異的な記録を達成。18回目のマラソンでは自己ベストの2時間38分50秒を記録しました。
          </p>

          <div className="bg-green-50 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-bold text-green-800 mb-4">ニコニコペースの教訓</h3>
            <ul className="list-disc pl-5 text-green-700 space-y-2">
              <li>25歳の再検査で心臓疾患は誤診と判明。不適切な食生活と過度な運動が原因でした。</li>
              <li>この経験が「ニコニコペース」と「スロージョギング」理論の誕生につながりました。</li>
              <li>30年以上で13カ国65回のマラソン完走という実績は、正しいペース配分の重要性を証明しています。</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Hiroaki;