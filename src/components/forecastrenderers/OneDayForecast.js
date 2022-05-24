import React from 'react';
import TimeFormatter from '../../utils/TimeFormatter';


const OneDayForecast = ({d, country}) => {
  if(Object.keys(d).length === 0)
  return(<p></p>)
  
//Ota huomioon, että jos palautat tällä aikoja Suomesta, Virosta, Latviasta tai Liettuasta, pitää timezone vaihtaa
const weatherIcon = d.weather.icon
const weatherIconUrl = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`
const decimalFixer = (n) => n.toFixed(2)

return(
  <div className='card-list'>
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
      Sateen määrä: {decimalFixer(d.precip)}mm
      </li>
      <li>
      Tuuli:  {decimalFixer(d.wind_spd)}m/s
      </li>
      <li>
      Puuskittainen tuuli: {d.wind_gust_spd}m/s
      </li>
      <li>
      Suhteellinen kosteus: {decimalFixer(d.rh)}%
      </li>
      <li>
      Näkyvyys: {decimalFixer(d.vis)}km
      </li>
      <li>
      Pilvisyys: {d.clouds}%
      </li>
      <li>
      UV-indeksi: {decimalFixer(d.uv)}
      </li>
      <li>
      Aurinko nousee: {<TimeFormatter  timeToFormat={d.sunrise_ts} country={country}/>}
      </li>
      <li>
      Aurinko laskee: {<TimeFormatter  timeToFormat={d.sunset_ts}country={country}/>}
      </li>
    </ul>

  </div>
)
 
}

export default OneDayForecast;


