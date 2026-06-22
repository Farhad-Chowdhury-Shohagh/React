import { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return alert('Please enter a task');
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="project-card">
      <h2>To-Do List App</h2>
      <p>Add and delete daily tasks.</p>
      <div className="input-row">
        <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" />
        <button className="primary-btn" onClick={addTask}>Add</button>
      </div>
      <ul className="list">
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button className="danger-btn" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
