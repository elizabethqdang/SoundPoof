import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { createLike, deleteLike, createFollow, deleteFollow } from '../../actions/user_actions';
import { fetchTrack } from '../../actions/track_actions';

class StreamSidebar extends React.Component {
  constructor(props) {
		super(props);
		let randomIdx = Math.floor(Math.random() * 18);
		this.followItem = this.followItem.bind(this);
		this.likeItem = this.likeItem.bind(this);
		// this.toggleLike = this.toggleLike.bind(this);
		this.toggleFollow = this.toggleFollow.bind(this);
  }
	
	followItem() {
		let randomIdx = Math.floor(Math.random() * this.state.users.length);
		let users = (this.state.users.slice(randomIdx, randomIdx + 3) || {});

		return (
			(users).map((user, idx) => {
			return <StreamSidebarFollowItem id={user.id} key={idx} user={user} currentUser={this.props.currentUser} toggleFollow={(e) => this.toggleFollow(e, user)} createFollow={this.props.createFollow} deleteFollow={this.props.deleteFollow} trackplayer={this.props.trackplayer || {}} />
		}))
	}

	likeItem() {
		return (
			(this.props.tracks).map((track, idx) => {
				if (this.props.cLikedTracks.includes(track.id)) {
					return <StreamSidebarLikeItem key={idx} track={track} trackplayer={this.props.trackplayer || {}} />
				} 
			})
		)
	}

	// toggleLike(e) {
	// 	e.preventDefault();
	// 	const { track, deleteLike, createLike, currentUser, users } = this.props;

	// 	if (this.props.currentUser.likedTrackIds.includes(this.props.track.id)) {
	// 		deleteLike(track.id).then(
	// 			() => this.props.fetchTrack(track.id)
	// 		);
	// 	} else {
	// 		createLike(track.id).then(
	// 			() => this.props.fetchTrack(track.id)
	// 		);
	// 	};
	// }
 
	toggleFollow(e, user) {
		e.preventDefault();
		const { track, deleteFollow, createFollow, currentUser, users } = this.props;
		// console.log("user", user);

		if (this.props.currentUser.followingIds.includes(user.id)) {
			deleteFollow(user.id)
		} else {
			createFollow(user.id)
		};

	}

  render() {
		const {users, currentUser, tracks, track, cLikedTracks, cLikedTrackIds} = this.props;
		// const user = this.props.currentUser;
		// console.log("user", user, "users", users, "currentUser", currentUser);
		// let ranNum = Math.floor(Math.random() * this.state.users.length);
		// let randonNum = this.state.randomNum;
		// let users = (this.state.users.slice(randomIdx, randomIdx + 3) || {});
		// let users = (this.state.users.slice(ranNum, ranNum + 3) || {});

    return (
			<aside className="sidebar-right">
				<section className="sidebar-module who-to-follow">
					<a className="sidebar-header" href="">
						<h3 className="sidebar-header-title">
							<span className="sidebar-header-follow-icon"></span>
							<span>Who To Follow</span>
						</h3>
						{/* <span className="sidebar-header-refresh">Refresh</span> */}
					</a>

					<div className="sidebar-content">
						<ul className="sidebar-list">
							{this.followItem}

						{/* {
							(users).map((user, idx) => {
							return <StreamSidebarFollowItem id={user.id} key={idx} user={user} currentUser={this.props.currentUser} toggleFollow={(e) => this.toggleFollow(e, user)} createFollow={this.props.createFollow} deleteFollow={this.props.deleteFollow} trackplayer={this.props.trackplayer || {}} />
							})
						} */}

						</ul>
					</div>
				</section>

				<section className="sidebar-module who-to-follow">
					<a className="sidebar-header" href={`/#/users/${currentUser.id}/likes`}>
						<h3 className="sidebar-header-title">
							<span className="sidebar-header-likes-icon"></span>
							<span>{cLikedTrackIds.length} likes</span>
						</h3>
						<span className="sidebar-header-refresh" >View All</span>
					</a>

					<div className="sidebar-content">
						<ul className="sidebar-list">
							{this.likeItem()}
						</ul>
					</div>
				</section>
			</aside>
    );
  }
}

