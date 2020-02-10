import React from "react";
import { withRouter } from "react-router-dom";

class UploadTrackDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			title: this.props.title,
			artist: "",
			artworkFile: null,
			trackFile: this.props.trackFile,
			dragged: false,
			artworkUrl: window.uploadStock
		};
		this.dragOverHandler = this.dragOverHandler.bind(this);
		this.dragOverleave = this.dragOverleave.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImageFile = this.handleImageFile.bind(this);
		this.dropHandler = this.dropHandler.bind(this);
		this.update = this.update.bind(this);
	}
	dropHandler(e) {
		e.preventDefault();
		const file = e.dataTransfer.files[0];

		const fileReader = new FileReader();
		fileReader.onloadend = () => {
			this.setState({
				artworkFile: file,
				errors: [],
				artworkUrl: fileReader.result
			});
		};

		if (file) {
			fileReader.readAsDataURL(file);
		} else {
			this.setState({
				errors: ["Please upload an image file"]
			});
		}
		this.setState({ dragged: false });
	}

	handleSubmit(e) {
		e.preventDefault();
		let upload = this;
		let formData = new FormData();

		formData.append("track[track_url]", this.state.trackFile);
		formData.append("track[artist]", this.state.artist);
		formData.append("track[title]", this.state.title);
		formData.append("track[user_id]", this.state.userId);

		// const {createTrack, clearModal} = this.props;
		// createTrack(Object.assign({}, this.state).then(({track}) => {
		// 		clearModal(); 
		// 		this.props.history.push(`/tracks/${track.id}`);
		// 		});

		if (this.state.artworkFile) {
		formData.append("track[artwork_url]", this.state.artworkFile);
			this.props.createTrack(formData).then(({track}) => {
				return this.props.history.push(`/tracks/${track.id}`);
			});
		} else {
			this.setState({
				errors: ["Please upload an image file"]
			});
		}
		// .then(this.props.closeModal)
	}

	update(field) {
		return e => this.setState({ [field]: e.target.value });
	}
	handleImageFile(e) {
		e.preventDefault();
		const file = e.target.files[0];
		const fileReader = new FileReader();
		fileReader.onloadend = () => {
			this.setState({
				artworkFile: file,
				errors: [],
				artworkUrl: fileReader.result
			});
		};

		if (file) {
			fileReader.readAsDataURL(file);
		} else {
			this.setState({
				errors: ["Please upload an image file"]
			});
		}
	}

	dragOverHandler(e) {
		e.preventDefault();

		this.setState({ dragged: true });
	}

	dragOverleave(e) {
		e.preventDefault();

		this.setState({ dragged: false });
	}

	render() {
		const preview = this.state.artworkUrl ? (
			<img src={this.state.artworkUrl} className="stock-photo" />
		) : null;
		return (
			<div
				className="upload-form-container"
				onDragOver={this.dragOverHandler}
				onDrop={this.dropHandler}
			>
				<h1 className="seond-form-info">Track info</h1>
				<form
					className="second-upload-form-content"
					onSubmit={this.handleSubmit}
				>
					<div className="left-form">
						{preview}
						<i className="fas fa-camera"></i>
						<label className="custom-file-upload">
							Upload image
							<input type="file" onChange={this.handleImageFile} />
						</label>
					</div>
					<div className="right-form">
						<label>
							Title<span className="errors">*</span>
						</label>
						<input
							type="text"
							value={this.state.title}
							onChange={this.update("title")}
							placeholder="Title"
						/>

						<label>
							Artist<span className="errors">*</span>
						</label>
						<input
							type="text"
							value={this.state.artist}
							onChange={this.update("artist")}
							placeholder="Artist Name"
						/>

						<input className="custom-file-upload" type="submit" value="Save" />
					</div>
				</form>
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
export default withRouter(UploadTrackDetails);
