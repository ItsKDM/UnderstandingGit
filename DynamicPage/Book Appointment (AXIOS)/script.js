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

function editUserDetails(user) {
    const form = document.querySelector('form');
    form.username.value = user.name;
    form.emailId.value = user.email;
    form.phonenumber.value = user.phonenumber;
    form.onsubmit = function(event) {
        event.preventDefault();
        const updatedName = event.target.username.value;
        const updatedEmail = event.target.emailId.value;
        const updatedPhonenumber = event.target.phonenumber.value;
        const obj = {
            name: updatedName,
            email: updatedEmail,
            phonenumber: updatedPhonenumber
        };
        axios.put(
            `https://crudcrud.com/api/8e8cdb82e39b49ec8081278c9db95111/appointmentData/${user._id}`,
            obj
        )
        .then(response => {
            const updatedUser = response.data;
            const parentNode = document.getElementById("listOfUsers");
            const childNodeToBeUpdated = document.getElementById(updatedUser.email);
            // const updatedChildHTML = `<li id=${updatedUser.email}> ${updatedUser.name} - ${updatedUser.email}
            //     <button onclick=deleteUser('${updatedUser._id}')> Delete User </button>
            // </li>`;
            const updatedchildHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                <button onclick=editUser('${user._id}')> Edit User </button>
            </li>`;
            parentNode.replaceChild(convertToElement(updatedChildHTML), childNodeToBeUpdated);
            form.onsubmit = saveToLocalStorage;
            form.reset();
        })
        .catch(err => console.log(err));
    }
}

function convertToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}