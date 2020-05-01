//2-13 배열 및 배열 방법
//Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Banana", "Apple", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

//Get array length
val = numbers.length; // 7
//Check if is array
val = Array.isArray(numbers2); // true
//Get single value
val = numbers2[3]; // 76
val = mixed[0]; // 22
//Insert into array
numbers[2] = 100; //33->100
//Find index of value
val = numbers.indexOf(36); //5

//MUTATING ARRAYS
//Add on to end
numbers.push(2000); //  [43, 56, 100, 23, 44, 36, 5, 2000]
//Add on to front
numbers.unshift(1000); //  [1000, 43, 56, 100, 23, 44, 36, 5, 2000]
//Take off from end
numbers.pop(); //  [1000, 43, 56, 100, 23, 44, 36, 5]
//Take off from front
numbers.shift(); //  [43, 56, 100, 23, 44, 36, 5]
//Splice values
numbers.splice(1, 3); // [43, 44, 36, 5]
//Reverse
numbers.reverse(); //  [5, 36, 44, 43]

//Concatenate array
val = numbers.concat(fruit); //  [5, 36, 44, 43, "Banana", "Apple", "Orange", "Pear"]

//Sorting arrays
val = fruit.sort();
val = numbers.sort();
//Use the "Compare function"
val = numbers.sort(function (x, y) {
  return x - y;
}); //[5, 36, 43, 44]
// x에서 y를 뺀 결과가 음수면 x가 y보다 작고, 0이면 같다.
// sort메소드는 return 값이 음수,양수,0인지에 따라서 순서를 정한다.

//Reverse sort
val = numbers.sort(function (a, b) {
  return b - a;
}); //[44, 43, 36, 5]

//Find
function over40(num) {
  return num > 40 && num < 44;
}
val = numbers.find(over40);

console.log(numbers);
console.log(val);
