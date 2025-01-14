import React, { useState } from 'react';
import { ChevronDown, Calendar, MapPin, Clock, Activity } from 'lucide-react';

const TrainingWeek = ({ week, schedule, isOpen, onClick }) => {
  // Calculate total distance for the week
  const calculateTotalDistance = () => {
    const distances = schedule.filter(s => s.includes('マイル'))
      .map(s => parseInt(s.match(/\d+/)[0]));
    return distances.reduce((a, b) => a + b, 0);
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold text-gray-900">Week {week}</span>
          <div className="hidden sm:flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              {calculateTotalDistance()}マイル
            </span>
            <span className="flex items-center gap-1">
              <Activity size={16} />
              {schedule.filter(s => s.includes('ラン')).length}回のラン
            </span>
          </div>
        </div>
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-4">
          <div className="grid grid-cols-7 gap-2 bg-gray-50 rounded-xl p-4">
            {['月', '火', '水', '木', '金', '土', '日'].map((day, index) => (
              <div key={day} className={`flex flex-col ${schedule[index].includes('休息') ? 'opacity-50' : ''}`}>
                <span className="text-sm font-medium text-gray-700 mb-2">{day}</span>
                <div className={`p-3 rounded-lg ${
                  schedule[index].includes('ロングラン') ? 'bg-[#52d406]/10 text-[#52d406]' :
                  schedule[index].includes('ラン') ? 'bg-blue-50 text-blue-600' :
                  schedule[index].includes('クロス') ? 'bg-purple-50 text-purple-600' :
                  'bg-gray-100 text-gray-500'
                } text-sm min-h-[80px] flex items-center justify-center text-center`}>
                  {schedule[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const TrainingSchedule = () => {
  const [openWeek, setOpenWeek] = useState(1);
  
  const scheduleData = [
    {
      week: 1,
      schedule: [
        '休息',
        '3マイル イージーラン',
        'クロストレーニング',
        '3マイル イージーラン',
        '休息',
        '4マイル ロングラン',
        'クロストレーニング'
      ]
    },
    {
      week: 2,
      schedule: [
        '休息',
        '3マイル イージーラン',
        'クロストレーニング',
        '3マイル テンポラン',
        '休息',
        '5マイル ロングラン',
        'クロストレーニング'
      ]
    },
    // ... Add all 12 weeks
  ];

  const handleWeekClick = (week) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-900">12週間トレーニングスケジュール</h3>
        <p className="text-sm text-gray-600 mt-1">クリックして各週の詳細を確認できます</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {scheduleData.map((week) => (
          <TrainingWeek
            key={week.week}
            week={week.week}
            schedule={week.schedule}
            isOpen={openWeek === week.week}
            onClick={() => handleWeekClick(week.week)}
          />
        ))}
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#52d406]"></div>
            <span className="text-gray-600">ロングラン</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-gray-600">通常ラン</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-gray-600">クロストレーニング</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <span className="text-gray-600">休息</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSchedule;