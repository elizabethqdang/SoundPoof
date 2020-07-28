import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

// import SessionForm from "./session_form";
import SignupForm from "../session/signup_form";


const mapStateToProps = (state, { errors }) => {
  return {
    formType: "signup",
		// navLink: <Link to="/login">log in instead</Link>,
		loggedIn: Boolean(state.session.currentUser),
		errors: state.errors.session || [],
		currentUser: state.session.currentUser || {},
		userEmail: state.session.currentUserEmail,
		signedIn: state.session.isSignedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
		processForm: (user) => dispatch(signup(user)),
		signup: (user) => dispatch(signup(user)),
    otherForm: (
      <Link to="/" onClick={() => dispatch(openModal("login"))}>log in instead</Link>
    ),
    closeModal: () => dispatch(closeModal()),
    demoSubmit: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
