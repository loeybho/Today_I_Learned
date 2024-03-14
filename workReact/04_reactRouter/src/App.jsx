import { BrowserRouter, Route, Routes, Link, navLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to 별's 쇼핑몰!</h2>
      당신을 드러내는 취향을 입으세요.
    </div>
  );
}

function Woman() {
  return (
    <div>
      <h2>Woman</h2>
      산뜻한 여름을 맞아 가벼운 옷을 준비했어요.
    </div>
  );
}

function Man() {
  return (
    <div>
      <h2>Man</h2>
      가볍고 청량한 소재로 준비했어요.
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Router DOM 예시</h1>
      <ul>
        <li>
          <navLink to="/">Home</navLink>
        </li>
        <li>
          <navLink to="/Woman">Woman</navLink>
        </li>
        <li>
          <navLink to="/Man">Man</navLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Woman" element={<Woman />} />
        <Route path="/Man" element={<Man />} />
      </Routes>
    </div>
  );
}

export default App;
