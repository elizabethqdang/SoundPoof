import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import moment from 'moment';
import WaveFormContainer from '../track_player/waveform';
import CommentIndexContainer from '../comments/comment_index_container';

class TrackIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};

		this.playButton = this.playButton.bind(this);
		this.toggleLike = this.toggleLike.bind(this);
		this.toggleRepost = this.toggleRepost.bind(this);
		this.deleteTrack = this.deleteTrack.bind(this);
		this.trackButtonBar = this.trackButtonBar.bind(this);
	}

 
	playButton(e) {
		e.preventDefault();
		const { track, trackplayer } = this.props;
		let { currentTrack, playing, trackId } = this.props.trackplayer;
		const trackProg = this.props.trackplayer.progressTrackId[this.props.track.id];

		if (trackplayer.trackId === 0) {
			// no track
			this.props.setPlayPause(!trackplayer.playing, track.id, 0);
		} else if ( trackplayer.trackId === track.id) {
			// same track
			let progress = (trackProg ? trackProg : trackplayer.player.getCurrentTime() / trackplayer.player.getDuration());
			this.props.setPlayPause(!trackplayer.playing, track.id, progress);
		} else {
			// diff track
			let progress = (trackProg ? trackProg : 0);
			this.props.setPlayPause(!trackplayer.playing, track.id, progress);
		}
	}

	deleteTrack(e) {
		e.preventDefault();
		const { track, deleteTrack, currentUser } = this.props;

		if (currentUser && currentUser.trackIds.includes(track.id)) {
			deleteTrack(track.id).then(
				() => this.props.fetchAllTracks(),
				() => this.props.history.push("/"),
				window.location.hash = `/`,
			);
		} else {
			return "delete unsuccessful";
		}
	}

	toggleLike(e) {
		e.preventDefault();
		const { track, deleteLike, createLike, currentUser, fetchTrack } = this.props;

		if (currentUser && currentUser.likedTrackIds.includes(track.id)) {
			deleteLike(track.id).then(
				() => fetchTrack(track.id)
			);
		} else {
			createLike(track.id).then(
				() => fetchTrack(track.id)
			);
		}
	}

	toggleRepost(e) {
		e.preventDefault();
		const { track, deleteRepost, createRepost, fetchTrack, currentUser } = this.props;

		if (currentUser && currentUser.repostedTrackIds.includes(track.id)) {
				deleteRepost(track.id).then(
				() => fetchTrack(track.id)
			);
		} else {
				createRepost(track.id).then(
				() => fetchTrack(track.id)
			);
		}
	}

	trackButtonBar() {
		const {track, currentUser, users, trackplayer} = this.props;
		let likeButton = (this.props.currentUser.likedTrackIds.includes(this.props.track.id)) ? 'controller-btn like-btn liked active' : 'controller-btn like-btn';
		let repostButton = (currentUser.repostedTrackIds.includes(track.id)) ? 'controller-btn like-btn liked active' : 'controller-btn like-btn';

		if (this.props.currentUser.id  === this.props.track.user_id) {
			return (
				<div className='track-button-bar'>
					<div className={`sound-actions-btn action-like ${likeButton}`} onClick={(e) => this.toggleLike(e)}>{track.numLikes}</div>
					<div className={`sound-actions-btn action-repost ${repostButton}`} onClick={(e) => this.toggleRepost(e)}>{track.numReposts}</div>
					<div className='sound-actions-btn controller-btn action-delete delete-btn' onClick={(e) => this.deleteTrack(e)}>Delete</div>
					
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
		let waveForm = (
			<WaveFormContainer track={track} height={60} color={'#000'} width={820} trackplayer={trackplayer || {}} />
			);

		return (
			<div className='track-item-container'>
				<div className='track-item-header'>
					<aside className="track-user-profile">
						<img src={track.profileImgUrl ? track.profileImgUrl : 'https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg'} />
					</aside>
					{/* <Link to={`/users/${track.user_id}`}>
						<aside className="track-user-username">{track.userEmail}</aside>
					</Link> */}
					<a href={`/#/users/${track.user_id}`}><aside className="track-user-username">{track.userEmail}</aside></a>
					<div className="track-timestamp">
						posted a track {moment(new Date(track.created_at)).fromNow()}
					</div>
				</div>

				<div className='track-item-main-container'>
					<div className='track-artwork-box'>
						{/* <Link to={`/tracks/${track.id}`}>
							<img src={track.artworkUrl} />
						</Link> */}
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
							{/* span className="track-genre">
								{track.Genre? }
							</span> */}
						</div>
						<div className='sound-bar'>
							<span></span>
							{/* <WaveFormContainer track={track} height={60} color={'#000'} width={820} trackplayer={trackplayer || {}} /> */}
							{/* {waveForm} */}
						</div>
						{this.trackButtonBar()}
					</section>

				</div>

			</div>
		);
	}
}

export default withRouter(TrackIndexItem);