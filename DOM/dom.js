// Examine the document object //
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
document.title = "Title changed";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// const title = document.querySelector("#main-header");
// const addItem = document.querySelector(".title");

// title.style.borderBottom = "3px solid black";
// const li2 = document.querySelector(".list-group-item:nth-child(2)");
// const li3 = document.querySelector(".list-group-item:nth-child(3)");

// li2.style.background = "green";
// li3.style.display = "none";

// const qli = document.querySelectorAll(".list-group-item");
// qli[1].style.color = "yellow";

// for(let i = 0; i < qli.length; i++){
//     if(i%2 != 0) qli[i].style.background = "green";
// }

//GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// for(var i = 0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }
// console.log(items[2]);
// items[2].style.backgroundColor = 'green';
// items[4].style.backgroundColor = 'yellow';

//GETELEMENTSBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// for(var i = 0; i<li.length; i++){
//     li[i].style.fontWeight = 'bold';
// }
// console.log(li[2]);
// li[2].style.backgroundColor = 'green';
// li[4].style.backgroundColor = 'yellow';

//QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

//li2 bg to green and li3 invisible
var li2 = document.querySelector('.list-group-item:nth-child(2)');
var li3 = document.querySelector('.list-group-item:nth-child(3)');
li2.style.backgroundColor = 'green';
li3.style.display = 'none';

//QUERYSELECTORALL
const qli = document.querySelectorAll(".list-group-item");
qli[1].style.color = "yellow";

for(let i = 0; i < qli.length; i++){
    if(i%2 != 0) qli[i].style.background = "green";
}