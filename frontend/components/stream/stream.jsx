import React from "react";
import { withRouter } from 'react-router-dom';
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
    this.setState({ tracks: newState.tracks, users: newState.tracks }); 
  }

	render() {
		const { tracks, currentUser, users, errors } = this.props;

		console.log("stream", "tracks", tracks, "currentUser", currentUser, "users", users, "errors", errors);

		return (
			<div className="stream-container">
				<div className="stream">
					<NavbarContainer />
				</div>
				<div className="stream">
					<div className="stream heading">Hear the latest posts</div>
					<div className="stream content">
						<ul className="stream item-container">
							{tracks.map(track => <TrackIndexItem key={track._id} track={track} user={track.user_id || null} />)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
} 

export default withRouter(Stream);