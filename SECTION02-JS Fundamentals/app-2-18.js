//함수 선언 및 표현

//FUNCTION DECLARATIONS  함수 선언
function greet(firstNmae = 1, lastName = 2) {
  //   console.log("Hello");
  //   console.log(`Hello ${firstNmae} ${lastName}`);
  return `Hello ${firstNmae} ${lastName}`;
}
console.log(greet());
console.log(greet(4, 5));

//FUNCTION EXPRESSIONS
const square = function (x = 3) {
  return x * x;
};

console.log(square());
console.log(square(5));

//IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// (function () {
//   console.log("IIFE Ran..");
// })();

// (function (name) {
//   console.log(`Hello ${name}`);
// })(`hwan`);

const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id = 3) {
    console.log("Edit todo..", id);
  },
};

todo.delete = function () {
  console.log("Delete todo..");
};

todo.add();
todo.edit();
todo.edit(5);
todo.delete();
