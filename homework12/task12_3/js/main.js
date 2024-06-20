const inputEl = document.querySelector(".input");
const addBtnEl = document.querySelector(".add_btn");
const listContainer = document.querySelector(".todo_list");
let arr = [{ text: "Learn JavaScript" }, { text: "View lecture" }];

const addNewTodo = (newTodo) => {
  const todo = { text: newTodo.text };
  if (newTodo.text === "") {
    return;
  }
  arr.push(todo);
  const listItem = document.createElement("li");
  listItem.classList.add("todo_item");
  const pEl = document.createElement("p");
  pEl.classList.add("todo_text");
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("todo_btn");
  buttonEl.textContent = "Delete";
  pEl.textContent = newTodo.text;
  listItem.appendChild(pEl);
  listItem.appendChild(buttonEl);
  listContainer.appendChild(listItem);
};

const handleAddTodo = () => {
  const value = inputEl.value;
  addNewTodo({ text: value });
  inputEl.value = "";
};

addBtnEl.addEventListener("click", handleAddTodo);

const handleDeleteTodo = (event) => {
  const isDelete = event.target.classList.contains("todo_btn");
  if (!isDelete) {
    return;
  }
  const item = event.target.closest(".todo_item");
  arr.splice(arr.indexOf(item), 1);
  item.remove();
};

listContainer.addEventListener("click", handleDeleteTodo);
