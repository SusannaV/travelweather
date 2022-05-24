import React, {useState, useEffect} from 'react';
import axios from "axios"
import Current from './forecastrenderers/Current';

const TodayModule = ({city, country}) => {
  const [weather, setWeather] = useState({})
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    axios
    .get(`https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${api_key}`)
      .then(response => {
        setWeather(response.data)
        setLoaded(true)
      })
  }, [])
  
  if (loaded){

    return(
      <div className='today-card'>
        <h3>Current weather in {city}, {country}</h3>
        {weather.data.map(d => <Current d={d} key={d.ts}/>)}
      </div>
    )
  } else {
    return(<div></div>)
  }

}

export default TodayModule;