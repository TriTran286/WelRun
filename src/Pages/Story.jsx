import React from 'react';
import { ChevronLeft, ChevronRight, Clock, ArrowRight, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Joel from "../assets/running-image/joel-1.jpeg";
import Kipchoge from '../assets/running-image/Kipchoge.jpg';
import Storybg from '../assets/running-image/story-background.jpg'
import Hiroaki from'../assets/running-image/Hiroaki-1.jpg'

const Story = () => {
  const navigate = useNavigate();
  
  const stories = [
    {
      id: 1,
      title: "田中宏暁：市民ランナーの挑戦",
      description: "福岡大学発祥のスロージョギングを通じて、マラソンの素晴らしさを伝える物語",
      image: Hiroaki,
      href: "/story/hiroaki-story",
      readTime: "読む時間 7分",
      category: "エリートランナー"
    },
    {
      id: 2,
      title: "キプチョゲ：限界への挑戦",
      description: "人類初のマラソン2時間切りを達成したキプチョゲの挑戦と栄光の記録。",
      image: Kipchoge,
      href: "/story/kipchoge-story",
      readTime: "読む時間 7分",
      category: "エリートランナー"
    },
    {
      id: 3,
      title: "ジョエルの変化 ～ソファーからマラソンへの軌跡～",
      description: "減量を通じて人生を変え、新たな情熱を見つけたジョエルの感動的なストーリー。",
      image: Joel,
      href: "/story/joel-story",
      readTime: "読む時間 5分",
      category: "変化の軌跡"
    }
   
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === stories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  const handleStoryClick = (href) => {
    navigate(href);
  };

  return (
    <div 
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${Storybg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay to ensure content readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-50">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Home className="w-5 h-5" style={{ color: '#52d406' }} />
          <span className="text-gray-700 font-medium hidden sm:inline">ホームに戻る</span>
        </button>
      </div>

      <main className="relative z-10 w-full max-h-screen py-8">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white leading-tight">
              ランナーたちの軌跡
              <br className="hidden sm:block" />
              感動のストーリー
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto px-4 leading-relaxed">
              新たな一歩を踏み出すきっかけに
              <br className="sm:hidden" />
              ランナーたちの情熱と挑戦の物語
            </p>
          </div>

          <div className="relative mt-8">
            <div className="overflow-hidden rounded-lg sm:rounded-2xl">
              <div 
                className="flex w-full transition-transform duration-700 ease-out will-change-transform"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {stories.map((story) => (
                  <div key={story.id} className="w-full flex-shrink-0 flex-grow-0 px-2 sm:px-4" style={{ width: '100%' }}>
                    <div 
                      onClick={() => handleStoryClick(story.href)}
                      className="cursor-pointer group relative"
                    >
                      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative">
                          <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-48 sm:h-64 md:h-[24rem] object-cover object-top rounded-t-xl sm:rounded-t-2xl brightness-95 group-hover:brightness-90 transition-all duration-300"
                          />
                          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/90 rounded-full text-xs sm:text-sm font-medium" style={{ color: '#52d406' }}>
                              {story.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex items-center space-x-2 mb-2 sm:mb-3 text-gray-500">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm">{story.readTime}</span>
                          </div>
                          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#52d406] transition-colors duration-300 line-clamp-2">
                            {story.title}
                          </h2>
                          <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                            {story.description}
                          </p>
                          <div className="flex items-center font-medium text-sm sm:text-base" style={{ color: '#52d406' }}>
                            <span>ストーリーを読む</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden sm:block">
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 sm:p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" style={{ color: '#52d406' }} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 sm:p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-200 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" style={{ color: '#52d406' }} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 sm:space-x-3">
              {stories.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 
                    ${index === currentIndex 
                      ? 'w-6 sm:w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'}`}
                  style={{ 
                    backgroundColor: index === currentIndex ? '#52d406' : undefined 
                  }}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Story;