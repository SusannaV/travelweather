import React from 'react';
import travelData from '../travelData';
import SixteenDayFilter from './SixteenDayFilter';

const Forecast16 = () => {
  const today = new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })
  const upcomingTravelDays = travelData.filter(d => d.date >= today)

  return (
    <div>
      <h1 className='weather-header'>16 Day Forecast</h1>
    {upcomingTravelDays.map(d => 
      <SixteenDayFilter travelDay={d} key={d.date}/>
    )}
    </div>
  )
}

export default Forecast16;