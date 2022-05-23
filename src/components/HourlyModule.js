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
      <>
        <h3>Hourly forecast for {city}, {country}</h3>
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
              Lämpötila
            </th>
            <th>
            Tuntuu kuin
            </th>
            <th>
              Sateen mahdollisuus
            </th>
            <th>
              Sateen määrä
            </th>
            <th>
            Tuuli
            </th>
            <th>
            Puuskittainen tuuli
            </th>
            <th>
            Suhteellinen kosteus
            </th>
            <th>
            Näkyvyys
            </th>
            <th>
            Pilvisyys
            </th>
            <th>
            UV-indeksi
            </th>
          </tr>
          
        {filteredHours.map(d => <HourlyForecast d={d} key={d.ts}/>)}
        </tbody>
        </table>
      </>
    )
  } else {
    return(<div></div>)
  }
    

    //     <li>
    //     Tuuli: {d.wind_spd}m/s
    //     </li>
    //     <li>
    //     Puuskittainen tuuli: {d.wind_gust_spd}m/s
    //     </li>
    //     <li>
    //     Suhteellinen kosteus: {d.rh}%
    //     </li>
    //     <li>
    //     Näkyvyys: {d.vis}km
    //     </li>
    //     <li>
    //     Pilvisyys: {d.clouds}%
    //     </li>
    //     <li>
    //     UV-indeksi: {d.uv}
    //     </li>
    //   </ul>

}

export default HourlyModule;