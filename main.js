
// Select the input box, add button, and list container elements
const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

// Function to add a task to the list
function addTask() {
  // Check if the input box is empty
  if (inputBox.value.trim() === "") {
    alert("Please enter a task!"); // Alert user if no task is entered
  } else {
    // Create a new list item (li) element
    let li = document.createElement("li");
    li.textContent = inputBox.value; // Set the text of the list item
    listContainer.appendChild(li); // Add the list item to the list container

    // Create a span element to represent the delete button
    let span = document.createElement("span");
    span.textContent = "\u00d7"; // Unicode for the multiplication (×) symbol
    li.appendChild(span); // Add the delete button to the list item
  }

  // Clear the input box for the next task
  inputBox.value = "";

  // Save the updated task list to localStorage
  saveData();
}

// Add an event listener to handle clicks in the list container
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      // Toggle the 'checked' class for list items when clicked
      e.target.classList.toggle("checked");
      saveData(); // Save the updated state to localStorage
    } else if (e.target.tagName === "SPAN") {
      // Remove the parent list item if the delete button (span) is clicked
      e.target.parentElement.remove();
      saveData(); // Save the updated state to localStorage
    }
  },
  false
);

// Function to save the current task list to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); // Save list as a string
}

// Function to load the task list from localStorage and display it
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || ""; // Set the saved list
}

// Call showTask to display the stored tasks when the page loads
showTask();