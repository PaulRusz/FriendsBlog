import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logout action
    localStorage.removeItem("token");
    // Then redirect to the main login page
    navigate("/login");
  };

  return (
    <div className="Main-Container">
      <div className="Title-Container">
        <h1>Logout</h1>
      </div>
      <br />
      <div className="Input-Container">
        <p>Are you sure you want to log out?</p>
      </div>
      <br />
      <div className="Input-Container">
        <input
          className="Input-Button"
          type="button"
          onClick={handleLogout}
          value="Logout"
        />
      </div>
    </div>
  );
};

export default Logout;
