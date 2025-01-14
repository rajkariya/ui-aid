import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PopularTools from './components/PopularTools';
import ChartSection from './components/ChartSection';
import SeatInfo from './components/SeatInfo';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PopularTools/>
      <SeatInfo/>
      <ChartSection/>
    </div>
  );
}

export default App;
