import React, { useState, useMemo } from 'react';
import { Tag, Clock, Users, ArrowRight, Target, ChevronRight, Medal } from 'lucide-react';
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
      {level === 'beginner' ? '初級' : level === 'intermediate' ? '中級' : '上級'}
    </span>
  );
};

const Card = ({ plan }) => {
  return (
    <Link to={plan.path} className="block group">
      <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={plan.img}
            alt={plan.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            <DifficultyBadge level="beginner" />
            <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-0.5 rounded">
              {plan.categories}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock size={14} />
                8週間
              </span>
              <span className="flex items-center gap-1">
                <Users size={14} />
                1000+
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#52d406] transition-colors">
            {plan.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            目標達成のためのステップバイステップのガイドで、着実に走力を向上させましょう。
            あなたのペースに合わせて最適な練習メニューを提供します。
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <Target size={16} className="text-[#52d406]" />
              週3回トレーニング
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <Users size={16} className="text-[#52d406]" />
              コーチサポート付き
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {plan.tags.map((tag, index) => (
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
              プランを見る
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

const Plan = () => {
  const { searchQuery } = useOutletContext() || { searchQuery: '' };
  const [selectedTag, setSelectedTag] = useState('');
  const location = useLocation();
  
  // Check if we're on the main plan page or a specific plan
  const isMainPlanPage = location.pathname === '/runningguide/plan';

  const initialPlans = [
    {
      id: 1,
      title: "ウォークから走るへ",
      categories: "Plan Running",
      tags: ['ウォーカー', '初心者'],
      path: "walktorun",
      img: "https://images.unsplash.com/photo-1475274110913-480c45d0e873?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "初心者向け5Kランニング",
      categories: "Plan Running",
      tags: ['初心者', '5k'],
      path: "beginner5k",
      img: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "初めての10Kランニングに挑戦",
      categories: "Plan Running",
      tags: ['初心者', '10k', '中級者'],
      path: "first10k",
      img: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "初めてのハーフマラソンを走る",
      categories: "Plan Running",
      tags: ['マラソン','ハーフマラソン', '中級者'],
      path: "firsthalfmarathon",
      img: "https://images.unsplash.com/photo-1587287503374-f6f3d7e90da4?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "初めてのフルマラソンを完走する",
      categories: "Plan Running",
      tags: ['マラソン', 'フルマラソン','初心者'],
      path: "firstfullmarathon",
      img: "https://images.unsplash.com/photo-1524646349956-1590eacfa324?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const allTags = useMemo(() => {
    const tags = new Set();
    initialPlans.forEach(plan => {
      plan.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  const filteredPlans = useMemo(() => {
    return initialPlans.filter(plan => {
      const matchesSearch = !searchQuery || 
        plan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTag = !selectedTag || plan.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <>
      {isMainPlanPage ? (
        <div className="max-w-7xl mx-auto p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              ランニングプラン一覧
            </h2>
            <p className="text-gray-600">
              あなたのレベルや目標に合わせた最適なプランをお選びください。
              初心者から上級者まで、それぞれの目標達成をサポートします。
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
            {filteredPlans.map((plan) => (
              <Card key={plan.id} plan={plan} />
            ))}
          </div>

          {filteredPlans.length === 0 && (
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

export default Plan;