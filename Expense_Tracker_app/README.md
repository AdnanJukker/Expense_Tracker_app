# Ledger — Expense Tracker

A minimal, scalable expense tracker built with **React + Vite (JavaScript)**.
Visual identity: warm cream paper + printed-receipt orange, with a
monospace "ledger" feel for numbers and dates.

This README is written so both humans and AI coding agents (e.g. **Google
Antigravity**, Cursor, Claude Code, Copilot Workspace) can pick the project
up quickly and extend it safely.

---

## 1. Quick start

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

No backend, no API keys, no env vars required. Data is stored in the
browser's `localStorage` under the key `expense-tracker:expenses:v1`.

---

## 2. Tech stack

| Layer        | Choice                          | Why |
|--------------|----------------------------------|-----|
| Build tool   | Vite                             | Fast dev server, zero-config JS (no TS) |
| UI           | React 18 (function components + hooks) | Simple, no extra state library needed |
| State        | React Context + `useReducer`     | Scales to more actions without prop-drilling; swappable for Redux/Zustand later (see §5) |
| Persistence  | `localStorage` via a small custom hook | No backend required; isolated in one hook so it's easy to swap for a real API |
| Styling      | Plain CSS per component + CSS custom properties (design tokens) | No CSS-in-JS runtime cost; tokens make re-theming trivial |
| Charts       | Hand-rolled bar chart (no dependency) | Keeps the bundle small; swap for `recharts`/`visx` if charts grow more complex |

Total runtime dependencies: just `react` and `react-dom`.

---

## 3. Folder structure

```
src/
├── main.jsx                 # entry point, wraps <App/> in <ExpenseProvider/>
├── App.jsx                  # page composition + filter state
├── App.css
├── styles/
│   ├── tokens.css           # ← EDIT HERE to re-theme colors/type/spacing
│   └── base.css             # resets, fonts, global utility classes
├── constants/
│   ├── categories.js        # ← EDIT HERE to add/remove/rename categories
│   └── seedData.js          # sample data shown on first run
├── context/
│   └── ExpenseContext.jsx   # reducer + provider: addExpense/updateExpense/deleteExpense
├── hooks/
│   └── useLocalStorage.js   # generic, reusable persistence hook
├── utils/
│   ├── calculations.js      # pure functions: totals, grouping, averages
│   └── formatCurrency.js    # currency/date formatting (change locale/currency here)
└── components/
    ├── Header/
    ├── SummaryCards/        # top stat strip (this month, daily avg, top category)
    ├── ExpenseForm/         # add-expense form
    ├── Filters/              # category pills + search
    ├── ExpenseList/         # list grouped by date
    ├── ExpenseItem/         # single row
    ├── CategoryChart/       # bar breakdown by category
    └── EmptyState/
```

Each component owns its own `Component.jsx` + `Component.css` pair, so UI
pieces can be added, replaced, or deleted independently.

---

## 4. Data model

```js
// one expense record
{
  id: "uuid",
  title: "Coffee with Priya",
  amount: 180,          // number, in the base currency unit (e.g. rupees)
  categoryId: "food",   // must match an id in constants/categories.js
  date: "2026-08-29",   // ISO date (YYYY-MM-DD)
  createdAt: "2026-08-29T10:12:00.000Z"
}
```

All mutations go through `useExpenses()` (from `context/ExpenseContext.jsx`):

```js
const { expenses, addExpense, updateExpense, deleteExpense } = useExpenses();
```

---

## 5. Common extension tasks

**Add a new category**
Edit `src/constants/categories.js` only — add an object with `id`, `label`,
`icon`, and `swatch`. It will automatically appear in the form, filters,
list badges, and chart.

**Change the color theme**
Edit the CSS custom properties in `src/styles/tokens.css`. Every component
reads colors from these variables — nothing is hardcoded in component CSS.

**Add editing support**
`updateExpense(expense)` already exists in the context. Wire an "edit"
button in `ExpenseItem` that opens `ExpenseForm` pre-filled (lift `ExpenseForm`
to accept an optional `initialValue` + `onSubmit` prop instead of always
calling `addExpense`).

**Add a monthly budget / alerts**
Add a `budget` field to a new `constants/budget.js` or extend
`ExpenseContext`, then read it alongside `getThisMonthExpenses()` in
`utils/calculations.js` to compute remaining budget / overspend.

**Swap localStorage for a real backend**
Only `hooks/useLocalStorage.js` and the persistence `useEffect` in
`ExpenseContext.jsx` need to change — replace them with API calls
(e.g. `fetch`/React Query). Components never touch storage directly.

**Add routing / multiple pages** (e.g. a Reports page)
Install `react-router-dom` and wrap `<App/>`'s content with routes;
`CategoryChart` and `utils/calculations.js` are already framework-agnostic
and reusable on a dedicated reports route.

**Add tests**
`utils/calculations.js` and `utils/formatCurrency.js` are pure functions
with no React or DOM dependency — start unit tests there (Vitest is a
natural fit with Vite: `npm i -D vitest` and add a `test` script).

---

## 6. Design tokens reference

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#FBF4E8` | App background |
| `--color-paper-raised` | `#FFFCF6` | Cards |
| `--color-orange` | `#E8590C` | Primary accent, CTA, active states |
| `--color-orange-deep` | `#C4460A` | Hover/pressed accent |
| `--color-ink` | `#3A2E22` | Primary text |
| `--color-ink-soft` | `#8A7A63` | Secondary text |
| `--color-olive` | `#6E7B4F` | Secondary accent |
| `--font-display` | Fraunces | Headings |
| `--font-body` | Inter | Body copy, UI labels |
| `--font-mono` | Space Mono | Amounts, dates — the "receipt printout" feel |

---

## 7. Notes for AI coding agents

- The codebase is plain JavaScript (no TypeScript) and has **no external
  state-management or UI-kit dependency** — changes should stay dependency-light
  unless the task explicitly calls for a new library.
- Category and currency logic are centralized (`constants/categories.js`,
  `utils/formatCurrency.js`) — prefer editing those over introducing
  new hardcoded category/currency logic in components.
- Styling is plain CSS with design tokens, not Tailwind or CSS-in-JS —
  keep new styles consistent with that pattern and reuse tokens from
  `styles/tokens.css` rather than introducing new raw hex values.
- Run `npm run build` after structural changes to catch errors early.
