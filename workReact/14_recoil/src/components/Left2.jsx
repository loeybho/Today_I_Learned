import { useEffect } from "react";
import Left3 from "@components/Left3";
import { useRecoilValue } from "recoil";
import { countStateKor } from "@recoil/selectors.mjs";

function Left2() {
  useEffect(() => {
    console.log("Left2 렌더링");
  });

  const countKor = useRecoilValue(countStateKor);

  return (
    <div>
      <h1>Left2: {countKor}</h1>
      <Left3 />
    </div>
  );
}

export default Left2;
