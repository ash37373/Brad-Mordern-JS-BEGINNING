/* //6. console 
// Log to console
console.log("Hello World");
console.log(123);
console.log(true);
var greeting = "Hello";
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });

console.error("This is some error");
console.clear();
console.warn("This is a Warning");
console.time("Hello");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.timeEnd("Hello");

/* 
multi
line
comments
*/

// // var, let, const
// var name = "Ahn sunghwan";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// //Multi word vars
// var firstName = "Jone"; //Camel case
// var first_name = "Sara"; //Unserscore
// var FirstName = "Tom"; //Pascal case

//LET
// let name;
// name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

/* // CONST
const name = "Ahn";
console.log(name);
// Can not reassign
// name = "Sara";
// Have to assign a value
// const greeting;

const person = {
  name: "john",
  age: 30,
};

person.name = "Sara";

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(60);

// numbers = [1, 23, 4, 5];

console.log(numbers); */

/* 
// PRIMITIVE

//String
const name = "John Doe";
//Number
const age = 123;
// Boolean
const hasKids = true;
//Null
const car = null;
//Undefined
let test;

//REFERENCE TYPES - Objects
//Array
const hobbies = ["movies", "music"];
//Object literal
const address = {
  city: "seoul",
  age: 44,
};

const today = new Date();
console.log(today);
console.log(typeof today); 
*/

/* 타입 변환 
//2-9
let val;

//Number to string
val = String(555);
val = String(4 + 4);
//Bool to string
val = String(true);
//Date to string
val = String(new Date());
//Array to string
val = String([1, 2, 3, 4]);

//toString()
val = (5).toString();
val = true.toString();

//String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");
val = Number([1, 2, 3]);

val = parseInt("100.30");
val = parseFloat("100.30");

//Output
// console.log(val);
// console.log(typeof val);

const val1 = String(5);
const val2 = 6;
// const sum = val1 + val2;
// const sum = Number(val1 + val2);
const sum = parseInt(val1 + val2);

console.log(sum);
console.log(typeof sum); 
*/

/* 
//2-10 숫자와 수학객체
const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 - num2;

val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);
 */

/* 
 //  2-11 문자열 메소드 및 연결
const firstName = "William";
const lastName = "Jhonson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design, web development, programming";

let val;

val = firstName + lastName;
//concatenation
val = firstName + " " + lastName;

//Append
val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firstName + " and I am " + age;

//Length
val = firstName.length;

//concat
val = firstName.concat(" ", lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//indexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

//chartAt() - 문자열내 해당자리 문자
val = firstName.charAt("0");
//get last char
val = firstName.charAt(firstName.length - 1);

//substring
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split()
val = str.split("");
val = str.split(" ");
val = str.split("  ");
val = tags.split(",");

//replace()
val = str.replace("there", "Jack");

//include()
val = str.includes("foo");
val = str.includes("Brad");

val = console.log(val);
 */

/*  
//  2-12 템플릿 리터럴
const name = "yujin";
const age = "36";
const job = "Web developer";
const city = "Seoul";
let html;

//Without template strings (es5)
html =
  "<ul> " +
  "<li>Name : " +
  name +
  "</li><li>Age : " +
  age +
  "</li><li>Job : " +
  job +
  "</li><li>City : " +
  city +
  "</li></ul>";

function hello() {
  return "hello";
}

//with template strings (es6)
html = `
  <ul>
    <li>Name : ${name}</li>
    <li>Age : ${age}</li>
    <li>Job : ${job}</li>
    <li>City : ${city}</li>
    <li>${3 + 5}</li>
    <li>${hello()}</li>
    <li>${age < 10 ? "young" : "old"}</li>
  </ul>
  `;

document.body.innerHTML = html;
 */
