function greetToUser(greet) {
  const name = "오별";
  greet(name);
}

function greetInKorean(name) {
  console.log(name + "님, 안녕하세요");
}

function greetInEnglish(name) {
  console.log("Hi, " + name);
}

greetToUser(greetInEnglish);
