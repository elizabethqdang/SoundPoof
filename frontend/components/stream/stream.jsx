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
		// this.props.fetchAllUsers();
		// this.props.fetchCurrentUser(this.props.currentUser.id);
	}

	// componentDidUpdate(prevProps) {
	// 	this.setState({ 
	// 		tracks: prevProps.tracks, 
	// 		users: prevProps.users
	// 	}); 
	// }

	stream() {
		let tracks = Object.values(this.props.tracks);
		let users = Object.values(this.props.users);
		const { currentUser } = this.props;
		return (
		 (tracks).map((track, idx) => {
			 if (currentUser.followingIds.includes(track.user_id)) {
			 	return (
					<TrackIndexItem id={track.id} key={idx} track={track} currentUser={currentUser || {}} users={users} tracks={tracks} user={users[track.user_id]} setPlayPause={this.props.setPlayPause} setProg={this.props.setProg} deleteTrack={this.props.deleteTrack} createRepost={this.props.createRepost} deleteRepost={this.props.deleteRepost} createLike={this.props.createLike} deleteLike={this.props.deleteLike} fetchTrack={this.props.fetchTrack} fetchAllTracks={this.props.fetchAllTracks} seekWaveForm={this.props.seekWaveForm} seekTrack={this.props.seekTrack} trackplayer={this.props.trackplayer || {}} setTrackPlayer={this.props.setTrackPlayer} seekPlayer={this.props.seekPlayer} endCurrentTrack={this.props.endCurrentTrack} />
					);
				 }}
				)
			)
		 }

	// streamSidebar() {
	// 	return (
	// 	<StreamSidebar users={users} currentUser={currentUser || null} tracks={tracks} trackplayer={trackplayer} createFollow={createFollow} deleteFollow={deleteFollow} randomNum={randomNum} />
	// 	)
	// }

	render() {
		const { user, currentUser, trackplayer } = this.props;
		let tracks = Object.values(this.props.tracks);
		let users = Object.values(this.props.users);
// debugger
		if (tracks.length > 0) {
		let stream = ((tracks)).map((track, idx) => (
			<TrackIndexItem id={track.id} key={idx} track={track} currentUser={currentUser || {}} users={users} tracks={tracks} user={users[track.user_id]} setPlayPause={this.props.setPlayPause} setProg={this.props.setProg} deleteTrack={this.props.deleteTrack} createRepost={this.props.createRepost} deleteRepost={this.props.deleteRepost} createLike={this.props.createLike} deleteLike={this.props.deleteLike} fetchTrack={this.props.fetchTrack} fetchAllTracks={this.props.fetchAllTracks} seekWaveForm={this.props.seekWaveForm} seekTrack={this.props.seekTrack} trackplayer={trackplayer || {}} setTrackPlayer={this.props.setTrackPlayer} seekPlayer={this.props.seekPlayer} endCurrentTrack={this.props.endCurrentTrack} />
		));
		}
		
		let streamFunc = this.stream();

		let streamSidebar = (
			<StreamSidebar users={users} currentUser={currentUser || null} tracks={tracks} trackplayer={this.props.trackplayer} createFollow={this.props.createFollow} deleteFollow={this.props.deleteFollow} />
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
								<li><NavLink to='/stream'>All</NavLink></li>
								{/* <li><Link to='/stream'>Discover</Link></li> */}
							</ul>
						</nav>
						<p>Hear the latest posts from the people you're following</p>
						<ul className='homepage-tracks'>
							{/* {stream} */}
							{streamFunc}
							{/* {this.stream()} */}
						</ul>
					</div>

					<div className="sidebar-placeholder">
						<div className="sidebar-ad-container">
							<a href="http://www.github.com/eqdang/soundpoof" target="_blank"><img src="" /></a>
						</div>
						{streamSidebar}

						{/* {streamSidebar} */}
						{/* <StreamSidebar users={users} currentUser={currentUser || null} tracks={tracks} trackplayer={trackplayer} createFollow={createFollow} deleteFollow={deleteFollow} randomNum={randomNum} /> */}
					</div>
					
				</main>
			</div>
		);
	}
} 

export default withRouter(Stream);