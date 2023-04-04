import React from 'react';
import './App.css';
import WeatherSide from './components/WeatherSide';
import DailyForest from './components/DailyForest';


function App() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
  
  function showPosition(position:any) {
    console.log(position);
    
  }
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
