import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import SearchFriends from "./SearchFriends";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="navBrand">
        <Link to="/">DBlog</Link>
      </div>

      <button className="hamburgerMenu" onClick={() => setShowMenu(!showMenu)}>
        &#9776;
      </button>

      <div className={`links ${showMenu ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="links">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/post" className="links">
              Post
            </Link>
          </li>
          <li>
            <Link to="/friends" className="links">
              Friends
            </Link>
          </li>
          <li>
            <Link to="/login" className="login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/logout" className="links">
              Logout
            </Link>
          </li>
          <SearchFriends className="searchFriends" />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
