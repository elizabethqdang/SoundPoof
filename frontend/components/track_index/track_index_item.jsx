import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import WaveFormContainer from '../track_player/waveform_container';
import CommentIndexContainer from '../comments/comment_index_container';

class TrackIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.songButton = this.songButton.bind(this);
		this.toggleLike = this.toggleLike.bind(this);
		this.deleteTrack = this.deleteTrack.bind(this);
		this.userTrackButtons = this.userTrackButtons.bind(this);
		this.showComments = this.showComments.bind(this);
	}

	componentDidUpdate(prevProps) {
		//this is for the circumstance whree 
		let { playing, trackId, player } = this.props.trackplayer;
		let trackProg = this.props.trackplayer.progressTrackId[this.props.track.id];
		let thisId = this.props.track.id;

		if (playing && (trackId == thisId) && (thisId !== prevProps.trackplayer.trackId)) {
			let prog = trackProg ? trackProg : player.getCurrentTime() / player.getDuration();
			this.props.setProg(thisId, prog);
		} //if song is currently playing and it switches update the progress of left song
	}

	songButton(e) {
		e.preventDefault();
		let { track } = this.props;
		let { currentTrack, playing, trackId } = this.props.trackplayer;
		let trackProg = this.props.trackplayer.progressTrackId[this.props.track.id];
		let tplayer = this.props.trackplayer.player;
		if (trackId == 0) { // no song played previously 
			this.props.setPlayPause(!playing, track.id, 0);
		}
		else if (track.id == trackId) { //if we are pausing the same song
			let prog = trackProg ? trackProg : tplayer.getCurrentTime() / tplayer.getDuration();

			this.props.setPlayPause(!playing, track.id, prog);
		} else { // not same track 
			let prog = trackProg ? trackProg : 0; // if previous pause ,pick that, if never played start at 0 

			this.props.setPlayPause(!playing, track.id, prog);
		}
		// else if (track.id == trackId) { //if we are pausing the same song
		//   let tplayer = this.props.trackplayer.player; 
		//   let prog = this.props.trackplayer.progressTrackId[this.props.track.id]; 

		//   this.props.setPlayPause(!playing, track.id, prog);
		// } else { // new song 
		//   let progress = this.props.trackplayer.progressTrackId[track.id] || 0;       
		//   this.props.setPlayPause(!playing, track.id, progress);
		// }//
	}

	deleteTrack(trackId, e) {
		e.preventDefault();
		this.props.deleteTrack(trackId);
	}

	toggleLike(e) {
		e.preventDefault();
		const { track, deleteLike, createLike, currentUser, users } = this.props;
		// const user = users[currentUser.id];
		console.log("togglelike", "track", track);

		if (this.props.currentUser.likedTrackIds.includes(this.props.track.id)) {
			deleteLike(track.id);
		} else {
			createLike(track.id);
		}
	}

	userTrackButtons() {
		const {track, currentUser, users} = this.props;
		const { likeButton, repostButton } = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'active' : '');
		const likeText = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'Liked' : 'Like');
		// const repostButton = ((currentUser.reposts && track.id in currentUser.reposts) ? 'active' : '' );
		// console.log("trackindexitem");
		// console.log("currentUser", currentUser);

		if (this.props.currentUser.id === this.props.track.user_id) {
			return (
				<div className='button-bar'>
					<div className={`bc-btn sound-actions-btn action-like ${likeButton}`} onClick={(e) => this.toggleLike(e)}>{track.numLikes}</div>
					<div className={`bc-btn sound-actions-btn action-repost ${repostButton}`}>Repost</div>
					<div className='controller-btn delete-btn' onClick={(e) => this.deleteTrack(trackId, e)}>Delete</div>
				</div>
			);
		} else {
			return (
				<div className='button-bar'>
					<div className={`bc-btn sound-actions-btn action-like ${likeButton}`} onClick={(e) => this.toggleLike(e)} >{track.numLikes}</div>
					<div className={`bc-btn sound-actions-btn action-repost ${repostButton}`}>Repost</div>
				</div>
			);
		}
	}

	showComments() {
		if (this.props.trackplayer.trackId == this.props.track.id) {
			return (
				<CommentIndexContainer track={this.props.track} />
			);
		} else {
			return (
				<div></div>
			);
		}
	}

	render() {
		let { track, trackplayer } = this.props;
		let buttonPlaying = (trackplayer.playing && trackplayer.trackId === track.id) ?
			'sound-title-play-btn' : 'ti-play';
		let buttonBar = this.userTrackButtons();

		return (
			<div className='track-item-container'>
				<div className='track-uploader-info'>
					<aside className="track-uploader-circle">
						<img src={track.profileImgUrl} />
					</aside>
					<a href={`/#/users/${track.user_id}`}><aside className="track-uploader-name">{track.userEmail}</aside></a>
				</div>

				<div className='track-item'>
					<div className='track-image-box'>
						<a href={`/#/tracks/${track.id}`}><img src={track.artworkUrl} /></a>
					</div>

					<section className='track-details'>
						<div className='td-top'>
							<div className={buttonPlaying} onClick={(e) => this.songButton(e)}>

							</div>
							<div className="ti-upload-det">
								<a href={`/#/users/${track.user_id}`}><aside className="ti-description">{track.artist}</aside></a>
								<a href={`/#/tracks/${track.id}`} className="ti-title">{track.title}</a>
							</div>
						</div>
						<div className='sound-bar'>
							<span></span>
							{/* <WaveFormContainer track={track} height={60} color={'#000'} /> */}
						</div>
						<div className='ti-comment-bar'>
						</div>
						{buttonBar}
					</section>

				</div>

			</div>
		);
	}
}

export default withRouter(TrackIndexItem);