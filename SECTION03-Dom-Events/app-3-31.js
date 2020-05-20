const form = document.querySelector("form");
const taskInput = document.getElementById("task");

//Clear input
taskInput.value = "";

form.addEventListener("submit", runEvent);

//Keydown;
// taskInput.addEventListener("keydown", runEvent);
//keyup;
// taskInput.addEventListener("keyup", runEvent);
//keypress
// taskInput.addEventListener("keypress", runEvent);
//focus
// taskInput.addEventListener("focus", runEvent);
//Blur
// taskInput.addEventListener("blur", runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
// select.addEventListener("change", runEvent);
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  /* if (e.type === "keydown") {
    document.body.style.background = "red";
  }
  if (e.type === "keyup") {
    document.body.style.background = "blue";
  } */

  // console.log(taskInput.value);

  e.preventDefault();
}
