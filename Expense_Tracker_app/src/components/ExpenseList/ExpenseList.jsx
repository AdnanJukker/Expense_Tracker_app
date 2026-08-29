import React from 'react';
import { groupExpensesByDate } from '../../utils/calculations';
import { formatDate } from '../../utils/formatCurrency';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

export const ExpenseList = ({ expenses }) => {
  const groupedExpenses = groupExpensesByDate(expenses);

  return (
    <div className="expense-list">
      {Object.entries(groupedExpenses).map(([date, dayExpenses]) => (
        <div key={date} className="expense-group">
          <h3 className="expense-group-date">{formatDate(date)}</h3>
          <div className="expense-group-items">
            {dayExpenses.map(expense => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
