import React, { useEffect, useState } from 'react';
import { forecastOfDay } from '../redux/forecastReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
type WeatherSide = {
    forecasts:forecastOfDay[]
    city: string
}
const WeatherSide: React.FC<WeatherSide> = ({forecasts, city}) => {
    const activeIndex = useSelector((state: RootState) => state.forecasts.activeIndexForecast)
    let [{temp, dataTime, description}, setForecast] = useState(forecasts[activeIndex])
    useEffect(()=>{
        debugger
        setForecast(forecasts[activeIndex])
    },[activeIndex])
    let date = new Date(dataTime)
    const dateDay = new Intl.DateTimeFormat('EN', { weekday: 'long', day: 'numeric', month: 'long', year: '2-digit' }).format(date);
    return (
        <div className="weather-side">
            <div className="weather-gradient"></div>
            <div className="date-container">
                <h2 className="date-dayname">{dateDay}</h2><i className="location-icon" data-feather="map-pin"></i><span className="location">{city}</span>
            </div>
            <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                <h1 className="weather-temp">{Math.floor(temp)}°C</h1>
                <h3 className="weather-desc">{description}</h3>
            </div>
        </div>
    )
}
export default WeatherSide
