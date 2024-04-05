import { useEffect } from "react";

function Left3() {
  useEffect(() => {
    console.log("Left3 렌더링");
  });

  return (
    <div>
      <h1>Left3:</h1>
    </div>
  );
}

export default Left3;
