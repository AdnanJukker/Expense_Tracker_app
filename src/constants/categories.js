import React from 'react';
import { 
  Utensils, 
  TrainFront, 
  Zap, 
  ShoppingBag, 
  Film, 
  Stethoscope, 
  MoreHorizontal 
} from 'lucide-react';

export const CATEGORIES = [
  { id: 'food', label: 'Food & Dining', icon: React.createElement(Utensils, { size: 16 }), swatch: 'var(--color-orange)' },
  { id: 'transport', label: 'Transport', icon: React.createElement(TrainFront, { size: 16 }), swatch: 'var(--color-olive)' },
  { id: 'utilities', label: 'Utilities', icon: React.createElement(Zap, { size: 16 }), swatch: 'var(--color-ink-soft)' },
  { id: 'shopping', label: 'Shopping', icon: React.createElement(ShoppingBag, { size: 16 }), swatch: 'var(--color-orange-deep)' },
  { id: 'entertainment', label: 'Entertainment', icon: React.createElement(Film, { size: 16 }), swatch: 'var(--color-ink)' },
  { id: 'health', label: 'Health', icon: React.createElement(Stethoscope, { size: 16 }), swatch: 'var(--color-olive)' },
  { id: 'other', label: 'Other', icon: React.createElement(MoreHorizontal, { size: 16 }), swatch: 'var(--color-border)' },
];

export const getCategoryById = (id) => CATEGORIES.find(c => c.id === id) || CATEGORIES[CATEGORIES.length - 1];
