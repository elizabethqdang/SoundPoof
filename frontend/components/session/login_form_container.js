import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state, ownProps) => {
	return {
		// currentUser: state.entities.users[state.session.id],
		email: state.session.email,
		userEmail: state.session.currentUserEmail,
		errors: state.errors.session,
		formType: "login",
		loggedIn: state.session.isAuthenticated,
		currentUser: state.session.user,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: user => dispatch(login(user)),
		signupFirst: (
			<button onClick={() => dispatch(openModal("signup"))}>Sign up</button>
		),
		otherForm: user => dispatch(login(user)),
		demoLogin: user => dispatch(login(user)),
		openModal: formType => dispatch(openModal(formType)),
		closeModal: () => dispatch(closeModal()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
