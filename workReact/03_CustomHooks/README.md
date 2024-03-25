# React Hooks

클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드

useState - State 기능을 낚아 채오는 Hook

useRef - Reference 기능을 낚아 채오는 Hook

customHook - 나만의 Hook도 제작 가능(Custom Hook)

## 리액트 훅의 특징

1. 함수 컴포넌트 내부에서만 호출 가능
2. 조건문, 반복문 내부에서는 호출 불가
3. 나만의 customHook도 제작 가능
   → 컴포넌트별로 반복되는 로직이 있을 때 사용
   → 단, 새로 만든 customHook 앞에 ‘use’를 접두사로 붙여야 한다. ex) useInput, useChange

# Custom Hooks

## Custom Hooks이란?

원하는 기능을 구현하여 나만의 hook을 만들 수 있는 리액트 기능.

## 특징

1. Custom hooks 역시 리액트의 hook이기 때문에 대문자로 함수의 이름을 짓는다. (useInput, useRead etc)
2. Custom hooks 내에도 useState와 같은 다른 hook을 자유롭게 이용할 수 있다.

## 기능 구현

1. input에 들어오는 value의 상태관리를 하는 useInput 커스텀 훅을 제작한다.
2. 버튼 클릭시 value값이 자동 초기화 되는 설정을 추가한다.
