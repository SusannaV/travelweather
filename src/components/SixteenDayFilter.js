import React from 'react';
import SixteenModule from "./SixteenModule"


const SixteenDayFilter = ({travelDay}) => {
  const fromCity = travelDay.from
  const fromCountry = travelDay.fromCountry

 
  if (!travelDay.hasOwnProperty("stop")){
      return  <SixteenModule city={fromCity} country={fromCountry} date={travelDay.date}/> 

  } else {
    const stopCity = travelDay.stop
    const stopCountry = travelDay.stopCountry
    const toCity = travelDay.to
    const toCountry = travelDay.toCountry;
    return(
      <div>
        <SixteenModule city={fromCity} country={fromCountry} date={travelDay.date}/>
        <SixteenModule city={stopCity} country={stopCountry} date={travelDay.date}/>
        <SixteenModule city={toCity} country={toCountry} date={travelDay.date}/>
      </div>
    )
  }
  

}

export default SixteenDayFilter;