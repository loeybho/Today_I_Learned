import { useEffect } from "react";
import Right3 from "@components/Right3";

function Right2() {
  useEffect(() => {
    console.log("Right2 렌더링");
  });
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
}

export default Right2;
