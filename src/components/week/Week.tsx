import React from 'react';
import DayWeek from './DayWeek/DayWeek';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import DayWeekLoader from './DayWeek/DayWeekLoader';
const Week:React.FC = ()=>{
    const {forecasts} = useSelector((state:RootState)=>state.forecasts)
    return (
        <div className="week-container">
        <ul className="week-list">
            {forecasts.length>0
            ? forecasts.map((item,i:number)=> <DayWeek  {...item} count={i}  key={i}/>)
            : [...Array(6)].map((_,i:number)=> <DayWeekLoader key={i}/>)
            }
            <div className="clear"></div>
        </ul>
    </div>
    )
}
export default Week
