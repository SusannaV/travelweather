import React from 'react';
import SixteenModule from "./SixteenModule"

const SixteenDayFilter = ({travelDay}) => {
  const fromCity = travelDay.from
  const fromCountry = travelDay.fromCountry

  const formatDate = (dateToFormat) => {
    const date = Intl.DateTimeFormat('fi-FI', {weekday: 'long', month: 'long', day: 'numeric'}).format(new Date(dateToFormat))
      return date
  }
 
  if (!travelDay.hasOwnProperty("stop")){
      return  (
        <div className='date-card'>
        <h2 className='date-header'>{formatDate(travelDay.date)}</h2>
        <div className='one-day'>
         <SixteenModule city={fromCity} country={fromCountry} date={travelDay.date}/> 
        </div>
        </div>
      )

  } else {
    const stopCity = travelDay.stop
    const stopCountry = travelDay.stopCountry
    const toCity = travelDay.to
    const toCountry = travelDay.toCountry;
    return(
      <div className='date-card'>
        <h2 className='date-header'>{formatDate(travelDay.date)}</h2>
        <div className='one-day'>
        <SixteenModule city={fromCity} country={fromCountry} date={travelDay.date}/>
        <SixteenModule city={stopCity} country={stopCountry} date={travelDay.date}/>
        <SixteenModule city={toCity} country={toCountry} date={travelDay.date}/>
        </div>
      </div>
    )
  }
  

}

export default SixteenDayFilter;