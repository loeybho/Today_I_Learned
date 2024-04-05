import { useSetRecoilState } from "recoil";
import { countState } from "@recoil/atoms.mjs";
import { useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("Right3 렌더링");
  });

  const setCount = useSetRecoilState(countState);

  const countUp = function (step) {
    setCount((count) => count + step);
  };

  return (
    <>
      <div>
        <h1>Right3</h1>
        <button onClick={() => countUp(1)}>+</button>
      </div>
    </>
  );
}

export default Right3;
