let form = document.querySelector("#my-form");
let amount = document.querySelector('#amount');
let description = document.querySelector("#description");
let category = document.querySelector("#category");
let count = 0;

form.addEventListener('submit',(e) => {
    e.preventDefault();
    count  = count+1;
    if (!amount.value || !description.value || !category.value) {
        alert("Please fill all the fields!");
        return;
    }
    expense = {
        amount : amount.value,
        description : description.value,
        category : category.value
    }
    document.querySelector("#my-form").reset();
    expenseSerialized = JSON.stringify(expense)
    localStorage.setItem(count + " " + expense.amount + " " + expense.description, expenseSerialized)
    addExpense(expense);
    document.querySelector("#expense-list").style.display = "block";
    console.log(count);
})

function addExpense(expense){
    let ul = document.getElementById("items");
    let li = document.createElement('li');
    li.className = "list-group-item border-info";
    li.appendChild(document.createTextNode(`Amount: ${expense.amount}, Description: ${expense.description}, Expense: ${expense.category}`));

    var editBtn = document.createElement('input');
    editBtn.type = 'button'
    editBtn.value = 'Edit'
    editBtn.className = "form-control bg-info-subtle border-black"
    editBtn.addEventListener('click', (e)=>{
        document.getElementById('amount').value = expense.amount;
        document.getElementById('description').value = expense.description;
        document.getElementById('category').value = expense.category;
        li.remove();
    })

    var deleteBtn = document.createElement('input');
    deleteBtn.type = 'button'
    deleteBtn.value = 'Delete'
    deleteBtn.className = "form-control bg-info-subtle border-black"
    deleteBtn.addEventListener('click', (e) =>{
        localStorage.removeItem(expense.amount + expense.description);
        li.remove();
    })
    li.append(editBtn);
    li.append(deleteBtn);
    ul.append(li);
}

Object.keys(localStorage).forEach((key) => {
    stringifiedDetailsOfExpense = localStorage.getItem(key);
    detailsOfExpense = JSON.parse(stringifiedDetailsOfExpense);
    addExpense(detailsOfExpense);
})