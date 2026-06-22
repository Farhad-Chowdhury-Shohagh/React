import { useState } from 'react';
import CounterApp from './projects/CounterApp.jsx';
import TodoApp from './projects/TodoApp.jsx';
import CalculatorApp from './projects/CalculatorApp.jsx';
import DigitalClock from './projects/DigitalClock.jsx';
import GradeCalculator from './projects/GradeCalculator.jsx';
import ExpenseTracker from './projects/ExpenseTracker.jsx';
import QuizApp from './projects/QuizApp.jsx';
import NotesApp from './projects/NotesApp.jsx';
import PasswordGenerator from './projects/PasswordGenerator.jsx';
import ColorPicker from './projects/ColorPicker.jsx';

const projects = [
  { name: 'Counter App', component: <CounterApp /> },
  { name: 'To-Do List', component: <TodoApp /> },
  { name: 'Calculator', component: <CalculatorApp /> },
  { name: 'Digital Clock', component: <DigitalClock /> },
  { name: 'Grade Calculator', component: <GradeCalculator /> },
  { name: 'Expense Tracker', component: <ExpenseTracker /> },
  { name: 'Quiz App', component: <QuizApp /> },
  { name: 'Notes App', component: <NotesApp /> },
  { name: 'Password Generator', component: <PasswordGenerator /> },
  { name: 'Color Picker', component: <ColorPicker /> },
];

function App() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="app">
      <aside className="sidebar">
        <h1>React Projects</h1>
        <p>10 beginner-friendly projects in one folder.</p>

        <div className="project-menu">
          {projects.map((project, index) => (
            <button
              key={project.name}
              className={activeProject === index ? 'active' : ''}
              onClick={() => setActiveProject(index)}
            >
              {index + 1}. {project.name}
            </button>
          ))}
        </div>
      </aside>

      <main className="content">
        {projects[activeProject].component}
      </main>
    </div>
  );
}

export default App;
