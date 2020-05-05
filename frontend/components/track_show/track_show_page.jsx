import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";
import CommentIndexContainer from "../comments/comment_index_container";
import CommentFormContainer from '../comments/comment_form_container';
import TrackLikesContainer from "./track_likes_container";

class TrackShowPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstload: true,
		};
		this.songButton = this.songButton.bind(this);
		this.userTrackButtons = this.userTrackButtons.bind(this);

	}
	
	componentDidMount() {
		this.props.fetchTrack(this.props.match.params.trackId);
		// this.props.fetchUser(this.props.match.params.userId);
		this.setState({ 
			// currentTrack: prevProps.trackId,
			firstLoad: false 
		});

	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.trackId !== prevProps.match.params.trackId) {
			this.props.fetchTrack(prevProps.match.params.trackId);
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

		if (trackId == -1) {
			// this.props.setCurrentTrack(track);
			this.props.setPlayPause(!playing, track.id, 0);
		} else if (track.id == trackId) { //if we are pausing the same song
			// then we will update the progress of this track
			prog = trackProg ? trackProg : tplayer.getCurrentTime() / tplayer.getDuration();

			this.props.setPlayPause(!playing, track.id, prog);
		} else { // track.id !== trackId - we are switching songs 
			prog = trackProg ? trackProg : 0;
			this.props.setPlayPause(!playing, track.id, prog);
		}//
	}

	deleteSong(trackId, e) {
		e.preventDefault();
		this.props.deleteTrack(trackId).then(() => this.props.history.push('/stream'));
	}

	userTrackButtons() {
		const { tracks, currentUser, users, errors, track } = this.props;
		let likeButton = this.props.liked ? 'controller-btn like-btn liked' : 'controller-btn like-btn';
		if (this.props.currentUser.id === this.props.track.uploaderId) {
			return (
				<div className='button-bar'>
					<div className={likeButton} onClick={() => this.props.toggleLike(track.id)}>like</div>
					{/* <Link to={`/tracks/${track.id}/edit`} className="controller-btn ˇedit-btn">Edit</Link> */}
					<div className='controller-btn delete-btn' onClick={(e) => this.deleteSong(track.id, e)}>Delete</div>
				</div>
			);
		} else {
			return (
				<div className='button-bar'>
					<div className={likeButton} onClick={() => this.props.toggleLike(track.id)}>like</div>
				</div>
			);
		}
	}

	deleteSong(trackId, e)
	{
		e.preventDefault();
		this.props.deleteTrack(trackId);
		this.props.history.push('/stream');
	}

	render() {
		const { currentTrack, trackId, tracks, users, trackplayer, comments, loading, currentUser, deleteTrack, track } = this.props;
		if (this.state.firstLoad || loading) return (<div>loading</div>);

		let buttonPlaying = (trackplayer.playing && trackplayer.trackId === track.id) ?
			'ts-play playing' : 'ts-play';
		let buttonBar = this.userTrackButtons();

		// console.log( "track-show-page" );
		// console.log("trackId", trackId, "errors", "track", track, "track.id", track.id, "currentTrack", currentTrack, track.userId);

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
								<a href={`/#/users/${track.uploaderId}`}><div className='track-sd-uploader'>{track.artist}</div></a>
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
						{/* {buttonBar} */}
						<TrackLikesContainer track={track} />
						<div className='ts-uploader-ci'>
							<div className='ts-uc-left'>
								<div className='ts-artist-circle'>
									{/* <a href={`/#/users/${track}`}><img src="" /></a> */}
								</div>
								{/* <a href={`/#/users/${track.uploaderId}`}><div className='ts-artist-name'>{track.artist}</div></a> */}
							</div>
							<div className='ts-uc-right'>
								<div className='ts-track-description'>{track.description}</div>
								<div className='track-show-comment-index'>
									<CommentIndexContainer track={track} />
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
		);
	}
}

export default withRouter(TrackShowPage);