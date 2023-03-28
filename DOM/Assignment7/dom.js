const itemList = document.querySelector('#items');

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

itemList.parentNode.style.backgroundColor = '#f4f4f4';
itemList.lastElementChild.style.color = 'red';
itemList.lastElementChild.textContent = 'Hello there';

const newDiv = document.createElement('div');
newDiv.className = "new-div";
itemList.firstElementChild.style.color = 'blue';
itemList.nextElementSibling.style.padding = "5px";
itemList.previousElementSibling.style.color = 'orange';
newDiv.setAttribute("id", "new-div");
const newDivText = document.createTextNode("New Div Text");
newDiv.appendChild(newDivText);

const container = document.querySelector(".container");
container.appendChild(newDiv);

const helloWorldDiv = document.createElement("div");
const helloWorldDivText = document.createTextNode("Hello World!");
helloWorldDiv.appendChild(helloWorldDivText);

const header = document.querySelector('#header-title');
container.insertBefore(helloWorldDiv, header);