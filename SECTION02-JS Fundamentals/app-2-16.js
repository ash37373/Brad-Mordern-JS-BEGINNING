/* //2-16 if문

if(something){
    do something
}else{
    do something else
}
 */

const id = "100";

//EQUAL TO
if (id == 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}

//NOT EQUAL TO
if (id != 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}

//EQUAL TO VALUE & TYPE
if (id === 100) {
  console.log("correct");
} else {
  console.log("incoorect");
}

//NOT EQUAL TO VALUE & TYPE
if (id !== 100) {
  console.log("correct");
} else {
  console.log("incoorect");
}

//Test if undefinde
if (typeof id !== "undifined") {
  console.log(`The id is ${id}`);
} else {
  console.log("NO ID");
}

//GREATER OR LESS THAN
if (id <= 50) {
  console.log("correct");
} else {
  console.log("incoorect");
}

//IF ELSE
const color = "yellow";

if (color === "red") {
  console.log("Color is red");
} else if (color === "pink") {
  console.log("Color is pink");
} else {
  console.log("Color is not red or blue");
}

//LOGICAL OPERATORS
const name = "juni";
const age = 28;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a Child`);
} else if (age >= 13 && age <= 17) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is a adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can't run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

//TERNARY OPERATOR
console.log(id === 100 ? `correct` : `incorrect`);
