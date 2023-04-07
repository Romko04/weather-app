import React, { useEffect } from 'react';
import './App.css';
import WeatherSide from './components/WeatherSide';
import DailyForest from './components/DailyForest';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './redux/store';
import { fetchForecastsList } from './redux/forecastReducer';
const App: React.FC = () => {
  const { forecasts, city } = useSelector((state: RootState) => state.forecasts)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchForecastsList('Борислав'))
  }, [dispatch])
  return (
    <div>
      <div className="container">
        {forecasts.length > 0 && <WeatherSide {...{ forecasts, city }} />}
        {forecasts.length > 0 && <DailyForest {...forecasts} />}
      </div>
    </div>
  );
}

export default App;
