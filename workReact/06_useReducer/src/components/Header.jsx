import "../css/Header.css";

function Header() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  return (
    <div className="Header">
      <h3>오늘은 🪄</h3>
      <h1>{formattedDate}</h1>
    </div>
  );
}

export default Header;
