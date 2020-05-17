//REPLACE ELEMENT

//Create Element
const newHeading = document.createElement("h2");
// console.log(newHeading);
//Add id
newHeading.id = "task-title";
//New text node
newHeading.appendChild(document.createTextNode("New Task List"));

//Get the old heading
const oldHeading = document.querySelector("#task-title");
// console.log(oldHeading);

//Parent
const parentOfHeading = document.querySelector(".card-action");
// console.log(parentOfHeading);

//Replace
parentOfHeading.replaceChild(newHeading, oldHeading);

//
//
//
//REMOVE ELEMENT
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");
//REMOVE list item
lis[0].remove();
//REMOVE child element
list.removeChild(lis[3]);

//
//
// CLAsSES & ATTRIBUTE
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];
// console.log(firstLi);
// console.log(link);

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("testing");
// console.log(link.classList);
link.classList.remove("testing");
// console.log(link.classList);

//Attribute
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;
console.log(val);
