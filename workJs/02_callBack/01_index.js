// 비동기 콜백을 통한 온라인 쇼핑몰 시나리오
// 아래는 모두 네트워크 통신을 해야하기 때문에 비동기적으로 작동한다.

//1. 로그인
function login(username, callback) {
  setTimeout(() => {
    callback(username);
  }, 1000);
}

//2. 장바구니에 넣기
function addToCart(product, callback) {
  setTimeout(() => {
    callback(product);
  }, 1000);
}

//3. 결제하기
function makePayment(cardNumber, product, callback) {
  setTimeout(() => {
    callback(cardNumber, product);
  }, 1000);
}
makePayment("00000000000", "감자", (cardNumber, product) => {
  console.log(`${cardNumber.slice(0, 6)}로 ${product}를 구매했습니다.`);
});

//콜백 지옥이 생길 수 있다.

login("별코딩", (username) => {
  console.log(`${username}님 안녕하세요`);
  addToCart("감자", (product) => {
    console.log(`${product}를 장바구니에 넣었습니다.`);
    makePayment("00000000", product, (cardNumber, item) => {
      console.log(`${cardNumber.slice(0, 6)}로 ${product}를 구매했습니다.`);
    });
  });
});
