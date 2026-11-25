# SpendWise – JavaScript Foundation

## Project Overview

SpendWise is a personal budgeting application designed to help users keep track of their budget and expenses. In this project, I developed the JavaScript foundation of SpendWise so that the application can collect user information, store data, perform budget calculations, and display the results in the browser console.

The project builds on my existing SpendWise dashboard and adds JavaScript functionality to make the application more interactive and able to process budgeting data.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Git and GitHub

## JavaScript Concepts Implemented

This project demonstrates the following JavaScript concepts:

1. JavaScript setup and linking
2. Variables and data types
3. User input using `prompt()`
4. Arithmetic calculations
5. Reusable functions
6. Console output using `console.log()`

---

## 1. Set Up JavaScript

I created a JavaScript file called `script.js` and linked it to my `index.html` file using the `<script>` element.

```html
<script src="script.js"></script>
```

I also tested that the JavaScript file loads successfully by displaying a message in the browser console:

```javascript
console.log("SpendWise JavaScript loaded successfully!");
```

This confirms that my HTML page is correctly connected to my JavaScript file.

---

## 2. Store Application Data

I used JavaScript variables to store important budgeting and expense information.

For example:

```javascript
let budget = 2000;
let foodExpense = 420;
let transportExpense = 180;
let rentExpense = 1200;
let entertainmentExpense = 150;
```

The `let` keyword allows me to create variables whose values can be changed when needed.

The variables store numerical data representing the user's budget and different types of expenses.

I also used a variable to store the expense entered by the user:

```javascript
let expenseAmount = Number(prompt("Enter your expense amount:"));
```

---

## 3. Collect User Input

I used JavaScript's `prompt()` function to allow the user to enter budgeting information.

```javascript
let budget = Number(prompt("Enter your monthly budget:"));
let expenseAmount = Number(prompt("Enter your expense amount:"));
let expenseCategory = prompt("Enter your expense category:");
```

The user provides:

* Monthly budget
* Expense amount
* Expense category

I used `Number()` for the budget and expense amount because these values need to be used in mathematical calculations.

The expense category remains text because it is used as a description of the expense.

---

## 4. Perform Budget Calculations

SpendWise calculates the remaining balance by subtracting the expense from the user's budget.

The calculation is:

```text
Remaining Balance = Budget - Expense
```

For example:

```text
Budget = 2000
Expense = 500
Remaining Balance = 1500
```

The calculation is performed using JavaScript:

```javascript
let remainingBalance = calculateRemainingBalance(budget, expenseAmount);
```

This allows SpendWise to determine how much money remains after an expense has been recorded.

---

## 5. Create Reusable Functions

I created a reusable function called `calculateRemainingBalance()` to organize the budget calculation.

```javascript
function calculateRemainingBalance(budget, expense) {
    return budget - expense;
}
```

I then call the function using:

```javascript
let remainingBalance = calculateRemainingBalance(budget, expenseAmount);
```

The function accepts the budget and expense as parameters and returns the remaining balance.

Using a function makes the code easier to organize and reuse. For example:

```javascript
calculateRemainingBalance(5000, 1200);
```

returns:

```text
3800
```

This shows that the same function can be used with different budget and expense values.

---

## 6. Display Results

I used `console.log()` to display the results clearly in the browser console.

```javascript
console.log("===== SpendWise Budget Summary =====");
console.log("Budget:", budget);
console.log("Expense Amount:", expenseAmount);
console.log("Expense Category:", expenseCategory);
console.log("Remaining Balance:", remainingBalance);
```

The output is clearly labeled so that the user can easily understand each value.

Example output:

```text
SpendWise JavaScript loaded successfully!
===== SpendWise Budget Summary =====
Budget: 2000
Expense Amount: 500
Expense Category: food
Remaining Balance: 1500
```

---

## Complete JavaScript Example

The main JavaScript functionality used in this project is:

```javascript
console.log("SpendWise JavaScript loaded successfully!");

let budget = Number(prompt("Enter your monthly budget:"));
let expenseAmount = Number(prompt("Enter your expense amount:"));
let expenseCategory = prompt("Enter your expense category:");

function calculateRemainingBalance(budget, expense) {
    return budget - expense;
}

let remainingBalance = calculateRemainingBalance(budget, expenseAmount);

console.log("===== SpendWise Budget Summary =====");
console.log("Budget:", budget);
console.log("Expense Amount:", expenseAmount);
console.log("Expense Category:", expenseCategory);
console.log("Remaining Balance:", remainingBalance);
```

## Testing

I tested the application in the web browser to make sure that:

* The JavaScript file loads successfully.
* The user can enter a budget.
* The user can enter an expense amount.
* The user can enter an expense category.
* The remaining balance is calculated correctly.
* The reusable calculation function works.
* The results appear clearly in the browser console.
* Different budget and expense values produce different remaining balances.

### Example Test

If the user enters:

```text
Budget: 3000
Expense: 750
Category: transport
```

The application calculates:

```text
Remaining Balance: 2250
```

because:

```text
3000 - 750 = 2250
```

## Project Files

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure and content of the SpendWise dashboard and links the JavaScript file.

### `style.css`

