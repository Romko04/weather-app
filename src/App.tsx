import React, { useEffect } from 'react';
import './App.css';
import WeatherSide from './components/WeatherSide';
import DailyForest from './components/DailyForest';
import { log } from 'console';
import { forecastOfDay, setForecasts } from './redux/forecastReducer';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    fetch('http://api.openweathermap.org/data/2.5/forecast/?q=%D0%B1%D0%BE%D1%80%D0%B8%D1%81%D0%BB%D0%B0%D0%B2&units=metric&cnt=7&appid=e556ce8f19a6ec25f11d34d85c33652d')
    .then(data=> data.json()).then(data=> {
      const {name} = data.city
      const newArr:forecastOfDay[] = data.list.map((item:any) => {
        return {
          temp: item.main.temp,
          dataTime: item.dt,
          description: item.weather[0].description,
          feelsLike: item.main.feels_like,
          speedWind: item.wind.speed,
          icon: item.weather[0].icon,
        };
      });  
     dispatch(setForecasts(newArr))
    })
    
  },[])
  return (
    <div>
      <div className="container">
        <WeatherSide/>
        <DailyForest/>
      </div>
    </div>
  );
}

export default App;
