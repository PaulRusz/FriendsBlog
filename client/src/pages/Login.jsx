import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import "../styles/Login.css";
import { LOGIN_USER } from "../utils/mutations";
import auth from "../utils/auth";

const Login = (Props) => {
  const [email, SetEmail] = useState("");
  const [EmailError, SetEmailError] = useState("");
  const [PasswordError, SetPasswordError] = useState("");
  const [password, SetPassword] = useState("");
  const [login] = useMutation(LOGIN_USER);

  const Navigate = useNavigate();

  const OnButtonClick = async () => {
    // Set Initial Error Values To Empty
    SetEmailError("");
    SetPasswordError("");

    // Check If User Has Entered Both Fields
    if ("" === email) {
      SetEmailError("Please Enter a Valid Email");
      return;
    }
    if ("" === password) {
      SetPasswordError("Please Enter a Password");
      return;
    }

    // Check If Email Has Valid Format
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      SetEmailError("Please Enter a Valid Email");
      return;
    }

    // Ensure Password Is 8 Or More Characters
    if (password.length < 7) {
      SetPasswordError("Password Must Be At Least 8 Characters");
      return;
    }

    try {
      // Login User
      const { data } = await login({
        variables: {
          email: email,
          password: password,
        },
      });
      console.log(data);
      // Navigate To Home Page
      auth.Login(data.login.token);
      Navigate("/profile");
    } catch (error) {
      console.error("failed to login", error);
    }
  };

  return (
    <div className="Main-Container">
      <div className="Title-Container">
        <h1>Login</h1>
      </div>
      <br />
      <div className="Input-Container">
        <input
          value={email}
          placeholder="Email"
          onChange={(Event) => SetEmail(Event.target.value)}
          className="Input-Item"
        />
        <label className="Error-Label">{EmailError}</label>
      </div>
      <br />
      <div className="Input-Container">
        <input
          value={password}
          placeholder="Password"
          onChange={(Event) => SetPassword(Event.target.value)}
          type="password"
          className="Input-Item"
        />
        <label className="Error-Label">{PasswordError}</label>
      </div>
      <br />
      <div className="Input-Container">
        <input
          className="Input-Button"
          type="button"
          onClick={OnButtonClick}
          value="Log In"
        />
      </div>
      <br />
      <hr />
      <div className="Input-Container">
        <input
          className="Input-Button"
          type="button"
          onClick={() => Navigate("/SignUp")}
          value="Create New Account"
        />
      </div>
    </div>
  );
};

export default Login;
