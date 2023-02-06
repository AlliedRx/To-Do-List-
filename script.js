const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const tasksList = document.querySelector("#tasks");

form.addEventListener("submit", addTask);
tasksList.addEventListener("click", completeTask);

loadTasks();

function addTask(e) {
  e.preventDefault();

  if (!taskInput.value) return;

  const task = {
    text: taskInput.value,
    completed: false
  };

  let tasks = getTasksFromLocalStorage();
  tasks.push(task);
  setTasksInLocalStorage(tasks);

  renderTask(task);
  taskInput.value = "";
}

function completeTask(e) {
  if (!e.target.matches("input")) return;

  const task = e.target.parentElement;
  const taskIndex = Array.from(task.parentElement.children).indexOf(task);

  let tasks = getTasksFromLocalStorage();
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  setTasksInLocalStorage(tasks);

  task.querySelector(".task-text").classList.toggle("completed");
}

function loadTasks() {
  let tasks = getTasksFromLocalStorage();

  tasks.forEach(task => {
    renderTask(task);
  });
}

function renderTask(task) {
  const taskHTML = `
    <li class="task">
      <input type="checkbox" ${task.completed ? "checked" : ""}>
      <span class="task-text ${task.completed ? "completed" : ""}">${task.text}</span>
      <button class="delete-task">Delete</button>
    </li>
  `;

  tasksList.insertAdjacentHTML("beforeend", taskHTML);
}

function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function setTasksInLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
