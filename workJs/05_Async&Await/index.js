//Fetch API - 서버로부터 데이터를 받아올 때 사용하는 API
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(response);
  console.log(data);
}

fetchData();

// function networkRequest() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// }

// async function getUser() {
//   throw new Error("에러가 발생했어요!");
//   await networkRequest();
//   return "별코딩";
// }

// async function getTodo() {
//   await networkRequest();
//   return ["청소하기", "밥 먹기"];
// }

// async function getData() {
//   let user;
//   try {
//     user = await getUser();
//   } catch (error) {
//     console.log(error.message);
//     user = "별벼리";
//   }
//   const todo = await getTodo();
//   console.log(`${user}님 ${todo}를 하세요`);
// }

// getData();
