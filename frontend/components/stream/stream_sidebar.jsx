import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';

class StreamSidebar extends React.Component {
  constructor(props) {
		super(props);
		this.followItem = this.followItem.bind(this);
		this.likeItem = this.likeItem.bind(this);
  }
	
	followItem() {
		return (
		(this.props.users).map(user => {
			return <StreamSidebarFollowItem key={user.id} user={user} />;
		}))
	}

	likeItem() {
		return (
		(this.props.tracks).map(track => {
			return <StreamSidebarLikeItem key={track.id} track={track} />;
		}))
	}

  render() {
		const {users, currentUser, tracks, track} = this.props;
		const user = this.props.currentUser;
		console.log("user", user, "users", users, "currentUser", currentUser);

    return (
			<aside className="sidebar-right">
				<section className="sidebar-module who-to-follow">
					<a className="sidebar-header" href="#">
						<h3 className="sidebar-header-title">
							<span className="sidebar-header-follower-icon"></span>
							<span>Who To Follow</span>
						</h3>
						<span 
						// onClick={} 
						className="sidebar-header-refresh">Refresh</span>
					</a>

					<div className="sidebar-content">
						<ul className="sidebar-list">
							{this.followItem()}
							{/* {this.likeItem()} */}
						</ul>
					</div>
				</section>
			</aside>
    );
  }
}

const StreamSidebarFollowItem = ({ user, users, track, currentUser}) => {
	
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

const StreamSidebarLikeItem = ({ user, users, tracks, currentUser, track }) => {
	let active = ((currentUser && currentUser.likedTrackIds.has(track.id)) ? 'active' : '');
	let likeButton = ((currentUser && currentUser.likedTrackIds.has(track.id)) ? 'Liked' : 'Like');

	return (
		<li className="user-suggestion-item">
			<Link to={`/tracks/${track.id}`} className="user-suggestion-avatar"
			// style={style}
			><img src={track.artworkUrl} /></Link>
			<div className="user-suggestion-content">
				<div className="user-suggestion-title truncate">
					<Link to={`/users/${track.user_id}`} className="user-suggestion-title-link truncate">{track.userEmail}</Link>
					<Link to={`/tracks/${track.id}`} className="user-suggestion-title-link truncate">{track.title}</Link>
				</div>

				<div className="user-suggestion-meta">
					<div className="user-suggestion-stats">
						<div className="user-suggestion-followers">
							{track.numLikes}
						</div>
						<div className="user-suggestion-tracks">
							{track.numComments}
						</div>
					</div>

					<div className="user-suggestion-actions">
						<button
							// onClick={this.like} 
							className={`bc-btn user-suggestion-follow-btn ${active}`} type="button">{likeButton}</button>;
					</div>
				</div>

			</div>
		</li>
	);
};

const mapStateToProps = (state) => ({
	users: (Object.values(state.entities.users)).slice(0, 3) || {},
	currentUser: state.session.currentUser || {},
	tracks: (Object.values(state.entities.tracks)).slice(0, 3) || {}
});

export default (connect)(mapStateToProps, null)(withRouter(StreamSidebar));