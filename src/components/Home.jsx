import React from 'react';
import HeroBelow from './HeroBelow';
import MainBanner from './MainBanner';
import Categories from './Categories';
import SecondBanner from './SecondBanner';
import BestSelling from './BestSelling';
import InSeason from './InSeason';
import DoubleCards from './DoubleCards';
import ThirdBanner from './ThirdBanner';

const Home = () => {
    return (
        <div>
          <MainBanner/>
          <HeroBelow/>  
          <Categories/>
          <SecondBanner/>
          <BestSelling/>
          <DoubleCards/>
          <InSeason/>
          <ThirdBanner/>
        </div>
    );
};

export default Home;