import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ handleSearch }) => {
  const { pathname } = useLocation();

  return (
    <header
      className="header"
      style={{
        justifyContent: pathname === "/" ? "space-between" : "center",
      }}
    >
      <Link to="/">
        <h1 className="header__title">Virtual Pokèdex</h1>
      </Link>
      {pathname === "/" ? <SearchBar handleSearch={handleSearch} /> : null}
    </header>
  );
};

export default Header;
