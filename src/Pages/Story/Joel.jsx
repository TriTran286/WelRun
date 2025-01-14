import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft} from 'lucide-react';
import JoelHero from '../../assets/running-image/joel.jpg'
import JoelProfile from '../../assets/running-image/joel-1.jpeg'
import Joel1 from '../../assets/running-image/joel-2.jpg'

const Joel = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-20">
        <button
          onClick={() => navigate('/story')}
          className="group flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
        >
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 text-maincolor group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-gray-700 font-medium">Back to Stories</span>
          </div>
        </button>
      </div>

      {/* Simple Hero */}
      <div className="relative h-screen md:h-[32rem]">
        <div className="absolute inset-0">
          <img
            src={JoelHero}
            alt="Running track at sunrise"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              私の変化の物語
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              重さと戦い、走ることで見つけた新しい人生
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
                src={JoelProfile}
                alt="ジョエル・アルモンテ"
                className="w-64 h-64 rounded-full object-cover shadow-lg"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">ジョエル・アルモンテ</h2>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">開始時の体重:</span>
                    <span className="text-gray-900">193kg</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">現在の体重:</span>
                    <span className="text-green-600 font-medium">77kg</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">ランニング期間:</span>
                    <span className="text-gray-900">8年</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">主な成果:</span>
                    <span className="text-gray-900">ニューヨークマラソン完走</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">減量成功:</span>
                    <span className="text-gray-900">-116kg</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">始まり</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            私は人生の大半で体重に悩んできました。子供時代のほとんどをぽっちゃりした背の低い子供として過ごし、
            いじめられることが多かったため、自信を持てず、その感情は何年も私につきまといました。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">大学時代の苦悩</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            2000年代初頭に大学に通っていた頃、私は重量級のチャンピオンでした。そのため、規定されたダイエットを
            実践しようと努力しましたが、ダイエット終了後すぐにリバウンドしてしまい、以前よりもさらに体重が増えてしまいました。
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 italic">
              「大学卒業後は在宅勤務をしていましたが、その頃には体重が193kgに達していました。食べ物との悪い関係にうんざりし、
              2007年にブルックリンの実家に戻り、サポートを受けることにしました。」
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">変化への決意</h2>
          <div className="mb-8">
            <img
              src={Joel1}
              alt="ジョエルの変化の過程"
              className="w-full h-auto object-cover object-center rounded-lg shadow-lg mb-4"
            />
            <p className="text-sm text-gray-500 text-center italic">変化への道のり - 新しい生活への第一歩</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            食生活を変える前は、朝食にマクドナルドの数千カロリーの食事を週6日食べていました。夕食には2リットルのソーダを飲み、
            スターバックスでは週に数回、ベンティサイズのモカフラペチーノを2杯頼むこともありました。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">ランニングとの出会い</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            人目を避けるために日が沈むのを待ってから走り始めましたが、1/4マイル（約400m）走ったところで息が切れてしまい、
            自分で決めたゴール地点に歩いて到達するのが精一杯でした。これは運動を始めたばかりの人にありがちなことです。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">今日に至るまで</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            2011年には毎週末ランナーとして活動するようになり、3年間のトレーニングを経て、2014年にニューヨークマラソンの
            ゴールラインを越えることができました。ランニングと食生活の改善を通じて、現在の体重は77kgです。
            42歳になった今、私はこれまでになく健康で強く、より良い人間関係を築けるようになりました。
          </p>

          <div className="bg-green-50 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-bold text-green-800 mb-4">これから始める人へのメッセージ</h3>
            <ul className="list-disc pl-5 text-green-700 space-y-2">
              <li>まずは計画を立てることをお勧めします。その計画は1週間や1か月単位ではなく、最初は24時間単位で考えるとよいでしょう。</li>
              <li>自分自身の最大の応援団になってください。他人はあなたを励ましてくれるかもしれませんが、自分が自分自身の一番のファンでなければ、モチベーションを維持するのは難しいです。</li>
              <li>運動を続けることで、長期的な健康を維持できます。</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Joel;