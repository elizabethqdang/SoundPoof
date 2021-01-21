import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import UploadTrack from "./upload_track";
// import { Footer } from "../footer/footer";
import NavbarContainer from '../navbar/navbar_container';

class UploadPage extends React.Component {
	constructor(props) {
		super(props);
	}

	dragOverHandler(e) {
		e.preventDefault();
	}

	render() {
		const {user_id, userId, audioFile, audio, audioUrl} = this.props;
		// console.log("upload_page user_id", user_id);
		// console.log("userId", userId);
		// console.log("audioFile", audioFile);
		// console.log("audio", audio);
		// console.log("audioUrl", audioUrl);

		return (
			<div className="upload-page-container">
				<NavbarContainer />
				<nav className="upload-page-nav">
					<NavLink className="upload-page-link" activeClassName="selected" to="/upload">
						Upload
						</NavLink>
					<NavLink className="upload-page-link" to="/upload">
						Your Tracks
						</NavLink>
					{/* <a className="upload-page-link" to="/upload">
							For Creators on SoundPoof
						</a> */}
				</nav>
				<div className="upload-page-background">
				<div className="upload-page" onDragOver={this.dragOverHandler}>
					
					<UploadTrack
						user_id={this.props.user_id}
						createTrack={this.props.createTrack}
						history={this.props.history}
						openModal={this.props.openModal}
						track={this.props.track}
						fetchAllTracks={this.props.fetchAllTracks}
					/>

				{/* <div className="upload-page-footer">
					<p>Supported file types and sizes ⁃ Upload troubleshooting tips ⁃ Copyright FAQs</p>
					<p>By uploading, you confirm that your sounds comply with our Terms of Use and you don't infringe anyone else's rights.</p>
				</div> */}

				</div>
				</div>
			</div>
		);
	}
}
export default (UploadPage);
