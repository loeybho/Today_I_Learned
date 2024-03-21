// 단락 평가(Short-circuit Evaluation)이란?
// 논리연산자(|| 와 &&)에서 연산 순서를 이용하여 코드를 간결하게 만드는 기술. 왼쪽 피연산자부터 오른쪽 피연산자까지 순서대로 평가되고, 평가가 완료되면 다음 피연산자들은 아예 접근조차 하지 않음.
let varA = false;
let varB = true;
// AND 연산자
// console.log(varA && varB);
// OR 연산자
// console.log(varB || varA);

function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

console.log(returnTrue() || returnFalse());

//단락 평가 활용 사례 - 기존 함수
function printName(person) {
  if (!person) {
    console.log("person에 값이 없음");
    return;
  }
  console.log(person.name);
}

//단락 평가 활용 사례 - 단락 평가 적용
function printNameVer2(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printNameVer2(); // person이 undefined
printNameVer2({ name: 1 }); // 객체값을 정상적으로 전달했을 때
