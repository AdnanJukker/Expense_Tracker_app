export const CATEGORIES = [
  { id: 'food', label: 'Food & Dining', icon: '🍽️', swatch: 'var(--color-orange)' },
  { id: 'transport', label: 'Transport', icon: '🚆', swatch: 'var(--color-olive)' },
  { id: 'utilities', label: 'Utilities', icon: '⚡', swatch: 'var(--color-ink-soft)' },
  { id: 'shopping', label: 'Shopping', icon: '🛍️', swatch: 'var(--color-orange-deep)' },
  { id: 'entertainment', label: 'Entertainment', icon: '🍿', swatch: 'var(--color-ink)' },
  { id: 'health', label: 'Health', icon: '💊', swatch: 'var(--color-olive)' },
  { id: 'other', label: 'Other', icon: '📝', swatch: 'var(--color-border)' },
];

export const getCategoryById = (id) => CATEGORIES.find(c => c.id === id) || CATEGORIES[CATEGORIES.length - 1];
