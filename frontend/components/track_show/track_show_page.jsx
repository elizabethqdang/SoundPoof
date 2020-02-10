import React from "react";
import { withRouter } from "react-router-dom";
// import CommentIndex from "../comments/comment_index";

class TrackShowPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			artist: ""
		};
		this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
		// this.props.fetchComments(this.props.match.params.trackId);
		this.props.fetchTrack(this.props.match.params.trackId);
	}


	render() {
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
									<div className="song-show-page">
										<div className="hero-song-display">
											<div className="play-pause-show-container">
												{info} hello
											</div>

											{/* <img
							src={this.props.track ? this.props.track.artworkUrl : ""}
							className="large-ablum-cover"
						/> */}
										</div>
									</div>
								</>
							);
						}
}
export default withRouter(TrackShowPage);
