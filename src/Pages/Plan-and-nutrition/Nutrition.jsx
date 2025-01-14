import React, { useState, useMemo } from 'react';
import { Tag, Clock, Users, ChevronRight, Apple, Trophy, Medal } from 'lucide-react';
import { useOutletContext, Link, Outlet, useLocation } from 'react-router-dom';

const DifficultyBadge = ({ level }) => {
  const colors = {
    beginner: 'bg-emerald-100 text-emerald-600',
    intermediate: 'bg-yellow-100 text-yellow-600',
    advanced: 'bg-red-100 text-red-600'
  };

  return (
    <span className={`${colors[level]} px-2.5 py-0.5 rounded text-xs font-medium inline-flex items-center gap-1`}>
      <Medal size={12} />
      基礎栄養知識
    </span>
  );
};

const Card = ({ nutrition }) => {
  return (
    <Link to={nutrition.path} className="block group">
      <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={nutrition.img}
            alt={nutrition.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            <DifficultyBadge level="beginner" />
            <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-0.5 rounded">
              {nutrition.categories}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Apple size={14} />
                栄養知識
              </span>
              <span className="flex items-center gap-1">
                <Trophy size={14} />
                パフォーマンス向上
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#52d406] transition-colors">
            {nutrition.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            ランニングのパフォーマンスを最大限に引き出すための栄養管理方法を学びましょう。
            適切な栄養摂取は、トレーニング効果を高め、回復を促進します。
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {nutrition.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1.5 
                         bg-gray-100 text-gray-700 text-sm rounded-full
                         hover:bg-gray-200 transition-colors"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <div className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 
                           bg-gray-100 text-gray-900 rounded-xl
                           hover:bg-[#52d406] hover:text-white
                           transition-all duration-300 group-hover:shadow-md">
              詳細を見る
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const FilterButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
      ${active
        ? 'bg-[#52d406] text-white shadow-md'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
  >
    {children}
  </button>
);

const Nutrition = () => {
  const { searchQuery } = useOutletContext() || { searchQuery: '' };
  const [selectedTag, setSelectedTag] = useState('');
  const location = useLocation();
  
  // Check if we're on the main nutrition page or a specific nutrition article
  const isMainNutritionPage = location.pathname === '/runningguide/nutrition';

  const initialNutrition = [
    {
      id: 6,
      title: "初心者向け：ランニングを始める人のための具体的な食事プラン",
      categories: "Nutritions",
      tags: ['食事'],
      path: "beginnermeal",
      img: "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 1,
      title: "ランニングす能力を上げる食事",
      categories: "Nutritions",
      tags: ['食事'],
      path: "beforerunning",
      img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "食後のトレーニングは控えめに",
      categories: "Nutritions",
      tags: ['初心者', '5k'],
      path: "afterrunning",
      img: "https://images.unsplash.com/photo-1608354580394-f7961a034347?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "初め朝食・空腹トレーニングのすすめ",
      categories: "Nutritions",
      tags: ['初心者', '10k', '中級者'],
      path: "runninginmorning",
      img: "https://images.unsplash.com/photo-1590646299329-ac2652afd477?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "低炭水化物食で1日おきのトレーニングはダブル効果",
      categories: "Nutritions",
      tags: ['初心者', '10k', '中級者'],
      path: "lowcarb",
      img: "https://images.unsplash.com/photo-1559058789-672da06263d8?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "マラソンにおける水分補給とグリコーゲンローディングのポイント",
      categories: "Nutritions",
      tags: ['初心者', '10k', '中級者'],
      path: "fatloss",
      img: "https://images.unsplash.com/photo-1473348164936-13be821e561c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    
  ];

  // Get unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    initialNutrition.forEach(nutrition => {
      nutrition.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter nutrition
  const filteredNutrition = useMemo(() => {
    return initialNutrition.filter(nutrition => {
      const matchesSearch = !searchQuery || 
        nutrition.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        nutrition.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTag = !selectedTag || nutrition.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <>
      {isMainNutritionPage ? (
        <div className="max-w-7xl mx-auto p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              栄養管理ガイド
            </h2>
            <p className="text-gray-600">
              ランニングのパフォーマンスを最大限に引き出すための栄養管理方法を学びましょう。
              適切な栄養摂取は、トレーニング効果を高め、回復を促進します。
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <FilterButton 
              active={!selectedTag} 
              onClick={() => setSelectedTag('')}
            >
              すべて
            </FilterButton>
            {allTags.map((tag) => (
              <FilterButton
                key={tag}
                active={selectedTag === tag}
                onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
              >
                {tag}
              </FilterButton>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNutrition.map((nutrition) => (
              <Card key={nutrition.id} nutrition={nutrition} />
            ))}
          </div>

          {filteredNutrition.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600 mb-2">
                検索結果が見つかりません
              </h3>
              <p className="text-gray-500">
                検索条件を変更してお試しください
              </p>
            </div>
          )}
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Nutrition;