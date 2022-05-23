import React from 'react';
import TimeFormatter from '../../utils/TimeFormatter';


const OneDayForecast = ({d}) => {
  if(Object.keys(d).length === 0)
  return(<p></p>)
  
const formatDate = (dateToFormat) => {
  const date = Intl.DateTimeFormat('fi-FI', {weekday: 'long', month: 'long', day: 'numeric'}).format(new Date(dateToFormat))
    return date
}

//Ota huomioon, että jos palautat tällä aikoja Suomesta, Virosta, Latviasta tai Liettuasta, pitää timezone vaihtaa
const weatherIcon = d.weather.icon
const weatherIconUrl = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`


return(
  <div>
    <h4>{formatDate(d.valid_date)}</h4> 
    <img alt="" src={weatherIconUrl}/>
    <p>{d.weather.description}</p>
    
    <ul>
      <li>
      Keskilämpötila: {d.temp}
      </li>
      <li>
      Päivän ylin lämpötila: {d.max_temp}
      </li>
      <li>
      Yön alin lämpötila: {d.min_temp}
      </li>
      <li>
      Sateen mahdollisuus: {d.pop}%
      </li>
      <li>
      Sateen määrä: {d.precip}mm
      </li>
      <li>
      Tuuli: {d.wind_spd}m/s
      </li>
      <li>
      Puuskittainen tuuli: {d.wind_gust_spd}m/s
      </li>
      <li>
      Suhteellinen kosteus: {d.rh}%
      </li>
      <li>
      Näkyvyys: {d.vis}km
      </li>
      <li>
      Pilvisyys: {d.clouds}%
      </li>
      <li>
      UV-indeksi: {d.uv}
      </li>
      <li>
      Aurinko nousee: {<TimeFormatter  timeToFormat={d.sunrise_ts}/>}
      </li>
      <li>
      Aurinko laskee: {<TimeFormatter  timeToFormat={d.sunset_ts}/>}
      </li>
    </ul>

  </div>
)
 
}

export default OneDayForecast;


