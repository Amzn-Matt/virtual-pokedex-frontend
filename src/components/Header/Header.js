import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Virtual Pokèdex</h1>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
