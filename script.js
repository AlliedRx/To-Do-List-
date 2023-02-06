const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const tasksList = document.querySelector("#tasks");

form.addEventListener("submit", addTask);
tasksList.addEventListener("click", completeTask);

function addTask(e) {
  e.preventDefault();

  if (!taskInput.value) return;

  const taskHTML = `
    <li class="task">
      <input type="checkbox">
      <span class="task-text">${taskInput.value}</span>
      <button class="delete-task">Delete</button>
    </li>
  `;

  tasksList.insertAdjacentHTML("beforeend", taskHTML);
  taskInput.value = "";
}

function completeTask(e) {
  if (!e.target.matches("input")) return;

  const task = e.target.parentElement;
  task.querySelector(".task-text").classList.toggle("completed");
}
