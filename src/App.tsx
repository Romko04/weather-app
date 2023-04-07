import React, { useEffect } from 'react';
import './App.css';
import WeatherSide from './components/WeatherSide';
import DailyForest from './components/DailyForest';
import { forecastOfDay, setForecasts } from './redux/forecastReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
type averageValueByDateType = {
  description: string[]
  icon: string[]
  temp: number
  feelsLike: number
  speedWind: number
  count:number
}
type averageValuesByDateType = {
  [key: string]: averageValueByDateType
}
type dataType = {
  city: {name:string}
  cod: string
  messages: number
  cnt: number
  list: Item[]
}
type Item = {
  dt_txt: string
  main: {
    temp: number
    feels_like: number
  };
  weather: {
    main: string
    icon: string
  }[]
  wind: {
    speed: number
  }
};
const App:React.FC =()=> {
  const {forecasts, city} = useSelector((state:RootState)=>state.forecasts)
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Івано-Франківськ&appid=e556ce8f19a6ec25f11d34d85c33652d&units=metric')
      .then(data => data.json()).then((data:dataType) => {
        const city:string = data.city.name
        const averageValuesByDate:averageValuesByDateType = {}
        for (let i = 0; i < data.list.length; i++) {
          const item = data.list[i];
          const dataTime = item.dt_txt.split(" ")[0];
              if (averageValuesByDate[dataTime] === undefined) {
                averageValuesByDate[dataTime] = {
                  temp: item.main.temp,
                  description: [item.weather[0].main],
                  feelsLike: item.main.feels_like,
                  speedWind: item.wind.speed,
                  icon: [item.weather[0].icon],
                  count: 1
                };
                              
              } else {
                averageValuesByDate[dataTime].temp += item.main.temp;
                averageValuesByDate[dataTime].description.push(item.weather[0].main)
                averageValuesByDate[dataTime].feelsLike += item.main.feels_like;
                averageValuesByDate[dataTime].speedWind += item.wind.speed;
                averageValuesByDate[dataTime].icon.push(item.weather[0].icon)
                averageValuesByDate[dataTime].count += 1;
              }

              
            }

            const forecastsList:forecastOfDay[] = [];

            for (const date in averageValuesByDate) {
              const averageTemp = averageValuesByDate[date].temp / averageValuesByDate[date].count;
              const averageFeelsLike = averageValuesByDate[date].feelsLike / averageValuesByDate[date].count;
              const averagespeedWind = averageValuesByDate[date].speedWind / averageValuesByDate[date].count;
              const icon = averageValuesByDate[date].icon[Math.floor((averageValuesByDate[date].icon.length)/2)]
              const description =  averageValuesByDate[date].description[(averageValuesByDate[date].description.length)/2]
              forecastsList.push({ 
                dataTime: date,
                temp: Number(averageTemp.toFixed(2)),
                feelsLike: averageFeelsLike,
                speedWind: averagespeedWind,
                icon,
                description
               });              
            }
            dispatch(setForecasts({city,forecastsList}))
          })
        }, [dispatch])
    return (
      <div>
        <div className="container">
          {forecasts.length > 0 &&<WeatherSide {...{forecasts, city}} />}
          {forecasts.length > 0 &&<DailyForest {...forecasts}/>}
        </div>
      </div>
    );
  }

export default App;
