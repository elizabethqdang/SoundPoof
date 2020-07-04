import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import moment from 'moment';
import WaveFormContainer from '../track_player/waveform_container';
import CommentIndexContainer from '../comments/comment_index_container';

class TrackIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.playButton = this.playButton.bind(this);
		this.toggleLike = this.toggleLike.bind(this);
		this.toggleRepost = this.toggleRepost.bind(this);
		this.deleteTrack = this.deleteTrack.bind(this);
		this.userTrackButtons = this.userTrackButtons.bind(this);
	}

	componentDidUpdate(prevProps) {
		let { trackplayer, track, setProg } = this.props;
		let trackProg = this.props.trackplayer.progressTrackId[this.props.track.id];

		if ((trackplayer.playing) && (trackplayer.trackId === track.id) && (track.id !== prevProps.trackplayer.trackId)) {
			let prog = trackProg ? trackProg : trackplayer.player.getCurrentTime() / trackplayer.player.getDuration();
			this.props.setProg(track.id, prog);
		}
	}

	playButton(e) {
		e.preventDefault();
		const { track, trackplayer } = this.props;
		// let { currentTrack, playing, trackId } = this.props.trackplayer;
		const trackProg = this.props.trackplayer.progressTrackId[this.props.track.id];
		let tplayer = this.props.trackplayer.player;

		if (trackplayer.trackId === 0) {
			this.props.setPlayPause(!trackplayer.playing, track.id, 0);
		} else if (trackplayer.trackId === track.id) {
			let prog = trackProg ? trackProg : trackplayer.player.getCurrentTime() / trackplayer.player.getDuration();
			this.props.setPlayPause(!trackplayer.playing, track.id, prog);
		} else {
			let prog = trackProg ? trackProg : 0;
			this.props.setPlayPause(!trackplayer.playing, track.id, prog);
		}
	}

	deleteTrack(trackId, e) {
		e.preventDefault();
		this.props.deleteTrack(trackId).then(
			this.props.history.push('/stream')
		);
	}

	toggleLike(e) {
		e.preventDefault();
		const { track, deleteLike, createLike, currentUser, users } = this.props;
		// console.log("togglelike", "track", track);

		if (this.props.currentUser.likedTrackIds.includes(this.props.track.id)) {
			deleteLike(track.id).then(
				() => this.props.fetchTrack(track.id)
			);
		} else {
			createLike(track.id).then(
				() => this.props.fetchTrack(track.id)
			);
		}
	}

	toggleRepost(e) {
		e.preventDefault();
		const { track, deleteRepost, createRepost, currentUser, users } = this.props;
		// console.log("toggleRepost", "track", track);

		if (this.props.currentUser.repostedTrackIds.includes(this.props.track.id)) {
			deleteRepost(track.id).then(
				() => this.props.fetchTrack(track.id)
			);
		} else {
			createRepost(track.id).then(
				() => this.props.fetchTrack(track.id)
			);
		}
	}

	userTrackButtons() {
		const {track, currentUser, users, trackplayer} = this.props;
		const likeButton = (this.props.currentUser.likedTrackIds.includes(this.props.track.id)) ? 'controller-btn like-btn liked active' : 'controller-btn like-btn';
		const repostButton = (currentUser.repostedTrackIds.includes(track.id)) ? 'controller-btn like-btn liked active' : 'controller-btn like-btn';

		if (this.props.currentUser.id  === this.props.track.user_id) {
			return (
				<div className='track-button-bar'>
					<div className={`sound-actions-btn action-like ${likeButton}`} onClick={(e) => this.toggleLike(e)}>{track.numLikes}</div>
					<div className={`sound-actions-btn action-repost ${repostButton}`} onClick={(e) => this.toggleRepost(e)}>{track.numReposts}</div>
					<div className='sound-actions-btn controller-btn delete-btn' onClick={(e) => this.deleteTrack(trackId, e)}>Delete</div>
					
					<div className='track-right-btns comment-btn'>{track.numComments}</div>
				</div>
			);
		} else {
			return (
				<div className='track-button-bar'>
					<div className={`sound-actions-btn action-like ${likeButton}`} onClick={(e) => this.toggleLike(e)} >{track.numLikes}</div>
					<div className={`sound-actions-btn action-repost ${repostButton}`} onClick={(e) => this.toggleRepost(e)}>{track.numReposts} </div>
					
					<div className='track-right-btns comment-btn'>{track.numComments}</div>
				</div>
			);
		}
	}

	render() {
		let { track, trackplayer } = this.props;
		let playButton = (trackplayer.playing && trackplayer.trackId === track.id) ?
			'sound-title-play-btn' : 'ti-play';
		// console.log("track.id", track.id);
		// console.log("trackplayer.trackId", trackplayer.trackId);
		// console.log("trackplayer.playing", trackplayer.playing);

		return (
			<div className='track-item-container'>
				<div className='track-item-header'>
					<aside className="track-user-profile">
						<img src={track.profileImgUrl} />
					</aside>
					<a href={`/#/users/${track.user_id}`}><aside className="track-user-username">{track.userEmail}</aside></a>
					<div className="track-timestamp">
						posted a track {moment(new Date(track.created_at)).fromNow()}
					</div>
				</div>

				<div className='track-item-main-container'>
					<div className='track-artwork-box'>
						<a href={`/#/tracks/${track.id}`}><img src={track.artworkUrl} /></a>
					</div>

					<section className='track-item-content-container'>
						<div className='tic-header'>
							<div className={playButton} onClick={(e) => this.playButton(e)}>

							</div>
							<div className="ti-upload-det">
								<a href={`/#/users/${track.user_id}`}><aside className="ti-description">{track.userEmail}</aside></a>
								<a href={`/#/tracks/${track.id}`} className="ti-title">{track.title}</a>
							</div>
							{/* <div className="track-timestamp">
								{moment(new Date(track.created_at)).fromNow()}
							</div> */}
						</div>
						<div className='sound-bar'>
							<span></span>
							<WaveFormContainer track={track} height={60} color={'#000'} width={820} />
						</div>
							{this.userTrackButtons()}
					</section>

				</div>

			</div>
		);
	}
}

export default withRouter(TrackIndexItem);