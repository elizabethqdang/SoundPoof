import React from "react";
import { NavLink } from "react-router-dom";
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
		return (
			<>
				<div className="upload-page" onDragOver={this.dragOverHandler}>
					<NavbarContainer />
					<nav className="upload-page-nav">
						<NavLink className="content_nav" to="/upload">
							Upload
						</NavLink>
						<a className="upload-page-link" to="/upload">
							For Creators on SoundPoof
						</a>
					</nav>
					<UploadTrack
						user_id={this.props.user_id}
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
