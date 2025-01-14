import React from 'react';
import { ArrowLeft, Clock, Apple, Salad, Utensils, AlertCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const MealCard = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <Icon className="text-[#52d406] mt-1 flex-shrink-0" size={20} />
    <div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

const DailyMealPlan = ({ day, meals }) => (
  <div className="bg-gray-50 rounded-lg p-4">
    <h4 className="font-semibold text-gray-900 mb-3">{day}</h4>
    <div className="space-y-2">
      {Object.entries(meals).map(([time, meal]) => (
        <div key={time} className="flex items-start gap-2">
          <Utensils className="text-[#52d406] mt-1 flex-shrink-0" size={16} />
          <div>
            <span className="font-medium text-gray-900">{time}：</span>
            <span className="text-gray-600">{meal}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FoodList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <Salad className="text-[#52d406] mt-1 flex-shrink-0" size={16} />
        <span className="text-gray-600">{item}</span>
      </li>
    ))}
  </ul>
);

const BeginnerMeal = () => {
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
            src="https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ランニング初心者の食事"
            className="w-full object-cover"
          />
        </div>

        {/* Title and Introduction */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            初心者向け：ランニングを始める人のための具体的な食事プラン
          </h1>
          <p className="text-gray-600">
            ランニング初心者にとって、どのようなタイミングで何を食べるべきか迷うことも多いでしょう。
            この記事では、朝ランや夜ランを行う場合に、具体的な食事プランと注意点を紹介します。
            特に初心者でもすぐに実践できる内容にまとめました。
          </p>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          {/* Pre-running Meal Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. ランニング前の食事プラン
            </h2>
            <div className="space-y-4">
              <MealCard icon={Clock} title="基本ルール">
                軽めの食事で消化が良く、エネルギー補給がしやすい食品を選ぶ。
                走る2～3時間前が理想。時間がない場合は30分～1時間前に軽食を摂る。
              </MealCard>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">具体例</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">朝ランの場合</h4>
                    <FoodList items={[
                      '時間がない場合: バナナ1本＋水',
                      '時間がある場合: トースト1枚＋ゆで卵1個＋オレンジジュース'
                    ]} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">夜ランの場合</h4>
                    <FoodList items={[
                      '昼食がボリュームある場合: ランニング前は軽食でOK（おにぎり1個＋水）',
                      '昼食が軽めの場合: ランニング2時間前に炭水化物多めの食事（パスタ、サラダ、スープ）'
                    ]} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* During Running Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. ランニング中の栄養補給
            </h2>
            <div className="space-y-4">
              <MealCard icon={Apple} title="距離と時間に応じた補給方法">
                <div className="space-y-2">
                  <p>30分以内のランニング: 基本的に補給は不要。走る前に水分を摂る程度で十分。</p>
                  <p>1時間以上のランニング: エネルギー補給と水分補給が必要。</p>
                  <ul className="list-disc list-inside pl-4 mt-2">
                    <li>エネルギー補給: 30～45分ごとにバナナ半分、エネルギージェル、または和菓子1個。</li>
                    <li>水分補給: 15～20分ごとに100～200mlの水またはスポーツドリンク。</li>
                  </ul>
                </div>
              </MealCard>
            </div>
          </section>

          {/* Weekly Meal Plan Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. 初心者向けの1週間具体的食事プラン
            </h2>
            <div className="space-y-4">
              <DailyMealPlan 
                day="月曜日（朝ランの日）"
                meals={{
                  "朝ラン前": "バナナ1本＋水",
                  "朝ラン後": "ヨーグルト＋グラノーラ＋オレンジ",
                  "昼食": "サバの塩焼き＋ご飯＋野菜スープ",
                  "夕食": "鶏むね肉のグリル＋ほうれん草のごま和え＋玄米"
                }}
              />
              <DailyMealPlan 
                day="水曜日（夜ランの日）"
                meals={{
                  "朝食": "トースト＋ゆで卵＋トマトジュース",
                  "昼食": "パスタ（トマトベース）＋ミニサラダ",
                  "夜ラン前": "おにぎり1個＋水",
                  "夜ラン後": "豆腐と野菜の鍋＋フルーツ"
                }}
              />
              <DailyMealPlan 
                day="日曜日（ロングランの日）"
                meals={{
                  "ラン前": "トースト＋ジャム＋ゆで卵",
                  "ラン後": "チキンサンドイッチ＋バナナスムージー",
                  "昼食": "ご飯＋焼き魚＋お吸い物",
                  "夕食": "カレーライス＋サラダ＋フルーツ"
                }}
              />
            </div>
          </section>

          {/* Key Points Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. 初心者が意識すべき3つのポイント
            </h2>
            <div className="space-y-4">
              <MealCard icon={AlertCircle} title="炭水化物を主軸にする">
                炭水化物はランニングの主要なエネルギー源です。主食（ご飯、パン、パスタ）をしっかり摂りましょう。
              </MealCard>
              <MealCard icon={AlertCircle} title="タンパク質を欠かさない">
                筋肉の修復にはタンパク質が必須。毎食、肉、魚、大豆製品を取り入れることを意識します。
              </MealCard>
              <MealCard icon={AlertCircle} title="水分とミネラルを適切に補給">
                運動中に汗で失われる水分とミネラル（ナトリウム、マグネシウム）を補うため、
                スポーツドリンクや塩分のある食品を摂取。
              </MealCard>
            </div>
          </section>

          {/* Summary Section */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">まとめ</h2>
            <p className="text-gray-600">
              初心者ランナーでも簡単に実践できる食事プランを取り入れることで、体のパフォーマンスを
              効率的に引き出し、ランニングをより楽しむことができます。特に、ランニング前後のタイミングを
              意識し、炭水化物とタンパク質のバランスを整えることで、怪我の予防や体調管理にもつながります。
              ぜひ日々のランニング生活に取り入れてみてください！
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BeginnerMeal;