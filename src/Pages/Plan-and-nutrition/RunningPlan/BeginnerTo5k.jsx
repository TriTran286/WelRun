import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Target, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeeklySchedule = ({ week, runWalkTime, schedule }) => (
  <div className="border-b pb-6 last:border-b-0">
    <h3 className="text-xl font-semibold text-gray-900 mb-3">第{week}週</h3>
    <p className="text-gray-600 mb-3">
      ラン＆ウォークの日：{runWalkTime}
    </p>
    <div className="space-y-2">
      {Object.entries(schedule).map(([day, activity]) => (
        <div key={day} className="flex items-start gap-2">
          <span className="font-medium text-gray-900 w-20">{day}：</span>
          <span className="text-gray-600">{activity}</span>
        </div>
      ))}
    </div>
  </div>
);

const Beginner5K = () => {
  return (
    <div className="bg-white min-h-screen">
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
            src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="5Kランニング"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Title and Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">5Kランに挑戦しよう</h1>
          <div className="flex gap-4 text-gray-600">
            <span className="inline-flex items-center">
              <Clock size={18} className="mr-2" />
              7週間プログラム
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            5Kランを取り入れることで、運動プログラムに新しいチャレンジや楽しさを加えることができます。
            5Kランは約3.1マイル（約5キロ）です。この距離を恐れる必要はありません。
            5Kランは初心者にも最適な距離で、わずか2ヶ月で準備ができます。
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-gray-600">
              もしかすると「自分には5Kランなんて無理」「そんな時間やエネルギーはない」と思うかもしれません。
              でも、この5Kトレーニングスケジュールを試してみてください。1回約30分の短いセッションが週に数回組み込まれています。
            </p>
          </div>

          {/* Getting Started Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">運動を始めるには</h2>
          <p className="text-gray-600 mb-6">
            運動を始めたばかりの人は、ゆっくりスタートすることが大切です。ペースを抑え、短時間から始めてみましょう。
            たとえば、1日の中で数回の短いウォーキングを取り入れることから始めます。その後、体が慣れてきたら、
            少しずつ速く、長い時間運動できるようにしていきます。そして、1回30分運動できるようになったら、
            5Kトレーニングスケジュールを始めましょう。
          </p>

          {/* Exercise Guidelines */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">週150分の運動を目指して</h2>
            <p className="text-gray-600 mb-4">
              健康な成人に対して、保健福祉省は以下の運動量を推奨しています：
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Target className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">中程度の有酸素運動：週150分</p>
              </div>
              <div className="flex items-start">
                <Target className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">激しい有酸素運動：週75分</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              中程度と激しい運動の組み合わせを行いましょう。1日30分程度の運動をほとんどの日に行うことで、
              このガイドラインを満たすことができます。
            </p>
          </div>

          {/* Schedule Usage */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5Kトレーニングスケジュールの使い方</h2>
          <p className="text-gray-600 mb-6">
            この7週間の5Kトレーニングスケジュールは、初心者や5Kレースに挑戦したい人向けに作られています。
            また、ウォーキングで5Kに挑戦する場合にも調整可能です。
          </p>
          <p className="text-gray-600 mb-6">
            このスケジュールでは、ランニング、ウォーキング、休息を組み合わせています。これにより、
            ケガやストレス、疲労のリスクを軽減し、運動を楽しめるようになります。
          </p>

          {/* Training Schedule */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">7週間トレーニングスケジュール</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-8">
            <WeeklySchedule
              week="1"
              runWalkTime="15秒走り、45秒歩く"
              schedule={{
                "月曜日": "ラン＆ウォーク30分",
                "火曜日": "ウォーキング30分",
                "水曜日": "ラン＆ウォーク30分",
                "木曜日": "ウォーキング30分",
                "金曜日": "休息",
                "土曜日": "ラン＆ウォーク3マイル（約4.8 km）",
                "日曜日": "休息またはウォーキング"
              }}
            />

            <WeeklySchedule
              week="2"
              runWalkTime="15秒走り、45秒歩く"
              schedule={{
                "月曜日": "ラン＆ウォーク30分",
                "火曜日": "ウォーキング30分",
                "水曜日": "ラン＆ウォーク30分",
                "木曜日": "ウォーキング30分",
                "金曜日": "休息",
                "土曜日": "ラン＆ウォーク3.5マイル（約5.6 km）",
                "日曜日": "休息またはウォーキング"
              }}
            />

            <WeeklySchedule
              week="3"
              runWalkTime="20秒走り、40秒歩く"
              schedule={{
                "月曜日": "ラン＆ウォーク30分",
                "火曜日": "ウォーキング30分",
                "水曜日": "ラン＆ウォーク30分",
                "木曜日": "ウォーキング30分",
                "金曜日": "休息",
                "土曜日": "ラン＆ウォーク2マイル（約3.2 km）+ マジックマイル",
                "日曜日": "休息またはウォーキング"
              }}
            />

            <WeeklySchedule
              week="4"
              runWalkTime="20秒走り、40秒歩く"
              schedule={{
                "月曜日": "ラン＆ウォーク30分",
                "火曜日": "ウォーキング30分",
                "水曜日": "ラン＆ウォーク30分",
                "木曜日": "ウォーキング30分",
                "金曜日": "休息",
                "土曜日": "ラン＆ウォーク4マイル（約6.4 km）",
                "日曜日": "休息またはウォーキング"
              }}
            />

            <WeeklySchedule
              week="5"
              runWalkTime="25秒走り、35秒歩く"
              schedule={{
                "月曜日": "ラン＆ウォーク30分",
                "火曜日": "ウォーキング30分",
                "水曜日": "ラン＆ウォーク30分",
                "木曜日": "ウォーキング30分",
                "金曜日": "休息",
                "土曜日": "ラン＆ウォーク2マイル（約3.2 km）+ マジックマイル",
                "日曜日": "休息またはウォーキング"
              }}
            />

            <WeeklySchedule
              week="6"
              runWalkTime="25秒走り、35秒歩く"
              schedule={{
                "月曜日": "ラン＆ウォーク30分",
                "火曜日": "ウォーキング30分",
                "水曜日": "ラン＆ウォーク30分",
                "木曜日": "ウォーキング30分",
                "金曜日": "休息",
                "土曜日": "ラン＆ウォーク4.5マイル（約7.2 km）",
                "日曜日": "休息またはウォーキング"
              }}
            />

            <WeeklySchedule
              week="7"
              runWalkTime="30秒走り、30秒歩く"
              schedule={{
                "月曜日": "ラン＆ウォーク30分",
                "火曜日": "ウォーキング30分",
                "水曜日": "ラン＆ウォーク30分",
                "木曜日": "ウォーキング30分",
                "金曜日": "休息",
                "土曜日": "5Kレース当日",
                "日曜日": "休息またはウォーキング"
              }}
            />
          </div>

          {/* Additional Notes */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">注意点とアドバイス</h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex items-start">
                <AlertCircle className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  ウォーキングの日にほかの運動をしたい場合は、クロストレーニングもおすすめです。
                  水中ランニングやサイクリング、ローイングなどを試してみてください。
                </p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  スケジュールの一部では、ウォーキングとランニングを交互に行います。
                  週が進むごとにランニングの時間を少しずつ増やし、ウォーキングの時間を減らしていきます。
                </p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  週に1回、完全に休む日を設けます。このスケジュールでは金曜日が休息日です。
                  筋肉が回復する時間を与えましょう。
                </p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="text-[#52d406] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  日曜日は、もう1日休むか、好きなだけウォーキングを楽しむ日としてください。
                  また、レースの前日は休息日を設けましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beginner5K;