import React from 'react';
import Week from '../week/Week';
import { forecastOfDay } from '../../types/types';
import CityForm from '../CityForm/CityForm';
import TodayInfo from './TodayInfo';
type DailyForecastProps = {forecasts: forecastOfDay[]}
const DailyForecast: React.FC<DailyForecastProps> = (forecasts) => {
  return (
    <div className="info-side">
      <div className="today-info-container">
        <div className="today-info">
                <TodayInfo/>
        </div>
      </div>
      <Week />
      <CityForm/>
   </div>
  )
}
export default DailyForecast
