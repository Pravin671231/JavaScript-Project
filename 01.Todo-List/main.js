const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `<label>
<input type="checkbox">
<span>${task}</span>
</label>
<span class="edit-btn">Edit</span>
<span class="delete-btn">Delete</span>`;

  listContainer.appendChild(li);
  inputBox.value = "";

  const checkbox = li.querySelector("input");
  const editBtn = li.querySelector(".edit-btn");
  const taskSpan = li.querySelector("span");
  const deleteBtn = li.querySelector(".delete-btn");

  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
  });

  //edit btn event
  editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");

      checkbox.checked = false;
      updateCounters();
    }
  });

  deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure uou want to delete this task ?")) li.remove();
    updateCounters();
  });
  updateCounters();

  //update Task Counters
  function updateCounters() {
    const completedCounter = document.getElementById("completed-counter");
    const uncompletedCounter = document.getElementById("uncompleted-counter");

    const completedTasks =
      listContainer.querySelectorAll("li.completed").length;
    const totalTasks = listContainer.querySelectorAll("li").length;
    const uncompletedTasks = totalTasks - completedTasks;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
  }
}