const StreamSidebarFollowItem = ({ user, users, track, currentUser, toggleFollow, createFollow, deleteFollow }) => {
	
	// let toggleFollow = ((currentUser.followingIds.includes(user.id)) ? deleteFollow(user.id) : createFollow(user.id));
	let followBtn = ((currentUser && currentUser.followingIds.includes(user.id)) ? ' user-follow-btn active followed active' : 'user-follow-btn');
	let followText = ((currentUser && currentUser.followingIds.includes(user.id)) ? 'Following' : 'Follow');

  return (
		<li className="user-suggestion-item">
			<Link to={`/users/${user.id}`} className="user-suggestion-avatar">
				<img src={user.profileImgUrl} />
			</Link>
			<div className="user-suggestion-content">
				<div className="user-suggestion-title truncate">
					<Link to={`/users/${user.id}`} className="user-suggestion-title-link truncate">{user.email}</Link>
				</div>

				<div className="user-suggestion-meta">
					<div className="user-suggestion-stats">
						<div className="user-suggestion-followers">
							{user.followerIds ? user.numFollowers : "0"}
						</div>
						<div className="user-suggestion-tracks">
							{user.trackIds ? user.trackIds.length : "0"}
						</div>
					</div>

					<div className="user-suggestion-follo-btn">
						<button 
						onClick={(e) => toggleFollow(e, user)} 
						className={`bc-btn user-suggestion-follow-btn  ${followBtn}`} type="button">{followText}</button>
					</div>
				</div>

			</div>
		</li>
  );
};

const StreamSidebarLikeItem = ({ user, users, tracks, currentUser, track, cLikedTracks, cLikedTrackIds, toggleLike}) => {
	let active = ((currentUser && currentUser.likedTrackIds.has(track.id)) ? 'active' : '');
	let likeButton = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'controller-btn like-btn liked active' : 'controller-btn like-btn');

	return (
		<li className="user-suggestion-item">
			<Link to={`/tracks/${track.id}`} className="user-likedTrack-artwork"
			><img src={track.artworkUrl} /></Link>
			<div className="user-suggestion-content">
				<div className="user-suggestion-title truncate">
					<Link to={`/users/${track.user_id}`} className="user-suggestion-artist-link truncate">{track.userEmail}</Link>
					<Link to={`/tracks/${track.id}`} className="user-suggestion-title-link truncate">{track.title}</Link>
				</div>

				{/* <div className="user-suggestion-meta"> */}
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
				{/* </div> */}

				{/* <div className={`sound-actions-btn action-like ${likeButton}`}>
					<button
						onClick={(e) => this.toggleLike(e)} 
						className={`bc-btn user-suggestion-follow-btn ${active} ${likeButton}`} type="button">
							
						</button>
				</div> */}

			</div>
		</li>
	);
};

const mapStateToProps = (state) => {
	const currentUser = state.session.currentUser || {};
	const cLikedTrackIds = currentUser.likedTrackIds;
	const users = Object.values(state.users);
	const cLikedTracks = (cLikedTrackIds.slice(0, 3)).map((id) => {
		return id;
	})
	const randomIdx = Math.floor(Math.random() * users.length);
	return {
		currentUser,
		cLikedTrackIds,
		cLikedTracks,
		// tracks: (Object.values(state. tracks)),
		// tracks: state. tracks,
		usersToFollow: (Object.values(state.users)).slice(randomIdx, randomIdx+3) || {},
		users: Object.values(state.users) || {},
	};
};

const mapDispatchToProps = dispatch => ({
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchTrack: id => dispatch(fetchTrack(id)),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
	fetchUser: (userId) => dispatch(fetchUser(userId)),
	fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
	createLike: (trackId) => dispatch(createLike(trackId)),
	deleteLike: (trackId) => dispatch(deleteLike(trackId)),
	createFollow: (userId) => dispatch(createFollow(userId)),
	deleteFollow: (userId) => dispatch(deleteFollow(userId)),
});

export default (connect)(mapStateToProps, mapDispatchToProps)(withRouter(StreamSidebar));