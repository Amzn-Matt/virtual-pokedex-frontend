import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ onSignUp, onLogin, onMobileBtn }) => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Virtual Pokèdex</h1>
      </Link>
      <Navigation
        onSignUp={onSignUp}
        onLogin={onLogin}
        onMobileBtn={onMobileBtn}
      />
    </header>
  );
};

export default Header;
