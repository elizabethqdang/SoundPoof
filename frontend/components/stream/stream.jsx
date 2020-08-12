import React from "react";
import { NavLink, Link, withRouter } from 'react-router-dom';
import TrackIndexItem from '../track_index/track_index_item_container';
import NavbarContainer from '../navbar/navbar_container';
import StreamSidebar from './stream_sidebar';
import ReactPlayer from 'react-player';

class Stream extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showStream: true,
			showSearch: false,
			showProfile: false,
		}
	}

	componentDidMount() {
		this.props.fetchAllTracks();
		this.props.fetchAllUsers();
		// this.props.fetchCurrentUser(this.props.currentUser.id);
	}

	// componentDidUpdate(prevProps) {
	// 	this.setState({ 
	// 		tracks: prevProps.tracks, 
	// 		users: prevProps.users
	// 	}); 
	// }

	render() {
		const { user, currentUser, trackplayer, setPlayPause, setProg, deleteTrack, createRepost, deleteRepost, createLike, deleteLike,fetchTrack, fetchAllTracks, seekWaveForm, seekTrack, seekPlayer, setTrackPlayer, endCurrentTrack } = this.props;
		let tracks = Object.values(this.props.tracks);
		let users = Object.values(this.props.users);

		let stream = ((tracks)).map((track, idx) => (
			<TrackIndexItem id={track.id} key={idx} track={track} currentUser={currentUser || {}} users={users} tracks={tracks} user={users[track.user_id]} setPlayPause={setPlayPause} setProg={setProg} deleteTrack={deleteTrack} createRepost={createRepost} deleteRepost={deleteRepost} createLike={createLike} deleteLike={deleteLike} fetchTrack={fetchTrack} fetchAllTracks={fetchAllTracks} seekWaveForm={seekWaveForm} seekTrack={seekTrack} trackplayer={trackplayer || {}} setTrackPlayer={setTrackPlayer} seekPlayer={seekPlayer} endCurrentTrack={endCurrentTrack} />
		));

		let streamSidebar = (
			<StreamSidebar users={users} currentUser={currentUser || null} tracks={tracks} trackplayer={trackplayer} />
		);

		let streamNavbar = (
			<NavbarContainer currentUser={currentUser} tracks={tracks} trackplayer={trackplayer} users={users} />
		);

		return (
			<div className="stream-page-container">
				{streamNavbar}
				<main className='stream-main'>
					<div className='stream-index'>
						<nav className='stream-nav'>
							<ul>
								<li><NavLink to='/stream' activeClassName='selected'>Stream</NavLink></li>
								{/* <li><Link to='/stream'>Charts</Link></li>
								<li><Link to='/stream'>Discover</Link></li> */}
							</ul>
						</nav>
						<p>Hear the latest posts from the people you're following</p>
						<ul className='homepage-tracks'>
							{stream}
						</ul>
					</div>

					<div className="sidebar-placeholder">
						<div className="sidebar-ad-container">
							<a href="http://www.github.com/eqdang/soundpoof" target="_blank"><img src="" /></a>
						</div>
						{streamSidebar}
					</div>
					
				</main>
			</div>
		);
	}
} 

export default withRouter(Stream);