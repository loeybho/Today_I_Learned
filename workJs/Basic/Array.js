// 여러개의 값을 순차적으로 담을 수 있는 자료형
// 배열은 length와 index property를 갖는다.
//1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 -> 대부분 사용

let arrC = [1, 2, 3, true, "hello", {}, null, undefined];
// console.log(arrC);

//2. 배열 요소 접근
let item1 = arrC[0];
// console.log(item1);

//배열의 순서는 0번부터 시작한다!

// const arr = [2, 4, 6];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

function linearSearch(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 3));

// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다.

//splice
const splicehe = [1, 2, 3, 4, 5, 6, 7, 8];
splicehe.splice(2, 3);
// console.log(splicehe);

// 원본 배열을 직접 변경하는 메서드
//1. push
const arrPush = [1];
arrPush.push(2);
console.log(arrPush);

// 원본 배열을 변경하지 않고, 새로운 배열을 생성하여 반환하는 메서드
// 1. concat
const result = arrPush.concat(3);
console.log(result);
