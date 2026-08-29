export const SEED_EXPENSES = [
  {
    id: '1',
    title: 'Groceries',
    amount: 120.5,
    categoryId: 'food',
    date: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Monthly Metro Pass',
    amount: 45.0,
    categoryId: 'transport',
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0], // yesterday
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: '3',
    title: 'Internet Bill',
    amount: 60.0,
    categoryId: 'utilities',
    date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0], // 2 days ago
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: '4',
    title: 'Coffee with Priya',
    amount: 18.0,
    categoryId: 'food',
    date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  }
];
