import React from 'react';
import Layout from './layouts/default';
import WeatherBox from './components/WeatherBox';
import { mockWeatherData } from './mock/data';

const App: React.FC = () => {

  return (
    <Layout>
      <div>
        <WeatherBox 
          info={mockWeatherData[0]}
        />
      </div>
    </Layout>
  );
};

export default App
