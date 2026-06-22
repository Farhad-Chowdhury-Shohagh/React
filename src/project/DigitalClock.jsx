import { useEffect, useState } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="project-card">
      <h2>Digital Clock</h2>
      <p>Shows current local time and date.</p>
      <div className="result-box">
        <div className="clock">{time.toLocaleTimeString()}</div>
        <h3 style={{ textAlign: 'center' }}>{time.toDateString()}</h3>
      </div>
    </div>
  );
}

export default DigitalClock;
