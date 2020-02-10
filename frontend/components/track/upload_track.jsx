import React from "react";
import UploadTrackDetails from "./upload_track_details";

class UploadTrack extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			title: "",
			trackFile: null,
			errors: [],
			dragged: false
		};

		this.handleTrackFile = this.handleTrackFile.bind(this);
		this.dragOverHandler = this.dragOverHandler.bind(this);
		this.dragOverleave = this.dragOverleave.bind(this);
		this.dropHandler = this.dropHandler.bind(this);
	}

	handleTrackFile(e) {
		e.preventDefault();
		const trackFile = e.target.files[0];

		if (trackFile.type === "audio/mp3") {
			this.setState({
				trackFile: trackFile,
				title: this.titleize(trackFile.name.split(".")[0].split("-")),
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
		const trackFile = e.dataTransfer.files[0];

		if (trackFile.type === "audio/mp3") {
			this.setState({
				trackFile: trackFile,
				title: this.titleize(trackFile.name.split(".")[0].split("-")),
				errors: []
			});
		} else {
			this.setState({
				errors: ["Please upload an audio file"]
			});
		}
	}

	render() {
		if (this.state.trackFile) {
			return (
				<UploadTrackDetails
					title={this.state.title}
					trackFile={this.state.trackFile}
					userId={this.state.userId}
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