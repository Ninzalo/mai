import "./Header.css";
import headerBackground from "../../images/header/2.jpg";

export default function Header() {
  return (
    <div className="header">
      <img
        src={headerBackground}
        alt="header background"
        style={{ "--header-img-width": window.innerWidth }}
      />
      <div className="info-block">
        <h1 className="main-text">Лаборатория №4</h1>
        <h1 className="main-text">Аддитивные технологии</h1>
        <h2 className="sub-text"></h2>
      </div>
    </div>
  );
}
