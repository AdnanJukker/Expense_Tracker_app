import React from 'react';
import { getCategoryTotals } from '../../utils/calculations';
import { getCategoryById } from '../../constants/categories';
import { formatCurrency } from '../../utils/formatCurrency';
import './CategoryChart.css';

export const CategoryChart = ({ expenses }) => {
  const categoryTotals = getCategoryTotals(expenses);
  const totalAmount = Object.values(categoryTotals).reduce((sum, amount) => sum + amount, 0);

  if (totalAmount === 0) return null;

  // Sort categories by amount descending
  const sortedCategories = Object.entries(categoryTotals)
    .sort(([, a], [, b]) => b - a)
    .map(([categoryId, amount]) => ({
      ...getCategoryById(categoryId),
      amount,
      percentage: (amount / totalAmount) * 100
    }));

  return (
    <div className="category-chart">
      <h3 className="chart-title">Spending by Category</h3>
      <div className="chart-bars">
        {sortedCategories.map(category => (
          <div key={category.id} className="chart-bar-container">
            <div className="chart-bar-header">
              <span className="chart-bar-label">
                <span className="chart-bar-icon">{category.icon}</span>
                {category.label}
              </span>
              <span className="chart-bar-amount">{formatCurrency(category.amount)}</span>
            </div>
            <div className="chart-bar-track">
              <div 
                className="chart-bar-fill"
                style={{ 
                  width: `${category.percentage}%`,
                  backgroundColor: category.swatch 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
