import React from 'react';
import TimeFormatter from '../../utils/TimeFormatter';

const HourlyForecast = ({d}) => {
  //Ota huomioon, että jos palautat tällä aikoja Suomesta, Virosta, Latviasta tai Liettuasta, pitää timezone vaihtaa
  const weatherIcon = d.weather.icon
  const weatherIconUrl = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`
  
  
  return(
    <tr>
      <th>
      {<TimeFormatter timeToFormat={d.ts}/>}
      </th>
      <th>
      <img alt="" src={weatherIconUrl}/>
      <p>{d.weather.description}</p>
      </th>
      <th>
      {d.temp}
      </th>
      <th>
      {d.app_temp}
      </th>
      <th>
      {d.pop}%
      </th>
      <th>
      {d.precip}mm
      </th>
      <th>
      {d.wind_spd}m/s
      </th>
      <th>
      {d.wind_gust_spd}m/s
      </th>
      <th>
      {d.rh}%
      </th>
      <th>
      {d.vis}km
      </th>
      <th>
      {d.clouds}%
      </th>
      <th>
      {d.uv}
      </th>
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