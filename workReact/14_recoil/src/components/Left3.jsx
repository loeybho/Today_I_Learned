import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { countState } from "@recoil/atoms.mjs";

function Left3() {
  useEffect(() => {
    console.log("Left3 렌더링");
  });

  const count = useRecoilValue(countState);
  return (
    <div>
      <h1>Left3:{count}</h1>
    </div>
  );
}

export default Left3;
