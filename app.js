document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-items");
  const taskForm = document.getElementById("task-form");
  const taskDescriptionInput = document.getElementById("task-description");

  taskForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get the task description from the input field
      const taskDescription = taskDescriptionInput.value;

      // Create a new task item
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
          <input type="checkbox" class="task-checkbox">
          <span>${taskDescription}</span>
          <button class="delete-button">Delete</button>
      `;

      // Add the task item to the task list
      taskList.appendChild(taskItem);

      // Clear the input field
      taskDescriptionInput.value = "";
  });

  // Handle task deletion
  taskList.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-button")) {
          event.target.parentElement.remove();
      }
  });

  // Handle task completion
  taskList.addEventListener("change", function (event) {
      if (event.target.classList.contains("task-checkbox")) {
          event.target.nextElementSibling.style.textDecoration = event.target.checked ? "line-through" : "none";
      }
  });
});
