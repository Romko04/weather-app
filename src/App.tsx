import React, { useEffect, useRef } from 'react';
import './App.css';
import WeatherSide from './components/WeatherSide';
import DailyForest from './components/DailyForecast/DailyForest';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './redux/store';
import { fetchForecastsList } from './redux/forecastReducer';
import ContentLoader from 'react-content-loader';
const App: React.FC = () => {
  console.log('render');
  
  const IsFetch = useRef<boolean>(false);
  const { forecasts, city } = useSelector((state: RootState) => state.forecasts)
  const dispatch = useAppDispatch()
  useEffect(() => {
    // console.log('mount');
    
    // if (!IsFetch.current) {
    //   dispatch(fetchForecastsList('Борислав'))
    //   IsFetch.current = true
    // }
    // return (): void=>{
    //   console.log('unmount');
      
    // }
  }, [])
  return (
    <div>
      <div className="container">
      <div className="weather-side">
      {forecasts.length > 0 ? <WeatherSide {...{ forecasts, city }} />: <MyLoader/>}
      </div>
        <DailyForest forecasts={forecasts} />
      </div>
    </div>
  );
}

export const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={306}
    height={408}
    viewBox="0 0 306 408"
    backgroundColor="#f3f3f3"
    foregroundColor="#ffffff"
  >
    <rect x="0" y="0" rx="25" ry="25" width="306" height="408" />
  </ContentLoader>
)

export default App
