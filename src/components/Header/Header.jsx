import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Ledger</h1>
        <p className="header-subtitle">Minimal Expense Tracker</p>
      </div>
    </header>
  );
};
