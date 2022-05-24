import React from 'react';
import TodayModule from './TodayModule';

const WeatherToday = ({travelDay}) => {
const fromCity = travelDay.from
const fromCountry = travelDay.fromCountry


if (!travelDay.hasOwnProperty("stop")){
  return  (
    <div>
      <h1 className='weather-header'>Weather today</h1>
      <div className='date-card'>  
      <TodayModule city={fromCity} country={fromCountry}/>
      </div>
    </div>
    

  )
  
} else {
  const stopCity = travelDay.stop
  const stopCountry = travelDay.stopCountry
  const toCity = travelDay.to
  const toCountry = travelDay.toCountry;

  return(
    <div>
      <h1 className='weather-header'>Weather today</h1>
      <div className='date-card'>  
      <TodayModule city={fromCity} country={fromCountry}/>
      <TodayModule city={stopCity} country={stopCountry}/>
      <TodayModule city={toCity} country={toCountry}/>
      </div>
    </div>
  )
}


}

export default WeatherToday;