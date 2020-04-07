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
		this.props.fetchAllTracks();
	}

	componentWillReceiveProps(newState) {
		this.setState({ tracks: newState.tracks });
	}

	render() {
		const { tracks } = this.props;
		return (
			<div className="discover-container">
				<div className="discover">
					<NavbarContainer />
				</div>
				<div className="discover weekly">
					<div className="discover heading">SoundPoof Weekly</div>
					<div className="discover content"></div>
				</div>
				<div className="discover new">
					<div className="discover heading">New Music</div>
					<div className="discover content">
					<ul>
						{tracks.map(track => <TrackIndexItem key={track._id} track={track} />)}
					</ul>
					</div>
				</div>
				<div className="discover charts">
					<div className="discover heading">SoundPoof Charts</div>
					<div className="discover content"></div>
				</div>
				<div className="discover playlists">
					<div className="discover heading">Top Playlists</div>
					<div className="discover content"></div>
				</div>
			</div>
		);
	}
} 

export default withRouter(TrackIndex);