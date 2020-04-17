import React from "react";
import { withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";
// import CommentIndex from "../comments/comment_index";

class TrackShowPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			user_id: '',
			artist: '',
			firstload: true,
			
		};
	}
	
	componentWillMount() {
		let trackId = this.props.match.params.trackId;
		let userId = this.props.match.params.user_id;
		let track = this.props.tracks[trackId];
		if (track) {
			let user = this.props.track.user_id;
		} else {
			let user = this.props.users[1];
		};

		this.props.fetchUser(this.props.user);
		this.props.fetchAllUsers().then(() => this.props.fetchTrack(trackId));
	}

	componentWillReceiveProps(newProps) {
		if (this.props.match.params.trackId !== newProps.match.params.trackId) {
			this.props.fetchTrack(newProps.match.params.trackId);
		};
			// this.setState({
			// 	currentTrack: newProps.trackId
			// })
	}

	componentDidUpdate(prevProps) {
			if (prevProps.match.params.trackId !== this.props.match.params.trackId) {
					this.props.fetchTrack(this.props.match.params.trackId);
			}
	}

	songButton(track, e)
	{
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

	deleteSong(trackId, e)
	{
		e.preventDefault();
		this.props.deleteTrack(trackId).then(() => this.props.history.push('/stream'));
	}

	userTrackButtons()
	{
		let track = this.props.track;
		let likeButton = this.props.liked ? 'controller-btn like-btn liked' : 'controller-btn like-btn';
		if (this.props.currentUser.id == track.user_id) {
			return (
				<div className='button-bar'>
					<div className={likeButton} onClick={() => this.props.toggleLike(track.id)}>like</div>
					<Link to={`/tracks/${track.id}/edit`} className="controller-btn edit-btn">Edit</Link>
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
		const { currentTrack, trackId, tracks, users, trackplayer, comments, loading, currentUser, deleteTrack } = this.props;
		let track = this.props.tracks[trackId];
		if (track) {
			let user_id = [track.user_id];
		} else {
			let user_id = this.props.users[1];
		}

		// console.log( "track-show-page" );
		// console.log("trackId", trackId, "errors", tracks, "track", track, "users", users, "user", user, "currentTrack", currentTrack, userId);

		if (this.state.firstLoad || loading) return (<div>loading</div>);
		if (track) {
			let user = this.props.users[track.user_id] 
		} else return {};
		let buttonPlaying = (trackplayer.playing && trackplayer.trackId === track.id) ?
			'ts-play playing' : 'ts-play';
		let buttonBar = this.userTrackButtons();

		return (
			<div className='track-show-page'>
				<div className="">
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
							{/* <CommentsContainer track={track} /> */}
						</div>
						{buttonBar}
						<div className='ts-uploader-ci'>
							<div className='ts-uc-left'>
								<div className='ts-artist-circle'>
									<a href={`/#/users/${track.user_id}`}><img src="" /></a>
								</div>
								<a href={`/#/users/${track.user_id}`}><div className='ts-artist-name'>{track.artist}</div></a>
								<div className='ts-follow-btn'>Follow</div>
							</div>
							<div className='ts-uc-right'>
								<div className='ts-track-description'>{track.description}</div>
								<div className='track-show-comment-index'>
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
							<a href="https://www.linkedin.com/in/elizabethqdang" target="_blank"><img src="h" /></a>
						</div>
						<div className="extraspace"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(TrackShowPage);