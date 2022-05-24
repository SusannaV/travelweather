import React from 'react';
import TimeFormatter from '../../utils/TimeFormatter';

const HourlyForecast = ({d}) => {
  //Ota huomioon, että jos palautat tällä aikoja Suomesta, Virosta, Latviasta tai Liettuasta, pitää timezone vaihtaa
  const weatherIcon = d.weather.icon
  const weatherIconUrl = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`
  
  const decimalFixer = (n) => n.toFixed(2)


  return(
    <tr>
      <td>
      <b>{<TimeFormatter timeToFormat={d.ts}/>}</b>
      </td>
      <td>
      <img className='hourly-icon' alt="" src={weatherIconUrl}/>
      <p>{d.weather.description}</p>
      </td>
      <td>
      {d.temp}
      </td>
      <td>
      {d.app_temp}
      </td>
      <td>
      {d.pop}%
      </td>
      <td>
      {decimalFixer(d.precip)}mm
      </td>
      <td>
      {decimalFixer(d.wind_spd)}m/s
      </td>
      <td>
      {d.wind_gust_spd}m/s
      </td>
      <td>
      {decimalFixer(d.rh)}%
      </td>
      <td>
      {decimalFixer(d.vis)}km
      </td>
      <td>
      {d.clouds}%
      </td>
      <td>
      {d.uv}
      </td>
    </tr>

    // <div>
    //    <h4>{<TimeFormatter timeToFormat={d.ts}/>}</h4> 
    //   <img alt="" src={weatherIconUrl}/>
    //   <p>{d.weather.description}</p>
      
    //   <ul>
    //     <li>
    //     Lämpötila: {d.temp}
    //     </li>
    //     <li>
    //     Tuntuu kuin: {d.app_temp}
    //     </li>
    //     <li>
    //     Sateen mahdollisuus: {d.pop}%
    //     </li>
    //     <li>
    //     Sateen määrä: {d.precip}mm
    //     </li>
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
  
    // </div>
  )
   


  }
export default HourlyForecast;