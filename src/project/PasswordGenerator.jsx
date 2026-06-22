import { useState } from 'react';

function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <div className="project-card">
      <h2>Password Generator</h2>
      <input type="number" min="4" max="30" value={length} onChange={(e) => setLength(e.target.value)} />
      <div className="btn-row">
        <button className="primary-btn" onClick={generatePassword}>Generate</button>
      </div>
      <div className="result-box">
        <strong>Password:</strong> {password}
      </div>
    </div>
  );
}

export default PasswordGenerator;
