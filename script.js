//Variables
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listen
// document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);


function addTodo(event){
    console.log("addTodo function called!");
    event.preventDefault();
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo"); 

const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
todoDiv.classList.add("todo-item");
todoDiv.appendChild(newTodo);


//  Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
//DO
}

function deleteTodo(e){
    const item = e.target;
    if(item.classList[0]==="trash-btn"){
        const daddy =item.parentElement;
        daddy.classList.toggle("fall"); 
        daddy.remove();
    }

    if(item.classList[0]==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
 


}