//DOM 탐색 node

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

//Get child nodes   child는 텍스트까지 다나옴
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[3];
val = list.childNodes[3].nodeName;
val = list.childNodes[3].nodeType;

//nodeType 표시는 아래와 같은 숫자로
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//Get children element nodes
val = list.children;
val = list.children[1];
list.children[3].textContent = "Hello";

// Children of children
list.children[4].children[0].id = "test-link";
val = list.children[4].children[0];

//First child
val = list.firstChild;
val = list.firstElementChild;

//Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next sibling  -> 형제
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//Get prev sivling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
