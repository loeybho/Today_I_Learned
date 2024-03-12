import { useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산!");
  for (let i = 0; i < 999999999; i++) {}
  return number + 10000;
};
const easyCalculate = (number) => {
  console.log("짱쉬운 계산!");
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    //메모아이즈 할 값을 넣는다.
    return hardCalculate(hardNumber);
  }, [hardNumber]); //hardNumber가 변경이 되어야지만 hardcalculate이 다시 불려서 초기화를 해준다.
  const easySum = easyCalculate(easyNumber);

  return (
    <>
      <div>
        <h3>어려운 계산기</h3>
        <input
          type="number"
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />

        <span> +10000 = {hardSum}</span>
        <h3>쉬운 계산기</h3>
        <input
          type="number"
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />

        <span> +1 = {easySum}</span>
      </div>
    </>
  );
}

export default App;
