import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import TrackIndexItem from '../track_index/track_index_item';
import StreamSidebar from '../stream/stream_sidebar';

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

	currentUser() {
		const { users, sessionCurrentUser } = this.props;
		if (sessionCurrentUser) { return users[sessionCurrentUser.id]; }
		return null;
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
		// const currentUser = this.currentUser();
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

			console.log("tracks", tracks, "user", user, "userStream", userStream);

		// if (currentUser && !currentUser.likedTrackIds) { return null; }

		// const likeActive = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'active' : '');
		// const likeText = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'Liked' : 'Like');


    const tabs = [
      {text: 'All', pathname: '', userShow: true},
      // {text: 'Tracks', pathname: 'tracks', userShow: true},
      // {text: 'Albums', pathname: 'albums', userShow: true},
      // {text: 'Playlists', pathname: 'playlists', userShow: true},
      // {text: 'Reposts', pathname: 'reposts', userShow: true},
    ];

    if (!this.fetched) {
      return null;
		}
	
			const profileIcon = { ["backgroundImage"]: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpg" };
		const bannerImg = { ["backgroundImage"]: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/banner.jpeg" };

    return (
      <div>
				<NavbarContainer />
      <section className="user-hero">
					{/* <NavbarContainer /> */}
					<div className="user-header">
						<div className="user-banner-image" style={bannerImg}>
						</div>
						<section className="user-header-details">
							<div className="user-header-details-avatar">
								{/* <div className="user-header-details-avatar-image" style={{["backgroundImage"]: user.profileImgUrl}}> */}
									<img src={user.profileImgUrl} className="user-header-details-avatar-image" />
								{/* </div> */}
								<div className="user-header-details-avatar-btn"></div>
							</div>
							<div className="user-header-details-content">
								<div className="user-header-details-username">
									{this.props.user.email}
									</div>
								<div className="user-header-details-location">
									{this.props.user.location}</div>
							</div>
						</section>
					</div>
				</section>
				<section className="user-info-bar">
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
				</section>
				<section>
					<main className="user-main border-right-light">
						<div className="user-main-stream">
							{userStream}
						</div>
					</main>
						<div className="border-right-light">
							{/* <StreamSidebar /> */}
							{/* <div className='tscb-sidebar'> */}
								<div className="ad-container">
									<a href="http://www.github.com/eqdang/soundpoof" target="_blank"><img src={this.props.currentUser.profileImgUrl} /></a>
								</div>
								<div className="ad-container">
									<a href="https://www.linkedin.com/in/elizabethqdang" target="_blank"><img src="" /></a>
								</div>
								<div className="extraspace"></div>
							</div>
						{/* </div> */}
				</section>
      </div>
    )};
  }
}

export default withRouter(UserShow);