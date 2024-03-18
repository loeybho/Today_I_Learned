// callback 으로 들어가는 resolve와 reject는 executor 함수라고 불린다.
function getData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "철수" };
      // const data = null;
      if (data) {
        console.log("네트워크 요청 성공!");
        resolve(data);
      } else {
        reject(new Error("네트워크 문제!"));
      }
    }, 1000);
  });
  return promise;
}

// setTimeout(() => {
//   console.log(promise);
// }, 2000);

// getData()
//   .then((data) => {
//     const name = data.name;
//     console.log(`${name}님 안녕하세요`);
//   })
//   .catch((error) => {
//     console.log("완벽한 에러 처리를 했어요");
//   })
//   .finally(() => {
//     console.log("마무리 작업");
//   });

// Promise chaining
const promise = getData();
promise
  .then((data) => {
    console.log(data);
    return "hello";
  })
  .then((data) => {
    console.log(data);
  });

// promise
//   .then((data) => getData())
//   .then((data) => getData())
//   .then((data) => getData())
//   .then(console.log);

// 비동기 콜백: 콜백 지옥
// getData((data) => {
//   getData((data) => {
//     getData((data) => {
//       //..
//     });
//   });
// });
