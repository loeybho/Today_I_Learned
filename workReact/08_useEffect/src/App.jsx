import { useState, useEffect, useRef } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import "./App.css";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]);
  //의존성 배열
  //dependancy array(deps)

  //1. 마운트: 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  //2. 업데이트: 변환, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  function onClickButton(value) {
    setCount(count + value);
  }

  return (
    <>
      <h1>Simple Counter</h1>
      <div>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </div>
      <div>
        <Controller onClickButton={onClickButton} />
      </div>
    </>
  );
}

export default App;
