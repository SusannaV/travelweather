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
  console.log('Laske näitä ')
  const api_key = process.env.REACT_APP_API_KEY
  axios
  .get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${api_key}&days=${days}`)
    .then(response => {
      setWeather(response.data)
      setLoaded(true)
    })
}, [])

if (loaded){
  const hungarianDays= [
    "2022-05-29", 
    "2022-05-30", 
    "2022-05-31", 
    "2022-06-01", 
    "2022-06-02", 
    "2022-06-03"
  ]



  const filteredDays = weather.data.filter(d => hungarianDays.includes(d.valid_date))
  console.log('filteredDays in HungaryModule', filteredDays)
  return(
    <div>
      <h3>Weather in {city}, {country}</h3>
      {filteredDays.map(d => <OneDayForecast d={d} key={d.valid_date}/>)}
    </div>
  )
} else {
  return(<div></div>)
}
}

export default SixteenModule;