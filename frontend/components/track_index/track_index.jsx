import React from "react";
import { withRouter } from 'react-router-dom';
import TrackIndexItem from './track_index_item';
import NavbarContainer from '../navbar/navbar_container';

class TrackIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: []
		}
	}

	componentWillMount() {
		// this.props.fetchAllTracks();
		// this.props.fetchAllUsers();
	}

	componentWillReceiveProps(newState) {
    this.setState({ tracks: newState.tracks }); 
	}
	
	render() {
		const { tracks, currentUser, users, track } = this.props;
		console.log("track-index");
		console.log("track-index", "tracks", tracks, "track", track, "currentUser", currentUser, "users", users);
		
		return (
			<div className="discover-container">
				<div className="discover">
					<NavbarContainer />
				</div>
				
				<div className="discover weekly">
					<div className="discover heading">SoundPoof Weekly</div>
					<div className="discover content">
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title">Title</div>
								<div className="trending-track-artist">Artist</div>
							</div>
						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title">Title</div>
								<div className="trending-track-artist">Artist</div>
							</div>
						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title">Title</div>
								<div className="trending-track-artist">Artist</div>
							</div>
						</li>
						<li className="trending-track-item">
							<div className="trending-track-artwork"></div>
							<div className="trending-track-info">
								<div className="trending-track-title">Title</div>
								<div className="trending-track-artist">Artist</div>
							</div>
						</li>
					</div>
				</div>
				<div className="discover new">
					<div className="discover heading">New Music</div>
					<div className="discover content">
						<ul>
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
					</div>
				</div>
				<div className="discover charts">
					<div className="discover heading">SoundPoof Charts</div>
					<div className="discover content">
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
					</div>
				</div>
				<div className="discover playlists">
					<div className="discover heading">Top Playlists</div>
					<div className="discover content">
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
					</div>

				</div>
			</div>
		);
	}
} 

export default TrackIndex;