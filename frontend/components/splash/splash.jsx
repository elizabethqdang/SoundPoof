import React from 'react';
import { NavLink, Link, Route, Switch } from 'react-router-dom';

class Splash extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		// this.props.fetchAllTracks();
		// this.props.fetchAllUsers();
	}

  render() {
		const {openModal} = this.props;
		const {tracks, users, currentUser} = this.props;
		// console.log("tracks", tracks);
		// console.log("users", users);
		// console.log("currentUser", currentUser);

    return (
      <div id="splash-page">
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
            <button className="header-button start-uploading-today">Start uploading today</button>
          </section>
        </div>

        <div className="splash-search-container">
          <form className="splash-search-form">
            <input type="search" placeholder="Search for artists, bands, tracks, podcasts" className="splash-search-input"></input>
						<button type="submit" className="splash-search-button"><i className="fas fa-search"></i></button>
          </form>
					or
          <Link to="/upload"><button className="header-button">Upload your own</button>
					</Link>
        </div>
        <br/><br/>

				<div id='splashbottom'>
					{/* <h1 className='splash-title'> SoundPoof </h1>
					<h2 className='splash-subtitle'> Formerly known as RatchetPoof </h2>
					<h3 className='bl-header'> Hear what's trending for free in the SOUNDPOOF community </h3> */}

					<ul className='splash-trending'>
{/* 1 */}
						<a className='trending-track-item-container' href="/#/signup">
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
						<a className='trending-track-item-container' href="/#/signup">
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
						<a className='trending-track-item-container' href="/#/signup">
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
						<a className='trending-track-item-container' href="/#/signup">
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
						<a className='trending-track-item-container' href="/#/signup">
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
						<a className='trending-track-item-container' href="/signup">
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
						<a className='trending-track-item-container' href="/#/signup">
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
						<a className='trending-track-item-container' href="/signup">
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
						<a className='trending-track-item-container' href="/signup">
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
						<a className='trending-track-item-container' href="/signup">
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
						<a className='trending-track-item-container' href="/signup">
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
						<a className='trending-track-item-container' href="/signup" >
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