// // document.getElementsByClassName  이건 전역

// const items = document.getElementsByClassName("collection-item");
// console.log(items);

// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// //이건 범위.예시는UL내의 리스트
// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// console.log(listItems);

// //document.getElementsByTagName
// let lis = document.getElementsByTagName("li");
// console.log(lis);

// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[3].textContent = "Hello";

// //Conver HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();
// lis.forEach(function (li) {
//   console.log(li);
//   console.log(li.className);
// });
// console.log(lis);

//document.querySelectorAll (배열로 변환해줄필요가 없다)
const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function (item, index) {
  item.textContent = `${index} : Hello`;
});

console.log(items);

//연습으로 홀짝 배경색 변경해보자
const liOdd = document.querySelectorAll("li:nth-child(Odd)");
const liEven = document.querySelectorAll("li:nth-child(Even)");

//짝수는 foreach로.
liOdd.forEach(function (li, index) {
  li.style.background = "red";
});
//홀수는 그냥 for로
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#ccc";
}
