import React from "react";
import { NavLink, Link, withRouter } from 'react-router-dom';
import TrackIndexItem from '../track_index/track_index_item_container';
import NavbarContainer from '../navbar/navbar_container';
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
		// this.props.fetchAllUsers();
		this.props.fetchCurrentUser(this.props.currentUser.id)
	}

	// componentDidUpdate(newState) {
		// this.setState({ tracks: newState.tracks, users: newState.users }); 
	// }

	render() {
		const { tracks, users, errors, user, currentUser } = this.props;
		// console.log("stream", "tracks", tracks, "users", users, "errors", errors);

		let stream = Object.keys(tracks).map(key => (
			<TrackIndexItem key={key} track={tracks[key]} currentUser={currentUser || null} users={users} />
		));

		return (
			<div className="stream-container">
				<div className="loggedhome-header">
				<NavbarContainer />

			</div>
			<main className='loggedhome-body'>

				<div className='main-index'>

					<nav className='content-nav'>
						<ul>
							<li>
								<NavLink to='/stream'>Stream</NavLink>
							</li>
							<li><Link to='/stream'>Charts</Link></li>
							<li><Link to='/stream'>Discover</Link></li>
						</ul>
					</nav>
					<div className='nav-border' />
					<p>Hear the latest posts from the people you're following</p>
					<ul className='homepage-tracks'>
							{stream}
					</ul>
				</div>
					<div className="sidebar-placeholder">
						<div className="ad-container">
							<a href="" target="_blank"><img src="" /></a>
						</div>
						<div className="ad-container">
							<a href="" target="_blank"><img src="" /></a>
						</div>
					</div>
			</main>
			</div>
		);
	}
} 

export default withRouter(Stream);