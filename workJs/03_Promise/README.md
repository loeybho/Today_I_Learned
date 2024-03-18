# Promise

- 비동기 처리에 사용되는 자바스크립트 객체
- 비동기 작업이 맞이할 성공 혹은 실패를 나타낸다.

## Promise의 3가지 상태

Pending(대기) -> Fulfilled(성공) -> Rejected(실패)

1. Pending - 대기

- state: pending
- Result: undefined

2. Fulfilled - 성공

- state: fulfilled
- Result: 결과값

3. Rejected - 실패

- state: Rejected
- Result: Error

## Promise의 기본 API

```
function getData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "철수" };
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

const promise = getData();

setTimeout(() => {
  console.log(promise);
}, 2000);


```

## Promise의 후처리

then(), catch(), finally()

### then()

- Promise 작업 성공 시 후속 작업을 실행
- then() 메서드는 성공 콜백 함수를 매개변수로 받는다.
- promise가 완료될 때까지 기다렸다가 완료되면, 콜백함수를 호출해 준다.

```
const promise = new Promise((resolve, reject) => {
  // 비동기 작업
  setTimeout(() => {
    resolve("작업 성공!");
  }, 1000);
});

promise.then((result) => {
  // 후처리: 작업 결과 출력
  console.log(result); // "작업 성공!"
});
```

### catch()

- Promise 작업 실패 시 후속 작업을 실행
- catch() 메서드는 실패 콜백 함수를 매개변수로 받는다.
- 실패 콜백함수는 Promise 작업의 에러 객체를 인수로 받는다.

```
const promise = new Promise((resolve, reject) => {
  // 비동기 작업
  setTimeout(() => {
    reject(new Error("작업 실패!"));
  }, 1000);
});

promise.catch((error) => {
  // 후처리: 에러 처리
  console.log(error.message); // "작업 실패!"
});
```

### finally()

- Promise 작업 성공 여부에 관계 없이 항상 실행되는 후속 작업을 정의
- then() 또는 catch() 메서드 이후에 finally() 메서드를 사용할 수 있다.
- finally() 메서드는 콜백 함수를 매개 변수로 받는다.

```
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("작업 성공!");
  }, 1000);
});

promise.then((result) => {
  // 후처리: 작업 결과 출력
  console.log(result); // "작업 성공!"
}).finally(() => {
  // 후처리: 리소스 해제
  console.log("리소스 해제!");
});
```
