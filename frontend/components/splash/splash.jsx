import React from 'react';
import { NavLink, Link, Route, Switch } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    const {openModal} = this.props;
    return (
      <div id="splash-page">
        <header id="splash-header">
          <div className="splash-bar">
            <div className="splash-left">
              <div className="splash-left-buttons">
                <div className="splash-logo"></div>
                <NavLink to="/" className="splash-text">SOUNDPOOF</NavLink>
              </div>
            </div>
          {/* </div> */}
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
          </div>

          <section className="header-content">
            <p>boom shakka lakka</p>
            <br /><br />
            <p>What's next in music is first on SoundPoof</p>
            {/* Upload your first track and begin your journey. SoundPoof gives you space to create,find your fans, and connect with other artists. */}
            <br /><br />
            <button className="header-button">Start uploading today</button>
          </section>
        </header>

        <div className="">
          <div>
            Search for artists, bands, tracks, podcasts
          </div>
          <button className="header-button"><Link to="/upload">Upload your own</Link></button>
        </div>
        <br/><br/>

        <div className="trending">
          <header className="">
            trending
          </header>
          <ul className="trending-tracks">
            <li className="trending-track">
							
            </li>
						<li className="trending-track">

						</li>
						<li className="trending-track">

						</li>
						<li className="trending-track">

						</li>
						<li className="trending-track">

						</li>
          </ul>
        </div>

        <div>
          <button className="header-button">Explore trending playlists</button>
        </div>

      </div>
    )
  }
};

export default Splash;