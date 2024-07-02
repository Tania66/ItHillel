const formEl = document.querySelector(".js--form");
const inputEl = document.querySelector(".js--form__input");
const todoList = document.querySelector(".js--todos-wrapper");
const itemTodo = document.querySelector(".todo-item");
const todos = JSON.parse(localStorage.getItem("todolist")) || [];

function createTodoList() {
  todoList.innerHTML = [...todos]
    .map(
      (todo) =>
        `
    <li  class="todo-item ${todo.completed ? "todo-item--checked" : ""}"> 
        <input type="checkbox" onchange="toggleTodoCompleted(${todo.id})" ${
          todo.completed ? "checked" : ""
        }>
             <span class="todo-item__description">${todo.description}</span>
             <button class="todo-item__delete" onclick="deletedTodo(${
               todo.id
             })" >Видалити</button>
    </li>`
    )
    .join("");
}

createTodoList();
const handleAddTodo = (newTodo) => {
  const todo = {
    description: newTodo,
    completed: false,
    id: Math.random() * 100,
  };
  todos.push(todo);
  createTodoList();
};

const handleSubmit = (event) => {
  event.preventDefault();
  const newTodo = inputEl.value.trim();
  if (newTodo === "") return alert("Please enter todoshky)");
  handleAddTodo(newTodo);
  inputEl.value = "";
  localStorage.setItem("todolist", JSON.stringify(todos));
};

function deletedTodo(id) {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
  localStorage.setItem("todolist", JSON.stringify(todos));
  createTodoList();
}

function toggleTodoCompleted(id) {
  todos.map((todo) => {
    if (todo.id !== id) {
      return todo;
    }
    todo.completed = !todo.completed;
    localStorage.setItem("todolist", JSON.stringify(todos));
    createTodoList();
  });
}

formEl.addEventListener("submit", handleSubmit);
