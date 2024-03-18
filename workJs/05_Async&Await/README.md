# Async & Await

- 비동기적인 작업을 동기적으로 보기 편하게 작성할 수 있다.
- Promise를 한단계 더 감싸서 보기 편하게 만들어 줄 문법일 뿐이다. 전혀 새로운 방식이 아니다. Promise에서 Promise chaining을 만들 수 있었다. Async & Await을 쓴다면, 복잡한 chaining 문법 없이 사용할 수 있다.
- Async가 붙으면 항상 promise 객체를 반환한다.

```
async function getUser(){
  await returnData();
  return '별코딩';
}
```

```
async function getData() {
  const user = await getUser();
  const todo = await getTodo();
  console.log(`${user}님 ${todo}를 하세요`);
}
getData();

```

-> async와 await을 사용하면 비동기 작업을 처리하는 코드를 마치 동기적으로 수행하는 것처럼 보기 편하게, 위에서 아래로 작성할 수 있다.

## 에러 처리

기본 에러 메세지(throw new Error 사용)

```
async function getUser() {
  throw new Error("에러가 발생했어요!");
  await networkRequest();
  return "별코딩";
}
```
