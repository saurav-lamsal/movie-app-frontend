import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MovieHub...</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
