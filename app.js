let todoInput=document.querySelector('.todo-input');
let todoButton=document.querySelector('.todo-button');
let todoList=document.querySelector('.todo-list');

//console.log(todoList);
//todoList.innerHTML='<li>Hi</li>';

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);

//Functions

const check = (e)=>{
 
  if(todoInput.value ===""){
    todoButton.disabled = true;
  }else{
    todoButton.disabled = false;
  }
}

todoInput.oninput = check;

function addTodo(e){
    //console.log("Clicked");
    e.preventDefault(); //helps to prevent refreshing of page every time add is clicked.
    //Createing element
    //Todo-div
    if(todoInput.value!==""){
      const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    //List
    const newTodo=document.createElement('li');
    newTodo.classList.add("todo-item");
    newTodo.innerText=todoInput.value;
    todoDiv.insertBefore(newTodo , todoDiv.firstChild);
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
          todoButton.disabled = true;

    }
    
}

function deleteCheck(event){
    const item = event.target;
    if(item.classList[0]==='trash-btn')
    {
        const tod = item.parentElement;
        tod.remove()
    }
    if(item.classList[0]==='complete-btn')
    {
        const tod = item.parentElement.firstChild;
        tod.classList.toggle('completed');
        if(item.textContent === "Complete"){
          item.textContent = "Redo this";
        }else{
          item.textContent = "Complete";
          
        }
    }
}