import React from "react";
import { withRouter, NavLink, Link } from 'react-router-dom';
import TrackIndexItem from './track_index_item';
import NavbarContainer from '../navbar/navbar_container';

class TrackIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// tracks: []
		}
	}

	componentWillMount() {
		// this.props.fetchAllTracks();
		// this.props.fetchAllUsers();
	}

	// componentWillReceiveProps(newState) {
  //   this.setState({ tracks: newState.tracks }); 
	// }
	
	render() {
		const { tracks, trackplayer, currentUser, users, track } = this.props;
		let libNavbar = (
			<NavbarContainer currentUser={currentUser} tracks={tracks} trackplayer={trackplayer} users={users} /> 
			);

		// console.log("track-index");
		// console.log("track-index", "tracks", tracks, "track", track, "currentUser", currentUser, "users", users);
		
		return (
			// <div className="discover-container">
			// 	<div className="discover">
			<div className="stream-page-container">
				{libNavbar}
				<main className='stream-main'>
					<div className='stream-index'>
						<nav className='stream-nav'>
							<ul>
								<li><NavLink to='/' activeClassName='selected'>Overview</NavLink></li>
								<li><NavLink to='/' activeClassName=''>Likes</NavLink></li>
								<li><NavLink to='/' activeClassName=''>Playlists</NavLink></li>
								<li><NavLink to='/' activeClassName=''>Following</NavLink></li>
								<li><NavLink to='/' activeClassName=''>History</NavLink></li>
								</ul>
							</nav>
							<p>Recently Played</p>
							<ul className='homepage-tracks'>
								{/* {stream} */}
							</ul>
							<p>Likes</p>

						</div>


					<div className="sidebar-placeholder">
						<div className="sidebar-ad-container">
							<a href="http://www.github.com/eqdang/soundpoof" target="_blank"><img src="" /></a>
						</div>
						{/* {streamSidebar} */}
					</div>

				</main>
			</div>

				// <div className="discover weekly">
				// 	<div className="discover heading">SoundPoof Weekly</div>
				// 	<div className="discover content">
				// 		<li className="trending-track-item">
				// 			<div className="trending-track-artwork"></div>
				// 			<div className="trending-track-info">
				// 				<div className="trending-track-title">Title</div>
				// 				<div className="trending-track-artist">Artist</div>
				// 			</div>
				// 		</li>
				// 		<li className="trending-track-item">
				// 			<div className="trending-track-artwork"></div>
				// 			<div className="trending-track-info">
				// 				<div className="trending-track-title">Title</div>
				// 				<div className="trending-track-artist">Artist</div>
				// 			</div>
				// 		</li>
				// 		<li className="trending-track-item">
				// 			<div className="trending-track-artwork"></div>
				// 			<div className="trending-track-info">
				// 				<div className="trending-track-title">Title</div>
				// 				<div className="trending-track-artist">Artist</div>
				// 			</div>
				// 		</li>
				// 		<li className="trending-track-item">
				// 			<div className="trending-track-artwork"></div>
				// 			<div className="trending-track-info">
				// 				<div className="trending-track-title">Title</div>
				// 				<div className="trending-track-artist">Artist</div>
				// 			</div>
				// 		</li>
				// 	</div>
				// </div>
				// <div className="discover new">
				// 	<div className="discover heading">New Music</div>
				// 	<div className="discover content">
				// 		<ul>
				// 			<li className="trending-track-item">
				// 				<div className="trending-track-artwork"></div>
				// 				<div className="trending-track-info">
				// 					<div className="trending-track-title"></div>
				// 					<div className="trending-track-artist"></div>
				// 				</div>
				// 			</li>
				// 			<li className="trending-track-item">
				// 				<div className="trending-track-artwork"></div>
				// 				<div className="trending-track-info">
				// 					<div className="trending-track-title"></div>
				// 					<div className="trending-track-artist"></div>
				// 				</div>
				// 			</li>
				// 			<li className="trending-track-item">
				// 				<div className="trending-track-artwork"></div>
				// 				<div className="trending-track-info">
				// 					<div className="trending-track-title"></div>
				// 					<div className="trending-track-artist"></div>
				// 				</div>
				// 			</li>
				// 			<li className="trending-track-item">
				// 				<div className="trending-track-artwork"></div>
				// 				<div className="trending-track-info">
				// 					<div className="trending-track-title"></div>
				// 					<div className="trending-track-artist"></div>
				// 				</div>
				// 			</li>
				// 		</ul>
				// 	</div>
				// </div>
				// <div className="discover charts">
				// 	<div className="discover heading">SoundPoof Charts</div>
				// 	<div className="discover content">
				// 		<li className="trending-track-item">
				// 			<div className="trending-track-artwork"></div>
				// 			<div className="trending-track-info">
				// 				<div className="trending-track-title"></div>
				// 				<div className="trending-track-artist"></div>
				// 			</div>
				// 		</li>
				// 		<li className="trending-track-item">
				// 			<div className="trending-track-artwork"></div>
				// 			<div className="trending-track-info">
				// 				<div className="trending-track-title"></div>
				// 				<div className="trending-track-artist"></div>
				// 			</div>
				// 		</li>
				// 		<li className="trending-track-item">
				// 			<div className="trending-track-artwork"></div>
				// 			<div className="trending-track-info">
				// 				<div className="trending-track-title"></div>
				// 				<div className="trending-track-artist"></div>
				// 			</div>
				// 		</li>
				// 		<li className="trending-track-item">
				// 			<div className="trending-track-artwork"></div>
				// 			<div className="trending-track-info">
				// 				<div className="trending-track-title"></div>
				// 				<div className="trending-track-artist"></div>
				// 			</div>
				// 		</li>
				// 	</div>
				// </div>
				// <div className="discover playlists">
				// 	<div className="discover heading">Top Playlists</div>
				// 	<div className="discover content">
				// 			<li className="trending-track-item">
				// 				<div className="trending-track-artwork"></div>
				// 				<div className="trending-track-info">
				// 					<div className="trending-track-title"></div>
				// 					<div className="trending-track-artist"></div>
				// 				</div>
				// 			</li>
				// 			<li className="trending-track-item">
				// 				<div className="trending-track-artwork"></div>
				// 				<div className="trending-track-info">
				// 					<div className="trending-track-title"></div>
				// 					<div className="trending-track-artist"></div>
				// 				</div>
				// 			</li>
				// 			<li className="trending-track-item">
				// 				<div className="trending-track-artwork"></div>
				// 				<div className="trending-track-info">
				// 					<div className="trending-track-title"></div>
				// 					<div className="trending-track-artist"></div>
				// 				</div>
				// 			</li>
				// 			<li className="trending-track-item">
				// 				<div className="trending-track-artwork"></div>
				// 				<div className="trending-track-info">
				// 					<div className="trending-track-title"></div>
				// 					<div className="trending-track-artist"></div>
				// 				</div>
				// 			</li>
				// 	</div>

				// </div>
		);
	}
} 

export default TrackIndex;