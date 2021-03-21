import React, { useState, useEffect } from 'react';

import './App.css'

const App = () => {
  const deg = 6;
  let day = new Date();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(day.getHours() * 30);
      setMinute(day.getMinutes() * deg);
      setSecond(day.getSeconds() * deg);
    }, 1000);
    return () => clearInterval(interval);
  }, [hour, minute, second]);

  const hourStyle = {
    transform: `rotateZ(${(hour) + (minute/12)}deg)`
  }

  const minuteStyle = {
    transform: `rotateZ(${(minute)}deg)`
  }

  const secondStyle = {
    transform: `rotateZ(${(second)}deg)`
  }

  return (
    <div className="clock">
      <div className="hour" style={hourStyle} />
      <div className="minute" style={minuteStyle} />
      <div className="second" style={secondStyle} />
    </div>);
}


export default App;