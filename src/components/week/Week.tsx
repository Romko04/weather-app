import React from 'react';
import DayWeek from './DayWeek';

const Week:React.FC = ()=>{

    return (
        <div className="week-container">
        <ul className="week-list">
            {[...Array(7)].map((_,i:number)=> <DayWeek key={i}/>)}
            <div className="clear"></div>
        </ul>
    </div>
    )
}
export default Week
