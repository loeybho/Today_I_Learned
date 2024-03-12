import { useEffect, useState, useCallback } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  /* eslint-disable */
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);

  // someFunction은 함수 객체가 들어있는 메모리의 주소를 가지고 있고, App 컴포넌트가 렌더링이 되어서 someFunction이 초기화가 된다면, const someFunction의 함수 객체가 새로 만들어져서 또 다른 메모리 공간에 저장이 되기 때문에 새로 만들어진 공간의 주소가 someFunction안에 들어가게 된다. 이에, useEffect는 콜백함수를 호출한다.

  // 의존성 배열에 아무것도 넣어주지 않았으니까, 여기 있는 함수는 맨처음 앱컴포넌트가 렌더링이 될 때 만들어서 메모이제이션이 될거예요. 그리고 someFunction 안에는 메모이제이션 된 함수의 주소가 들어있게 되는 거죠. 그리고 그 다음 렌더링부터는 이제 더이상 이 함수 객체를 새로 생성해서 할당해주는게 아니라, 이미 가지고 있던, 메모이제이션된 함수 객체의 주소를 계속 someFunction이 가지고 있으면서 재사용하게 되는거예요.

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </>
  );
}

export default App;
