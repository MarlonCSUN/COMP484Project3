// Task 1: Verification Log
console.log("Startup Manager Started");
// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!";
/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle");
/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

function highlightListItems() {
    document.querySelectorAll('li').forEach(item => {
        item.style.color = "blue";
    });
}
// Call the function to apply the changes on load
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].

// Task 5: Create a function named toggleStatus()
function toggleStatus(e) {

    // Task 6: Inside toggleStatus(), use preventDefault() to stop the default behavior
    e.preventDefault();

    // Task 5: Use classList.toggle() to add/remove the 'hidden' class on the statusOutput element 
    statusOutput.classList.toggle("hidden");

    // Task 7: Apply direct style changes to the mainTitle element based on the visibility of statusOutput
    if (statusOutput.classList.contains("hidden")) {
        mainTitle.style.backgroundColor = "";
    } else {
        mainTitle.style.backgroundColor = "yellow";
        // Task 8: Call createTimestamp() at the end of toggleStatus() to add a timestamp each time the status is visible
        createTimestamp();
    }
}
// Task 8: Create a function named createTimestamp() that creates a new <span> element, sets its innerHTML to the current time 
function createTimestamp() {
        const span = document.createElement("span");
        span.innerHTML = new Date().toLocaleTimeString();
        statusOutput.appendChild(span);
    }

// Task 5: Add an event listener to the toggleButton to call toggleStatus() on click.
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].

function startFlashing() {
    intervalId = setInterval(() => {
        controlPanel.classList.toggle("hidden");
    }, 500);
}

function stopFlashing() {
    clearInterval(intervalId);
    controlPanel.classList.remove("hidden"); // Ensure it's visible when stopped
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);