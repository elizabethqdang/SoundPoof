import React from "react";
import { withRouter } from 'react-router-dom';
import TrackIndexItem from './track_index_item';

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
			<div className="">
				<div className="">
					SoundPoof Weekly
				</div>
				<div className="">
					New Music
					<ul>
						{tracks.map(track => <TrackIndexItem key={track._id} track={track} />)}
					</ul>
				</div>
				<div className="">
					SoundPoof Charts
				</div>
				<div className="">
					Top Playlists
				</div>
			</div>
		);
	}
} 

export default withRouter(TrackIndex);