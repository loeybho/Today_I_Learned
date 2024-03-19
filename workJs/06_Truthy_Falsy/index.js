//참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징

if (123) {
  // Truthy한 값
  console.log("123 is true");
} else {
  console.log("123 is false");
}

if (undefined) {
  console.log("undefined is true");
} else {
  console.log("undefined is false");
}

//1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값
// -> 7가지의 falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t4) {
  console.log("Truthy");
}

//3. 활용 사례

function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);
