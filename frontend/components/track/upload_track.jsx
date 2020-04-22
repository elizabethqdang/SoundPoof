import React from "react";
import UploadTrackDetails from "./upload_track_details";
import NavbarContainer from "../navbar/navbar_container";

class UploadTrack extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// user_id: this.props.user_id,
			title: "",
			audioFile: null,
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

		if (audioFile.type === "audio/mp3") {
			this.setState({
				audioFile: audioFile,
				title: this.titleize(audioFile.name.split(".")[0].split("-")),
				errors: []
			});
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
				audio_url: fileReader.result
			});
		};

		if (audioFile.type === "audio/mp3") {
			fileReader.readAsDataURL(audioFile);
			this.setState({
				audioFile: audioFile,
				title: this.titleize(audioFile.name.split(".")[0].split("-")),
				errors: []
			});
		} else {
			this.setState({
				errors: ["Please upload an audio file"]
			});
		}
	}

	render() {
		if (this.state.audioFile) {
			return (
				<UploadTrackDetails
					title={this.state.title}
					audioFile={this.state.audioFile}
					user_id={this.props.userId}
					createTrack={this.props.createTrack}
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
							<input type="file" onChange={this.handleTrackFile} />
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

export default UploadTrack;