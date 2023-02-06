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
