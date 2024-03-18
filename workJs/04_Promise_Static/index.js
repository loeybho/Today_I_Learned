function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("철수");
      reject(new Error("에러: 이름이 없어요"));
    }, 1000);
  });
}

function getTodo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("밥 먹기");
      // reject(new Error("에러: 할일이 없어요"));
    }, 2000);
  });
}

// Promise.all() - getName을 수행하는 동시에 getTodo를 수행한다. (동시에 실행했으니 총 2초가 걸린다)
// const promise = Promise.all([getName(), getTodo()]);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.allSettled()
// const promise = Promise.allSettled([getName(), getTodo()]);
// promise.then((data) => {
//   console.log(data);
// });

// Promise.any()
// const promise = Promise.any([getName(), getTodo()]);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.race
// 가장 빨리 완료된 결과를 반환된 promise로 넘겨준다.
const promise = Promise.race([getName(), getTodo()]);
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
