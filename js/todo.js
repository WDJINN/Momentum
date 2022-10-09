const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos =[];
const TODOS_KEY = "todos";

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const delIcon = document.createElement("span");
  delIcon.className='material-icons';
  delIcon.innerText = 'delete';
  // const button = document.createElement("button");
  // button.innerText = '❌';
  li.appendChild(span);
  li.appendChild(delIcon);
  toDoList.appendChild(li);
  delIcon.addEventListener("click", deleteToDo)
};

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ""; //submit후에 빈칸이 되도록 함.
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
  toDos = parsedToDos;
};


toDoForm.addEventListener("submit", handleToDoSubmit);