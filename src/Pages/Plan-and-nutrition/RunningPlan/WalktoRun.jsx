import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WalkToRun = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Main Content */}
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
            src="https://images.unsplash.com/photo-1475274110913-480c45d0e873?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ランニングの始め方"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Title and Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">ランニングの始め方</h1>
          <div className="flex gap-4 text-gray-600">
            <span className="inline-flex items-center">
              <Clock size={18} className="mr-2" />
              4週間プログラム
            </span>
            <span className="inline-flex items-center">
              <Calendar size={18} className="mr-2" />
              週3回トレーニング
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            もし、シューズを履いて外に出るだけで簡単に始められるなら、この記事を読んでいないはずですよね。
            ランニングをしたことがない人や、しばらく運動から離れていた人にとって、最初の一歩はハードルが高いかもしれません。
          </p>
          
          <blockquote className="bg-gray-50 border-l-4 border-[#52d406] p-4 my-6">
            <p className="text-gray-700 italic">
              「一番難しいのは最初の一歩を踏み出すこと。それさえ乗り越えれば、あとはずっと楽になります」
            </p>
          </blockquote>

          {/* Key Points */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">実践的なポイント</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <CheckCircle className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">ペースを気にしすぎない</h3>
                <p className="text-gray-600">
                  「ペースは速いとか遅いとかではなく、"楽"と感じるレベルがいい」とベネットコーチは言います。
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">無理をせず、余力を残す</h3>
                <p className="text-gray-600">
                  走り終わったときに疲れ切るのではなく、まだ力が残っていると感じるくらいが理想です。
                </p>
              </div>
            </div>
          </div>

          {/* Program Schedule */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4週間プログラム内容</h2>
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">1週目</h3>
              <p className="text-gray-600">4分ウォーキング + 2分ジョギングを5セット</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">2週目</h3>
              <p className="text-gray-600">3分ウォーキング + 3分ジョギングを5セット</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">3週目</h3>
              <p className="text-gray-600">2分ウォーキング + 4分ジョギングを5セット</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">4週目</h3>
              <p className="text-gray-600">1分ウォーキング + 5分ジョギングを5セット</p>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">注意点</h2>
            <p className="text-gray-600 mb-4">
              4週目が終わるころには、30分間のジョギングができる持久力を目指します。
              ただし、自分のペースで進めて、必要に応じて期間を延ばしても問題ありません。
            </p>
            <p className="text-gray-600">
              体重を減らすために急ぎたくなるかもしれませんが、プログラムを早めに進めることは
              逆効果になる場合があります。怪我のリスクが高まるだけでなく、最終的に運動を
              続けられなくなる可能性もあります。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalkToRun;
