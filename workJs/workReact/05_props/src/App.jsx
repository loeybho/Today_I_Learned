import Header from "./Header";

function App() {
  const title = "React Props";
  let list = [
    { _id: 1, title: "리그오브 레전드", done: false },
    { _id: 2, title: "영화 보기", done: false },
    { _id: 3, title: "던파", done: false },
  ];

  return (
    <div id="app">
      <div>
        <Title title={title} />
        <TodoList list={list} />
      </div>
    </div>
  );
}

function Title({ title = "Default Title" }) {
  return (
    <div>
      <h1>Simple Todo List - {title} : ()</h1>
      <hr />
    </div>
  );
}

function TodoList({ list }) {
  const itemList = list.map((item) => {
    return <li key={item._id}>{item.title}</li>;
  });

  return <ul className="todolist">{itemList}</ul>;
}

export default App;
