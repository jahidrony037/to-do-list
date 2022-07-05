//select elements & assign them to variables 

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
//console.log(todoUl);
let completeUl = document.querySelector('.complete-list ul');


//create necessary functions

let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    checkBox.type = 'checkbox';
    label.innerText = task;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}


let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = " ";

    //bind the new list item to the incomplete list 

    bindInCompleteItems(listItem, completeTask)
}

let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();

    completeUl.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function (taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}


let bindCompleteItems = function (taskItem, deleteBtnClick) {
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = deleteBtnClick;
}

for (let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}
for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);

