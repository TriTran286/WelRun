// src/data/runningGuideData.js

export const nutritionData = [
   {
     id: 6,
     title: "初心者向け：ランニングを始める人のための具体的な食事プラン",
     categories: "Nutritions",
     tags: ['食事'],
     path: "/runningguide/nutrition/beginnermeal",
     type: 'nutrition',
     img: "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?q=80&w=2670&auto=format&fit=crop"
   },
   {
     id: 1,
     title: "ランニング能力を上げる食事",
     categories: "Nutritions",
     tags: ['食事'],
     path: "/runningguide/nutrition/beforerunning",
     type: 'nutrition',
     img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2070&auto=format&fit=crop"
   },
   {
     id: 2,
     title: "食後のトレーニングは控えめに",
     categories: "Nutritions",
     tags: ['初心者', '5k'],
     path: "/runningguide/nutrition/afterrunning",
     type: 'nutrition',
     img: "https://images.unsplash.com/photo-1608354580394-f7961a034347?q=80&w=1470&auto=format&fit=crop"
   },
   {
     id: 3,
     title: "朝食・空腹トレーニングのすすめ",
     categories: "Nutritions",
     tags: ['初心者', '10k', '中級者'],
     path: "/runningguide/nutrition/runninginmorning",
     type: 'nutrition',
     img: "https://images.unsplash.com/photo-1590646299329-ac2652afd477?q=80&w=2670&auto=format&fit=crop"
   },
   {
     id: 4,
     title: "低炭水化物食で1日おきのトレーニングはダブル効果",
     categories: "Nutritions",
     tags: ['初心者', '10k', '中級者'],
     path: "/runningguide/nutrition/lowcarb",
     type: 'nutrition',
     img: "https://images.unsplash.com/photo-1559058789-672da06263d8?q=80&w=1467&auto=format&fit=crop"
   },
   {
     id: 5,
     title: "マラソンにおける水分補給とグリコーゲンローディングのポイント",
     categories: "Nutritions",
     tags: ['初心者', '10k', '中級者'],
     path: "/runningguide/nutrition/fatloss",
     type: 'nutrition',
     img: "https://images.unsplash.com/photo-1473348164936-13be821e561c?q=80&w=1470&auto=format&fit=crop"
   }
 ];
 
 export const planData = [
   {
     id: 1,
     title: "ウォークから走るへ",
     categories: "Plan Running",
     tags: ['ウォーカー', '初心者'],
     path: "/runningguide/plan/walktorun",
     type: 'plan',
     img: "https://images.unsplash.com/photo-1475274110913-480c45d0e873?q=80&w=2962&auto=format&fit=crop"
   },
   {
     id: 2,
     title: "初心者向け5Kランニング",
     categories: "Plan Running",
     tags: ['初心者', '5k'],
     path: "/runningguide/plan/beginner5k",
     type: 'plan',
     img: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?q=80&w=2832&auto=format&fit=crop"
   },
   {
     id: 3,
     title: "初めての10Kランニングに挑戦",
     categories: "Plan Running",
     tags: ['初心者', '10k', '中級者'],
     path: "/runningguide/plan/first10k",
     type: 'plan',
     img: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2944&auto=format&fit=crop"
   },
   {
     id: 4,
     title: "初めてのハーフマラソンを走る",
     categories: "Plan Running",
     tags: ['マラソン','ハーフマラソン', '中級者'],
     path: "/runningguide/plan/firsthalfmarathon",
     type: 'plan',
     img: "https://images.unsplash.com/photo-1587287503374-f6f3d7e90da4?q=80&w=2942&auto=format&fit=crop"
   },
   {
     id: 5,
     title: "初めてのフルマラソンを完走する",
     categories: "Plan Running",
     tags: ['マラソン', 'フルマラソン','初心者'],
     path: "/runningguide/plan/firstfullmarathon",
     type: 'plan',
     img: "https://images.unsplash.com/photo-1524646349956-1590eacfa324?q=80&w=2940&auto=format&fit=crop"
   }
 ];
 
 // Combined data with types already included
 export const allGuideData = [...planData, ...nutritionData];
 
 // Helper to get all unique tags
 export const getAllTags = () => {
   const tags = new Set();
   allGuideData.forEach(item => {
     item.tags.forEach(tag => tags.add(tag));
   });
   return Array.from(tags);
 };
 
 // Constants for content types
 export const CONTENT_TYPES = {
   ALL: 'all',
   PLAN: 'plan',
   NUTRITION: 'nutrition'
 };
 
 // Configuration for different content types
 export const TYPE_CONFIGS = {
   plan: {
     badge: 'トレーニング',
     badgeColors: 'bg-emerald-100 text-emerald-700',
     statusText: '週3回トレーニング',
     buttonText: 'プランを見る'
   },
   nutrition: {
     badge: '栄養知識',
     badgeColors: 'bg-blue-100 text-blue-700',
     statusText: '栄養管理',
     buttonText: '詳細を見る'
   }
 };