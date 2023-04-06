import React from 'react';
import { forecastOfDay } from '../../redux/forecastReducer';
const DayWeek: React.FC<forecastOfDay> = ({ temp, dataTime, icon }) => {
    let date = new Date(dataTime)
    const dateDay = new Intl.DateTimeFormat('EN', { weekday: 'long', day: 'numeric', month: 'long' }).format(date);
    return (
        <>
            <li><i className="day-icon" data-feather="cloud-rain"><img src={`https://openweathermap.org/img/w/${icon}.png`} alt="" /></i><span style={{ display: 'flex', flexDirection: 'column', maxWidth: '80px' }} className="day-name">{dateDay}</span><span className="day-temp">{Math.floor(+temp)}°C</span></li>
        </>
    )
}
export default DayWeek
