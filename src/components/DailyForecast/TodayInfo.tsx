import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { forecastOfDay } from '../../types/types';
import ContentLoader from 'react-content-loader';
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
const TodayInfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={722}
    height={45}
    viewBox="0 0 722 45"
    backgroundColor="#f3f3f3"
    foregroundColor="#ffffff"
  >
    <rect x="0" y="0" rx="0" ry="0" width="82" height="19" /> 
    <rect x="-2" y="26" rx="0" ry="0" width="50" height="20" /> 
    <rect x="666" y="0" rx="0" ry="0" width="56" height="20" /> 
    <rect x="666" y="26" rx="0" ry="0" width="56" height="20" />
  </ContentLoader>

)
