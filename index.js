var create = document.getElementById("create");
var add = document.getElementById("add");
var remove = document.getElementById("remove");
var input = document.getElementById("input");
var alert = document.getElementById("alert");
var todo1 = document.getElementById("todo1");
var todo2 = document.getElementById("todo2");
var todo3 = document.getElementById("todo3");
var todo4 = document.getElementById("todo4");
var todo5 = document.getElementById("todo5");
var todoArray = [todo1, todo2, todo3, todo4, todo5];
var set = 0;

create.onclick = function createItem(){
  if(set >= 5){
    remove.style.display = "grid";
    add.style.display = "none";
    create.textContent = "5 items Max";
  }
  else{
    add.style.display = "grid";
    input.style.display = "grid";
  }
    
}

remove.onclick = function removeItem(){
  set -= 1;
  todoArray[set].textContent = "";
  todoArray[set].style.listStyle = "none";
  create.textContent = "Create New Entry";
  if (set == 0){
    remove.style.display = "none";
  }
}

add.onclick = function addItem(){
  if (input.value == ""){
    alert.textContent = "Field must not be blank";
  }
  else{
    alert.textContent = "";
    todoArray[set].textContent = input.value;
    todoArray[set].style.listStyle = "disc"
    set++;
    input.value = "";
    add.style.display = "none";
    input.style.display = "none";
  }
 }

