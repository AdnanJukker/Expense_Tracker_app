export const getThisMonthExpenses = (expenses) => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
  });
};

export const getTotalAmount = (expenses) => {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
};

export const getDailyAverage = (expenses) => {
  if (expenses.length === 0) return 0;
  
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const currentDay = now.getDate();
  
  const total = getTotalAmount(getThisMonthExpenses(expenses));
  return total / currentDay;
};

export const getTopCategory = (expenses) => {
  if (expenses.length === 0) return null;

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.categoryId] = (acc[expense.categoryId] || 0) + expense.amount;
    return acc;
  }, {});

  let maxAmount = 0;
  let topCategory = null;

  for (const [categoryId, amount] of Object.entries(categoryTotals)) {
    if (amount > maxAmount) {
      maxAmount = amount;
      topCategory = categoryId;
    }
  }

  return topCategory;
};

export const getCategoryTotals = (expenses) => {
  return expenses.reduce((acc, expense) => {
    acc[expense.categoryId] = (acc[expense.categoryId] || 0) + expense.amount;
    return acc;
  }, {});
};

export const groupExpensesByDate = (expenses) => {
  const grouped = expenses.reduce((acc, expense) => {
    if (!acc[expense.date]) {
      acc[expense.date] = [];
    }
    acc[expense.date].push(expense);
    return acc;
  }, {});

  // Sort dates descending
  return Object.keys(grouped)
    .sort((a, b) => new Date(b) - new Date(a))
    .reduce((acc, date) => {
      acc[date] = grouped[date].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return acc;
    }, {});
};
