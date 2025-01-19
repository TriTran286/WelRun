import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home.jsx';
import About from './Pages/HomePage-pages/About.jsx';                                                                                                                                                                       
import RunningGuide from './Pages/RunningGuide.jsx';
import Nutrition from './Pages/Plan-and-nutrition/Nutrition.jsx';
import Plan from './Pages/Plan-and-nutrition/Plan.jsx';
import All from './Pages/Plan-and-nutrition/All.jsx';
import Story from './Pages/Story.jsx';
import Contact from './Pages/Contact.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';
import Preloader from './Components/Preloader.jsx';

//Running Plan
import WalkToRun from './Pages/Plan-and-nutrition/RunningPlan/WalktoRun.jsx';
import FirstFullMarathon from './Pages/Plan-and-nutrition/RunningPlan/FirstFullMarathon.jsx';
import First10k from './Pages/Plan-and-nutrition/RunningPlan/First10k.jsx';
import BeginnerTo5k from './Pages/Plan-and-nutrition/RunningPlan/BeginnerTo5k.jsx';
import FirstHalfMarathon from './Pages/Plan-and-nutrition/RunningPlan/FirstHalfMarathon.jsx';

//Nutrition Plan
import BeforeRunning from './Pages/Plan-and-nutrition/NutritionPlan/BeforeRunning.jsx';
import AfterRunning from './Pages/Plan-and-nutrition/NutritionPlan/AfterRunning.jsx';
import RunningInMorning from './Pages/Plan-and-nutrition/NutritionPlan/RunningInMorning.jsx';
import Carb from './Pages/Plan-and-nutrition/NutritionPlan/Carb.jsx';
// Fix this import path - changed from absolute to relative path
import FatLoss from './Pages/Plan-and-nutrition/NutritionPlan/FatLoss.jsx';
import BeginnerMeal from './Pages/Plan-and-nutrition/NutritionPlan/BeginnerMeal.jsx';

import Joel from './Pages/Story/Joel.jsx';
import Kipchoge from './Pages/Story/Kipchoge.jsx';
import Hiroaki from './Pages/Story/Hiroaki.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Preloader onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/runningguide" element={<RunningGuide />}>
          <Route path="plan" element={<Plan />}>
            <Route path="walktorun" element={<WalkToRun />} />
            <Route path="beginner5k" element={<BeginnerTo5k />} />
            <Route path="first10k" element={<First10k />} />
            <Route path="firsthalfmarathon" element={<FirstHalfMarathon />} />
            <Route path="firstfullmarathon" element={<FirstFullMarathon />} />
          </Route>
          <Route path="nutrition" element={<Nutrition />}>
            <Route path="beforerunning" element={<BeforeRunning />} />
            <Route path="afterrunning" element={<AfterRunning />} />
            <Route path="runninginmorning" element={<RunningInMorning />} />
            <Route path="lowcarb" element={<Carb />} />
            <Route path="fatloss" element={<FatLoss />} />
            <Route path="beginnermeal" element={<BeginnerMeal />} />
          </Route>
          <Route path="all" element={<All />} />
        </Route>
        <Route path="/story" element={<Story />} />
        <Route path="/story/joel-story" element={<Joel />} />
        <Route path="/story/kipchoge-story" element={<Kipchoge />} />
        <Route path="/story/hiroaki-story" element={<Hiroaki />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;