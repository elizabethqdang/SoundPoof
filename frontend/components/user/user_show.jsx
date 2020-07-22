import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import TrackIndexItem from '../track_index/track_index_item';
import UserSidebar from './user_sidebar';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
		this.handleToggleLike = this.handleToggleLike.bind(this);
		this.updateImage = this.updateImage.bind(this);
		this.updateImageBtn = this.updateImageBtn.bind(this);
  }

  componentDidMount() {
		this.props.fetchUser(this.props.match.params.userId);
		this.props.fetchAllTracks();
  }

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.userId !== this.props.match.params.userId) {
			this.props.fetchUser(this.props.match.params.userId);
		}
	}

  updateImage(type) {
    return (e) => {
      e.preventDefault();
      const file = e.currentTarget.files[0];
      const formData = new FormData();
      formData.append(`user[${type}_image]`, file);
      if (file) {
        this.props.updateUser(formData);
      }
    };
	}
	
	handleToggleLike(e) {
		e.preventDefault();
		const { track, deleteLike, createLike } = this.props;
		const currentUser = this.currentUser();

		if (currentUser.likedTrackIds.includes(track.id)) {
			deleteLike(track.id);
		} else {
			createLike(track.id);
		}
	}

	updateImageBtn() {
		if (this.props.user.id === this.props.currentUser.id) {
			return (
				<div className="user-updateImage-btn" onChange={this.updateImage}>
					Update Image
				</div>
			);
		}
	}

  render() {
		const { user, users, track, tracks, currentUser, trackplayer, setPlayPause, userTracks} = this.props;
		// console.log(user.id, currentUser.id)

		if (this.props.user === undefined) {
			console.log("this.props.user", this.props.user);
			return (
				<div></div>
			)
		} else {
			const { user, tracks, userTracks, track, users, createLike, deleteLike, createRepost, deleteRepost, deleteTrack, currentUser, setPlayPause, setProg } = this.props;
			let trackIds = this.props.user.trackIds;
			let likedTrackIds = this.props.user.likedTrackIds;
			console.log("user", user.profile_image, user.profileImgUrl, user.profileUrl);

			let userStream = Object.values(tracks).map(track => {
				if (trackIds.includes(track.id)) {
					return (
						<TrackIndexItem key={track.id} track={track} currentUser={currentUser || null} users={users} user={user} trackplayer={trackplayer || {}} createLike={createLike} deleteLike={deleteLike} createRepost={createRepost} deleteRepost={deleteRepost} deleteTrack={deleteTrack} setPlayPause={setPlayPause} setProg={setProg} />
					)
				}
			});

			let userSidebar = (Object.values(tracks)).slice(0,3).map(track => {
				if (likedTrackIds.includes(track.id)) {
					return (
						<UserSidebar currentUser={currentUser || null} tracks={tracks} user={user || {}} users={users} />
					)
				}
			});

		// const likeActive = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'active' : '');
		// const likeText = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'Liked' : 'Like');
	
		const profileIcon = { ["backgroundImage"]:"https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg" };
		const bannerImg = { ["backgroundImage"]: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/banner.jpeg" };

    return (
      <div className="usershow-container">
				<NavbarContainer currentUser={currentUser} />

      	<div className="usershow-header-container">
					<div className="usershow-banner-img"></div>

					<div className="usershow-profile-container">
						<div className="usershow-profile-img">
							<img src={user.profileImgUrl ? user.profileImgUrl : "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg"} className="usershow-profile-img" />
							{this.updateImageBtn()}
						</div>
						<div className="usershow-profile-txt">
							<div className="usershow-username">{this.props.user.email}</div>
							<div className="usershow-location">{this.props.user.location || "Location"}</div>
						</div>
					</div>
				</div>

				<div className="usershow-btn-bar-container">
					<ul className="user-info-tabs">
						{/* {
							this.props.tabs.map((tab, idx) => {
								return <InfoTabsItem key={idx} userId={userId} userShow={tab.userShow} text={tab.text} pathname={tab.pathname} style={this.props.style} />;
							}, this)
						} */}
					</ul>
					<div className="user-info-buttons">
					{/* <button onClick={this.handleToggleLike} type="button" className={`bc-btn sound-actions-btn action-like ${likeActive}`}>{track.numLikes}</button>; */}
						{/* {this.followButton()} */}
						{/* {this.editButton()} */}
					</div>
				</div>
			
				<div className="usershow-main-container">
					<div className="usershow-stream-container">
							{userStream}
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
						<UserSidebar currentUser={currentUser || null} tracks={tracks} user={user || {}} users={users}/>
{/* </div> */}
						</div>
					</div>
				</div>
    )};
  }
}

export default withRouter(UserShow);