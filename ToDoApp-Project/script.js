const form = document.querySelector('#todo-form');
const remainingList = document.querySelector('#todo-remaining');
const completedList = document.querySelector('#todo-completed');
const baseURL = 'https://crudcrud.com/api/df6744ef67ce43a78bb666daa68d6fa1/todoapp'

window.addEventListener("DOMContentLoaded", () => {
    axios.get(baseURL).then(res => {
        // console.log(res.data);
        const tasks = res.data;
        tasks.forEach(task => {
            if(task.isCompleted){
                appendTaskToList(task, completedList);
            } else{
                appendTaskToList(task, remainingList);
            }
        });
        
        // for (let i = 0; i < res.data.length; i++) {
        //     showTodoOnScreen(res.data[i]);
        // }
    })
    .catch(error => console.error(error));
})

// function showTodoOnScreen(todo){
//     const parentNode = document.getElementById("li");
//     const childHTML = `<li id=${todo.name}> ${todo.description}
//   </li>`;
//     parentNode.innerHTML = parentNode.innerHTML + childHTML;
// }

function addTodoItem(name, description){
    const todo = {
        name, description, isCompleted: false
    };
    // axios.post(baseURL, todo).then(res => {
    //     const li = document.createElement('li');
    //     li.innerHTML = `${res.data.name}: ${res.data.description}`;
    //     const doneBtn = document.createElement('button');
    //     doneBtn.innerHTML = 'done';
    //     doneBtn.addEventListener('click', () => {
    //         moveTodoItem(res.data._id, res.data.name, res.data.description);
    //     });
    //     const deleteBtn = document.createElement('button');
    //     deleteBtn.innerHTML = 'delete';
    //     deleteBtn.addEventListener('click', () => {
    //         deleteTodoItem(res.data._id, li);
    //     });
    //     li.appendChild(doneBtn);
    //     li.appendChild(deleteBtn);
    //     remainingList.appendChild(li);
    // })
    // .catch(error => console.error(error));
    axios.post(baseURL, todo)
    .then(res => {
      const task = res.data;
      appendTaskToList(task, remainingList);
    })
    .catch(error => console.error(error));
}

function moveTodoItem(id, name, description){
    const todo = {name, description, isCompleted: true};
    axios.put(`${baseURL}/${id}`, todo).then(res => {
        const li = document.createElement("li");
        li.innerHTML = `${todo.name}: ${todo.description}`;
        completedList.appendChild(li);
    }).catch(error => console.error(error));
    // const task = res.data;
    //   const li = document.createElement('li');
    //   li.textContent = `${task.name}: ${task.description}`;
    //   completedList.appendChild(li);
    // })
    // .catch(error => console.error(error));
}

function deleteTodoItem(id, li){
    axios.delete(`${baseURL}/${id}`).then(res => {
        remainingList.removeChild(li);
    }).catch(error => console.error(error));
    // axios.delete(`${baseURL}/${id}`)
    // .then(() => {
    //   li.parentNode.removeChild(li);
    // })
    // .catch(error => console.error(error));
}

function appendTaskToList(task, list) {
    const li = document.createElement('li');
    li.textContent = `${task.name}: ${task.description}`;
  
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'done';
    doneBtn.addEventListener('click', () => {
      moveTodoItem(task._id, task.name, task.description);
      list.removeChild(li);
    });
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    deleteBtn.addEventListener('click', () => {
      deleteTodoItem(task._id, li);
      list.removeChild(li);
    });
  
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }

form.addEventListener('submit', e => {
    e.preventDefault();
    const nameInput = document.querySelector('#todo-name');
    const descriptionInput = document.querySelector('#todo-description');
    addTodoItem(nameInput.value, descriptionInput.value);
    nameInput.value = '';
    descriptionInput.value = '';
})