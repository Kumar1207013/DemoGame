// DOM
import { taskOperations } from "./models/task_operations.js";
window.addEventListener("load", init);
function init() {
  bindEvents();
  showCounts();
}
function bindEvents() {
  document.querySelector("#add").addEventListener("click", addTask);
}

function toggleDelete() {
  console.log("Toggle...", this.getAttribute("task-id"));
  const icon = this;
  const id = icon.getAttribute("task-id");
  const tr = icon.parentNode.parentNode;
  tr.classList.toggle("alert-danger");
  taskOperations.mark(id);
  showCounts();
}

function edit() {
  console.log("Edit...");
}

function showCounts() {
  document.querySelector("#total").innerText = taskOperations.tasks.length;
  document.querySelector("#marktotal").innerText = taskOperations.countMarked();
  document.querySelector("#unmarktotal").innerText =
    taskOperations.countUnmarked();
}

function createIcon(className, fn, id) {
  //  <i class="fas fa-edit"></i>
  let icon = document.createElement("i");
  icon.className = `fas fa-${className} me-3 hand`;
  icon.addEventListener("click", fn);
  icon.setAttribute("task-id", id);
  return icon;
}

function addTask() {
  // Read the Fields
  let id = document.querySelector("#id").value;
  let name = document.querySelector("#name").value;
  let desc = document.querySelector("#desc").value;
  let date = document.querySelector("#date").value;
  let url = document.querySelector("#url").value;

  const task = taskOperations.add(id, name, desc, date, url);
  printTask(task);
  showCounts();

  // Store in Object and then Object goes in Array
}

function printTask(task) {
  const tbody = document.querySelector("#tasks");
  const tr = tbody.insertRow();
  let id = task.id;
  // Object Traverse
  let cellIndex = 0;
  for (let key in task) {
    if (key == "isMarked") {
      continue;
    }
    let value = task[key];
    let td = tr.insertCell(cellIndex);
    td.innerText = value;
    cellIndex++;
  }
  let td = tr.insertCell(cellIndex);
  td.appendChild(createIcon("edit", edit, id));
  td.appendChild(createIcon("trash", toggleDelete, console.log(id)));
}
