import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { fetchUser, updateUser, createLike, deleteLike } from "../../actions/user_actions";

class UserSidebar extends React.Component {
  constructor(props) {
		super(props);
		// this.followItem = this.followItem.bind(this);
		// this.likeItem = this.likeItem.bind(this);
  }
	
	// componentDidMount() {
	// 	this.props.fetchUser(this.props.match.params.userId);
	// 	this.fetched = true;
	// }
	// followItem() {
	// 	return (
	// 	(this.props.users).map(user => {
	// 		return <UserSidebarFollowItem key={user.id} user={user} />
	// 	}))
	// }

	// likeItem() {
	// }

  render() {
		const {users, currentUser, tracks, track} = this.props;
		const user = this.props.currentUser;
		console.log("user", user, "users", users, "currentUser", currentUser);

		if (!this.props.likes) {
			return (
				<div></div>
			)
		} else {
			const { user, tracks, track, users, likes} = this.props;
			const userSidebarLikes = (this.props.likes).map(trackId => (
				<UserSidebarLikeItem key={trackId} tracks={this.props.tracks} track={this.props.tracks[trackId]} user={this.props.user} />
			));

    return (
			<aside className="sidebar-right">
				<section className="sidebar-module who-to-follow">
					<a className="sidebar-header" href="#">
						<h3 className="sidebar-header-title">
							<span className="sidebar-header-follow-icon"></span>
							<span>Who To Follow</span>
						</h3>
						{/* <span className="sidebar-header-refresh">Refresh</span> */}
					</a>

					<div className="sidebar-content">
						<ul className="sidebar-list">
							{/* {this.followItem()} */}
						</ul>
					</div>
				{/* </section> */}

				{/* <section className="sidebar-module who-to-follow"> */}
					<a className="sidebar-header" href="#">
						<h3 className="sidebar-header-title">
							<span className="sidebar-header-likes-icon"></span>
							<span>Likes</span>
						</h3>
						<span className="sidebar-header-refresh">View All</span>
					</a>

					<div className="sidebar-content">
						<ul className="sidebar-list">
							{/* {this.likeItem()} */}
						</ul>
					</div>
				</section>
			</aside>
    )};
  }
};

const UserSidebarFollowItem = ({ user, users, track, currentUser}) => {
	
	let active = ((currentUser && currentUser.likedTrackIds.has(track.id)) ? 'active' : '');
	let likeButton = ((currentUser && currentUser.likedTrackIds.has(track.id)) ? 'Following' : 'Follow');

  return (
		<li className="user-suggestion-item">
			<Link to={`/users/${user.id}`} className="user-suggestion-avatar"
			// style={style}
			><img src={user.profileImgUrl} /></Link>
			<div className="user-suggestion-content">
				<div className="user-suggestion-title truncate">
					<Link to={`/users/${user.id}`} className="user-suggestion-title-link truncate">{user.email}</Link>
				</div>

				<div className="user-suggestion-meta">
					<div className="user-suggestion-stats">
						<div className="user-suggestion-followers">
							{user.likedTrackIds.length}
						</div>
						<div className="user-suggestion-tracks">
							{user.trackIds.length}
						</div>
					</div>

					<div className="user-suggestion-actions">
						<button 
						// onClick={this.like} 
						className={`bc-btn user-suggestion-follow-btn ${active}`} type="button">{likeButton}</button>
					</div>
				</div>

			</div>
		</li>
  );
};

const UserSidebarLikeItem = ({ user, users, tracks, currentUser, track }) => {
	let active = ((currentUser && currentUser.likedTrackIds.has(track.id)) ? 'active' : '');
	let likeButton = ((currentUser && currentUser.likedTrackIds.has(track.id)) ? 'Liked' : 'Like');

	return (
		<li className="user-suggestion-item">
			<Link to={`/tracks/${track.id}`} className="user-suggestion-avatar"
			// style={style}
			><img src={track.artworkUrl} /></Link>
			<div className="user-suggestion-content">
				<div className="user-suggestion-title truncate">
					<Link to={`/users/${track.user_id}`} className="user-suggestion-artist-link truncate">{track.userEmail}</Link>
					<Link to={`/tracks/${track.id}`} className="user-suggestion-title-link truncate">{track.title}</Link>
				</div>

				<div className="user-suggestion-meta">
					<div className="user-suggestion-stats">
						<div className="user-suggestion-likes">
							{track.numLikes}
						</div>
						<div className="user-suggestion-reposts">
							{track.numReposts}
						</div>
						<div className="user-suggestion-comments">
							{track.numComments}
						</div>
					</div>
				</div>

			</div>
		</li>
	);
};

// const mapStateToProps = (state, ownProps) => {
// 	const userId = ownProps.match.params.userId;
// 	const users = state.entities.users || {};
// 	const user = state.entities.users[ownProps.match.params.userId];
// 	return {
// 	// users: (Object.values(state.entities.users)).slice(0, 3) || {},
// 	currentUser: state.session.currentUser || {},
// 	tracks: state.entities.tracks,
// 	user: state.entities.users[ownProps.match.params.userId],
// 	likedTrackIds: user.likedTrackIds.slice(0,3) || {},
// }};

// const mapDispatchToProps = (dispatch, ownProps) => ({
// 	fetchUser: (userId) => dispatch(fetchUser(userId)),
// 	updateUser: (formData) => dispatch(updateUser(ownProps.match.params.id, formData)),
// 	setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
// 	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
// 	setProg: (trackId, progress) => dispatch(setProg(trackId, progress)),
// 	createLike: (trackId) => dispatch(createLike(trackId)),
// 	deleteLike: (trackId) => dispatch(deleteLike(trackId)),
// });

export default UserSidebar;