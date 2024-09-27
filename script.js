const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todolist = document.querySelector(".todo-list");

button.addEventListener("click",addtodo);
todolist.addEventListener("click",deletetodo)

function addtodo(event){
    event.preventDefault();
     

    const tododiv = document.createElement("div")
    tododiv.classList.add("todo-container")
     
    const todoitem = document.createElement("li")
    todoitem.classList.add("todo-item")
    todoitem.innerText = input.value ;
    tododiv.appendChild(todoitem);

    const deletebutton = document.createElement("button")
    deletebutton.classList.add("delete-btn")
    deletebutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    tododiv.appendChild(deletebutton);

    const completebutton = document.createElement("button")
    completebutton.classList.add("complete-btn")
    completebutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    tododiv.appendChild(completebutton);

    todolist.appendChild(tododiv);
    input.value ="";
}

function deletetodo(event){
    console.log(event.target);

    const item = event.target;
    
    
    if(item.classList[0] === "delete-btn"){
        const delitem = item.parentElement;
        
        delitem.remove();
        
    }

    if(item.classList[0] === "complete-btn"){
        const delitem = item.parentElement;
        delitem.classList.toggle("completed");
        
    }
    
}















































