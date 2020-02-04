import React from "react";
import { withRouter } from "react-router";

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      audioFile: null,
      audioUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  navigateToSearch() {
    this.props.history.push("/");
  }

  update(property) {
    return e =>
      this.setState({
        [property]: e.target.value
      });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ audioFile: file, audioUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // This will be where we create our form data to submit our audio
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[artist]", this.state.artist);

    if (this.state.audioFile) {
      formData.append("track[audio]", this.state.audioFile);
    }
    // This will fail because we do not have a AWS bucket set up for this project
    // presently.
    this.props.createTrack(formData);
    this.navigateToSearch();
  }

  render() {
    const { title } = this.state;
    const { artist } = this.state;
    const preview = this.state.audioUrl ? (
      <img height="200px" width="200px" src={this.state.audioUrl} />
    ) : null;

    return (
      <div className="new-track-container">
        <div className="new-track-form">
          <h3 className="new-track-title">Upload a Track!</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="track-field">Title</label>
            <input
              type="text"
              value={title}
              onChange={this.update("title")}
              className="track-field"
            />

            <label className="track-field">Artist</label>
            <input
              type="text"
              value={artist}
              onChange={this.update("artist")}
              className="track-field"
            />

            <div className="button-holder">
              <h3>Track preview </h3>
              {preview}
              <h3 className="button-holder">Add a Track</h3>
              <input
                type="file"
                className="new-track-button"
                onChange={this.handleFile.bind(this)}
              />
            </div>

            <hr />

            <div className="button-holder">
              <input
                type="submit"
                value="Upload Track"
                className="new-track-button"
              />
            </div>
          </form>

          <div className="button-holder">
            <button
              className="new-track-button"
              onClick={this.navigateToSearch}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackForm);
