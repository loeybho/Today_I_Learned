/* -------------------------------------------- */
/*                     객체 1                     */
/* -------------------------------------------- */

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 -> 대부분 이 방식을 쓴다.

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "이정환", // -> key: value
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);
let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

//3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";

console.log(person);

//3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favfood"] = "choco";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person.favfood;
console.log(person);

//3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);

/* -------------------------------------------- */
/*                     객체 2                     */
/* -------------------------------------------- */

//1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "yellow",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

//2. 메서드
//-> 값이 함수인 프로퍼티

const person = {
  name: "이정환",
  //메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
