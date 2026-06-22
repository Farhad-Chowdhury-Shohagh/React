import { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#2563eb');

  return (
    <div className="project-card">
      <h2>Color Picker</h2>
      <p>Select a color and preview it instantly.</p>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <div className="result-box"><strong>Selected Color:</strong> {color}</div>
      <div className="color-preview" style={{ background: color }}></div>
    </div>
  );
}

export default ColorPicker;
