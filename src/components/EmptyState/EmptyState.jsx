import React from 'react';
import './EmptyState.css';

export const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">📝</div>
      <h3 className="empty-state-title">No expenses yet</h3>
      <p className="empty-state-message">Add your first expense above to get started.</p>
    </div>
  );
};
