import { useState } from 'react';

function GradeCalculator() {
  const [marks, setMarks] = useState('');
  const [grade, setGrade] = useState('');

  const calculateGrade = () => {
    const value = parseFloat(marks);
    if (isNaN(value) || value < 0 || value > 100) {
      setGrade('Enter marks between 0 and 100');
    } else if (value >= 80) {
      setGrade('A+');
    } else if (value >= 70) {
      setGrade('A');
    } else if (value >= 60) {
      setGrade('A-');
    } else if (value >= 50) {
      setGrade('B');
    } else if (value >= 40) {
      setGrade('C');
    } else {
      setGrade('Fail');
    }
  };

  return (
    <div className="project-card">
      <h2>Grade Calculator</h2>
      <input type="number" value={marks} onChange={(e) => setMarks(e.target.value)} placeholder="Enter marks" />
      <div className="btn-row">
        <button className="primary-btn" onClick={calculateGrade}>Calculate Grade</button>
      </div>
      <div className="result-box"><strong>Grade:</strong> {grade}</div>
    </div>
  );
}

export default GradeCalculator;
