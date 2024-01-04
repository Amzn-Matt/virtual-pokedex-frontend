import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ handleSearch }) => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Virtual Pokèdex</h1>
      </Link>
      <SearchBar handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
