import { useState } from "react";

function Bulb() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <>
      <div>{light}</div>
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜키"}
      </button>
    </>
  );
}

export default Bulb;
