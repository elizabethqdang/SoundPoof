import React from "react";
import { NavLink } from "react-router-dom";
import UploadTrack from "./upload_track";
// import { Footer } from "../footer/footer";

class UploadPage extends React.Component {
	constructor(props) {
		super(props);
	}

	dragOverHandler(e) {
		e.preventDefault();
	}

	render() {
		return (
			<>
				<div className="upload-page" onDragOver={this.dragOverHandler}>
					<nav className="upload-page-nav">
						<NavLink className="upload-page-link" to="/upload">
							Upload
						</NavLink>
						<a className="upload-page-link" to="/upload">
							For Creators on RachetPoof
						</a>
					</nav>
					<UploadTrack
						userId={this.props.userId}
						createTrack={this.props.createTrack}
						history={this.props.history}
						openModal={this.props.openModal}
					/>
				</div>
				{/* <Footer /> */}
			</>
		);
	}
}
export default UploadPage;
