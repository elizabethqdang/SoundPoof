import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import TrackIndexItem from '../track_index/track_index_item';
import UserSidebar from './user_sidebar';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
		this.fetched = false;
		this.handleToggleLike = this.handleToggleLike.bind(this);
		this.updateImage = this.updateImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.fetched = true;
  }

	componentDidUpdate(prevProps) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
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

		if (!currentUser) {
			this.props.history.push('/login');
			return;
		}

		if (currentUser.likedTrackIds.includes(track.id)) {
			deleteLike(track.id);
		} else {
			createLike(track.id);
		}
	}

  render() {
		const { user, users, track, tracks, currentUser, trackplayer } = this.props;
		console.log("user", user, "users", users, "currentUser", currentUser, "track", track, "tracks", tracks);

		if (user === undefined) {
			return (
				<div></div>
			)
		} else {
			const { user, tracks, track, users, createLike, deleteLike, currentUser } = this.props;
			let userStream = (tracks).map(track => (
				<TrackIndexItem key={track.id} track={track} currentUser={currentUser || null} users={users} trackplayer={trackplayer || {}} createLike={createLike} deleteLike={deleteLike} />
			));

		// if (currentUser && !currentUser.likedTrackIds) { return null; }

		// const likeActive = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'active' : '');
		// const likeText = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'Liked' : 'Like');

    if (!this.fetched) {
      return null;
		}
	
		const profileIcon = { ["backgroundImage"]: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpg" };
		const bannerImg = { ["backgroundImage"]: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/banner.jpeg" };

    return (
      <div className="usershow-container">
				<NavbarContainer />

      	<div className="usershow-header-container">
					{/* <div className="usershow-banner-img" style={bannerImg}></div> */}

					<div className="usershow-profile-container">
						<div className="usershow-profile-img">
								<img src={user.profileImgUrl ? user.profileImgUrl : "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpg"} className="usershow-profile-img" />
								<div className="user-header-details-avatar-btn"></div>
						</div>
						<div className="usershow-profile-txt">
							<div className="usershow-username">{this.props.user.email}</div>
							<div className="usershow-location">{this.props.user.location || "Locaation"}</div>
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
							{/* <StreamSidebar /> */}
							{/* <div className='tscb-sidebar'> */}
								<div className="ad-container">
									<a href="http://www.github.com/eqdang/soundpoof" target="_blank"><img src={this.props.currentUser.profileImgUrl} /></a>
								</div>

						<table className="user-info-stats-table">
							<tbody>
								<tr>
									<td className="info-stat">
										<h3 className="info-stat-title">Tracks</h3>
										<div className="info-stat-value">{user.trackIds.length}</div>
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

								<UserSidebar tracks={tracks} currentUser={currentUser || null} likes={user.likedTrackIds} user={user || {}} users={users}/>
						</div>
					</div>
				</div>
    )};
  }
}

export default withRouter(UserShow);