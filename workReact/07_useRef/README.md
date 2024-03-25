# useRef - 컴포넌트의 변수 생성하기

# useRef

새로운 Reference 객체를 생성하는 기능

`const refObject = useRef()`

refObject - 컴포넌트 내부의 변수

## useRef

- Reference 객체를 생성
- 컴포넌트 내부의 변수로 활용 가능
- **어떤 경우에도 리렌더링을 유발하지 않음**

## useState

- State를 생성
- 컴포넌트 내부의 변수로 활용 가능
- **값이 변경되면 컴포넌트 리렌더링**

→ 그래서 useRef는 렌더링에 영향을 미치지 않는 변수가 필요할 때 사용한다.

→ DOM을 직접적으로 선택해야 하는 상황에 사용한다.
