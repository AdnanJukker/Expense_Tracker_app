<div align="center">
  <h1>Ledger — Expense Tracker</h1>
  <p>A minimal, scalable, and visually appealing expense tracker built with React & Vite.</p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Vite-latest-purple?style=for-the-badge&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript" alt="JavaScript" />
  </p>
</div>

---

## 📖 Overview

**Ledger** is a sleek, client-side expense tracker designed with a warm cream paper and printed-receipt orange visual identity. It features a monospace "ledger" feel for numbers and dates, providing a comfortable and modern user experience. 

This project requires **no backend, no API keys, and no environment variables**. All data is securely stored in your browser's `localStorage`.

---

## ✨ Features

- 💸 **Track Expenses**: Quickly add your expenses with descriptions, categories, amounts, and dates.
- 📊 **Visual Summaries**: View your spending at a glance with top categories, daily averages, and a hand-rolled bar chart.
- 🔍 **Filter & Search**: Easily filter your expenses by category or search by description.
- 🎨 **Beautiful UI**: Custom-designed theme using CSS variables (no bloated CSS frameworks).
- 🌓 **Dark Mode**: Toggle seamlessly between dark and light themes, with preferences saved automatically.
- 💾 **Local Persistence**: Data is automatically saved to `localStorage` – refresh without losing your data!
- ⚡ **Lightning Fast**: Built with Vite + React for optimal performance and rapid development.

---

## 🚀 Quick Start

Follow these steps to get the project running on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or download the source code:
   ```bash
   git clone https://github.com/yourusername/expense-tracker-app.git
   cd expense-tracker-app/Expense_Tracker_app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The app will be available at [http://localhost:5173](http://localhost:5173).*

### Build for Production

To create a production-ready build:
```bash
npm run build     # Outputs to dist/
npm run preview   # Preview the production build locally
```

---

## 🛠️ Tech Stack

| Layer        | Choice                          | Why |
|--------------|----------------------------------|-----|
| **Build Tool** | Vite                             | Fast dev server, zero-config JS (no TS overhead) |
| **UI**         | React 18 (Function components + hooks) | Simple, declarative UI |
| **Icons**      | lucide-react                     | Clean, minimal, consistent SVG icon set that adapts to the theme |
| **State**      | Context API + `useReducer`       | Scalable state management without prop-drilling or external libraries |
| **Persistence**| `localStorage` hook              | No backend required, easily swappable for a real database later |
| **Styling**    | Plain CSS + CSS Custom Properties| No CSS-in-JS runtime cost; theming is trivial |
| **Charts**     | Hand-rolled bar chart            | Keeps the bundle incredibly small without external chart libraries |

*Total runtime dependencies: just `react`, `react-dom`, and `lucide-react`.*

---

## 📂 Project Structure

```text
src/
├── main.jsx                 # Entry point, wraps <App/> in <ExpenseProvider/>
├── App.jsx                  # Main page composition and filter state
├── App.css                  # App-specific layout styles
├── styles/
│   ├── tokens.css           # 🎨 EDIT HERE to re-theme colors, typography, spacing
│   └── base.css             # Resets, global fonts, utility classes
├── constants/
│   ├── categories.js        # 🏷️ EDIT HERE to customize categories & icons
│   └── seedData.js          # Sample data loaded on first run
├── context/
│   └── ExpenseContext.jsx   # Global state reducer (add, update, delete actions)
├── hooks/
│   └── useLocalStorage.js   # Reusable hook for syncing state with localStorage
├── utils/
│   ├── calculations.js      # Pure math functions for totals, grouping, averages
│   └── formatCurrency.js    # Currency and date formatting utilities
└── components/
    ├── Header/              # Application header
    ├── SummaryCards/        # Stats strip (this month, daily avg, top category)
    ├── ExpenseForm/         # Add expense inputs
    ├── Filters/             # Category pills and search bar
    ├── ExpenseList/         # List of expenses grouped by date
    ├── ExpenseItem/         # Single expense row
    ├── CategoryChart/       # Bar chart breakdown by category
    └── EmptyState/          # Fallback UI for zero expenses
```

---

## 🧩 Data Model

Expenses are stored using a simple JSON structure:

```json
{
  "id": "uuid",
  "title": "Coffee with Priya",
  "amount": 180,
  "categoryId": "food",
  "date": "2026-08-29",
  "createdAt": "2026-08-29T10:12:00.000Z"
}
```

---

## 🎨 Customization & Extension

This project is built to be easily extended. Here are some common tasks:

- **Add a new category**: Edit `src/constants/categories.js` to add an object with `id`, `label`, `icon`, and `swatch`. The app will automatically render it in the forms, charts, and filters.
- **Change the color theme**: Edit `src/styles/tokens.css`. All colors, fonts, and spacing are controlled by these CSS custom properties.
- **Connect a Backend Database**: Update the `hooks/useLocalStorage.js` and the `useEffect` in `ExpenseContext.jsx` to fetch and post to your API.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](../../issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
