import React, { useState } from 'react'; // Added useState import
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import About from './Pages/HomePage-pages/About'                                                                                                                                                                       
import RunningGuide from './Pages/RunningGuide';
import Nutrition from './Pages/Plan-and-nutrition/Nutrition'
import Plan from './Pages/Plan-and-nutrition/Plan'
import All from './Pages/Plan-and-nutrition/All'
import Story from './Pages/Story';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';
import Preloader from './Components/Preloader'

//Running Plan
import WalkToRun from './Pages/Plan-and-nutrition/RunningPlan/WalktoRun';
import FirstFullMarathon from './Pages/Plan-and-nutrition/RunningPlan/FirstFullMarathon';
import First10k from './Pages/Plan-and-nutrition/RunningPlan/First10k';
import BeginnerTo5k from './Pages/Plan-and-nutrition/RunningPlan/BeginnerTo5k';
import FirstHalfMarathon from './Pages/Plan-and-nutrition/RunningPlan/FirstHalfMarathon';

//Nutrition Plan
import BeforeRunning from './Pages/Plan-and-nutrition/NutritionPlan/BeforeRunning';
import AfterRunning from './Pages/Plan-and-nutrition/NutritionPlan/AfterRunning';
import RunningInMorning from './Pages/Plan-and-nutrition/NutritionPlan/RunningInMorning';
import Carb from './Pages/Plan-and-nutrition/NutritionPlan/Carb';
import FatLoss from './Pages/Plan-and-nutrition/NutritionPlan/Fatloss';
import BeginnerMeal from './Pages/Plan-and-nutrition/NutritionPlan/BeginnerMeal';

import Joel from './Pages/Story/Joel'
import Kipchoge from './Pages/Story/Kipchoge'
import Hiroaki from './Pages/Story/Hiroaki' 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent content flash
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
            <Route path="firstfullmarathon" element={<FirstFullMarathon />} /
            >
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
        {/* Remove the nested Routes and put story routes at the same level */}
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