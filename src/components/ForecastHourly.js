import React from 'react';
import HourlyForecast from './forecastrenderers/HourlyForecast';
import HourlyModule from './HourlyModule';

const ForecastHourly = ({travelDay}) => {
//Voisi tähän kohtaan laittaa ne säännöt, että jos päivä se ja se, hae näin monta tuntia
const fromCity = travelDay.from
const fromCountry = travelDay.fromCountry


if (!travelDay.hasOwnProperty("stop")){
  return  <HourlyModule city={fromCity} country={fromCountry}/>
} else {
  const stopCity = travelDay.stop
  const stopCountry = travelDay.stopCountry
  const toCity = travelDay.to
  const toCountry = travelDay.toCountry;
  return(
    <div>
      <HourlyModule city={fromCity} country={fromCountry}/>
      <HourlyModule city={stopCity} country={stopCountry}/>
      <HourlyModule city={toCity} country={toCountry}/>
    </div>
  )
}

}

export default ForecastHourly;