Contains the styling and visual design of the SpendWise dashboard.

### `script.js`

Contains the JavaScript variables, user input, calculations, reusable function, and console output.

### `README.md`

Documents the project and explains the JavaScript concepts implemented.

## Conclusion

This project helped me transform SpendWise from a mainly visual dashboard into an application that can process budgeting information using JavaScript. I applied variables to store data, `prompt()` to collect user input, arithmetic operations to calculate the remaining balance, functions to organize reusable logic, and `console.log()` to display clear results.

The JavaScript foundation provides a starting point for adding more advanced budgeting features to SpendWise in the future.


# SpendWise Budget Tracker

A responsive budget tracker dashboard built with HTML, CSS, and JavaScript. Set a monthly budget, add and delete expenses, and see your spending summary update instantly.

## Features

- **Budget Summary cards**: Monthly Budget, Total Expenses, and Remaining Balance, updated live as you type or add expenses
- **Budget status message**: warns when you pass 80% of your budget or go over it
- **Add Expense form**: name, amount, and category, with input validation
- **Expenses table**: colorful grid with striped rows, hover highlight, and a Delete button on every row
- **Monthly Financial Overview**: category cards (Food, Transport, Rent, Entertainment, Savings, Utilities)
- **Saving-money video**: embedded YouTube video
- **Responsive design**: sidebar and cards adapt to tablets and phones
- **Dark mode**: follows the device's color-scheme setting
- **Smooth scrolling** sidebar navigation with an active-link highlight

## Project Structure

```
spendwise/
├── index.html          # Page structure and content
├── style.css           # All styling (layout, cards, table, responsive, dark mode)
├── script.js           # Interactivity (budget logic, add/delete expenses)
└── my budget logo.png  # Sidebar logo
```

## Technologies Used

- **HTML5**: semantic sections (`aside`, `main`, `header`, `section`, `article`, `footer`, `details`)
- **CSS3**: custom properties, Flexbox, CSS Grid, media queries, `prefers-color-scheme`
- **JavaScript (ES6)**: DOM manipulation, event listeners, event delegation
- **Google Fonts**: Poppins and Roboto

## How to Run

1. Put all four files in the same folder.
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server** (or just double-click `index.html`).

No installation or build step is needed.

## How to Use

1. Enter your **monthly budget** (KES) in the Budget Summary box.
2. In **Add Expense**, enter a name, an amount, and a category.
3. Click **Add Expense**. The row appears in the table and the summary cards update.
4. Click **Check Budget** to see how you are doing against your budget.
5. Click **Delete** on any row to remove it. The totals update automatically.

## How the Code Works

### index.html

The page is a two-column dashboard: a fixed sidebar and a main content area. The main area is arranged in this order:

1. Header
2. Budget Summary
3. Add Expense form
4. Your Expenses table
5. How-to instructions
6. Monthly Financial Overview
7. YouTube video
8. Footer

Elements that JavaScript uses are found by ID: `budgetInput`, `budgetAmount`, `expenseAmount`, `remainingAmount`, `budgetMessage`, `expense-name`, `expenseInput`, `expense-category`, `addExpenseButton`, `checkBudgetButton`, and `expenseTableBody`.

### style.css

- **CSS variables** in `:root` hold the colors, so the whole theme can be changed in one place.
- **CSS Grid** lays out the dashboard (sidebar + content) and the 3-column card grids.
- **Flexbox** is used for the sidebar, navigation, header, profile, and cards.
- **Media query (max-width: 768px)** switches to a single column and a horizontal menu on small screens.
- **Dark theme** redefines the variables and restyles the table inside `@media (prefers-color-scheme: dark)`.

### script.js

| Function | What it does |
|---|---|
| `formatKSh(number)` | Formats a number as `KSh 1,200` |
| `getTotalExpenses()` | Adds up the Amount column of every table row |
| `updateSummary()` | Updates the three summary cards; the balance turns red when negative |
| `addDeleteButton(row)` | Adds a Delete button to a table row |
| `addExpense()` | Validates the form, builds a new row with today's date, and updates the summary |
| `checkBudget()` | Refreshes the summary and shows a status message |

Deleting uses **event delegation**: one click listener on the table body handles every Delete button, including rows added later.

## Known Limitations

- Expenses are **not saved**. Refreshing the page resets the table to the five sample rows.
- The Monthly Financial Overview cards use fixed sample values in `$`, while the rest of the app uses KES. They do not change when you add expenses.
- The expense table and the overview cards are not connected to each other.

## Ideas for Improvement

- Save expenses and the budget with `localStorage` so they survive a refresh
- Make the Monthly Financial Overview cards calculate from the real expenses, by category
- Add an Edit option for each row
- Add a chart of spending by category
- Filter or sort the table by category or date

## License

Free to use for learning and personal projects.

## Lessons Learned
- Continuous deployment means every `git push` to `main` updates the live site automatically.
- File and folder names should be lowercase with no spaces so they work on every server.
- A project that works locally must still be tested on the live URL, including on a phone.
- The Netlify Deploys tab and the browser Console are the first places to look when something breaks.
- Short, clear commit messages make changes easier to track and undo.
- Static sites need no build command, which keeps deployment simple.