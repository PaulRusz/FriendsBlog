import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import SearchFriends from "./SearchFriends";
import Button from "../components/Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          FriendsBlog
          <i className="fab fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/post" className="nav-links" onClick={closeMobileMenu}>
            Post
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/friends" className="nav-links" onClick={closeMobileMenu}>
            Friends
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" className="nav-links" onClick={closeMobileMenu}>
            Logout
          </Link>
        </li>
        <li className="nav-item">
          <SearchFriends />
        </li>
      </ul>
      {button && <Button buttonStyle="btn--outline">Login</Button>}
    </nav>
  );
}

export default Navbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";
// import SearchFriends from "./SearchFriends";

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   return (
//     <nav className="nav">
//       <div className="navBrand-container">
//         <Link to="/">FriendsBlog
//         <i className="fab fa-typo3" />
//         </Link>
//         <div className="menu-icon" onClick={handleClick}/>
//         <i className={click ? 'fas fa-times' : 'fas-fa-bars'} />
//       </div>
//       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//         <li className="'nav-item">
//           <link to="/" className="nav-links" onClick={closeMobileMenu}>
//             <Home></Home>
//           </link>
//           <li className="'nav-item">
//           <link to="/profile" className="nav-links" onClick={closeMobileMenu}>
//             <Profile></Profile>
//           </link>
//           <li className="'nav-item">
//           <link to="/post" className="nav-links" onClick={closeMobileMenu}>
//             <Posts></Posts>
//           </link>
//           <li className="'nav-item">
//           <link to="/friends" className="nav-links" onClick={closeMobileMenu}>
//             <Friends></Friends>
//           </link>
//           <li className="'nav-item">
//           <link to="/login" className="nav-links" onClick={closeMobileMenu}>
//             <Login></Login>
//           </link>
//           <li className="'nav-item">
//           <link to="/logout" className="nav-links" onClick={closeMobileMenu}>
//             <Logout></Logout>
//           </link>
//           <li className="'nav-item">
//           <link to="/searchFriends" className="nav-links" onClick={closeMobileMenu}>
//             <SearchFriends></SearchFriends>
//           </link>
//         </li>
//       </ul>
//       });
// }

//       {/* <button className="hamburgerMenu" onClick={() => setShowMenu(!showMenu)}>
//         &#9776;
//       </button>

//       <div className={`links ${showMenu ? "show" : ""}`}>
//         <ul>
//           <li>
//             <Link to="/" className="links">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/profile" className="links">
//               Profile
//             </Link>
//           </li>
//           <li>
//             <Link to="/post" className="links">
//               Post
//             </Link>
//           </li>
//           <li>
//             <Link to="/friends" className="links">
//               Friends
//             </Link>
//           </li>
//           <li>
//             <Link to="/login" className="login">
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link to="/logout" className="links">
//               Logout
//             </Link>
//           </li>
//           <SearchFriends className="searchFriends" />
//         </ul>
//       </div>
//     </nav>
//   );
// } */}

// export default Navbar;
