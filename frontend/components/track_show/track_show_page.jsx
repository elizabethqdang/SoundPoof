import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";
import CommentIndexContainer from "../comments/comment_index_container";
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexItem from "../comments/comment_index_item";

class TrackShowPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstload: true,
		};
		this.songButton = this.songButton.bind(this);
		this.userTrackButtons = this.userTrackButtons.bind(this);
		this.toggleLike = this.toggleLike.bind(this);
		this.deleteTrack = this.deleteTrack.bind(this);
	}
	
	componentDidMount() {
		this.props.fetchTrack(this.props.match.params.trackId);
		this.props.fetchCurrentUser(this.props.currentUser.id);
		this.setState({ 
			// currentTrack: prevProps.trackId,
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

	songButton(track, e) {
		e.preventDefault();
		let { currentTrack, playing, trackId } = this.props.trackplayer;
		let tplayer = this.props.trackplayer.player;
		let trackProg = this.props.trackplayer.progressTrackId[this.props.track.id];
		let prog;

		if (trackId == 0) {
			// this.props.setCurrentTrack(track);
			this.props.setPlayPause(!playing, track.id, 1);
		} else if (track.id == trackId) { //if we are pausing the same song
			// then we will update the progress of this track
			prog = trackProg ? trackProg : tplayer.getCurrentTime() / tplayer.getDuration();
			this.props.setPlayPause(!playing, track.id, prog);
		} else { // track.id !== trackId - we are switching songs 
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
		// const user = users[currentUser.id];
		console.log("trackshow-toggleLike", "currentUser", currentUser, "track", track);

		if (this.props.currentUser.likedTrackIds.includes(this.props.track.id)) {
		// if (this.props.track.likerIds.includes(this.props.currentUser.id)) {
			this.props.deleteLike(track.id);
		} else {
			this.props.createLike(track.id);
		}
	}

	userTrackButtons() {
		const { currentUser, users, errors, track } = this.props;
		// const user = users[currentUser.id];

		const likeButton = (this.props.currentUser.likedTrackIds.includes(this.props.track.id)) ? 'controller-btn like-btn liked' : 'controller-btn like-btn';
		// const likeButton = (this.props.track.likerIds.includes(this.props.currentUser.id)) ? 'controller-btn like-btn liked' : 'controller-btn like-btn';

		if (this.props.currentUser.id === this.props.track.user_id) {
			return (
				<div className='button-bar'>
					<div className={likeButton} onClick={(e) => this.toggleLike(e)}>{track.numLikes}</div>
					<div className='controller-btn delete-btn' onClick={(e) => this.deleteTrack(e)}>Delete</div>
				</div>
			);
		} else {
			return (
				<div className='button-bar'>
					<div className={likeButton} onClick={(e) => this.toggleLike(e)}>{track.numLikes}</div>
				</div>
			);
		}
	}

	render() {
		const { currentTrack, trackId, tracks, users, trackplayer, comments, comment, loading, currentUser, deleteTrack, track, deleteComment, user} = this.props;
		// const user = users[currentUser.id];
		console.log("trackShowPage", "tracks", tracks, "track", track, "comments", comments, "users", users, "user", user, "current", currentUser);

		if (track === undefined) {
			return (
				<div></div>
			)
		} else {
			const user = this.props.users[this.props.track.user_id];
			// let currentUser = this.props.users[this.props.currentUser.id];
			const { comments, track, users } = this.props;
			let trackComments = (comments).map(comment => (
				<CommentIndexItem key={comment.id} currentUser={currentUser || {}} deleteComment={deleteComment} comment={comment} users={users} track={track} />
			));
			let buttonPlaying = (trackplayer.playing && trackplayer.trackId === track.id) ?
				'ts-play playing' : 'ts-play';
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
								<div className={buttonPlaying} onClick={(e) => this.songButton(track, e)}></div>
								<div className='track-sd-info'>
									<a href={`/#/users/${track.user_id}`}><div className='track-sd-uploader'>{track.artist}</div></a>
									<div className='track-sd-title'>{track.title}</div>
								</div>
							</div>
							<div className='track-sd-bott'>
								{/* <WaveFormContainer track={track} height={100} color={'#fff'} /> */}
							</div>
						</div>
						<div className='track-show-image-container'>
							<img src={track.artworkUrl ? track.artworkUrl : ""} />
						</div>
					</div>
					<div className='track-show-container-bottom'>
						<div className='tscb-left'>
							<div className='track-show-comment-bar'>
								<CommentFormContainer track={track} />
							</div>
							{buttonBar}
							<div className='ts-uploader-ci'>
								<div className='ts-uc-left'>
									<div className='ts-artist-circle'>
										<a href={`/#/users/${track.user_id}`}><img src={track.profileImgUrl} /></a>
									</div>
									<a href={`/#/users/${track.user_id}`}><div className='ts-artist-name'>{track.userEmail}</div></a>
								</div>
								<div className='ts-uc-right'>
									<div className='ts-track-description'>{track.description}</div>
									<div className='track-show-comment-index'>
										{trackComments}
										{/* <CommentIndexContainer track={track} /> */}
									</div>
								</div>
							</div>
						</div>
						<div className='tscb-sidebar'>
							<div className="ad-container">
								<a href="https://github.com/eqdang" target="_blank"><img src="" /></a>
							</div>
							<div className="ad-container">
								<a href="https://www.linkedin.com/in/elizabethqdang" target="_blank"><img src="" /></a>
							</div>
							<div className="extraspace"></div>
						</div>
					</div>
				</div>
		)};
	}
}

export default (TrackShowPage);