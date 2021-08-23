import { useState, useEffect } from "react";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      countDown();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);

  const counter = (
    <div className="countdown">
      <div className="time">
        <h2>{days}</h2>
        <small>days</small>
      </div>
      <div className="time">
        <h2>{hours < 10 ? "0" + hours : hours}</h2>
        <small>hours</small>
      </div>
      <div className="time">
        <h2>{minutes < 10 ? "0" + minutes : minutes}</h2>
        <small>minutes</small>
      </div>
      <div className="time">
        <h2>{seconds < 10 ? "0" + seconds : seconds}</h2>
        <small>seconds</small>
      </div>
    </div>
  );

  const loader = <div className="loader"></div>;

  return (
    <div className="App">
      <h1>New Year Countdown</h1>
      {isLoading ? loader : counter}
      <div className="year">{currentYear + 1}</div>
    </div>
  );
}

export default App;
