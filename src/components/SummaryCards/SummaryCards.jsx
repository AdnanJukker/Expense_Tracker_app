import React from 'react';
import { useExpenses } from '../../context/ExpenseContext';
import { getThisMonthExpenses, getTotalAmount, getDailyAverage, getTopCategory } from '../../utils/calculations';
import { formatCurrency } from '../../utils/formatCurrency';
import { getCategoryById } from '../../constants/categories';
import './SummaryCards.css';

export const SummaryCards = () => {
  const { expenses } = useExpenses();
  
  const thisMonthExpenses = getThisMonthExpenses(expenses);
  const totalThisMonth = getTotalAmount(thisMonthExpenses);
  const dailyAverage = getDailyAverage(expenses);
  const topCategoryId = getTopCategory(thisMonthExpenses);
  const topCategory = topCategoryId ? getCategoryById(topCategoryId) : null;

  return (
    <div className="summary-cards">
      <div className="card">
        <h3 className="card-title">This Month</h3>
        <p className="card-value highlight">{formatCurrency(totalThisMonth)}</p>
      </div>
      <div className="card">
        <h3 className="card-title">Daily Average</h3>
        <p className="card-value">{formatCurrency(dailyAverage)}</p>
      </div>
      <div className="card">
        <h3 className="card-title">Top Category</h3>
        <p className="card-value">
          {topCategory ? (
            <span className="category-pill" style={{ '--pill-color': topCategory.swatch }}>
              <span className="pill-icon">{topCategory.icon}</span>
              {topCategory.label}
            </span>
          ) : (
            '—'
          )}
        </p>
      </div>
    </div>
  );
};
