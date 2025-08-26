import React from 'react';
import Layout from './layouts/default';
import WeatherBox from './components/WeatherBox';
import { mockWeatherData } from './mock/data';
import NewsSection from './components/NewsSection';
import TodaysForecastSection from './components/TodaysForecastSection';
import WeekForecastSection from './components/WeekForecastSection';

const App: React.FC = () => {

  return (
    <Layout>

      {/* Weather boxes */}
      <div className='flex flex-row gap-2 overflow-x-auto scrollbar-none px-4'>
        <WeatherBox 
          info={mockWeatherData[0]}
        />
        <WeatherBox 
          info={mockWeatherData[1]}
        />
        <WeatherBox 
          info={mockWeatherData[2]}
        />
      </div>

      {/* News section */}
      <NewsSection/>
      
      {/* Today's forecast section */}
      <TodaysForecastSection/>

      {/* Week's forecast section */}
      <WeekForecastSection/>
    </Layout>
  );
};

export default App
