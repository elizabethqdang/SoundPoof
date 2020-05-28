import { fetchUser, updateUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {
	const userId = ownProps.match.params.userId;
	const currentUserId = ((state.session.currentUser) ? state.session.currentUser.id : null);
	const user = state.entities.users[ownProps.match.params.userId];
	return {
		currentUserId,
		currentUser: state.session.currentUser || {},
		user: state.entities.users[ownProps.match.params.userId],
		// user: state.entities.users[userId],
		// userId: ownProps.match.params.id,
		tracks: state.entities.tracks[user.track_id] || {},
		users: state.entities.users || {},
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchUser: (userId) => dispatch(fetchUser(userId)),
	updateUser: (formData) => dispatch(updateUser(ownProps.match.params.id, formData)),
});

export default (connect)(mapStateToProps, mapDispatchToProps)(UserShow);