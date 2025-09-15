import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MovieHub...</div>
      <ul className="nav-links">
        <li>
          <Link to={"home"}>Home</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
