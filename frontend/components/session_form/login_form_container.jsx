import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, { errors }) => {
  return {
    // errors: errors.session,
    formType: "login",
		// navLink: <Link to="/signup">sign up instead</Link>,
		loggedIn: Boolean(state.session.id),
		errors: state.errors.session,
		currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    otherForm: (
      <Link to="/signup" onClick={() => dispatch(openModal("signup"))}>create an account</Link>
    ),
    closeModal: () => dispatch(closeModal()),
    demoSubmit: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
