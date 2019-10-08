import React from 'react';
import ReactDOM from 'react-dom';

import Forecast from './forecast/forecast.jsx';
import forecast from './forecast.js';
import './index.html';
import './style.css';


  class App extends React.Component {
    render() {
      return (
        <>
          <h1>Weekly Weather Forecast</h1>
          <div className="week-forecast">
          {
            forecast.map(day => (
              <Forecast
                weekday = {day.weekday}
                weather = {day.weather}
                tempDay = {day.tempDay}
                tempNight = {day.tempNight}
              />
            ))
          }
          </div>
        </>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));