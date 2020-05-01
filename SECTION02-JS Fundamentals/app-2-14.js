// 객체 리터럴

const person = {
  firstName: "Ahn",
  lastName: "sunghwan",
  age: 35,
  email: "ash@naver.com",
  hobbies: ["playGame", "programming"],
  address: {
    city: "Seoul",
    phone: "010-8969-0124",
    price: [10, "asdf"],
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
};

let val;

val = person;

//Get specific value
val = person.firstName; //Ahn  이 방법을 애용해라!
val = person["firstName"]; //Ahn
val = person.age; //35
val = person.hobbies[1]; //programming
val = person.address.phone; //'010-8959-0024
val = person.address.price[1]; //asdf
val = person.getBirthYear();

val = console.log(val);

const people = [
  { name: "hwan", age: 35 },
  { name: "sook", age: 36 },
  { name: "yujin", age: 2 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  console.log(people[i].name);
}
