import React from "react";
import { withRouter } from 'react-router-dom';
import UploadTrackDetails from "./upload_track_details";
import NavbarContainer from "../navbar/navbar_container";

class UploadTrack extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: this.props.user_id,
			title: "",
			audioFile: null,
			audioUrl: null,
			dragged: false, 
			errors: []
		};

		this.handleTrackFile = this.handleTrackFile.bind(this);
		this.dragOverHandler = this.dragOverHandler.bind(this);
		this.dragOverleave = this.dragOverleave.bind(this);
		this.dropHandler = this.dropHandler.bind(this);
	}

	handleTrackFile(e) {
		e.preventDefault();
		const audioFile = e.currentTarget.files[0];
		const fileReader = new FileReader();

		// this.setState({
		// 	audioFile: audioFile,
		// 	errors: [],
		// 	audioUrl: fileReader.result,
		// 	title: this.titleize(audioFile.name.split(".")[0].split("-")),
		// });
		// console.log("upload_track handleTrackFile state", this.state);

		fileReader.onloadend = () => {
			// if (this.state.audioFile.type === ("audio/mp3" || "audio/mpeg")) {
				this.setState({
					audioFile: audioFile,
					title: this.titleize(audioFile.name.split(".")[0].split("-")),
					errors: [],
					audioUrl: fileReader.result
				});
			// 	console.log("state", this.state, this.state.audioFile.type);
			// } else {
			// 	this.setState({
			// 		errors: ["Please upload an audio file"]
			// 	});
			// }
		
		};

		if (audioFile) {
			fileReader.readAsDataURL(audioFile);
		// 	this.setState({
		// 		audioFile: audioFile,
		// 		title: this.titleize(audioFile.name.split(".")[0].split("-")),
		// 		errors: []
			// });
		} else {
			this.setState({
				errors: ["Please upload an audio file"]
			});
		}
	}

	titleize(arr) {
		let titleized;
		const titelizedArray = arr.map(
			word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		);
		titleized = titelizedArray.join(" ");
		return titleized;
	}

	dragOverHandler(e) {
		e.preventDefault();

		this.setState({ dragged: true });
	}
	dragOverleave(e) {
		e.preventDefault();

		this.setState({ dragged: false });
	}

	renderErrors() {
		return (
			<ul>
				{this.state.errors.map((error, i) => {
					return (
						<li className="errors" key={i}>
							{error}
						</li>
					);
				})}
			</ul>
		);
	}

	dropHandler(e) {
		e.preventDefault();
		const audioFile = e.dataTransfer.files[0];
		const fileReader = new FileReader();

		fileReader.onloadend = () => {
			this.setState({
				audioFile: audioFile,
				errors: [],
				audioUrl: fileReader.result
			});
		};

		if (audioFile.type === "audio/mp3") {
			fileReader.readAsDataURL(audioFile);
			this.setState({
				audioFile: audioFile,
				title: this.titleize(audioFile.name.split(".")[0].split("-")),
				errors: []
			});
			console.log("upload_track dropHandler audioFile", audioFile);
			console.log("upload_track dropHandler audioUrl", audioUrl);
		} else {
			this.setState({
				errors: ["Please upload an audio file"]
			});
		}
	}

	render() {
		const { user_id, userId, audioFile, audio, audioUrl } = this.props;
		console.log("upload_track user_id", user_id);
		console.log("audioFile", audioFile);
		console.log("audioUrl", audioUrl);

		if (this.state.audioFile) {
			return (
				<UploadTrackDetails
					title={this.state.title}
					audioFile={this.state.audioFile}
					audioUrl={this.state.audioUrl}
					user_id={this.props.user_id}
					createTrack={this.props.createTrack}
					track={this.props.track}
					fetchAllTracks={this.props.fetchAllTracks}
				/>
			);
		} else {
			return (
				<div
					className="upload-form-container"
					onDrop={this.dropHandler}
					onDragOver={this.dragOverHandler}
				>
					<h1>Drag and drop your tracks & albums here</h1>
					<form className="upload-form-content">
						<label className="custom-file-upload">
							or choose files to upload
							<input type="file" onChange={(e) => this.handleTrackFile(e)} />
						</label>
					</form>
					{this.renderErrors()}
					<p>
						Provide FLAC, WAV, ALAC or AIFF for best audio quality.{" "}
						<a
							href="https://help.soundcloud.com/hc/en-us/articles/115003452847-Uploading-requirements#typeOfFile"
							target="_blank"
						>
							Learn more about high quality audio (HQ).
						</a>
					</p>

					<div
						className={`drag-over-modal-background ${
							this.state.dragged ? "show-drag-over" : ""
						}`}
						onDragLeave={this.dragOverleave}
					>
						<div
							className={`drag-over-modal-child ${
								this.state.dragged ? "show-drag-over" : ""
							}`}
						>
							<div
								className={`drag-over-ged-upload ${
									this.state.dragged ? "show-drag-over" : ""
								}`}
							>
								Drop your files here
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default withRouter(UploadTrack);