import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

import SessionForm from "./session_form";

const mapStateToProps = (state, { errors }) => {
  return {
    // errors: errors.session,
    formType: "signup",
		// navLink: <Link to="/login">log in instead</Link>,
		// loggedIn: Boolean(state.session.id)
		errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <Link to="/login" onClick={() => dispatch(openModal("login"))}>log in instead</Link>
    ),
    closeModal: () => dispatch(closeModal()),
    demoSubmit: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
