export const CATEGORIES = [
  { id: 'food', label: 'Food & Dining', icon: '🍽️', swatch: '#E8590C' },
  { id: 'transport', label: 'Transport', icon: '🚆', swatch: '#6E7B4F' },
  { id: 'utilities', label: 'Utilities', icon: '⚡', swatch: '#8A7A63' },
  { id: 'shopping', label: 'Shopping', icon: '🛍️', swatch: '#C4460A' },
  { id: 'entertainment', label: 'Entertainment', icon: '🍿', swatch: '#3A2E22' },
  { id: 'health', label: 'Health', icon: '💊', swatch: '#5A6349' },
  { id: 'other', label: 'Other', icon: '📝', swatch: '#E6D9C8' },
];

export const getCategoryById = (id) => CATEGORIES.find(c => c.id === id) || CATEGORIES[CATEGORIES.length - 1];
