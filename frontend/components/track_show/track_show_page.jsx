import React from "react";
import { withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";
// import CommentIndex from "../comments/comment_index";

class TrackShowPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			user_id: '',
			artist: ''
		};
	}
	
	componentWillMount() {
		let trackId = this.props.match.params.trackId;
		let track = this.props.tracks[trackId];
		let userId = track.user_id;

		this.props.fetchUser(userId);
		this.props.fetchAllUsers().then(() => this.props.fetchTrack(trackId));
	}

	componentWillReceiveProps(newProps) {
		if (this.props.match.params.trackId !== newProps.match.params.trackId) {
			this.props.fetchTrack(newProps.match.params.trackId);
		};
			// this.setState({
			// 	currentTrack: newProps.trackId
			// })
	}

	componentDidUpdate(prevProps) {
			if (prevProps.match.params.trackId !== this.props.match.params.trackId) {
					this.props.fetchTrack(this.props.match.params.trackId);
			}
	}

	render() {
		const { currentTrack, trackId, tracks, users } = this.props;
		let track = this.props.tracks[trackId];
		let userId = [track.user_id];
		let user = this.props.users[this.props.userId];

		console.log( "track-show-page" );
		console.log("trackId", trackId, "errors", tracks, "track", track, "users", users, "user", user, "currentTrack", currentTrack, userId);

		// const comments = this.props.track ? (
		// 	<CommentIndex
		// 		currentUser={this.props.currentUser}
		// 		comments={comments}
		// 		trackId={this.props.track.id}
		// 		trackUploader={this.props.track.trackUploader}
		// 		trackUploaderId={this.props.track.trackUploaderId}
		// 		currentUserId={this.props.currentUserId}
		// 	/>
		// ) : null;
		// let info;
		// if (this.props.track) {
		// info = (
		// 	<div className="play-pause-show-info">
		// 		<p className="play-pause-show-artist">{this.props.track.artist}</p>
		// 		<p className="play-pause-show-title">{this.props.track.title}</p>
		// 	</div>
		// );
		// }

		return (
			<>
				<div className="track-show-page">

					<div className="">
						<NavbarContainer />
					</div>

					<div className="hero-song-display">
						<div className="play-pause-show-container">
							<div className="play-pause-show-info">
							<p className="play-pause-show-artist">{track.artist}</p>
							<p className="play-pause-show-title">{track.title}</p>
							</div>
						</div>

						<img
							src={track.artworkUrl ? track.artworkUrl : ""}
							className="large-ablum-cover"
						/>
					</div>

					<div></div>

				</div>
			</>
		);
	}
}
export default withRouter(TrackShowPage);
