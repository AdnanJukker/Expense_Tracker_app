import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { SEED_EXPENSES } from '../constants/seedData';

const ExpenseContext = createContext(null);

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [action.payload, ...state];
    case 'UPDATE_EXPENSE':
      return state.map(expense => 
        expense.id === action.payload.id ? action.payload : expense
      );
    case 'DELETE_EXPENSE':
      return state.filter(expense => expense.id !== action.payload);
    case 'SET_EXPENSES':
      return action.payload;
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [storedExpenses, setStoredExpenses] = useLocalStorage('expense-tracker:expenses:v1', SEED_EXPENSES);
  const [expenses, dispatch] = useReducer(expenseReducer, storedExpenses);

  // Sync state to localStorage whenever it changes
  useEffect(() => {
    setStoredExpenses(expenses);
  }, [expenses, setStoredExpenses]);

  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: { ...expense, id: crypto.randomUUID(), createdAt: new Date().toISOString() } });
  };

  const updateExpense = (expense) => {
    dispatch({ type: 'UPDATE_EXPENSE', payload: expense });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id });
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, updateExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenses must be used within an ExpenseProvider');
  }
  return context;
};
