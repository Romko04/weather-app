import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { forecastOfDay } from '../../../types/types';
import { setActiveIndexForecast } from '../../../redux/forecastReducer';
const DayWeek: React.FC<forecastOfDay & { count: number }> = ({ temp, dataTime, icon, count }) => {
    const dispatch = useDispatch()
    const onChangeDayForecast = (index:number) => {
        dispatch(setActiveIndexForecast(index))
    }
    const activeIndex = useSelector((state: RootState) => state.forecasts.activeIndexForecast)
    let date = new Date(dataTime)
    const dateDay = new Intl.DateTimeFormat('EN', { weekday: 'long', day: 'numeric', month: 'long' }).format(date);
    return (
        <>
            <li onClick={()=>{onChangeDayForecast(count)}} className={activeIndex === count ? 'active' : ''}>
                <i className="day-icon" data-feather="cloud-rain">
                    <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="" />
                </i>
                <span style={{ display: 'flex', flexDirection: 'column', maxWidth: '80px' }} className="day-name">
                    {dateDay}
                </span>
                <span className="day-temp">{Math.floor(+temp)}°C</span>
            </li>
        </>
    )
}
export default DayWeek
