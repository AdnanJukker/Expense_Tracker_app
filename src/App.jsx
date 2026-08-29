import React, { useState, useMemo } from 'react';
import { useExpenses } from './context/ExpenseContext';
import { Header } from './components/Header/Header';
import { SummaryCards } from './components/SummaryCards/SummaryCards';
import { ExpenseForm } from './components/ExpenseForm/ExpenseForm';
import { Filters } from './components/Filters/Filters';
import { ExpenseList } from './components/ExpenseList/ExpenseList';
import { CategoryChart } from './components/CategoryChart/CategoryChart';
import { EmptyState } from './components/EmptyState/EmptyState';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  const { expenses } = useExpenses();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredExpenses = useMemo(() => {
    if (activeCategory === 'all') return expenses;
    return expenses.filter(expense => expense.categoryId === activeCategory);
  }, [expenses, activeCategory]);

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <section className="top-section">
          <SummaryCards />
          <ExpenseForm />
        </section>

        <section className="content-grid">
          <div className="list-section">
            <div className="section-header">
              <h2>Recent Expenses</h2>
              <Filters 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
              />
            </div>
            
            {filteredExpenses.length > 0 ? (
              <ExpenseList expenses={filteredExpenses} />
            ) : (
              <EmptyState />
            )}
          </div>
          
          <aside className="sidebar">
            <CategoryChart expenses={filteredExpenses} />
          </aside>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
