import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Virtual Pokèdex</h1>
      <Navigation />
    </header>
  );
};

export default Header;
