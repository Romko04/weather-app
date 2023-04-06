import React from 'react';
import DayWeek from './DayWeek';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
const Week:React.FC = ()=>{
    const {forecasts} = useSelector((state:RootState)=>state.forecasts)
    return (
        <div className="week-container">
        <ul className="week-list">
            {/* {[...Array(7)].map((_,i:number)=> <DayWeek key={i}/>)} */}
            {forecasts?.map((item,i:number)=> <DayWeek {...item}  key={i}/>)}
            <div className="clear"></div>
        </ul>
    </div>
    )
}
export default Week
