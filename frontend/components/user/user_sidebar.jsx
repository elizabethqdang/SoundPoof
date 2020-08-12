import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { fetchUser, updateUser, createLike, deleteLike } from "../../actions/user_actions";

class UserSidebar extends React.Component {
  constructor(props) {
		super(props);
		this.likeItem = this.likeItem.bind(this);
  }
	
	likeItem() {
		return (
			(Object.values(this.props.tracks)).map((track, idx) => {
				if (track.user_id === user.id) {
					return <UserSidebarLikeItem key={idx} track={track} user={this.props.user} currentUser={currentUser} />
				}
			})
		)
	}

  render() {
		const {users, currentUser, tracks, track, user} = this.props;
		let followingIds = (this.props.user.followingIds).slice(0, 3);
		let likedTrackIds = (this.props.user.likedTrackIds).slice(0, 3);
		let repostedTrackIds = (this.props.user.repostedTrackIds).slice(0, 3);
		let numLikes = user.likedTrackIds.length;
		let numReposts = user.repostedTrackIds.length;
		let numFollowing = user.followingIds.length;

		let userSidebar = Object.values(tracks).map((track, idx) => {
			if (likedTrackIds.includes(track.id)) {
				return (
					<UserSidebarLikeItem key={idx} currentUser={currentUser || null} tracks={tracks} user={user || {}} users={users} track={track} />
				)
			}
		});
		let userReposts = Object.values(tracks).map((track, idx) => {
			if (repostedTrackIds.includes(track.id)) {
				return (
					<UserSidebarLikeItem key={idx} currentUser={currentUser || null} tracks={tracks} user={user || {}} users={users} track={track} />
				)
			}
		});

			return (
				<aside className="sidebar-right">
					<section className="sidebar-module who-to-follow">
						<a className="sidebar-header" href="#">
							<h3 className="sidebar-header-title">
								<span className="sidebar-header-follow-icon"></span>
								<span>{numFollowing} Following</span>
							</h3>
							<span className="sidebar-header-refresh">View All</span>
						</a>

						{/* <div className="sidebar-content">
							<ul className="sidebar-list">
								
							</ul>
						</div> */}
					</section>
					<section className="sidebar-module who-to-follow">
						<a className="sidebar-header" onClick={() => this.props.showLikes()}>
							<h3 className="sidebar-header-title">
								<span className="sidebar-header-likes-icon"></span>
								<span>{numLikes} Likes</span>
							</h3>
							<span className="sidebar-header-refresh">View All</span>
						</a>

						<div className="sidebar-content">
							<ul className="sidebar-list">
								{userSidebar}
								{/* {this.likeItem()} */}
							</ul>
						</div>
					</section>
					<section className="sidebar-module who-to-follow">
						<a className="sidebar-header" onClick={() => this.props.showReposts()}>
							<h3 className="sidebar-header-title">
								<span className="sidebar-header-reposts-icon"></span>
								<span>{numReposts} Reposts</span>
							</h3>
							<span className="sidebar-header-refresh">View All</span>
						</a>

						<div className="sidebar-content">
							<ul className="sidebar-list">
								{userReposts}
							</ul>
						</div>
					</section>
				</aside>
			)};
};

const UserSidebarLikeItem = ({ user, users, tracks, currentUser, track }) => {
	// let active = ((currentUser && currentUser.likedTrackIds.has(track.id)) ? 'active' : '');
	// let likeButton = ((currentUser && currentUser.likedTrackIds.has(track.id)) ? 'Liked' : 'Like');

	return (
		<li className="user-suggestion-item">
			<Link to={`/tracks/${track.id}`} className="user-suggestion-avatar">
				<img src={track.artworkUrl} />
			</Link>
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

const mapStateToProps = (state) => {
	const currentUser = state.session.currentUser || {};
	// const cLikedTrackIds = user.likedTrackIds;
	// const tracks = Object.values(state. tracks);
	// const cLikedTracks = (cLikedTrackIds.slice(0, 3)).map((id) => {
		// return id;
		// return tracks[id];
	// })
	// console.log("currentUser", currentUser);
	// console.log("cLikedTrackIds", cLikedTrackIds);
	// console.log("tracks", tracks);
	// console.log("cLikedTracks", cLikedTracks);

	return {
		currentUser,
		// cLikedTrackIds,
		// cLikedTracks,
		// tracks: (Object.values(state. tracks)),
		tracks: state. tracks,
		// users: (Object.values(state. users)).slice(0, 3) || {},
	};
};

const mapDispatchToProps = dispatch => ({
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchTrack: id => dispatch(fetchTrack(id)),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
	fetchUser: (userId) => dispatch(fetchUser(userId)),
	fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
	createLike: (trackId) => dispatch(createLike(trackId)),
	deleteLike: (trackId) => dispatch(deleteLike(trackId))
});

export default (connect)(mapStateToProps, mapDispatchToProps)(withRouter(UserSidebar));