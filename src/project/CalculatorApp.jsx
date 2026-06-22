import { useState } from 'react';

function CalculatorApp() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    if (operator === '+') setResult(a + b);
    if (operator === '-') setResult(a - b);
    if (operator === '*') setResult(a * b);
    if (operator === '/') setResult(b === 0 ? 'Cannot divide by zero' : a / b);
  };

  return (
    <div className="project-card">
      <h2>Calculator App</h2>
      <div className="input-row">
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="First number" />
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Second number" />
      </div>
      <div className="btn-row">
        <button className="primary-btn" onClick={() => calculate('+')}>+</button>
        <button className="primary-btn" onClick={() => calculate('-')}>-</button>
        <button className="primary-btn" onClick={() => calculate('*')}>×</button>
        <button className="primary-btn" onClick={() => calculate('/')}>÷</button>
      </div>
      <div className="result-box"><strong>Result:</strong> {result}</div>
    </div>
  );
}

export default CalculatorApp;
