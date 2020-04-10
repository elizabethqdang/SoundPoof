import React from "react";
import { withRouter } from 'react-router-dom';
import TrackIndexItem from '../track_index/track_index_item';
import NavbarContainer from '../navbar/navbar_container';

class Stream extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tracks: []
		}
	}

	componentWillMount() {
		this.props.fetchAllTracks();
	}

	componentWillReceiveProps(newState) {
		this.setState({ tracks: newState.tracks });
	}

	render() {
		const { tracks, currentUser, users } = this.props;
		console.log(tracks, currentUser, users);
		return (
			<div className="stream-container">
				<div className="stream">
					<NavbarContainer />
				</div>
				<div className="stream">
					<div className="stream heading">Hear the latest posts</div>
					<div className="stream content">
						<ul className="stream item-container">
							{tracks.map(track => <TrackIndexItem key={track._id} track={track} />)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
} 

export default withRouter(Stream);