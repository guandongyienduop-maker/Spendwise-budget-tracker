// =========================================
// SPENDWISE BUDGET TRACKER - script.js
// =========================================

// ----- Get elements from the page -----

const nameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('expenseInput');
const categoryInput = document.getElementById('expense-category');
const budgetInput = document.getElementById('budgetInput');

const tableBody = document.getElementById('expenseTableBody');

const budgetAmount = document.getElementById('budgetAmount');
const expenseAmount = document.getElementById('expenseAmount');
const remainingAmount = document.getElementById('remainingAmount');
const budgetMessage = document.getElementById('budgetMessage');


// ----- Helper: format numbers as KSh -----

function formatKSh(number) {
  return 'KSh ' + number.toLocaleString('en-KE');
}


// ----- Add up every amount in the table -----

function getTotalExpenses() {
  let total = 0;

  tableBody.querySelectorAll('tr').forEach(row => {
    total += parseFloat(row.cells[1].textContent) || 0;
  });

  return total;
}


// ----- Update the three summary cards -----

function updateSummary() {
  const budget = parseFloat(budgetInput.value) || 0;
  const total = getTotalExpenses();
  const remaining = budget - total;

  budgetAmount.textContent = formatKSh(budget);
  expenseAmount.textContent = formatKSh(total);
  remainingAmount.textContent = formatKSh(remaining);

  // Red when over budget, green otherwise
  remainingAmount.style.color = remaining < 0 ? '#dc2626' : '#16a34a';
}


// ----- Delete buttons (NEW) -----

function addDeleteButton(row) {
  const cell = document.createElement('td');
  const button = document.createElement('button');

  button.textContent = 'Delete';
  button.className = 'delete-btn';

  cell.appendChild(button);
  row.appendChild(cell);
}

// Add a Delete button to the rows already in the table
tableBody.querySelectorAll('tr').forEach(addDeleteButton);

// Remove a row when its Delete button is clicked
tableBody.addEventListener('click', e => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('tr').remove();
    checkBudget();
  }
});


// ----- Add a new expense -----

function addExpense() {
  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  // Validation
  if (name === '') {
    alert('Please enter an expense name.');
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  if (category === '') {
    alert('Please select a category.');
    return;
  }

  // Build the new table row
  const today = new Date().toISOString().split('T')[0];
  const row = document.createElement('tr');

  [name, amount, category, today].forEach(value => {
    const cell = document.createElement('td');
    cell.textContent = value;
    row.appendChild(cell);
  });

  addDeleteButton(row); // NEW: every new row gets a Delete button
  tableBody.appendChild(row);

  // Clear the form
  nameInput.value = '';
  amountInput.value = '';
  categoryInput.value = '';

  checkBudget();
}


// ----- Check the budget and show a message -----

function checkBudget() {
  const budget = parseFloat(budgetInput.value) || 0;
  const total = getTotalExpenses();

  updateSummary();

  if (budget <= 0) {
    budgetMessage.textContent = 'Enter your monthly budget to see how you are doing.';
  } else if (total > budget) {
    budgetMessage.textContent = `⚠️ You are over budget by ${formatKSh(total - budget)}.`;
  } else if (total >= budget * 0.8) {
    budgetMessage.textContent = '⚠️ Careful, you have used over 80% of your budget.';
  } else {
    budgetMessage.textContent = '✅ You are within your budget. Keep it up!';
  }
}


// ----- Button and input events -----

document.getElementById('addExpenseButton').addEventListener('click', addExpense);
document.getElementById('checkBudgetButton').addEventListener('click', checkBudget);

// Update the cards while typing the budget
budgetInput.addEventListener('input', checkBudget);


// ----- Highlight the clicked sidebar item -----

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});


// ----- Run once when the page loads -----

updateSummary();