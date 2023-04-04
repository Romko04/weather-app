import React from 'react';
import Week from './week/Week';
const DailyForest:React.FC = ()=>{
    return (
        <div className="info-side">
          <div className="today-info-container">
            <div className="today-info">
              <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value">0 %</span>
                <div className="clear"></div>
              </div>
              <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">34 %</span>
                <div className="clear"></div>
              </div>
              <div className="wind"> <span className="title">WIND</span><span className="value">0 km/h</span>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <Week/>
          <div className="location-container">
            <button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
          </div>
        </div>
    )
}
export default DailyForest
