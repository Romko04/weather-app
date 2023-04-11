import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import TodayInfoLoader from './TodayInfoLoader';
const DailyForest: React.FC = () => {
  const { activeIndexForecast, forecasts } = useSelector((state: RootState) => state.forecasts)
  if (forecasts.length < 1) {
    return <TodayInfoLoader />
  }
  const { feelsLike, speedWind } = forecasts[activeIndexForecast]
  return (
    <>
      <div className="humidity"> <span className="title">Feels Like</span><span className="value">{Math.floor(feelsLike)}°C</span>
        <div className="clear"></div>
      </div>
      <div className="wind"> <span className="title">WIND</span><span className="value">{Math.floor(speedWind)} km/h</span>
        <div className="clear"></div>
      </div></>
  )
}
export default DailyForest
