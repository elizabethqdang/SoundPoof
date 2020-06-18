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

	// componentDidUpdate(newState) {
		// this.setState({ tracks: newState.tracks, users: newState.users }); 
	// }

	render() {
		const { tracks, users, errors, user, currentUser } = this.props;

		let stream = (this.props.tracks).map(track => (
			<TrackIndexItem key={track.id} track={track} currentUser={this.props.currentUser || null} users={users} tracks={tracks} />
		));

		return (
			<div className="stream-container">
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
					</div>`
					<div className="sidebar-placeholder">
						<div className="ad-container">
							<a href="http://www.github.com/eqdang/soundpoof" target="_blank"><img src="" /></a>
						</div>
						<StreamSidebar users={users} currentUser={currentUser || null} tracks={tracks} />
					</div>
				</main>
			</div>
		);
	}
} 

export default (Stream);