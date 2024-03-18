// https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("마무리 해볼까요");
  });
