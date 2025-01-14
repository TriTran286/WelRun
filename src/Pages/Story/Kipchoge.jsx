import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MoveRight } from 'lucide-react';
import KipchogeHero from '../../assets/running-image/Kipchoge.jpg'
import KipchogeProfile from '../../assets/running-image/Kipchoge-1.png'
import KipchogeTraining from '../../assets/running-image/Kipchoge-2.jpg'

const Kipchoge = () => {
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

      {/* Hero Section */}
      <div className="relative h-screen md:h-[32rem]">
        <div className="absolute inset-0">
          <img
            src={KipchogeHero}
            alt="Kipchoge during marathon"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              No Human Is Limited
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              マラソンの歴史を塗り替えた伝説のランナー
            </p>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 transition transform hover:scale-105 duration-300">
              <img
                src={KipchogeProfile}
                alt="エリウド・キプチョゲ"
                className="w-64 h-64 rounded-full object-cover shadow-lg"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">エリウド・キプチョゲ</h2>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">国籍:</span>
                    <span className="text-gray-900">ケニア</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">生年月日:</span>
                    <span className="text-gray-900">1984年11月5日</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">出身地:</span>
                    <span className="text-gray-900">ナンディ郡カプシシワ</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">主な記録:</span>
                    <span className="text-gray-900">マラソン世界記録 2:00:35</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">オリンピック:</span>
                    <span className="text-gray-900">金メダル2個 (2016, 2020)</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">幼少期と教育</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            エリウド・キプチョゲは、ケニアのリフトバレー州ナンディ郡の小さな村、カプシシワで育ちました。
            幼い頃から毎日4kmの道のりを走って学校に通い、これが後の彼のランニングキャリアの基礎となりました。
            高校卒業後、プロのランナーを目指す決意をし、パトリック・サングの指導の下でトレーニングを開始しました。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">トラック選手としての成功</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            2003年、18歳でキプチョゲは5000mのジュニア世界クロスカントリー選手権で優勝。
            その後、2004年アテネオリンピックで5000m銅メダル、2008年北京オリンピックで銀メダルを獲得し、
            トラック競技で世界的な成功を収めました。
          </p>

          <div className="mb-8">
            <img
              src={KipchogeTraining}
              alt="トレーニング中のキプチョゲ"
              className="w-full h-auto object-cover object-center rounded-lg shadow-lg mb-4"
            />
            <p className="text-sm text-gray-500 text-center italic">カプタガットの高地トレーニング拠点での日課</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">マラソンへの転向と記録更新</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            2013年、マラソンに転向したキプチョゲは、ハンブルグマラソンで2:05:30のデビュー記録を残し優勝。
            その後、ベルリン、ロンドン、シカゴなど世界メジャーマラソンで次々と優勝を重ねていきました。
            2016年リオデジャネイロオリンピック、2020年東京オリンピックでは金メダルを獲得し、
            オリンピックマラソン2連覇という偉業を達成しました。
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 italic">
              「マラソンは人生の教科書です。マラソンでは、準備、規律、忍耐、目標設定など、
              人生で必要なすべてのことを学ぶことができます。」
              - エリウド・キプチョゲ
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">INEOS 1:59 チャレンジ</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            2019年10月12日、キプチョゲはウィーンで行われたINEOS 1:59チャレンジで、人類初のサブ2（2時間以内）
            マラソンを達成。1時間59分40秒という記録は、正式な世界記録としては認定されませんでしたが、
            人類の可能性の限界に挑戦した偉大な功績として記憶されています。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">哲学とメンタリティ</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            キプチョゲは「No Human Is Limited（人間に限界はない）」という哲学を掲げ、
            人間の可能性を信じることの重要性を説いています。彼の成功は、
            厳格な規律、簡素な生活、そして明確な目標設定に基づいています。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">最近の活動と将来</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            現在もケニアのカプタガットを拠点に、次なる目標に向けてトレーニングを続けています。
            若手選手の育成にも力を入れ、エリウド・キプチョゲ財団を通じて環境保護や教育支援にも取り組んでいます。
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-bold text-blue-800 mb-4">キプチョゲの成功哲学</h3>
            <ul className="list-disc pl-5 text-blue-700 space-y-2">
              <li>100%の準備をすることで、心に平安が訪れる</li>
              <li>規律正しい生活と明確な目標設定が成功の鍵</li>
              <li>簡素な生活を送り、本質的なことに集中する</li>
              <li>成功とは、自分の限界に挑戦し続けること</li>
              <li>スポーツを通じて、次世代にポジティブな影響を与える</li>
            </ul>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">主な競技成績</h3>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="font-medium">ベルリンマラソン2022</span>
                <span className="text-gray-600">優勝 (世界記録 2:01:09)</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">東京オリンピック2020</span>
                <span className="text-gray-600">金メダル</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">INEOS 1:59 チャレンジ2019</span>
                <span className="text-gray-600">1:59:40.2</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">リオオリンピック2016</span>
                <span className="text-gray-600">金メダル</span>
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Kipchoge;