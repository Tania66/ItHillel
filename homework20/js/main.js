const inputEl = document.querySelector(".js--form__input");
const todoList = document.querySelector(".js--todos-wrapper");
const todos = JSON.parse(localStorage.getItem("todolist")) || [];

function createTodoList() {
  todoList.innerHTML = [...todos]
    .map(
      (todo) =>
        `
      <li  class=" todo-item ${
        todo.completed ? "todo-item--checked" : ""
      } data-toggle="modal" data-target="#todoModal">
          <input type="checkbox" id=${todo.id} ${
          todo.completed ? "checked" : ""
        }>
               <span class="todo-item__description">${todo.description}</span>
               <button class="todo-item__delete" id=${todo.id}>Видалити</button>
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

$(document).ready(function () {
  $(".js--form").on("submit", function (event) {
    event.preventDefault();
    const newTodo = inputEl.value.trim();
    if (newTodo === "") return alert("Please enter todoshky)");
    handleAddTodo(newTodo);
    inputEl.value = "";
    localStorage.setItem("todolist", JSON.stringify(todos));
  });

  $(".todo-item__delete").on("click", function () {
    const clickId = $(this).attr("id");
    const index = todos.findIndex((todo) => todo.id === Number(clickId));
    if (index !== -1) {
      todos.splice(index, 1);
    }
    localStorage.setItem("todolist", JSON.stringify(todos));
    createTodoList();
  });

  $("input[type=checkbox]").on("change", function () {
    const checkId = $(this).attr("id");
    todos.map((todo) => {
      if (todo.id !== Number(checkId)) {
        return todo;
      }
      todo.completed = !todo.completed;
      localStorage.setItem("todolist", JSON.stringify(todos));
      createTodoList();
    });
  });

  $(".todo-item__description").on("click", function () {
    $("#textTodo").text($(this).text());
    $("#todoModal").modal("show");
  });
});
