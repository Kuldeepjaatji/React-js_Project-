import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './App.css';

function App() {


  

  const [transactions, setTransactions] = useState(() => {
    const localData = localStorage.getItem('transactions');
    return localData ? JSON.parse(localData) : [];
  });

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount || isNaN(amount)) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };

    setTransactions([newTransaction, ...transactions]);
    setText('');
    setAmount('');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0)
    .toFixed(2);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0)
    .toFixed(2);

  const balance = (income - Math.abs(expense)).toFixed(2);

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <h3>Your Balance: ₹{balance}</h3>

      <div className="summary">
        <div className="income">
          <h4>Income</h4>
          <p className="money plus">₹{income}</p>
        </div>
        <div className="expense">
          <h4>Expense</h4>
          <p className="money minus">₹{Math.abs(expense)}</p>
        </div>
      </div>

      <h3>History</h3>
      <ul className="list">
        {transactions.map((t) => (
          <li key={t.id} className={t.amount < 0 ? 'minus' : 'plus'}>
            {t.text} <span>₹{Math.abs(t.amount)}</span>
            <button onClick={() => deleteTransaction(t.id)} className="delete-btn">x</button>
          </li>
        ))}
      </ul>

      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description..."
          />
        </div>
        <div className="form-control">
          <label>Amount (negative - expense, positive - income)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default App;
