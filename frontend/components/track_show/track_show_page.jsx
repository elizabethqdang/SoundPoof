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
		};
		this.playButton = this.playButton.bind(this);
		this.trackButtonBar = this.trackButtonBar.bind(this);
		this.toggleLike = this.toggleLike.bind(this);
		this.toggleRepost = this.toggleRepost.bind(this);
		this.deleteTrack = this.deleteTrack.bind(this);
	}
	
	componentDidMount() {
		const trackId = this.props.match.params.trackId;
		this.props.fetchTrack(this.props.match.params.trackId);
		// this.props.fetchUser(this.props.user);
	}
		
	componentDidUpdate(prevProps) {
		const trackId = this.props.trackId;
		if (prevProps.match.params.trackId !== this.props.match.params.trackId) {
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

	playButton(track, e) {
		e.preventDefault();
		const { setCurrentTrack, setPlayPause } = this.props; 
		let { tpPlayer, tpCurrentTrack, tpPlaying, tpTrackId } = this.props.trackplayer;
		// let tpPlayer = this.props.trackplayer.player;
		let trackProg = this.props.trackplayer.progressTrackId[track.id];

		if (tpTrackId == 0) {
			//  no track
			setCurrentTrack(track);
			setPlayPause(!tpPlaying, track.id, 1);
		} else if (tpTrackId === track.id) { 
			//  same track => play/pause
			let progress = (trackProg ? trackProg : tpPlayer.getCurrentTime() / tpPlayer.getDuration());
			setPlayPause(!tpPlaying, track.id, progress);
		} else { 
			// change to diff track
			let progress = (trackProg ? trackProg : 0);
			setPlayPause(!tpPlaying, track.id, progress);
		}
	}

	deleteTrack(e) {
		e.preventDefault();
		const { deleteTrack, track } = this.props;
		deleteTrack(track.id).then(() => this.props.history.push('/stream'));
	}

	toggleLike(e) {
		e.preventDefault();
		const { track, deleteLike, createLike, currentUser, fetchTrack} = this.props;

		if (currentUser.likedTrackIds.includes(track.id)) {
			deleteLike(track.id).then(
				() => fetchTrack(track.id),
				this.trackButtonBar()
			);
		} else {
			createLike(track.id).then(
				() => fetchTrack(track.id),
				this.trackButtonBar()
			);;
		}
	}

	toggleRepost(e) {
		e.preventDefault();
		const { track, deleteRepost, createRepost, currentUser, fetchTrack } = this.props;

		if (currentUser.repostedTrackIds.includes(track.id)) {
			deleteRepost(track.id).then(
				() => fetchTrack(track.id),
				this.trackButtonBar()
			);
		} else {
			createRepost(track.id).then(
				() => fetchTrack(track.id),
				this.trackButtonBar()
			);
		}
	}

	trackButtonBar() {
		const { track, currentUser } = this.props;
		const likeButton = (this.props.currentUser.likedTrackIds.includes(this.props.track.id)) ? 'controller-btn like-btn liked active' : 'controller-btn like-btn';
		const repostButton = (currentUser.repostedTrackIds.includes(track.id)) ? 'controller-btn like-btn liked active' : 'controller-btn like-btn';
		const numLikes = (track && track.numLikes ? `${(track.numLikes)}` : '0');
		const numReposts = (track && track.numReposts ? `${(track.numReposts)}` : '0');
		const numComments = (track && track.numComments ? `${(track.numComments)}` : '0');
		// console.log((Object.values(track)).numLikes);

		if (currentUser.id === track.user_id) {
			return (
				<div className='track-show-button-bar'>
					<div className={`sound-actions-btn action-like ${likeButton}`} onClick={(e) => this.toggleLike(e)}>Like</div>
					<div className={`sound-actions-btn action-repost ${repostButton}`} onClick={(e) => this.toggleRepost(e)}>Repost</div>
					<div className='sound-actions-btn controller-btn action-delete delete-btn' onClick={(e) => this.deleteTrack(e)}>Delete</div>
					
					<div className='track-right-btns like-stat'>{numLikes}</div>
					<div className='track-right-btns repost-stat'>{numReposts}</div>
					<div className='track-right-btns comment-btn'>{numComments}</div>
				</div>
			);
		} else {
			return (
				<div className='track-show-button-bar'>
					<div className={`track-show sound-actions-btn action-like ${likeButton}`} onClick={(e) => this.toggleLike(e)}>Like</div>
					<div className={`track-show sound-actions-btn action-repost ${repostButton}`} onClick={(e) => this.toggleRepost(e)}>Repost</div>
					
						<div className='track-right-btns like-stat' update>{numLikes}</div>
						<div className='track-right-btns repost-stat'>{numReposts}</div>
						<div className='track-right-btns comment-btn'>{numComments}</div>
				</div>
			);
		}
	}

	render() {

		if (this.props.track === undefined) {
			return (
				<div></div>
			)
		} else {
			const { comments, track, tracks, users, currentUser, trackplayer, deleteComment } = this.props;
			let user = (this.props.users)[this.props.track.user_id];
			let commentLength = ((comments.length === 1) ? "1 Comment" : `${comments.length} Comments`);
			let buttonPlaying = (trackplayer.playing && trackplayer.trackId === track.id) ?
				'playing' : 'ts-play';
			let trackButtonBar = this.trackButtonBar();
			let numFollows = ((user && user.followIds) ? user.followIds.length : "0");
			let userTrackIds = ((user && user.trackIds) ? user.trackIds.length : "0");
			let trackNavbar = (
				<NavbarContainer currentUser={currentUser} />
			);
			let commentForm = (
				<CommentFormContainer track={track} user={user} currentUser={currentUser} />
			);
			let trackComments = (comments).map((comment, idx) => (
				<CommentIndexItem key={idx} currentUser={currentUser || {}} deleteComment={deleteComment} comment={comment} users={users} track={track} user={user} />
			));
			let waveForm = (
				<WaveFormContainer track={track} height={100} color={'#fff'} />
			)

			return (
				<div className='track-show-page'>
					<div className="track-show-navbar-container">
						{trackNavbar}
					</div>
					<div className='track-show-container'>
						<div className='track-show-detail'>
							<div className='track-sd-top'>
								<div className={buttonPlaying} onClick={(e) => this.playButton(track, e)}></div>
								<div className='track-sd-info'>
									<a href={`/#/users/${track.user_id}`}><div className='track-sd-uploader'>{track.artist}</div></a>
									<div className='track-sd-title'>{track.title}</div>
								</div>
								<div className="track-timestamp">
									{moment(new Date(track.created_at)).fromNow()}
								</div>
							</div>
							<div className='track-sd-bott'>
								{waveForm}
							</div>
						</div>
						<div className='track-show-image-container'>
							<img src={track.artworkUrl ? track.artworkUrl : "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg"} />
						</div>
					</div>
					<div className='track-show-container-bottom'>
						<div className='tscb-left'>
							<div className='track-show-comment-form'>
								{commentForm}
							</div>
							{/* {this.trackButtonBar()} */}
							{trackButtonBar}
							<div className='ts-uploader-ci'>
								<div className='ts-uc-left'>
									<div className='ts-artist-circle'>
										{/* <Link to={`/users/${track.user_id}`}>
											<img src={track.profileImgUrl} />
										</Link> */}
										<a href={`/#/users/${track.user_id}`}><img src={track.profileImgUrl} /></a>
									</div>
									{/* <Link to={`/users/${track.user_id}`}>
										<div className='ts-artist-name'>{track.userEmail}</div>
									</Link> */}
									<a href={`/#/users/${track.user_id}`}><div className='ts-artist-name'>{track.userEmail}</div></a>
									<div className='ts-artist-stats'> 
										<div className='user-suggestion-followers'>{numFollows}</div>
										<div className='user-suggestion-tracks'>{userTrackIds}</div>
									</div>
									<button className="user-suggestion-follow-btn" value="Follow">Follow</button>
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
						<div className='trackshow-sidebar-right'>
							{/* <div className="ad-container">
								<a href="http://www.github.com/eqdang/soundpoof" target="_blank"><img src={this.props.currentUser.profileImgUrl} /></a>
							</div> */}
							<TrackSidebar users={users} currentUser={currentUser || null} tracks={tracks} track={track} />
						</div>
					</div>
				</div>
		)};
	}
}

export default withRouter(TrackShowPage);