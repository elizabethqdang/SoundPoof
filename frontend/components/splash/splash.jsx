import React from 'react';
import { NavLink, Link, Route, Switch } from 'react-router-dom';

class Splash extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.fetchAllTracks();
		this.props.fetchAllUsers();
	}

  render() {
		const {openModal} = this.props;
		const {tracks, users, currentUser} = this.props;
		console.log("splash");
		console.log("tracks", tracks);
		console.log("users", users);
		console.log("currentUser", currentUser);

    return (
      <div id="splash-page">
        <div id="splash-header">
          <div className="splash-bar">
            <div className="splash-left">
							<div className="splash-logo">
								<img src='https://soundpoof.s3-us-west-2.amazonaws.com/logo.jpg' className="splash-icon"/>
							</div>
							<div className="splash-text">SOUNDPOOF
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
          </div>

          <section className="header-content">
            <p>boom shakka lakka</p>
            <br /><br />
            <p>What's next in music is first on SoundPoof</p>
            {/* Upload your first track and begin your journey. SoundPoof gives you space to create,find your fans, and connect with other artists. */}
            <br /><br />
            <button className="header-button">Start uploading today</button>
          </section>
        </div>

        <div className="splash-search-container">
          <form className="splash-search-form">
            <input type="search" placeholder="Search for artists, bands, tracks, podcasts" className="splash-search-input"></input>
						<button type="submit" className="splash-search-button"><i class="fas fa-search"></i></button>
          </form>
					or
          <div className="header-button"><Link to="/upload">Upload your own</Link>
					</div>
        </div>
        <br/><br/>

        <div className="trending-container">
          <div className="trending-header">
            trending
          </div>
          <ul className="trending-track-item-container">
            <li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>		
							</div>

            </li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>
							</div>

						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>
							</div>

						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>
							</div>

						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>
							</div>

						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>
							</div>

						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>
							</div>

						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>
							</div>

						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>								
							</div>

						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>								
							</div>

						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>								
							</div>

						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title"></div>
								<div className="trending-track-artist"></div>								
							</div>
						</li>
          </ul>
					<div className="trending-footer"></div>
        </div>

        <div>
          <button className="header-button">Explore trending playlists</button>
        </div>

      </div>
    )
  }
};

export default Splash;