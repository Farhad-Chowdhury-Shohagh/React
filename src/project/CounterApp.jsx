import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="project-card">
      <h2>Counter App</h2>
      <p>A simple app to increase, decrease, and reset a number.</p>
      <div className="result-box">
        <h1 style={{ textAlign: 'center', fontSize: '60px' }}>{count}</h1>
      </div>
      <div className="btn-row">
        <button className="success-btn" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="danger-btn" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="dark-btn" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
