import React, { useEffect } from 'react';
import './App.css';
import WeatherSide from './components/DailyForecast/WeatherSide/WeatherSide';
import DailyForecast from './components/DailyForecast/DailyForecast';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './redux/store';
import { fetchForecastsList } from './redux/forecastReducer';
import WeatherSideLoader from './components/DailyForecast/WeatherSide/WeatherSideLoader';
const App: React.FC = () => {
  const { forecasts, city } = useSelector((state: RootState) => state.forecasts)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchForecastsList(city))
  }, [dispatch,city])
  return (
    <div>
      <div className="container">
      <div className="weather-side">
      {forecasts.length > 0 ? <WeatherSide {...{ forecasts, city }} />: <WeatherSideLoader/>}
      </div>
        <DailyForecast forecasts={forecasts} />
      </div>
    </div>
  );
}
export default App