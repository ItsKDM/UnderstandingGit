function saveToLocalStorage(e){
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.emailId.value;
    const phonenumber = e.target.phonenumber.value;

    const obj = {
        name,
        email,
        phonenumber
    };

    axios.post(
        "https://crudcrud.com/api/8e8cdb82e39b49ec8081278c9db95111/appointmentData",
        obj
    )
    .then((response) => {
        showNewUserOnScreen(response.data);
        console.log(response);
    })
    .catch((err) => console.log(err));
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get(
        "https://crudcrud.com/api/8e8cdb82e39b49ec8081278c9db95111/appointmentData"
    )
    .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
            showNewUserOnScreen(response.data[i]);
            
        }
    });
});

function showNewUserOnScreen(user){
    const parentNode = document.getElementById("listOfUsers");
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
    <button onclick=deleteUser('${user._id}')> Delete User </button>
  </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function deleteUser(id){
    axios.delete(
        `https://crudcrud.com/api/8e8cdb82e39b49ec8081278c9db95111/appointmentData/${id}`
    )
    .then((res) => {
        console.log(res);
    });
    removeUserFromScreen(id);
}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById("listOfUsers");
    console.log(parentNode);
    const childNodeToBeDeleted = document.getElementById(emailId);
    parentNode.removeChild(childNodeToBeDeleted);
}