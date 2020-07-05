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
			// tracks: [],
			// users: []
		}
		this.fetched = false;
	}

	componentDidMount() {
		this.props.fetchAllTracks();
		this.props.fetchAllUsers();
		this.props.fetchCurrentUser(this.props.currentUser.id);
	}

	// componentDidUpdate(prevProps) {
	// 	this.setState({ 
	// 		tracks: prevProps.tracks, 
	// 		users: prevProps.users
	// 	}); 
	// }

	render() {
		const { users, errors, user, currentUser, setPlayPause, setProg } = this.props;
		let tracks = Object.values(this.props.tracks);

		let stream = ((tracks)).map(track => (
			<TrackIndexItem key={track.id} track={track} currentUser={currentUser || null} users={users} tracks={tracks} setPlayPause={setPlayPause} setProg={setProg} />
		));

		let streamSidebar = (
			<StreamSidebar users={users} currentUser={currentUser || null} tracks={tracks} />
		);

		return (
			<div className="stream-page-container">
				{/* <div className="loggedhome-header"> */}
					<NavbarContainer />
				{/* </div> */}
				<main className='stream-main'>
					<div className='stream-index'>
						<nav className='stream-nav'>
							<ul>
								<li><NavLink to='/stream'>Stream</NavLink></li>
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
						{/* <StreamSidebar users={users} currentUser={currentUser || null} tracks={this.props.tracks} /> */}
					</div>
				</main>
			</div>
		);
	}
} 

export default (Stream);