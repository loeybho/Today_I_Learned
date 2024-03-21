import { useEffect } from "react";

//3. 언마운트: 죽음
const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수 - 종료되면 정리함수 호출
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
