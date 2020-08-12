import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchAllTracks } from "../../actions/track_actions";
import { fetchAllUsers, fetchUser } from "../../actions/user_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import Navbar from "./navbar";

const mapStateToProps = (state) => ({
	loggedIn: Boolean(state.session.currentUser),
	// loggedIn: Boolean(state.session.id),
	currentUser: state.session.currentUser || {},
	trackplayer: state.trackplayer || {},
	tracks: state.tracks,
	users: state.users,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
	// openModal: formType => dispatch(openModal(formType)),
	openModal: modal => dispatch(openModal(modal)),
	closeModal: () => dispatch(closeModal()),
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
	fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
	fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
