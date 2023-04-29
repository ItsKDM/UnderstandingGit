const form = document.querySelector('#todo-form');
const remainingList = document.querySelector('#todo-remaining');
const completedList = document.querySelector('#todo-completed');
const baseURL = 'https://crudcrud.com/api/80bf72c2b569492f939ca454ff573b79/todoapp'

window.addEventListener("DOMContentLoaded", () => {
    axios.get(baseURL).then(res => {
        console.log(res.data);
        // for (let i = 0; i < res.data.length; i++) {
        //     showTodoOnScreen(res.data[i]);
        // }
    })
})

// function showTodoOnScreen(todo){
//     const parentNode = document.getElementById("li");
//     const childHTML = `<li id=${todo.name}> ${todo.description}
//   </li>`;
//     parentNode.innerHTML = parentNode.innerHTML + childHTML;
// }

function addTodoItem(name, description){
    const todo = {
        name, description
    };
    axios.post(baseURL, todo).then(res => {
        const li = document.createElement('li');
        li.innerHTML = `${res.data.name}: ${res.data.description}`;
        const doneBtn = document.createElement('button');
        doneBtn.innerHTML = 'done';
        doneBtn.addEventListener('click', () => {
            moveTodoItem(res.data._id, res.data.name, res.data.description);
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'delete';
        deleteBtn.addEventListener('click', () => {
            deleteTodoItem(res.data._id, li);
        });
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);
        remainingList.appendChild(li);
    })
    .catch(error => console.error(error));
}

function moveTodoItem(id, name, description){
    const todo = {name, description};
    axios.put(`${baseURL}/${id}`, todo).then(res => {
        const li = document.createElement("li");
        li.innerHTML = `${todo.name}: ${todo.description}`;
        completedList.appendChild(li);
    }).catch(error => console.error(error));
}

function deleteTodoItem(id, li){
    axios.delete(`${baseURL}/${id}`).then(res => {
        remainingList.removeChild(li);
    }).catch(error => console.error(error));
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const nameInput = document.querySelector('#todo-name');
    const descriptionInput = document.querySelector('#todo-description');
    addTodoItem(nameInput.value, descriptionInput.value);
    nameInput.value = '';
    descriptionInput.value = '';
})