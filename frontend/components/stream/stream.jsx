import React from "react";
import { NavLink, Link, withRouter } from 'react-router-dom';
import TrackIndexItem from '../track_index/track_index_item';
import NavbarContainer from '../navbar/navbar_container';
import track_show_page from "../track_show/track_show_page";


class Stream extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: [],
			users: []
		}
	}

	componentWillMount() {
		this.props.fetchAllTracks();
		this.props.fetchAllUsers();
	}

	componentWillReceiveProps(newState) {
		this.setState({ tracks: newState.tracks, users: newState.users }); 
  }

	render() {
		const { tracks, currentUser, users, errors } = this.props;

		console.log("stream", "tracks", tracks, "currentUser", currentUser, "users", users, "errors", errors);

		let stream = (tracks.map((track, idx) => <TrackIndexItem key={idx} track={track} user={this.props.user || []} />));

		return (
			<div className="stream-container">
				<div className="stream-container">

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
					<ul className='loggedhome-tracks'>
							{/* {tracks.map(track => <TrackIndexItem key={track._id} track={track} user={this.props.user || this.props.users[1]} />)} */}
							{stream}
					</ul>
				</div>
				{/* <SideBarContainer /> */}
			</main>
			</div>
		);
	}
} 

export default withRouter(Stream);