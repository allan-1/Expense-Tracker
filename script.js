const expenseButton = document.querySelector('.expense-btn');
const expenseName = document.querySelector('.name-txt');
const expenseDate = document.querySelector('.date-txt');
const expenseAmount = document.querySelector('.amount-txt');
const expenseTable = document.querySelector('.table-cotent')
const deleteRow = document.querySelector('.deletebutton')

// event listeners
expenseButton.addEventListener('click', addExpense)

// functions
function addExpense(event) {
    // prevent form from submitting
    event.preventDefault()

    let row = expenseTable.insertRow(1);
    let date = row.insertCell(0);
    let name = row.insertCell(1);
    let amount = row.insertCell(2);
    if ((expenseName.value === '') || (expenseDate.value === '') ||(expenseAmount.value === '') ||isNaN(expenseAmount.value)) {
        expenseTable.deleteRow(1)
    }
    date.innerText = expenseDate.value
    name.innerText = expenseName.value
    amount.innerText = expenseAmount.value

    expenseAmount.value = ''
    expenseDate.value = ''
    expenseName.value = ''
}
