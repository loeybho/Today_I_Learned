# useReducer

- 컴포넌트 내부에 새로운 State를 생성하는 React Hook
- 모든 useState는 useReducer로 대체 가능
- **상태 관리 코드를 컴포넌트 외부로 분리할 수 있음**

```
function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;

    default:
      return state;
  }
}

function Exam() {
  //dispatch : 발송하다, 급송하다
  //-> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    //인수: 상태가 어떻게 변화되길 원하는 지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
}
```
