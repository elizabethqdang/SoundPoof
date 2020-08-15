import React from 'react';
import { NavLink, Link, Route, Switch } from 'react-router-dom';

class Splash extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			splash: true,
			searchInput: ''
		}
		console.log(this.state.splash);
		this.toSearch = this.toSearch.bind(this);
		this.verifyLoggedIn = this.verifyLoggedIn.bind(this);
	}
	
	componentDidMount() {
		// this.props.fetchAllTracks();
		// this.props.fetchAllUsers();
		// this.state.splash;
		// console.log(this.state.splash);
	}

	update(searchInput) {
		return (e) => {
			e.preventDefault();
			this.setState({ [searchInput]: e.target.value });
		};
	}

	toSearch(e) {
		e.preventDefault();
		if (!this.props.currentUser) {
			this.props.openModal("login");
		} else if (this.props.currentUser) {
			window.location.hash = `/search?q=${e.target.value}`;
		}
	}

	verifyLoggedIn(e, link) {
		e.preventDefault();
		if (!this.props.currentUser) {
			this.props.openModal("login");
			// window.location.hash = `/${link}`;

		} else if (this.props.currentUser) {
			window.location.hash = `/${link}`;
		}
	}

  render() {
		const {openModal} = this.props;
		const {tracks, users, currentUser, splash} = this.props;
		console.log("render splash", splash);
		// console.log("users", users);
		// console.log("currentUser", currentUser);

    return (
      <div id="splash-page" className="splash-page-background">
        <div id="splash-header">
          <div className="splash-bar">
            <div className="splash-left">
							<div className="splash-logo">
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
            <h1 className="splash-title">SOUNDPOOF</h1>
            <h2 className="splash-subtitle">What's next in music is first on SoundPoof</h2>
            {/* Upload your first track and begin your journey. SoundPoof gives you space to create,find your fans, and connect with other artists. */}
            <button className="header-button start-uploading-today" onClick={(e) => this.verifyLoggedIn(e, "/#/upload")}>Start uploading today</button>
          </section>
        </div>

        <div className="splash-search-container">
          <form className="splash-search-form" onSubmit={(e) => this.verifyLoggedIn(e)}>
						<input className="splash-search-input"
							type="search" 
							onChange={this.update('input')} 
							value={this.state.input}
							placeholder="Search for artists, bands, tracks, podcasts"
							onSubmit={(e) => this.toSearch(e)} />
						<button onClick={(e) => this.verifyLoggedIn(e)} onSubmit={(e) => this.toSearch(e)} type="submit" className="splash-search-button"><i className="fas fa-search"></i></button>
          </form>
					or
          <a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/")} href="/#/upload" onClick={(e) => this.verifyLoggedIn(e, "/#/upload")}><button className="header-button">Upload your own</button>
					</a>
        </div>
        <br/><br/>

				<div id='splashbottom'>
					{/* <h1 className='splash-title'> SoundPoof </h1>
					<h2 className='splash-subtitle'> Formerly known as RatchetPoof </h2>
					<h3 className='bl-header'> Hear what's trending for free in the SOUNDPOOF community </h3> */}

					<ul className='splash-trending'>
{/* 1 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/1")} className='trending-track-item-container' href="/#/tracks/1">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src='https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+8.26.54+PM.png' />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'>Ty Dolla $ign - Blasé (Louis The Child Remix)</p>
									<p className='trending-track artist truncate'>Louis The Child</p>
								</div>
							</li>
						</a>
{/* 2 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/15")} className='trending-track-item-container' href="/#/tracks/15">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="https://soundpoof.s3-us-west-2.amazonaws.com/tracks/neverbelikeyou.png" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'>Never Be Like You</p>
									<p className='trending-track artist truncate'>Flume</p>
								</div>
							</li>
						</a>
{/* 3 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/27")} className='trending-track-item-container' href="/#/tracks/27">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="https://soundpoof.s3-us-west-2.amazonaws.com/tracks/musictobemurderedby.png" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'>Godzilla</p>
									<p className='trending-track artist truncate'>Eminem</p>
								</div>
							</li>
						</a>
{/* 4 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/13")} className='trending-track-item-container' href="/#/tracks/13">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="https://soundpoof.s3-us-west-2.amazonaws.com/tracks/doyou.png" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'>Do You</p>
									<p className='trending-track artist truncate'>Cashmere Cat</p>
								</div>
							</li>
						</a>
{/* 5 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/5")} className='trending-track-item-container' href="/#/tracks/5">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="https://soundpoof.s3-us-west-2.amazonaws.com/tracks/excision.png" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'>Throwin' Elbows</p>
									<p className='trending-track artist truncate'>Excision</p>
								</div>
							</li>
						</a>
{/* 6 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/2")} className='trending-track-item-container' href="/#/tracks/2">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="https://soundpoof.s3-us-west-2.amazonaws.com/tracks/saymyname.png" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'>Say My Name</p>
									<p className='trending-track artist truncate'>Odesza</p>
								</div>
							</li>
						</a>
					</ul>
{/* 7 */}
					<ul className='splash-trending'>
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/")} className='trending-track-item-container' href="/#/tracks/">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'> </p>
									<p className='trending-track artist truncate'> </p>
								</div>
							</li>
						</a>
{/* 8 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/")} className='trending-track-item-container' href="/#/tracks/">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'> </p>
									<p className='trending-track artist truncate'> </p>
								</div>
							</li>
						</a>
{/* 9 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/")} className='trending-track-item-container' href="/#/tracks/">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'> </p>
									<p className='trending-track artist truncate'></p>
								</div>
							</li>
						</a>
{/* 10 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/")} className='trending-track-item-container' href="/#/tracks/">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'>  </p>
									<p className='trending-track artist truncate'>  </p>
								</div>
							</li>
						</a>
{/* 11 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/")} className='trending-track-item-container' href="/#/tracks/">
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'> </p>
									<p className='trending-track artist truncate'> </p>
								</div>
							</li>
						</a>
{/* 12 */}
						<a onClick={(e) => this.verifyLoggedIn(e, "/#/tracks/")} className='trending-track-item-container' href="/#/tracks/12" >
							<li className='trending-track-item'>
								<div className='trending-track-artwork'>
									<img src="" />
								</div>
								<div className='trending-track-info'>
									<p className='trending-track title truncate'>J Cole</p>
									<p className='trending-track artist truncate'>Middle</p>
								</div>
							</li>
						</a>
					</ul>
					</div>
				<div className="trending-footer"></div>

        <div>
          <button className="header-button">Explore trending playlists</button>
        </div>
			</div>
		); 
	}
};

export default Splash;