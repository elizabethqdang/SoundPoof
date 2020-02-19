import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar"

const SplashNav = ({ currentUser, logout, openModal }) => {
	const sessionLinks = () => (
		<div className="splash-bar">
			<div className="splash-bar">
			<div className="splash-left">
				<div className="splash-left-buttons">
					<div className="splash-logo"></div>
					<Link to="/" className="splash-text">SOUNDPOOF</Link>
				</div>
			</div>
			</div>

			<nav className="login-signup">
				<button onClick={() => openModal("login")} className="login-button">
					Sign in
				</button>
				<button onClick={() => openModal("signup")} className="signup-button">
					Create Account
				</button>
				<button onClick={() => openModal("signup")} className="creators-button">
					For Creators
				</button>
			</nav>
			
			<section className="header-content">
				<p>boom shakka lakka</p>
				<br/><br/>
				<p>What's next in music is first on SoundPoof</p>
				{/* Upload your first track and begin your journey. SoundPoof gives you space to create,find your fans, and connect with other artists. */}
				<br/><br/>
				<button className="header-button">Start uploading today</button>
			</section>

		</div>
	);
	const currentUserSession = () => (
		<div><br/>
			<Navbar />
			<hgroup className="header-group">
				<h2 className="header-name">Hi, {currentUser.email}!</h2>
				<button className="header-button" onClick={logout}>
					Log Out
				</button>
			</hgroup>
		</div>
	);
	

	return (
		currentUser ? currentUserSession(currentUser, logout) : sessionLinks()
	);
};

export default SplashNav;
