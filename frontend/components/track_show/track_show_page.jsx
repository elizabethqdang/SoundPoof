import React from "react";
import { withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";
// import CommentIndex from "../comments/comment_index";

class TrackShowPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			title: '',
			artist: '',

		};
	}
	
	componentWillMount() {
		let track = this.props.fetchTrack(this.props.trackId);
		this.props.fetchUser(track['user_id']);
	}

	componentWillReceiveProps(newState) {
		this.setState({ currentTrack: newState.track })
	}

	render() {
		// let track = this.props.track;
		const { trackId, errors, id, currentTrack, users } = this.props;
		let track = currentTrack['track'];
		let user = currentTrack['user'];
		console.log( "track-show-page" );
		console.log("trackId", trackId, "errors", errors, "id", id, "user", user);
		console.log("currentTrack", currentTrack);

		

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
