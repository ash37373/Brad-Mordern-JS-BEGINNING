//단일 요소에 대한 DOM 선택기

// //document.getElementById()
// console.log(document.getElementById("task-title"));

// //Get things from the element
// console.log("id :", document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// const taskTitle = document.getElementById("task-title");

// //Change Styling
// taskTitle.style.background = "red";
// taskTitle.style.color = "white";
// // taskTitle.style.display = "none";

// //Change content
// taskTitle.textContent = "Task list";
// taskTitle.innerText = "Task list view";
// taskTitle.innerHTML = "<span style='color:blue'>Todo</span>";

// document.querySelector()

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "brown";
document.querySelector("li:nth-child(4)").textContent = "Hellooooooooooooo";
document.querySelector("li:nth-child(odd)").style.background = "gray";
document.querySelector("li:nth-child(even)").style.background = "green";
