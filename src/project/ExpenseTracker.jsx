import { useState } from 'react';

function ExpenseTracker() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    const value = parseFloat(amount);
    if (title.trim() === '' || isNaN(value) || value <= 0) {
      return alert('Enter valid expense title and amount');
    }
    setExpenses([...expenses, { title, amount: value }]);
    setTitle('');
    setAmount('');
  };

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="project-card">
      <h2>Expense Tracker</h2>
      <div className="input-row">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Expense title" />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <button className="primary-btn" onClick={addExpense}>Add</button>
      </div>
      <div className="result-box"><strong>Total Expense:</strong> {total} TK</div>
      <ul className="list">
        {expenses.map((item, index) => (
          <li key={index}>
            <span>{item.title}</span>
            <strong>{item.amount} TK</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
