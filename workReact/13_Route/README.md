# 페이지 라우팅

경로에 따라 알맞은 페이지를 렌더링하는 과정

ex) /new → new 페이지 렌더링

## Multi Page Application(MPA)

애초에 서버가 여러개의 페이지를 가지고 있음. 많은 서비스가 사용하는 전통적인 방식

MPA방식과 서버사이드 렌더링은 다르다.

그런데 리액트앱은 MPA방식을 따르지 않는다.

## MPA 방식의 단점

- MPA 방식은 페이지의 이동이 비효율적이다.
  - MPA방식은 원래 클라이언트에 있는 페이지를 완전히 지우고, 서버로부터 새로운 페이지를 받아온다.
  - 화면을 처음부터 다시 렌더링하게되고, 화면은 한번 깜빡이게 된다.
- 다수의 사용자 접속시, 서버의 부하가 심해진다.
  - 들어오는 요청을 하나하나 응답해줘야 하기 때문이다.

## SPA(Single Page Application)

React App이 채택한 방식
