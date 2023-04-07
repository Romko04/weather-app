import React from 'react';
import Week from './week/Week';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { forecastOfDay } from '../types/types';
import CityForm from './CityForm/CityForm';
const DailyForest: React.FC<forecastOfDay[]> = (forecasts) => {
  const activeIndex = useSelector((state: RootState) => state.forecasts.activeIndexForecast)
  const {feelsLike, speedWind} = forecasts[activeIndex]
  return (
    <div className="info-side">
      <div className="today-info-container">
        <div className="today-info">
          <div className="humidity"> <span className="title">Feels Like</span><span className="value">{Math.floor(feelsLike)}°C</span>
            <div className="clear"></div>
          </div>
          <div className="wind"> <span className="title">WIND</span><span className="value">{Math.floor(speedWind)} km/h</span>
            <div className="clear"></div>
          </div>
        </div>
      </div>
      <Week />
      <CityForm/>
    </div>
  )
}
export default DailyForest
