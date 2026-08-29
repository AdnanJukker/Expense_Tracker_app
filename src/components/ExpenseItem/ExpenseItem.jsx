import React, { useState } from 'react';
import { useExpenses } from '../../context/ExpenseContext';
import { getCategoryById } from '../../constants/categories';
import { formatCurrency } from '../../utils/formatCurrency';
import { ExpenseForm } from '../ExpenseForm/ExpenseForm';
import './ExpenseItem.css';

export const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useExpenses();
  const [isEditing, setIsEditing] = useState(false);
  const category = getCategoryById(expense.categoryId);

  if (isEditing) {
    return (
      <div className="expense-item-editing">
        <ExpenseForm initialValue={expense} onSubmitComplete={() => setIsEditing(false)} />
        <button className="btn-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className="expense-item">
      <div className="expense-item-icon" style={{ backgroundColor: `${category.swatch}20` }}>
        {category.icon}
      </div>
      <div className="expense-item-details">
        <div className="expense-item-header">
          <h4 className="expense-item-title">{expense.title}</h4>
          <span className="expense-item-amount">{formatCurrency(expense.amount)}</span>
        </div>
        <div className="expense-item-meta">
          <span className="expense-item-category" style={{ color: category.swatch }}>
            {category.label}
          </span>
          <div className="expense-item-actions">
            <button className="btn-action btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn-action btn-delete" onClick={() => deleteExpense(expense.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
