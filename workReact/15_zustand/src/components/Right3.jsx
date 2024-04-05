import { useEffect } from "react";
import useCounterStore from "@zustand/counter.mjs";

function Right3() {
  useEffect(() => {
    console.log("Right3 렌더링");
  });

  const countUp = useCounterStore((state) => state.countUp);
  const countDown = useCounterStore((state) => state.countDown);

  return (
    <>
      <div>
        <h1>Right3</h1>
        <button onClick={() => countDown(2)}>-</button>
        <button onClick={() => countUp(1)}>+</button>
      </div>
    </>
  );
}

export default Right3;
