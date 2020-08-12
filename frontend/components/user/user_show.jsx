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
			showStream: false,
			showSearch: false,
			showProfile: false,
			showPlaylists: false,
			showComments: false,
		}
		this.toggleFollow = this.toggleFollow.bind(this);
		this.updateImage = this.updateImage.bind(this);
		this.updateImageBtn = this.updateImageBtn.bind(this);
		this.showTracks = this.showTracks.bind(this);
		this.showLikes = this.showLikes.bind(this);
		this.showReposts = this.showReposts.bind(this);
  }

  componentDidMount() {
		this.props.fetchUser(this.props.match.params.userId);
		this.props.fetchAllTracks();
  }

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.userId !== this.props.match.params.userId) {
			this.props.fetchUser(this.props.match.params.userId);
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
		const { user, deleteFollow, createFollow, fetchUser, currentUser } = this.props;

		if (currentUser && currentUser.followingIds.includes(user.id)) {
			deleteFollow(user.id).then(fetchUser(user.id));
		} else {
			createFollow(user.id).then(fetchUser(user.id));
		}
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

	showTracks() {
		this.setState({
			trackStream: true,
			likedStream: false,
			repostedStream: false
		});
	}

	showLikes() {
		this.setState({
			trackStream: false,
			likedStream: true,
			repostedStream: false
		});
	}

	showReposts() {
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

		if (this.props.user === undefined) {
			// console.log("this.props.user", this.props.user);
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
			let editProfile = this.updateImageBtn();
			let numFollowing = (user && user.numFollowing ? user.numFollowing : "0");
			// console.log("user", user);
			// console.log("trackIds", trackIds);

			if (this.state.trackStream) {
				stream = (Object.values(tracks).map((track, idx) => {
					if (trackIds.includes(track.id)) {
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
				if (likedTrackIds.includes(track.id)) {
					return (
						<UserSidebar currentUser={currentUser || {}} tracks={tracks} user={user || {}} users={users} trackplayer={trackplayer || {}} />
					)
				}
			});

		const followActive = ((currentUser && currentUser.followingIds.includes(user.id)) ? 'active' : '');
		const followText = ((currentUser && currentUser.followingIds.includes(user.id)) ? 'Following' : 'Follow');
	
		const profileIcon = { ["backgroundImage"]:"https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg" };
		const bannerImg = { ["backgroundImage"]: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/banner.jpeg" };

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
							<NavLink exact to={`/users/${user.id}`} activeClassName="selected" onClick={() => this.showTracks()} className="user-info-tabs-link">Tracks</NavLink>
							<NavLink exact to={`/users/${user.id}/likes`} activeClassName={this.state.likedStream ? 'selected' : ''} onClick={() => this.showLikes()} className="user-info-tabs-link">Likes</NavLink>
							<NavLink exact to={`/users/${user.id}/reposts`} activeClassName={this.state.repostedStream ? 'selected' : ''} onClick={() => this.showReposts()} className="user-info-tabs-link">Reposts</NavLink>
							<NavLink exact to={`/users/${user.id}/playlists`} activeClassName={this.state.showPlaylists ? 'selected' : ''} className="user-info-tabs-link">Playlists</NavLink>
							<NavLink exact to={`/users/${user.id}/comments`} activeClassName={this.state.showComments ? 'selected' : ''} className="user-info-tabs-link">Comments</NavLink>

						</li>
					</ul>

					<div className="user-info-buttons">
						<button type="button" className={`action-follow user-info-follow-btn ${followActive}`} onClick={(e) => this.toggleFollow(e)}>{followText}</button>
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
											{user.trackIds.length}
											</div>
									</td>
									<td className="info-stat">
										<h3 className="info-stat-title">Likes</h3>
										<div className="info-stat-value">{user.likedTrackIds.length}</div>
									</td>
									<td className="info-stat">
										<h3 className="info-stat-title">Reposts</h3>
										<div className="info-stat-value">{user.repostedTrackIds.length}</div>
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
}

export default withRouter(UserShow);