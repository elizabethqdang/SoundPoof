import React from 'react';
import Navbar from '../navbar/navbar_container';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllTracks, fetchTrack } from "../../actions/track_actions";
import { fetchAllUsers, fetchUser, createLike, deleteLike } from "../../actions/user_actions";

class UserSearchResult extends React.Component {
	constructor(props) {
		super(props);
		
		this.userSearchResult = this.userSearchResult.bind(this);
	}

	userSearchResult() {
	}

	render() {
		const user = this.props;

		return (
			<div className='search-result-container'>
				{/* <Navbar /> */}
				<li className='search-show collection-show'>
					<img onClick={this.userSearchResult} src={this.props.user.profileImgUrl || ""} />
					<span onClick={this.userSearchResult}>{this.props.user.email}</span>
					<div className="search-result-user-icon"></div>
				</li>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser,
	tracks: Object.values(state.tracks),
	users: Object.values(state.users)
});

const mapDispatchToProps = (dispatch) => ({
	// fetchTracks: query => dispatch(fetchTracks(query)),
	// fetchUsers: query => dispatch(fetchUsers(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchResult);