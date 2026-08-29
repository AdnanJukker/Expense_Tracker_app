import React from 'react';
import { FileText } from 'lucide-react';
import './EmptyState.css';

export const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <FileText size={48} strokeWidth={1.5} color="var(--color-border)" />
      </div>
      <h3 className="empty-state-title">No expenses yet</h3>
      <p className="empty-state-message">Add your first expense above to get started.</p>
    </div>
  );
};
