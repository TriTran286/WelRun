import React, { useState, useMemo } from 'react';
import { Tag, ChevronRight, Trophy, Apple } from 'lucide-react';
import { useOutletContext, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CONTENT_TYPES, 
  TYPE_CONFIGS, 
  allGuideData,
  getAllTags 
} from './runningGuideData';

// Add icons to TYPE_CONFIGS
TYPE_CONFIGS.plan.icon = Trophy;
TYPE_CONFIGS.nutrition.icon = Apple;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Components
const CategoryBadge = ({ type, categories }) => (
  <div className="absolute top-4 left-4 flex gap-2">
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${TYPE_CONFIGS[type].badgeColors}`}>
      {TYPE_CONFIGS[type].badge}
    </span>
    <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded">
      {categories}
    </span>
  </div>
);

const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {tags.map((tag, index) => (
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
);

const Card = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const typeConfig = TYPE_CONFIGS[item.type];
  const IconComponent = typeConfig.icon;

  return (
    <Link to={item.path}>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
      >
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            animate={{ opacity: isHovered ? 0.8 : 0.6 }}
          />
          
          <CategoryBadge type={item.type} categories={item.categories} />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-500 transition-colors">
            {item.title}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <IconComponent size={16} className="text-green-500" />
            <span className="text-sm text-gray-600">{typeConfig.statusText}</span>
          </div>

          <TagList tags={item.tags} />

          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 
                     bg-gray-100 text-gray-900 rounded-xl
                     hover:bg-green-500 hover:text-white
                     transition-all duration-300"
          >
            {typeConfig.buttonText}
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

const FilterButton = ({ active, children, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
      ${active ? 'bg-maincolor text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
  >
    {children}
  </motion.button>
);

const EmptyState = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="text-center py-12"
  >
    <h3 className="text-xl text-gray-600 mb-2">
      検索結果が見つかりません
    </h3>
    <p className="text-gray-500">
      検索条件を変更してお試しください
    </p>
  </motion.div>
);

const All = () => {
  const { searchQuery } = useOutletContext() || { searchQuery: '' };
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedType, setSelectedType] = useState(CONTENT_TYPES.ALL);

  const allTags = useMemo(() => getAllTags(), []);

  const filteredItems = useMemo(() => (
    allGuideData.filter(item => {
      const matchesSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTag = !selectedTag || item.tags.includes(selectedTag);
      const matchesType = selectedType === CONTENT_TYPES.ALL || item.type === selectedType;
      
      return matchesSearch && matchesTag && matchesType;
    })
  ), [searchQuery, selectedTag, selectedType]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto p-6"
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          ランニングガイド
        </h2>
        <p className="text-gray-600">
          トレーニングプランと栄養管理を組み合わせて、最適なランニングライフを実現しましょう。
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <div className="flex flex-wrap gap-2">
          {Object.entries({
            [CONTENT_TYPES.ALL]: 'すべて',
            [CONTENT_TYPES.PLAN]: 'トレーニング',
            [CONTENT_TYPES.NUTRITION]: '栄養管理'
          }).map(([type, label]) => (
            <FilterButton 
              key={type}
              active={selectedType === type} 
              onClick={() => setSelectedType(type)}
            >
              {label}
            </FilterButton>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterButton 
            active={!selectedTag} 
            onClick={() => setSelectedTag('')}
          >
            すべてのタグ
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
      </motion.div>

      <AnimatePresence mode="wait">
        {filteredItems.length > 0 ? (
          <motion.div 
            key="grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          >
            {filteredItems.map((item, index) => (
              <Card key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        ) : (
          <EmptyState key="empty" />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default All;