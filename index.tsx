import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

function App() {
  const [time, setTime] = useState<number>(1500); // 60 * 25 // 25 minutes
  const [action, setAction] = useState<boolean>(false);
  const [firstHour, lastHour] = String(Math.floor(time / 60)).padStart(2, '0').split('');
  const [firstMinute, lastMinute] = String(time % 60).padStart(2, '0').split('');
  useEffect(() => {
    if (action && time > 0) {
      setTimeout(() => {
        setTime(state => state - 1);
      }, 1000);
    }
  }, [time, action])
  function handleButtonAction() {
    setAction(state => !state);
  }
  return (
    <div className="divGlobal">
      <div className="divContainer">
        <span>{firstHour}</span>
        <span>{lastHour}</span>
        <span>:</span>
        <span>{firstMinute}</span>
        <span>{lastMinute}</span>
      </div>
      <div className="divContainer">
        <button onClick={handleButtonAction}>Iniciar</button>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'));
