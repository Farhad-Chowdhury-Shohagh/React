import { useState } from 'react';

function NotesApp() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() === '') return alert('Write a note first');
    setNotes([...notes, note]);
    setNote('');
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="project-card">
      <h2>Notes App</h2>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Write your note here"></textarea>
      <div className="btn-row">
        <button className="primary-btn" onClick={addNote}>Save Note</button>
      </div>
      <ul className="list">
        {notes.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button className="danger-btn" onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesApp;
