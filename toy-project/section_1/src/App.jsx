import { useState } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function onClickButton(value) {
    setCount(count + value);
  }
  return (
    <>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <secton>
        <Controller onClickButton={onClickButton} />
      </secton>
    </>
  );
}

export default App;
