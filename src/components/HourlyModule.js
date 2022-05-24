import React, {useState, useEffect} from 'react';
import axios from "axios"
import HourlyForecast from './forecastrenderers/HourlyForecast';

const HourlyModule = ({city, country}) => {
  const [weather, setWeather] = useState({})
  const [loaded, setLoaded] = useState(false)
  
  const hours = 24
  
      
  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    axios
    .get(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&country=${country}&key=${api_key}&hours=${hours}`)
      .then(response => {
        setWeather(response.data)
        setLoaded(true)
      })
  }, [])
  
  if (loaded){
    const filteredHours = 
    weather.data.filter((h, i) => {
      return i % 2 ===0
    });

    return(
      <div className='overflow-x'>
        <h3 className='hourly-header'>Hourly forecast for {city}, {country}</h3>
        <table>
        <tbody>
          <tr>
            <th>
              Aika
            </th>
            <th>
              Sää
            </th>
            <th>
              Lämpö- tila
            </th>
            <th>
            Tuntuu kuin
            </th>
            <th>
              Sateen mahd.
            </th>
            <th>
              Sateen määrä
            </th>
            <th>
            Tuuli
            </th>
            <th>
            Puusk. tuuli
            </th>
            <th>
            Suht. kosteus
            </th>
            <th>
            Näky- vyys
            </th>
            <th>
            Pilvi- syys
            </th>
            <th>
            UV-indeksi
            </th>
          </tr>
          
        {filteredHours.map(d => <HourlyForecast d={d} key={d.ts}/>)}
        </tbody>
        </table>
      </div>
    )
  } else {
    return(<div></div>)
  }
}

export default HourlyModule;