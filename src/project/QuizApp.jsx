import { useState } from 'react';

const questions = [
  {
    question: 'React is mainly used for what?',
    options: ['Database', 'User Interface', 'Operating System', 'Networking'],
    answer: 'User Interface',
  },
  {
    question: 'Which hook is used for state?',
    options: ['useState', 'useHTML', 'useCSS', 'usePage'],
    answer: 'useState',
  },
  {
    question: 'JSX looks similar to which language?',
    options: ['Python', 'HTML', 'SQL', 'C'],
    answer: 'HTML',
  },
];

function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const chooseAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="project-card">
      <h2>Quiz App</h2>
      {finished ? (
        <div className="result-box">
          <h3>Your Score: {score} / {questions.length}</h3>
          <button className="primary-btn" onClick={restart}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <h3>{questions[current].question}</h3>
          {questions[current].options.map((option) => (
            <button key={option} className="quiz-option" onClick={() => chooseAnswer(option)}>
              {option}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default QuizApp;
