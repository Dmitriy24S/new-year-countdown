import { useState, useEffect } from "react";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const currentYear = new Date().getFullYear();

  const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const countDown = () => {
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    setDays(d);
    setHours(h);
    setMinutes(m);
    setSeconds(s);
  };

  useEffect(() => {
    let intervalID = setInterval(() => {
      countDown();
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [seconds]);

  return (
    <div className="App">
      <h1>New Year Countdown</h1>
      <div className="countdown">
        <div className="time">
          <h2>{days}</h2>
          <small>days</small>
        </div>
        <div className="time">
          <h2>{hours}</h2>
          <small>days</small>
        </div>
        <div className="time">
          <h2>{minutes}</h2>
          <small>days</small>
        </div>
        <div className="time">
          <h2>{seconds}</h2>
          <small>days</small>
        </div>
      </div>
    </div>
  );
}

export default App;
