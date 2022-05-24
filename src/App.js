import './App.css';

import travelData from './travelData';
import Forecast16 from './components/Forecast16';
import ForecastHourly from './components/ForecastHourly';
import WeatherToday from './components/WeatherToday';
import TravelDayIndexer from './utils/TravelDayIndexer';
import React, { useState } from 'react';

function App() {
  const [show16, setShow16] = useState(false)
  const [showHourly, setShowHourly] = useState(false)
  const [showToday, setShowToday] = useState(true)

  let travelDay = {}
  const travelDayIndex = TravelDayIndexer();
  if (travelDayIndex <0){
    return (
      <p>Matka ei ole vielä alkanut!</p>
    )
  }
  travelDay = travelData[travelDayIndex]

  const handle16Click = () => {
    setShowToday(false)
    setShowHourly(false)
    setShow16(true)
  }

  const handleHourlyClick = () => {
    setShowToday(false)
    setShow16(false)
    setShowHourly(true)
  }
  
  const handleTodayClick = () => {
    setShowToday(true)
    setShowHourly(false)
    setShow16(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Matkasää</h1>
        <p>Täältä löydät säätiedot kaikista niistä paikoista, joissa tullaan käymään</p>
      </header>
      <div className='buttons'>
      <button onClick={() => handleHourlyClick({travelDay})}>Show me hourly weather</button>
      <button onClick={() => handle16Click()}>Show me 16 day forecast</button>
      <button onClick={() => handleTodayClick()}>Show me todays weather</button>
      </div>
      <div>
      {showToday === true && <WeatherToday travelDay={travelDay}/>}
      {show16 === true && <Forecast16 travelDayIndex={travelDayIndex}/>}
      {showHourly === true && <ForecastHourly travelDay={travelDay}/>}
      </div>
    </div>
  );
}
export default App;


//Koska hourlyForecast ei saa auringon nousu- ja laskuaikoja, pitäisikö vain laittaa se 16 päivän
//ennuste ja siihen snapshotata vaikka parin tulevan päivän lämpötiloja tuolla hourly ennusteella?