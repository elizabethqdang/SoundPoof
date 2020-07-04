import React from "react";
import { Link, withRouter } from "react-router-dom";
import moment from 'moment';
import NavbarContainer from "../navbar/navbar_container";
import CommentIndexContainer from "../comments/comment_index_container";
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexItem from "../comments/comment_index_item";
import TrackSidebar from "./track_sidebar";
import WaveFormContainer from "../track_player/waveform_container";

class TrackShowPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstload: true,
		};
		this.trackButton = this.trackButton.bind(this);
		this.userTrackButtons = this.userTrackButtons.bind(this);
		this.toggleLike = this.toggleLike.bind(this);
		this.deleteTrack = this.deleteTrack.bind(this);
	}
	
	componentDidMount() {
		this.props.fetchTrack(this.props.match.params.trackId);
		this.props.fetchCurrentUser(this.props.currentUser.id);
		this.setState({ 
			// currentTrack: prevProps.trackId,
			trackId: this.props.trackId,
			track: this.props.track,
			firstLoad: false 
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.trackId !== prevProps.match.params.trackId) {
			this.props.fetchTrack(this.props.match.params.trackId);
		}

		// if (this.state.firstLoad || this.props.loading) return;
		// let { playing, trackId, player, progressTrackId } = this.props.trackplayer;
		// let trackProg = progressTrackId[this.props.track.id];
		// let thisId = this.props.track.id;

		// if (playing && (trackId == thisId) && (thisId !== prevProps.trackplayer.trackId)) {
		// 	let prog = trackProg ? trackProg : player.getCurrentTime() / player.getDuration();
		// 	this.props.setProg(thisId, prog);
		// }
	}

	trackButton(track, e) {
		e.preventDefault();
		let { currentTrack, playing, trackId } = this.props.trackplayer;
		let tplayer = this.props.trackplayer.player;
		let trackProg = this.props.trackplayer.progressTrackId[this.props.track.id];
		let prog;

		if (trackId == 0) {
			// this.props.setCurrentTrack(track);
			this.props.setPlayPause(!playing, track.id, 1);
		} else if (track.id == trackId) { //if we are pausing the same track
			// then we will update the progress of this track
			prog = trackProg ? trackProg : tplayer.getCurrentTime() / tplayer.getDuration();
			this.props.setPlayPause(!playing, track.id, prog);
		} else { // track.id !== trackId - we are switching tracks 
			prog = trackProg ? trackProg : 0;
			this.props.setPlayPause(!playing, track.id, prog);
		}//
	}

	deleteTrack(e) {
		e.preventDefault();
		const { deleteTrack, track } = this.props;
		deleteTrack(track.id).then(() => this.props.history.push('/stream'));
	}

	toggleLike(e) {
		e.preventDefault();
		const { track, deleteLike, createLike, currentUser, users } = this.props;
		console.log("trackshow-toggleLike", "currentUser", currentUser, "track", track);

		if (this.props.currentUser.likedTrackIds.includes(this.props.track.id)) {
			this.props.deleteLike(track.id).then(
				() => this.props.fetchTrack(track.id)
			);;
		} else {
			this.props.createLike(track.id).then(
				() => this.props.fetchTrack(track.id)
			);;
		}
	}

	toggleRepost(e) {
		e.preventDefault();
		const { track, deleteRepost, createRepost, currentUser, users } = this.props;

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
		const { track, currentUser, users, trackplayer } = this.props;
		const likeButton = (this.props.currentUser.likedTrackIds.includes(this.props.track.id)) ? 'controller-btn like-btn liked active' : 'controller-btn like-btn';
		const repostButton = (currentUser.repostedTrackIds.includes(track.id)) ? 'controller-btn like-btn liked active' : 'controller-btn like-btn';

		if (this.props.currentUser.id === this.props.track.user_id) {
			return (
				<div className='track-show-button-bar'>
					<div className={`sound-actions-btn action-like ${likeButton}`} onClick={(e) => this.toggleLike(e)}>Like</div>
					<div className={`sound-actions-btn action-repost ${repostButton}`} onClick={(e) => this.toggleRepost(e)}>Repost</div>
					<div className='sound-actions-btn controller-btn delete-btn' onClick={(e) => this.deleteTrack(trackId, e)}>Delete</div>
					
					<div className='track-right-btns like-stat'>{track.numLikes}</div>
					<div className='track-right-btns repost-stat'>{track.numReposts}</div>
					<div className='track-right-btns comment-btn'>{track.numComments}</div>
				</div>
			);
		} else {
			return (
				<div className='track-show-button-bar'>
					<div className={`track-show sound-actions-btn action-like ${likeButton}`} onClick={(e) => this.toggleLike(e)}>Like</div>
					<div className={`track-show sound-actions-btn action-repost ${repostButton}`} onClick={(e) => this.toggleRepost(e)}>Repost</div>
					
					{/* <div className='track-show-right-btns'> */}
						<div className='track-right-btns like-stat'>{track.numLikes}</div>
						<div className='track-right-btns repost-stat'>{track.numReposts}</div>
						<div className='track-right-btns comment-btn'>{track.numComments}</div>
					{/* </div> */}
				</div>
			);
		}
	}

	render() {
		const { currentTrack, trackId, tracks, users, trackplayer, comments, comment, loading, currentUser, deleteTrack, track, deleteComment, user} = this.props;
		// console.log("trackShowPage", "tracks", tracks, "track", track, "comments", comments, "users", users, "user", user, "current", currentUser);

		if (track === undefined) {
			return (
				<div></div>
			)
		} else {
			const user = this.props.users[this.props.track.user_id];
			const { comments, track, users } = this.props;
			let trackComments = (comments).map(comment => (
				<CommentIndexItem key={comment.id} currentUser={currentUser || {}} deleteComment={deleteComment} comment={comment} users={users} track={track} />
			));
			let commentLength = comments.length === 1 ? "1 Comment" : `${comments.length} Comments`;
			let buttonPlaying = (trackplayer.playing && trackplayer.trackId === track.id) ?
				'playing' : 'ts-play';
			let buttonBar = this.userTrackButtons();
			
			if (this.state.firstLoad || loading) return (<div>loading</div>);

			return (
				<div className='track-show-page'>
					<div className="track-show-navbar-container">
						<NavbarContainer />
					</div>
					<div className='track-show-container'>
						<div className='track-show-detail'>
							<div className='track-sd-top'>
								<div className={buttonPlaying} onClick={(e) => this.trackButton(track, e)}></div>
								<div className='track-sd-info'>
									<a href={`/#/users/${track.user_id}`}><div className='track-sd-uploader'>{track.artist}</div></a>
									<div className='track-sd-title'>{track.title}</div>
								</div>
								<div className="track-timestamp">
									{moment(new Date(track.created_at)).fromNow()}
								</div>
							</div>
							<div className='track-sd-bott'>
								<WaveFormContainer track={track} height={100} color={'#fff'} />
							</div>
						</div>
						<div className='track-show-image-container'>
							<img src={track.artworkUrl ? track.artworkUrl : ""} />
						</div>
					</div>
					<div className='track-show-container-bottom'>
						<div className='tscb-left'>
							<div className='track-show-comment-form'>
								<CommentFormContainer track={track} />
							</div>
							{buttonBar}
							<div className='ts-uploader-ci'>
								<div className='ts-uc-left'>
									<div className='ts-artist-circle'>
										<a href={`/#/users/${track.user_id}`}><img src={track.profileImgUrl} /></a>
									</div>
									<a href={`/#/users/${track.user_id}`}><div className='ts-artist-name'>{track.userEmail}</div></a>
									<div className='ts-artist-stats user-suggestion-tracks'>{user.trackIds.length}</div>
								</div>
								<div className='ts-uc-right'>
									<div className='ts-track-description'>DESCRIPTION</div>
									<div className='ts-track-numComments comment-btn'>{commentLength}</div>
									<div className='track-show-comment-index'>
										{trackComments}
									</div>
								</div>
							</div>
						</div>
						<div className='tscb-sidebar'>
							<div className="ad-container">
								<a href="http://www.github.com/eqdang/soundpoof" target="_blank"><img src={this.props.currentUser.profileImgUrl} /></a>
							</div>
							<TrackSidebar users={users} currentUser={currentUser || null} tracks={tracks} track={track} />
						</div>
					</div>
				</div>
		)};
	}
}

export default (TrackShowPage);