import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import TrackIndexItem from '../track_index/track_index_item';
import UserTrackItem from './user_track_item'
import UserSidebar from './user_sidebar';

class UserShow extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			profileFile: null,
			profileUrl: "",
			trackStream: true,
			likedStream: false,
			repostedStream: false,
			showStream: true,
			showSearch: false,
			showProfile: false,
			showPlaylists: false,
			showComments: false,
			followed: "",
		}
		this.toggleFollow = this.toggleFollow.bind(this);
		this.updateImage = this.updateImage.bind(this);
		this.updateImageBtn = this.updateImageBtn.bind(this);
		this.showTracks = this.showTracks.bind(this);
		this.showLikes = this.showLikes.bind(this);
		this.showReposts = this.showReposts.bind(this);
  }

  componentDidMount() {
		const user = this.props.fetchSingleUser(this.props.match.params.userId);
		this.props.fetchAllTracks();
		
		const userId =(user ? user.id : window.location.hash.split('/').splice(-1));
		console.log("userId", userId);
		if (this.props.currentUser.id === userId) {
			this.setState({followed: null});
		};
  }

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.userId !== this.props.match.params.userId) {
			this.props.fetchSingleUser(this.props.match.params.userId);
		}

		let { playing, trackId, player, progressTrackId } = this.props.trackplayer;
		let trackProg = progressTrackId[prevProps.trackId];

		if (playing && (trackplayer.trackId !== prevProps.trackplayer.trackId)) {
			let prog = trackProg ? trackProg : player.getCurrentTime() / player.getDuration();
			this.props.setProg(trackId, prog);
		}
	}

  updateImage(e) {
      e.preventDefault();
			const file = e.currentTarget.files[0];
			let fileReader = new FileReader();

			if (file) {
			fileReader.onloadend = () => {
				this.setState({
					profileFile: file,
					profileUrl: fileReader.result
				})
			}

			// if (this.state.profileFile) {
			// 	let user = new FormData();
			// 	user.append("user[profile_image]", file);

			// 	this.props.updateUser(this.props.user.id, user).then(
			// 		() => this.props.fetchUser(this.props.user.id)
			// 	)
			// }
		}
	}
	
	toggleFollow(e) {
		e.preventDefault();
		const { user, deleteFollow, createFollow, fetchSingleUser, currentUser } = this.props;
		const userId =(user ? user.id : window.location.hash.split('/').splice(-1));

		if (currentUser && currentUser.followingIds.includes(user.id)) {
			deleteFollow(user.id).then(fetchSingleUser(user.id));
			this.setState({followed: false});
		} else if (currentUser && !currentUser.followingIds.includes(user.id)) {
			createFollow(user.id).then(fetchSingleUser(user.id));
			this.setState({followed: true});
		};
	}

	updateImageBtn() {
		if (this.props.user === this.props.currentUser.id) {
			return (
					<div className="user-updateImage-btn">
						Update Image
					<input type="file" onChange={(e) => this.updateImage(e)} className="" />
					</div>
			)
		} else {
			return <div></div>;
		}
	}

	showTracks(e) {
		e.preventDefault();
		this.props.history.push(`/users/${this.props.user.id}`);
		this.setState({
			trackStream: true,
			likedStream: false,
			repostedStream: false
		});
		this.props.history.push(`/users/${this.props.user.id}`);
	}

	showLikes(e) {
		e.preventDefault();
		this.props.history.push(`/users/${this.props.user.id}/likes`);
		this.setState({
			trackStream: false,
			likedStream: true,
			repostedStream: false
		});
	}

	showReposts(e) {
		e.preventDefault();
		this.setState({
			trackStream: false,
			likedStream: false,
			repostedStream: true
		});
	}

  render() {
		const { user, users, track, tracks, currentUser, trackplayer, setPlayPause, userTracks} = this.props;
		let editProfile = this.updateImageBtn();
		// console.log(user.id, currentUser.id)
		let followButton;
		let followText;
		let hidden = '';
		const userId =(user ? user.id : window.location.hash.split('/').splice(-1));
		console.log("userId", userId);
		// if (this.props.currentUser.id === userId) {
		// 	this.state.followed = null;
		// };
		if (this.props.currentUser.id === this.props.userId || this.state.followed === null) {
			this.state.followed = null;
			followButton = 'hidden';
			followText = '';
			hidden = 'hidden';
		};
		if (this.props.currentUser.id !== this.props.userId && this.state.followed === true) {
			followButton = 'followed active';
			followText = 'Following';
		} else if (this.props.currentUser.id !== this.props.userId && this.state.followed === false) {
			followButton = 'user-follow-btn';
			followText = 'Follow';
		};

		if (this.props.user === undefined) {
			return (
				<div></div>
			)
		} else {
			const { user, tracks, userTracks, track, users, createLike, deleteLike, createRepost, deleteRepost, deleteTrack, currentUser, setPlayPause, setProg, fetchTrack, seekWaveForm, seekTrack, seekPlayer, setTrackPlayer } = this.props;

			let userShowNavbar = (
				<NavbarContainer currentUser={currentUser} trackplayer={trackplayer || {}} tracks={tracks} users={users} />
			);
			let stream;
			let trackIds = (this.props.user.trackIds);
			let likedTrackIds = this.props.user.likedTrackIds;
			let repostedTrackIds = (user.repostedTrackIds ? user.repostedTrackIds : "0");
			let editProfile = this.updateImageBtn();
			let numFollowing = (user && user.numFollowing ? user.numFollowing : "0");
			if (this.state.trackStream) {
				stream = (Object.values(tracks).map((track, idx) => {
					if (trackIds && trackIds.includes(track.id)) {
						return (
							<UserTrackItem id={track.id} key={idx} track={track} currentUser={currentUser || {}} users={users} user={user} createLike={createLike} deleteLike={deleteLike} createRepost={createRepost} deleteRepost={deleteRepost} deleteTrack={deleteTrack} setPlayPause={setPlayPause} setProg={setProg} fetchTrack={fetchTrack} seekWaveForm={seekWaveForm} seekTrack={seekTrack} seekPlayer={seekPlayer} setTrackPlayer={setTrackPlayer} trackplayer={trackplayer || {}} />
						)
					}
				})
			)}

			if (this.state.likedStream) {
				stream = (Object.values(tracks).map((track, idx) => {
				if ((this.props.user.likedTrackIds).includes(track.id)) {
					return (
						<UserTrackItem id={track.id} key={idx} track={track} currentUser={currentUser || {}} users={users} user={user} createLike={createLike} deleteLike={deleteLike} createRepost={createRepost} deleteRepost={deleteRepost} deleteTrack={deleteTrack} setPlayPause={setPlayPause} setProg={setProg} fetchTrack={fetchTrack} seekWaveForm={seekWaveForm} seekTrack={seekTrack} seekPlayer={seekPlayer} setTrackPlayer={setTrackPlayer} trackplayer={trackplayer || {}} />
					)
				}
			})
			)}

			if (this.state.repostedStream) {
				stream = (Object.values(tracks).map((track, idx) => {
				if ((this.props.user.repostedTrackIds).includes(track.id)) {
					return (
						<UserTrackItem id={track.id} key={idx} track={track} currentUser={currentUser || {}} users={users} user={user} createLike={createLike} deleteLike={deleteLike} createRepost={createRepost} deleteRepost={deleteRepost} deleteTrack={deleteTrack} setPlayPause={setPlayPause} setProg={setProg} fetchTrack={fetchTrack} seekWaveForm={seekWaveForm} seekTrack={seekTrack} seekPlayer={seekPlayer} setTrackPlayer={setTrackPlayer} trackplayer={trackplayer || {}} />
					)
				}
			})
			)}

			let userSidebar = (Object.values(tracks)).slice(0,3).map(track => {
				if (likedTrackIds > 0 && likedTrackIds.includes(track.id)) {
					return (
						<UserSidebar currentUser={currentUser || {}} tracks={tracks} user={user || {}} users={users} trackplayer={trackplayer || {}} />
					)
				}
			});
		
		
		// const followActive = ((currentUser.id !== user.id && currentUser.followingIds.includes(user.id)) ? 'followed active' : 'user-follow-btn');
		// const followText = ((currentUser && currentUser.followingIds.includes(user.id)) ? 'Following' : 'Follow');

    return (
      <div className="usershow-container">
				{/* <NavbarContainer currentUser={currentUser || {}} /> */}
				{userShowNavbar}
      	<div className="usershow-header-container">
					<div className="usershow-banner-img"></div>

					<div className="usershow-profile-container">
						<div className="usershow-profile-img">
							<img src={user.profileImgUrl ? user.profileImgUrl : "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg"} className="usershow-profile-img" />
							{editProfile}
						</div>
						<div className="usershow-profile-txt">
							<div className="usershow-username">{this.props.user.email}</div>
							<div className="usershow-location">{this.props.user.location || "Location"}</div>
						</div>
					</div>
				</div>

				<div className="usershow-btn-bar-container">
					<ul className="user-info-tabs">
						<li className="user-info-tabs-item">
							<NavLink exact to={`/users/${this.props.user.id}`} activeClassName={this.state.showStream ? 'selected' : ''} onClick={(e) => this.showTracks(e)} className="user-info-tabs-link">Tracks</NavLink>
							<NavLink exact to={`/users/${this.props.user.id}/likes`} activeClassName={this.state.likedStream ? 'selected' : ''} onClick={(e) => this.showLikes(e)} className="user-info-tabs-link">Likes</NavLink>
							<NavLink exact to={`/users/${this.props.user.id}/reposts`} activeClassName={this.state.repostedStream ? 'selected' : ''} onClick={(e) => this.showReposts(e)} className="user-info-tabs-link">Reposts</NavLink>
							<NavLink exact to={`/users/${this.props.user.id}/playlists`} activeClassName={this.state.showPlaylists ? 'selected' : ''} className="user-info-tabs-link">Playlists</NavLink>
							<NavLink exact to={`/users/${this.props.user.id}/comments`} activeClassName={this.state.showComments ? 'selected' : ''} className="user-info-tabs-link">Comments</NavLink>

						</li>
					</ul>

					<div className={`user-info-buttons ${hidden}`}>
						<button type="button" className={`action-follow user-info-follow-btn ${followButton}`} onClick={(e) => this.toggleFollow(e)}>{followText}</button>
					</div>
				</div>
			
				<div className="usershow-main-container">
					<div className="usershow-stream-container">
							{stream}
					</div>
					<div className="usershow-sidebar-container">
						<div className="ad-container">
						{/* </div> */}
						<table className="user-info-stats-table">
							<tbody>
								<tr>
									<td className="info-stat">
										<h3 className="info-stat-title">Tracks</h3>
										<div className="info-stat-value">
											{user.trackIds ? user.trackIds.length : "0"}
											</div>
									</td>
									<td className="info-stat">
										<h3 className="info-stat-title">Likes</h3>
										<div className="info-stat-value">{likedTrackIds > 0 ? likedTrackIds.length : ""}</div>
									</td>
									<td className="info-stat">
										<h3 className="info-stat-title">Reposts</h3>
										<div className="info-stat-value">{user.repostedTrackId ? repostedTrackId.length : "0"}</div>
									</td>
								</tr>
							</tbody>
						</table>
						</div>
						{/* {userSidebar} */}
						<UserSidebar currentUser={currentUser || {}} tracks={tracks} user={user || {}} users={users} showTracks={this.showTracks} showLikes={this.showLikes} showReposts={this.showReposts} trackplayer={trackplayer || {}} />
						</div>
					</div>
				</div>
    )};
  }
};

export default withRouter(UserShow);