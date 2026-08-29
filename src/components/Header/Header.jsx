import React, { useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './Header.css';

export const Header = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1 className="header-title">Ledger</h1>
          <p className="header-subtitle">Minimal Expense Tracker</p>
        </div>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};
