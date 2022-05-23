import React from 'react';

const Current = ({d}) => {
    if(Object.keys(d).length === 0)
    return(<p></p>)
   
    //Ota huomioon, että jos palautat tällä aikoja Suomesta, Virosta, Latviasta tai Liettuasta, pitää timezone vaihtaa
    const weatherIcon = d.weather.icon
    const weatherIconUrl = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`

    const decimalFixer = (n) => n.toFixed(2)
    
    
    return(
      <div>
        <img alt="" src={weatherIconUrl}/>
        <p>{d.weather.description}</p>
        
        <ul>
          <li>
          Lämpötila: {d.temp}
          </li>
          <li>
          Tuntuu kuin: {d.app_temp}
          </li>
          <li>
          Sateen määrä: {d.precip}mm
          </li>
          <li>
          Tuuli: {decimalFixer(d.wind_spd)}m/s
          </li>
          <li>
          Suhteellinen kosteus: {decimalFixer(d.rh)}%
          </li>
          <li>
          Näkyvyys: {d.vis}km
          </li>
          <li>
          Pilvisyys: {d.clouds}%
          </li>
          <li>
          UV-indeksi: {decimalFixer(d.uv)}
          </li>
          <li>
          Aurinko nousee: {d.sunrise}
          </li>
          <li>
          Aurinko laskee: {d.sunset}
          </li>
        </ul>
      </div>
    )
}

export default Current;