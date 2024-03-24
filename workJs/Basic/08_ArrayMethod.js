// 6가지의 요소 조작 메서드

//1. push
//배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
// console.log(arr1);
// console.log(newLength);

//2. pop
//배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
// console.log(poppedItem);
// console.log(arr2);

//3. shift
//배열의 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3); // 1, [2, 3]

//4. unshift
//배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(arr4);
//*shift와 unshift는 인덱스를 수정한다는 점에서 더 오래 걸린다. 따라서 push나 pop을 사용하는 게 좋다.

//5. slice
//마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2);
let sliced2 = arr5.slice(2, 5);
let sliced3 = arr5.slice(-1);
// console.log(sliced);
// console.log(arr5);
// console.log(sliced2);
//원본 배열의 값 유지
//맨 끝의 숫자를 지정할 땐 +1 을 해줘야 한다.
//음수값은 뒤에서부터 시작된다.

//6. concat
//두개의 서로 다른 배열을 이어 붙어서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
// arr6 배열 뒤에 arr7 배열이 붙어서 새로운 배열로 반환.
