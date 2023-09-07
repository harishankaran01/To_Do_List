let todos=[];
let todosList=document.getElementById("todos");
let input=document.getElementById("input");
window.onload=()=>{
   todos=JSON.parse(localStorage.getItem('todos')) || [];
   todos.forEach(item =>addItem(item));
}

let Button=document.querySelector("#bu1");
Button.addEventListener('click',()=>{
    let input1 = input.value.trim();
    if(input1==""|| input1==null)
    {
        input.value="";
    }
    else{ 
    todos.push(input1);
    addItem(input1);
    console.log(todos);
    input.value="";
    }
})
function addItem(item){
    localStorage.setItem("todos",JSON.stringify(todos));
    let par=document.createElement("p");
    par.setAttribute("class","task");
    par.innerText=item;
    todosList.appendChild(par);
    par.addEventListener("click",()=>{
        par.classList.toggle("completed");
    })
    par.addEventListener('dblclick',()=>{
         todosList.removeChild(par);
          remove(item);
        console.log(todos);
    })
}
function remove(item){
    let index=todos.indexOf(item);
    if(index>-1){
        todos.splice(index,1);
        console.log(todos);
    }
    localStorage.setItem("todos",JSON.stringify(todos));
        
}