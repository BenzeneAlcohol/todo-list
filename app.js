//console.log('HKRK');
//Selectors
let todoInput=document.querySelector('.todo-input');
let todoButton=document.querySelector('.todo-button');
let todoList=document.querySelector('.todo-list');

//console.log(todoList);
//todoList.innerHTML='<li>Hi</li>';

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);

//Functions

function addTodo(e){
    //console.log("Clicked");
    e.preventDefault(); //helps to prevent refreshing of page every time add is clicked.
    //Createing element
    //Todo-div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    //List
    const newTodo=document.createElement('li');
    newTodo.classList.add("todo-item");
    newTodo.innerText=todoInput.value;
    todoDiv.appendChild(newTodo);
    //Button Check and Delete
    const completeButton=document.createElement('button');
    completeButton.classList.add("complete-btn");
    completeButton.innerText="Complete";
    todoDiv.appendChild(completeButton);
    //Button Delete
    const trashButton=document.createElement('button');
    trashButton.classList.add("trash-btn");
    trashButton.innerText="Delete";
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value="";
}

function deleteCheck(event){
    console.log(event.target);
    const item = event.target;
    if(item.classList[0]==='trash-btn')
    {
        const tod = item.parentElement;
        tod.remove();
    }
    if(item.classList[0]=='complete-btn')
    {
        const tod = item.parentElement.firstChild;
        tod.classList.toggle('completed');
    }
}
