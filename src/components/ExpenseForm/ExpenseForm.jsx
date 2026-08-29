import React, { useState } from 'react';
import { useExpenses } from '../../context/ExpenseContext';
import { CATEGORIES } from '../../constants/categories';
import './ExpenseForm.css';

export const ExpenseForm = ({ initialValue, onSubmitComplete }) => {
  const { addExpense, updateExpense } = useExpenses();
  const [title, setTitle] = useState(initialValue?.title || '');
  const [amount, setAmount] = useState(initialValue?.amount || '');
  const [categoryId, setCategoryId] = useState(initialValue?.categoryId || CATEGORIES[0].id);
  const [date, setDate] = useState(initialValue?.date || new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const expenseData = {
      title,
      amount: parseFloat(amount),
      categoryId,
      date
    };

    if (initialValue?.id) {
      updateExpense({ ...initialValue, ...expenseData });
    } else {
      addExpense(expenseData);
      setTitle('');
      setAmount('');
      setDate(new Date().toISOString().split('T')[0]);
    }

    if (onSubmitComplete) {
      onSubmitComplete();
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group flex-2">
          <label htmlFor="title">What did you buy?</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Coffee with Priya"
            required
          />
        </div>
        <div className="form-group flex-1">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group flex-1">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {CATEGORIES.map(c => (
              <option key={c.id} value={c.id}>
                {c.icon} {c.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group flex-1">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group flex-button">
          <button type="submit" className="btn-submit">
            {initialValue ? 'Update' : 'Add Expense'}
          </button>
        </div>
      </div>
    </form>
  );
};
