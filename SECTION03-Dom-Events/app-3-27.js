//Create element
const li = document.createElement("li");

//Add class
li.className = "collection-item";

//Add id
li.id = "new-item";

//Add attribute
li.setAttribute("title", "New-Item");

//Create text node and append
li.appendChild(document.createTextNode("Hello world"));

//Create new link element
const link = li.appendChild(document.createElement("a"));
//Add class
link.className = "delete-item secondary-content";
link.href = "#";
// Add icon html
link.innerHTML = `<i class="fa fa-remove"></i>`;
//Append li as child to ul
const ulSelector = document.querySelector("ul"); //걍 바꿔봄.
ulSelector.appendChild(li);

//Apend link into li
// li.appendChild(link);  위에만들때 해버렸네

console.log(li);
