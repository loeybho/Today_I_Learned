// Promise를 통한 온라인 쇼핑몰 시나리오

//1. 로그인
function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username) {
        resolve(username);
      } else {
        reject(new Error("아이디를 입력해주세요!"));
      }
    }, 1000);
  });
}

//2. 장바구니에 넣기
function addToCart(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product) {
        resolve(product);
      } else {
        reject(new Error("장바구니에 넣을 상품이 없어요!"));
      }
    }, 1000);
  });
}

// addToCart("감자").then((product) => {
//   console.log(`${product}를 장바구니에 넣었어요`);
// });

//3. 결제하기
function makePayment(cardNumber, product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cardNumber.length !== 16) {
        reject(new Error("잘못된 카드 번호 입니다."));
        return;
      }

      if (!product) {
        reject(new Error("결제할 상품을 넣어주세요!"));
        return;
      }

      resolve(product);
    }, 1000);
  });
}

login("")
  .catch(() => "익명")
  .then((username) => addToCart(""))
  .catch(() => "옥수수")
  .then((product) => makePayment("1234123412341234", product))
  .then(console.log)
  .catch((error) => console.log(error.message))
  .finally(() => console.log("마무리 작업"));

//콜백 지옥이 생길 수 있다.

// login("별코딩", (username) => {
//   console.log(`${username}님 안녕하세요`);
//   addToCart("감자", (product) => {
//     console.log(`${product}를 장바구니에 넣었습니다.`);
//     makePayment("00000000", product, (cardNumber, item) => {
//       console.log(`${cardNumber.slice(0, 6)}로 ${product}를 구매했습니다.`);
//     });
//   });
// });
