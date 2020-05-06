import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { fetchUser, updateUser } from '../../actions/user_actions';
import NavbarContainer from '../navbar/navbar_container';
import UserHeroImage from './user_hero_image';
import InfoBar from './info_bar';
import UserMainContent from './user_main_content';
// import UserEditForm from './user_edit_form';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
		this.fetched = false;
		this.handleToggleLike = this.handleToggleLike.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.fetched = true;
  }

  // componentWillReceiveProps(nextProps) {
	// 	if (nextProps.match.params.id !== this.props.match.params.userId) {
  //     this.props.fetchUser(nextProps.match.params.userId);
  //   }
  // }

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
		const { user, currentUserId, track } = this.props;
		const currentUser = this.currentUser();
		console.log("user", user, "currentUserId", currentUserId);

		if (currentUser && !currentUser.likedTrackIds) { return null; }

		const likeActive = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'active' : '');
		const likeText = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'Liked' : 'Like');


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
	
		const avatarImg = { ["backgroundImage"]: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpg" };
		const bannerImg = { ["backgroundImage"]: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/banner.jpeg" };

    return (
      <div>
				<NavbarContainer />
        {/* <UserHeroImage user={this.props.user} currentUserId={this.props.currentUserId} updateUser={this.props.updateUser} updateImage={this.updateImage.bind(this)}/> */}
	
      <section className="user-hero">
					<div className="user-header">
						<div className="user-banner-image" style={bannerImg}>
							{/* {this.bannerChooser()} */}
						</div>
						<section className="user-header-details">
							<div className="user-header-details-avatar">
								<div className="user-header-details-avatar-image" style=
								{avatarImg}>
									{/* {this.avatarChooser()} */}
								</div>
								<div className="user-header-details-avatar-btn"></div>
							</div>
							<div className="user-header-details-content">
								<div className="user-header-details-username">
									username
									{/* {this.props.user.email} */}
									</div>
									location
								{/* {this.location()} */}
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
							<li className="stream-index-item">
								<div className="stream-index-item-body">
									<div className="stream-index-item-artwork">
										<a href="#" className="stream-index-item-cover-art">
											<div className="stream-index-item-cover-art-bg">
												<span className="stream-index-item-cover-art-true-image" 
												// style={coverImage}
												>Sound Cover Image</span>
											</div>
										</a>
									</div>
									<div className="stream-index-item-content">
										<div className="stream-index-item-header">
											<div className="sound-title-container">
												{/* <div onClick={handleTogglePlayback} className={`bc-btn sound-title-play-btn ${paused}`}></div> */}
												<div className="sound-title-info-container">
													<div className="sound-title-info-first">
														{/* {this.usernames()} */}username
													</div>
													<a className="sound-title-info-second">
														title
														{/* {track.title} */}
													</a>
													<div className="sound-title-info-third">
														<div className="sound-title-info-upload-time">
															{/* {FormatUtil.timeSince(createdAt)} */}
															</div>
														{/* <a className="tag-container tag-small">
                      <span className="truncate sound-title-info-tag">Electronic</span>
                    </a> */}
													</div>
												</div>
											</div>
										</div>

										<div className="sound-waveform">
											<div className="waveform loaded">

											</div>
										</div>

										<div className="sound-footer">
											<div className="sound-actions">
												{/* <LikeToggle type="STREAM_INDEX_ITEM" track={track} /> */}
												{/* <RepostToggle type="STREAM_INDEX_ITEM" track={track} /> */}
												{/* <button onClick={addToNextUp.bind(null, track.id)} type="button" className="bc-btn sound-actions-btn action-next-up">Add to Next up</button> */}
											</div>
											<div className="sound-stats">
												<div className="sound-stats-plays">
													{/* {FormatUtil.formatPlays(track.plays)} */}
													</div>
												{/* <div className="sound-stats-comments">1</div> */}
											</div>
										</div>
									</div>
								</div>
							</li>
						</div>
					</main>
				</section>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.id;
  const currentUserId = ((state.session.currentUser) ? state.session.currentUser.id : null);

  return {
    currentUserId,
    user: state.entities.users[userId],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (formData) => dispatch(updateUser(ownProps.match.params.id, formData)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserShow)
);