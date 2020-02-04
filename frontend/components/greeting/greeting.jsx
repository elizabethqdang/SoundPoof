import React from "react";
// import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal("login")} className="login-button">
        Sign in
      </button>
      {/* &nbsp;or&nbsp; */}
      <button onClick={() => openModal("signup")} className="signup-button">
        Create Account
      </button>
      <button onClick={() => openModal("signup")} className="creators-button">
        For Creators
      </button>
      {/* <Link to="/login" className="login-button sbutton">
        Login
      </Link>
      &nbsp;or&nbsp;
      <Link to="/signup" className="signup-button sbutton">
        Create Account
      </Link> */}
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={() => openModal("logout")}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
