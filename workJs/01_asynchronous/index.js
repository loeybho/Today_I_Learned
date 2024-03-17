//setTimeout은 비동기 함수라 blocking하지 않고, 다음 console.log(1)이 바로 실행되는 것이다.

setTimeout(() => {
  console.log("2");
}, 3000);

console.log("1");
