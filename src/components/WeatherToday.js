import React from 'react';
import TodayModule from './TodayModule';

const WeatherToday = ({travelDay}) => {
const fromCity = travelDay.from
const fromCountry = travelDay.fromCountry


if (!travelDay.hasOwnProperty("stop")){
  return  <TodayModule city={fromCity} country={fromCountry}/>
} else {
  const stopCity = travelDay.stop
  const stopCountry = travelDay.stopCountry
  const toCity = travelDay.to
  const toCountry = travelDay.toCountry;

  return(
    <div>
      <TodayModule city={fromCity} country={fromCountry}/>
      <TodayModule city={stopCity} country={stopCountry}/>
      <TodayModule city={toCity} country={toCountry}/>
    </div>
  )
}


}

export default WeatherToday;