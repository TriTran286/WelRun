import React from 'react';
import { ArrowLeft } from 'lucide-react';
import profile from '../../assets/running-image/David-profile.jpg';
import heroimg from '../../assets/running-image/David-1.png';
import content from '../../assets/running-image/David-content.jpg';

const David = () => {
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
      <div className="relative h-screen md:h-[40rem]">
        <div className="absolute inset-0">
          <img
            src={heroimg}
            alt="David Goggins running"
            className="w-full h-full object-top object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              限界を超える意志の力
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              不可能を可能にした男の驚異的な変革の物語
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
                alt="David Goggins"
                className="w-64 h-64 rounded-full object-cover shadow-lg"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">デイビッド・ゴギンズ</h2>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">出生:</span>
                    <span className="text-gray-900">1975年2月17日</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">最大体重:</span>
                    <span className="text-gray-900">136kg</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">現在の体重:</span>
                    <span className="text-gray-900">約84kg</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">軍歴:</span>
                    <span className="text-gray-900">ネイビーシールズ, タクティカルエアコントローラー</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-semibold w-32">記録:</span>
                    <span className="text-gray-900">プルアップ24時間世界記録 (4,030回)</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">困難な始まり</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            デイビッド・ゴギンズの人生は、困難と逆境から始まりました。幼少期には虐待的な父親のもとで育ち、
            学習障害と人種差別に直面しながら成長しました。高校卒業時には読み書きも困難で、体重も136kgまで増加。
            夜間の害虫駆除の仕事をしながら、将来への希望を失いかけていました。
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 italic">
              「私は自分の人生を変えるために、まず自分自身と向き合う必要があった。
              鏡に映る自分の姿に満足できなかった。その不満が、変化への第一歩となった。」
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">人生の転換点</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            ある日、テレビでネイビーシールズのドキュメンタリーを見たことが、彼の人生を大きく変えるきっかけとなりました。
            その瞬間、彼は人生を変える決意をします。しかし、ネイビーシールズの選抜試験に合格するためには、
            わずか3ヶ月で50kg以上の減量が必要でした。
          </p>

          <div className="mb-8">
            <img
              src={content}
              alt="David Goggins training"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 text-center mt-2 italic">
              トレーニング中のデイビッド・ゴギンズ
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">過酷な変革の日々</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            ゴギンズは毎日、極限まで自分を追い込むトレーニングを開始しました。早朝4時に起床し、
            仕事の前に何時間もの運動をこなし、夜も追加のトレーニングを行いました。食事は完全に見直し、
            厳格な低カロリー・高タンパクの食事プランを実行。その結果、3ヶ月で驚異的な減量を達成し、
            ネイビーシールズの選抜試験に合格しました。
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">軍での経歴</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• ネイビーシールズ（BUD/S）トレーニング3回受講し合格</li>
              <li>• レンジャー学校修了</li>
              <li>• タクティカルエアコントローラーとして従事</li>
              <li>• イラク戦争に従軍</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">ウルトラマラソンへの挑戦</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            軍務の傍ら、ゴギンズは新たな挑戦としてウルトラマラソンの世界に足を踏み入れました。
            初めての大会となったサンディエゴ24時間ウルトラマラソンでは、ほとんど準備もないまま参加。
            足の骨折や腎臓障害を負いながらも、24時間で160km以上を走破しました。
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">主な挑戦と記録</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• バッドウォーター135 (217km) - 複数回完走</li>
              <li>• モアブ240 (385km) - 上位フィニッシュ</li>
              <li>• プルアップ24時間世界記録 (4,030回)</li>
              <li>• レッドビル100 (160km) - 標高3,000m以上での過酷なレース完走</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">トレーニング哲学</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            ゴギンズの日常的なトレーニングは、多くの人には想像を超える過酷さです。
            毎日、以下のようなルーティンをこなしています：
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-bold text-gray-900 mb-3">デイリールーティン</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 午前3-4時起床</li>
              <li>• 朝一番で20-30kmのラン</li>
              <li>• 数時間の筋力トレーニング</li>
              <li>• 夕方に追加で10-20kmのラン</li>
              <li>• 週間走行距離は160km以上も</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">メンタル強化法</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            ゴギンズは、精神力を鍛えるための独自のメソッドを開発しました。
            その中心となるのが「クッキージャー」と呼ばれる手法です。
            これは、過去に乗り越えた困難な経験をリストアップし、苦しい時にそれを思い出すことで、
            自分が耐え抜く力を持っていることを確認する方法です。
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 italic">
              「人は自分の限界の40%しか使っていない。残りの60%は、精神的な壁を
              乗り越えることで初めて引き出せる。これが40%ルールだ。」
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">栄養管理と回復</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            極限のトレーニングを支えるため、ゴギンズは徹底的な栄養管理を行っています：
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-bold text-gray-900 mb-3">食事管理の特徴</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 高タンパク質・低炭水化物の食事</li>
              <li>• 一日の摂取カロリーを厳密に管理</li>
              <li>• プロテインやアミノ酸のサプリメント活用</li>
              <li>• 大量の水分摂取（1日約4リットル）</li>
              <li>• 回復のための氷水浴を日常的に実施</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-bold text-green-800 mb-4">ゴギンズから学ぶ人生の教訓</h3>
            <ul className="list-disc pl-5 text-green-700 space-y-3">
              <li>自分の限界は、自分で設定した心の壁に過ぎない</li>
              <li>変化は、不快な状況に自らを置くことから始まる</li>
              <li>強さは快適な環境からではなく、苦難を乗り越えることで得られる</li>
              <li>目標達成には、一貫性のある行動と揺るがない意志が必要</li>
              <li>過去の成功体験は、未来の困難を乗り越える力となる</li>
              <li>真の成長は、自分自身との対話から始まる</li>
            </ul>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">現在の活動</h3>
            <p className="text-gray-700 leading-relaxed">
              現在、ゴギンズはモチベーショナルスピーカーとして世界中で講演を行い、
              彼の著書「Can't Hurt Me」は世界的なベストセラーとなっています。
              また、ソーシャルメディアを通じて、日々のトレーニングや精神的な強さを
              追求する姿を世界中のフォロワーと共有しています。
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">著書と影響力</h3>
              <ul className="space-y-3 text-yellow-700">
                <li>• 「Can't Hurt Me」- 200万部以上を売り上げた自伝的著作</li>
                <li>• 数百万人のソーシャルメディアフォロワー</li>
                <li>• 企業、軍事組織での講演活動</li>
                <li>• フィットネスプログラムの開発と指導</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">継続的な挑戦</h3>
              <p className="text-blue-700 leading-relaxed">
                ゴギンズは現在も新たな挑戦を続けています。トレーニングの強度を
                落とすことなく、より多くの人々に影響を与えることを目指しています。
                彼の「40%ルール」や「アカウンタビリティミラー」といった概念は、
                ビジネスや自己啓発の分野でも広く取り入れられています。
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4">将来の目標</h3>
              <ul className="space-y-3 text-purple-700">
                <li>• より多くの過酷なウルトラマラソンへの挑戦</li>
                <li>• メンタル強化プログラムの開発と展開</li>
                <li>• 次世代のアスリートへの指導と育成</li>
                <li>• 新たな著書の執筆と世界展開</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">ゴギンズの名言集</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-white pl-4">
                <p className="italic">「誰もが自分の人生を変えることができる。必要なのは、行動を起こす勇気だけだ。」</p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <p className="italic">「痛みは一時的だ。諦めは永遠に続く。」</p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <p className="italic">「最も困難な状況で、最高の自分を見つけることができる。」</p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <p className="italic">「強くなるための唯一の方法は、自分の弱さと向き合うことだ。」</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              デイビッド・ゴギンズの物語は、人間の可能性の限界に挑戦し続ける
              感動的な証です。彼の生き方は、私たち一人一人の中にある
              無限の可能性を思い起こさせてくれます。
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default David;