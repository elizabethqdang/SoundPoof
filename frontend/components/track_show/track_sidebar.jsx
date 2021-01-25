import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';

class TrackSidebar extends React.Component {
  constructor(props) {
		super(props);
		this.trackReposts = this.trackReposts.bind(this);
		this.trackLikes = this.trackLikes.bind(this);
  }
	
	trackLikes() {
		return (
		(this.props.users).map((user, idx) => {
			if (this.props.track && this.props.track.likerIds.includes(user.id)) {
				return <TrackLikes key={idx} user={user} currentUser={this.props.currentUser} />;
				}
			})
		)
	}

	trackReposts() {
		return (
		(this.props.users).map((user, idx) => {
			if (this.props.track && this.props.track.reposterIds.includes(user.id)) {
				return <TrackReposts key={idx} user={user} currentUser={this.props.currentUser} />;
				}
			})
		)
	}

  render() {
		const {users, currentUser, tracks, track, user} = this.props;
		const numLikes = (track.numLikes);
		const numReposts = (track.numReposts);
		const trackLikes = this.trackLikes();
		const trackReposts = this.trackReposts();

    return (
			<aside className="sidebar-right">

				<section className="sidebar-module who-to-follow">
					<a className="sidebar-header" href="#">
						<h3 className="sidebar-header-title">
							<span className="sidebar-header-likes-icon"></span>
							<span>{numLikes} Likes</span>
						</h3>
						<span className="sidebar-header-refresh" >View All</span>
					</a>

					<div className="sidebar-content track-likes">
						<ul className="sidebar-list">
							{/* {this.trackLikes()} */}
							{trackLikes}
						</ul>
					</div>
				</section>

				<section className="sidebar-module who-to-follow">
					<a className="sidebar-header" href="#">
						<h3 className="sidebar-header-title">
							<span className="sidebar-header-reposts-icon"></span>
							<span>{numReposts} Reposts</span>
						</h3>
						<span className="sidebar-header-refresh">View All</span>
					</a>

					<div className="sidebar-content track-reposts">
						<ul className="sidebar-list">
							{trackReposts}
							{/* {this.trackReposts()} */}
						</ul>
					</div>
				</section>

			</aside>

    );
  }
}

const TrackLikes = ({ user, users, tracks, currentUser, track }) => {
	return (
		<li className="user-suggestion-item track-stat-container">
			<Link to={`/users/${user.id}`} className="user-suggestion-avatar">
				<img src={user.profileImgUrl} />
			</Link>
			<Link to={`/users/${user.id}`} className="user-suggestion-artist-link truncate track-likes">
				{user.email}
			</Link>
		</li>
	);
};

const TrackReposts = ({ user, users, tracks, currentUser, track }) => {
	return (
		<li className="user-suggestion-item track-stat-container">
			<Link to={`/users/${user.id}`} className="user-suggestion-avatar">
				<img src={user.profileImgUrl} />
				</Link>
			<a href='/#/users/${user.id}' className="user-suggestion-artist-link truncate track-reposts">{user.email}
			</a>
		</li>
	);
};

const mapStateToProps = (state) => ({
	users: (Object.values(state.users)) || {},
	currentUser: state.session.currentUser || {},
	tracks: (Object.values(state.tracks)).slice(0, 3) || {},

});

export default (connect)(mapStateToProps, null)(withRouter(TrackSidebar));