import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div>
      <div className="splash-bar">
      <div className="splash-left">
        <div className="splash-left-buttons">
          <div className="splash-logo"></div>
          <Link to="/" className="splash-text">RACHETPOOF</Link>
        </div>
      </div>
      </div>

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
      
      <section className="header-content">
        <p>
          boom shakka lakka
        </p>
        <br /><br />
        <p>
            What's next in music is first on RachetPoof
        </p>
        {/* Upload your first track and begin your journey. RachetPoof gives you space to create,f ind your fans, and connect with other artists. */}
        <br /><br />
        <button className="header-button">Start uploading today</button>

      </section>

      <section className="trending">
        trending
      </section>

    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return (
    currentUser ? personalGreeting(currentUser, logout) : sessionLinks()

    // <div className="trending">
  );
};

export default Greeting;
