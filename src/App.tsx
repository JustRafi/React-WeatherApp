import React from 'react';
import Layout from './layouts/default';
import WeatherBox from './components/WeatherBox';
import { mockWeatherData } from './mock/data';

const App: React.FC = () => {

  return (
    <Layout>
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
    </Layout>
  );
};

export default App
