import React from "react";
import { Link, withRouter } from "react-router-dom";

class UploadTrackDetails extends React.Component {
	constructor(props) {
		super(props);
		// this.state = this.props.track;
		this.state = {
			user_id: this.props.user_id,
			title: this.props.title,
			artist: "",
			artworkFile: null,
			artworkUrl: null,
			audioFile: this.props.audioFile,
			audioUrl: this.props.audioUrl,
			dragged: false,
			// audio: null,
			// artwork: null,
			errors: [],
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
				artworkUrl: fileReader.result,
				// artwork: fileReader.result
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

	update(field) {
		return e => this.setState({ [field]: e.target.value });
	}

	handleImageFile(e) {
		e.preventDefault();
		let file = e.currentTarget.files[0];
		let fileReader = new FileReader();

		if (file) {
		// if (artworkFile.type === 'image/jpeg' || 'image/png') {
			// fileReader = new FileReader();
			fileReader.onloadend = () => {
				this.setState({
					artworkFile: file,
					artworkUrl: fileReader.result
				})
			}

		// if (file) {
			fileReader.readAsDataURL(file);
		} else {
			this.setState({
				errors: ["Please upload an image file"]
			});
		}
		}
		
		// this.setState({ 
		// 	artworkUrl: fileReader.result
		// });

		// const artworkFile = e.currentTarget.files[0];
		// const fileReader = new FileReader();

		// fileReader.onloadend = () => {
		// 	this.setState({
		// 		artworkFile: artworkFile,
		// 		errors: [],
		// 		artworkUrl: fileReader.result
		// 	});
		// };

		// if (artworkFile) {
		// 	fileReader.readAsDataURL(artworkFile);
		// } else {
		// 	this.setState({
		// 		errors: ["Please upload an image file"]
		// 	});
		// }
	

	renderErrors() {
		return (
			<ul>
				{this.state.errors.map((error, i) =>
				{
					return (
						<li className="errors" key={i}>
							{error}
						</li>
					);
				})}
			</ul>
		);
	}

	dragOverHandler(e) {
		e.preventDefault();

		this.setState({ dragged: true });
	}

	dragOverleave(e) {
		e.preventDefault();

		this.setState({ dragged: false });
	}

	handleSubmit(e) {
		e.preventDefault();
		// const track = new FormData();
		// track.append("track[artist]", this.state.artist);
		// track.append("track[title]", this.state.title);
		// track.append("track[user_id]", this.state.user_id);
			let artworkFile = this.state.artworkFile;
			let audioFile = this.state.audioFile;

		// const {createTrack, clearModal} = this.props;
		// createTrack(Object.assign({}, this.state).then(({track}) => {
		// 		clearModal(); 
		// 		this.props.history.push(`/tracks/${track.id}`);
		// 		});

		if (this.state.audioFile) {
			let track = new FormData();
			track.append("track[artworkUrl]", artworkFile);
			track.append("track[audioUrl]", audioFile);
			track.append("track[artist]", this.state.artist);
			// track.append("track[description]", this.state.artist);
			track.append("track[title]", this.state.title);
			track.append("track[user_id]", this.state.user_id);
		
			this.props.createTrack(track).then(
				console.log(track),
				// () => this.props.fetchAllTracks(),
				// (trackId) => this.props.fetchTrack(track),
				// (track.id) => this.props.fetchSingleTrack(track),
				() => this.props.history.push(`/tracks/${this.track.id}`),
				// .then(({track}) =>
					// this.props.history.push('/stream'),
				// (res) => {
					// console.log(response)
					// console.log(track)
				);
		// } else {
		// 	this.setState({
		// 		errors: ["Please upload an image file"]
		// 	});
		}
	}

	render() {
		const { user_id, userId, audioFile, audioUrl, trackId } = this.props;
		const { artworkFile, artworkUrl } = this.state;
		console.log("upload_track_details state", this.state);
		console.log("upload_track_details: trackId, user_id", trackId, user_id);
		console.log("audioFile", audioFile);
		console.log("audioUrl", audioUrl);
		console.log("artworkFile", artworkFile);
		console.log("artworkUrl", artworkUrl);

		const preview = this.state.artworkUrl ? (
			<img src={this.state.artworkUrl} className="stock-photo" />
		) : <img src="" className="stock-photo" />;

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
							Description<span className="errors"></span>
						</label>
						<input
							type="text"
							value={this.state.artist}
							onChange={this.update("artist")}
							placeholder="Description"
						/>

						{this.renderErrors()}

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
