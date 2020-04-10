import React from "react";
import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
	return {
		signedIn: state.session.isSignedIn,
		loggedIn: Boolean(state.session.id),
		errors: state.errors.session,
		formType: "signup",
		currentUser: state.entities.users[state.session.id],
		userEmail: state.session.currentUserEmail,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signup: user => dispatch(signup(user)),
		otherForm: user => dispatch(signup(user)),
		login: (
			<span
				onClick={() => dispatch(openModal("login"))}
				className="session-link"
			>
				Log in
			</span>
		),
		closeModal: () => dispatch(closeModal()),
		openModal: formType => dispatch(openModal(formType))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);