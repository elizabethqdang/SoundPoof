import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import Navbar from "./navbar";

const mapStateToProps = (state) => ({
	loggedIn: Boolean(state.session.isAuthenticated),
	// loggedIn: Boolean(state.session.id),
	currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
	// openModal: formType => dispatch(openModal(formType)),
	openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
