//Event Bubbling & Delegation

//Event Bubbling
// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("card title");
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("card content");
// });

// document.querySelector(".card").addEventListener("click", function () {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function () {
//   console.log("col");
// });

//Event Delegation
// const delItem = document.querySelector(".delete-item"); 첫번째 엘리먼트만 선택됨. 부모를 이용해야함.
// delItem.addEventListener("click", deleteItem);


function deleteItem(e) {
  //   if (e.target.parentElement.className === "delete-item secondary-content") {
  //     console.log("delete item");
  //   }
  //위 경우는 클래스를 여러개 가지고있는 경우 모든 클래스를 다 써야해서 좀 별로.

  //아래의 경우는 클래스리스트중 클래스명포함일경우 실행. 이게더 깔끔
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove(); //실제 지워보자.
  }
}
