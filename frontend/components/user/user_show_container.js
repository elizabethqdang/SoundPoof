import { fetchUser, updateUser, createLike, deleteLike } from "../../actions/user_actions";
import { fetchAllTracks } from "../../actions/track_actions";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import UserShow from "./user_show";
import { setCurrentTrack, setPlayPause, setProg } from '../../actions/track_player_actions';

const mapStateToProps = (state, ownProps) => {
	const userId = ownProps.match.params.userId;
	const currentUserId = ((state.session.currentUser) ? state.session.currentUser.id : null);
	const users = state.entities.users || {};
	const user = state.entities.users[ownProps.match.params.userId] || {};
	const tracks = state.entities.tracks || {};
	console.log(user);

	return {
		users: state.entities.users || {},
		currentUser: state.session.currentUser || {},
		user: state.entities.users[ownProps.match.params.userId],
		userId: ownProps.match.params.userId,
		// user: state.entities.users[userId],
		// userId: ownProps.match.params.id,
		tracks: (state.entities.tracks) || {},
		// userTracks: user.tracks || {},
		// users: state.entities.users || {},
		// tracks: user.tracks || {},
		trackplayer: state.trackplayer || {}
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchUser: (userId) => dispatch(fetchUser(userId)),
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	updateUser: (formData) => dispatch(updateUser(ownProps.match.params.id, formData)),
	setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
	setProg: (trackId, progress) => dispatch(setProg(trackId, progress)),
	createLike: (trackId) => dispatch(createLike(trackId)),
	deleteLike: (trackId) => dispatch(deleteLike(trackId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);