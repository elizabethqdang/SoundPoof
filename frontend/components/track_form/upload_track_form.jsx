import React from "react";
import { withRouter } from "react-router";
// import Modal from "react-modal";
import { updateTrack } from "../../actions/track_actions";

class UploadTrackForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// title: "",
			// artist: "",
			// artworkFile: null,
			// artworkUrl: "",
			// trackUrl: "",
			// trackFile: this.props.trackFile,
			// modalState: false,
			// isActive: "",
			// errors: "",
			// uploader_id: this.props.currentUser.id
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.navigateToSearch = this.navigateToSearch.bind(this);
		// this.handleFile = this.handleFile.bind(this);
		this.uploadImage = this.uploadImage.bind(this);
		this.update = this.update.bind(this);
	}

	// componentWillMount() {
	// 	Modal.setAppElement("body");
	// }

	// componentDidMount() {
	// 	if (this.state.isActive === "") {
	// 		this.setState({ isActive: "active" });
	// 	}
	// }

	// back() {
	// 	this.setState({ route: "upload", isActive: "" });
	// }

	update(property) {
		return e =>
			this.setState({
				[property]: e.currentTarget.value
			});
	}

	// update(prop) {
	//   return e => this.setState({ [prop]: e.target.value});
	// }

	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	const user = Object.assign({}, this.state);
	// 	// this.props.processForm(user);
	// 	this.props.processForm(user).then(this.props.closeModal);
	// }

	uploadImage(files) {
		let file = files[0];
		let fileReader = new FileReader();
		fileReader.onloadend = () => {
			this.setState({ artwork_file: file, artwork_url: fileReader.result });
		};
		fileReader.readAsDataURL(file);
	}

	// disableForm() {
	// 	this.setState({ modalState: true });
	// }

	handleSubmit(e) {
		e.preventDefault();

		// {() => openModal("createTrack")};
		// const file = e.currentTarget.files[0];
		// const fileReader = new FileReader();
		// fileReader.onloadend = () => {
		// 	this.setState({ trackFile: file, trackUrl: fileReader.result });
		// };
		// if (file) {
		// 	fileReader.readAsDataURL(file);
		// }

		if (this.state.title === "" || this.state.artist === "") {
			this.setState({ errors: "Please fill the starred information" });
			return;
		} else if (this.state.image_url === "") {
			this.setState({ errors: "Image cannot be blank" });
			return;
		}

		this.disableForm();

		let artworkFile = this.state.artwork_file;
		let trackFile = this.state.track_file;
		let upload = this;

		let formData = new FormData();
		formData.update("track[artwork_url]", artworkFile);
		formData.update("track[track_url]", trackFile);
		formData.update("track[title]", this.state.title);
		formData.update("track[artist]", this.state.artist);
		track.update("track[uploader_id]", this.state.uploader_id);

		this.props
			.createTrack(track)
			.then(action =>
				upload.props.history.push(
					`/${action.track.user.email}/tracks/${action.track.id}`
				)
			);
	}

	render() {
		 
		return (
			<div className="">
			<ul className="">
				{/* <Modal
					contentLabel="Modal"
					isOpen={this.state.modalState}
					className="upload-modal"
				>
					<div className="loader"></div>
					<div>Uploading Song</div>
				</Modal> */}
				<h1>Song info</h1>
				<ul className="upload-song-description">
					<li className="upload-image-box">
						<img src={this.state.image_url} />
						<button className="upload-image">Upload Image</button>
					</li>
					<ul className="upload-song-info">
						<ul>
							<li>Title*</li>
							<li className="upload-errors">{this.state.errors}</li>
						</ul>
						<input onChange={this.update("title")}></input>
						Artist
						<input onChange={this.update("artist")}></input>
						{/* <ul className="upload-song-detail">
							<li>
								Genre*
								<input onChange={this.update("genre")}></input>
							</li>
							<li>
								Release Date
								<input
									onChange={this.update("release_date")}
									type="date"
								></input>
							</li>
						</ul>
						Description
						<textarea rows="6" onChange={this.update("description")}></textarea> */}
					</ul>
				</ul>
				<div className="upload-buttons">
					<button onClick={this.props.back} className="login">
						Cancel
					</button>
					<button onClick={this.handleSubmit} className="signup">
						Save
					</button>
				</div>
			</ul>
			</div>
		);
	}
}

	// componentWillMount() {
// 		Modal.setAppElement("body");
// 	}

// 	componentDidMount() {
// 		if (this.state.isActive === "") {
// 			this.setState({ isActive: "active" });
// 		}
// 	}

// 	update(prop) {
// 		return e => this.setState({ [prop]: e.target.value });
// 	}

//   disableForm() {
//     this.setState({ modalState: true });

// 	This will be where we create our form data to submit our audio
// 	handleSubmit(e) {
// 		e.preventDefault();
// 		const formData = new FormData();
// 		formData.update("track[title]", this.state.title);
// 		formData.update("track[artist]", this.state.artist);

// 		if (this.state.trackFile) {
// 			formData.update("track[track]", this.state.trackFile);
// 		}
// 		This will fail because we do not have a AWS bucket set up for this project
// 	 presently.
// 		this.props.createTrack(formData);
// 		this.navigateToSearch();
// 	}

// 	render() {
// 		const { title } = this.state;
// 		const { artist } = this.state;
// 		const preview = this.state.trackUrl ? (
// 			<img height="200px" width="200px" src={this.state.trackUrl} />
// 		) : null;

// 		return (
// 			<div className="new-track-container">
// 				<div className="new-track-form">
// 					<h3 className="new-track-title">Upload a Track!</h3>

// 					<form onSubmit={this.handleSubmit}>
// 						<div className="button-holder">
// 							<button
// 								onClick={this.handleCloudinary}
// 								className="new-bench-button"
// 							>
// 								Upload Image
// 							</button>
// 						</div>

// 						<label className="track-field">Title</label>
// 						<input
// 							type="text"
// 							value={title}
// 							onChange={this.update("title")}
// 							className="track-field"
// 						/>

// 						<label className="track-field">Artist</label>
// 						<input
// 							type="text"
// 							value={artist}
// 							onChange={this.update("artist")}
// 							className="track-field"
// 						/>

// 						<div className="button-holder">
// 							<h3>Track preview </h3>
// 							{preview}
// 							<h3 className="button-holder">Add a Track</h3>
// 							<input
// 								type="file"
// 								className="new-track-button"
// 								onChange={this.handleFile.bind(this)}
// 							/>
// 						</div>

// 						<hr />

// 						<div className="button-holder">
// 							<input
// 								type="submit"
// 								value="Upload Track"
// 								className="new-track-button"
// 							/>
// 						</div>
// 					</form>

// 					<div className="button-holder">
// 						<button
// 							className="new-track-button"
// 							onClick={this.navigateToSearch}
// 						>
// 							Cancel
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default withRouter(UploadTrackForm);
