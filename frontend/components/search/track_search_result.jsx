import React from 'react';

class TrackSearchResult extends React.Component {
	constructor(props) {
		super(props);
		this.showTrack = this.showTrack.bind(this);
		this.showUser = this.showUser.bind(this);
	}

	showTrack() {
		window.location.hash = '/tracks/${this.props.track.id}'
	}

	showUser() {
	}

	render() {
		return (
			<li className='track-show search-show collection-show'>
				<img onClick={this.showTrack} src={this.props.track.artworkUrl || ""} />
				<span onClick={this.showTrack}>{this.props.track.title}</span>
				<div className="search-result-track-icon"></div>
			</li>
		);
	}
}



export default TrackSearchResult;