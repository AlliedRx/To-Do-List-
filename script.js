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
const form = document.getElementById("form");
const taskInput = document.getElementById("task");
const list = document.getElementById("list");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const task = taskInput.value;
  const li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);
  taskInput.value = "";
  saveTasks();
});

function loadTasks() {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    const tasksArray = JSON.parse(tasks);
    tasksArray.forEach(function(task) {
      const li = document.createElement("li");
      li.textContent = task;
      list.appendChild(li);
    });
  }
}

function saveTasks() {
  const tasks = [];
  for (let i = 0; i < list.children.length; i++) {
    tasks.push(list.children[i].textContent);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

loadTasks();
