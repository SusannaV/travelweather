import React, {useState, useEffect} from 'react';
import axios from "axios"
import OneDayForecast from "./forecastrenderers/OneDayForecast"

const SixteenModule = ({city, country, date}) =>  {
const [weather, setWeather] = useState({})
const [loaded, setLoaded] = useState(false)

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
const today = new Date()
const days = dateDiffInDays(today, new Date(date))+1

useEffect(() => {
  const api_key = process.env.REACT_APP_API_KEY
  axios
  .get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${api_key}&days=${days}`)
    .then(response => {
      setWeather(response.data)
      setLoaded(true)
    })
}, [])
console.log('weather', weather)
if (loaded){
  const filteredDays = weather.data.filter(d => d.valid_date === date)
  console.log('filtered', filteredDays)
  return(
    <div className='today-card'>
      <h3 className='card-location'>Weather in {city}, {country}</h3>
      {filteredDays.map(d => <OneDayForecast d={d} key={d.valid_date} country={country}/>)}
    </div>
  )
} else {
  return(<div></div>)
}
}

export default SixteenModule;