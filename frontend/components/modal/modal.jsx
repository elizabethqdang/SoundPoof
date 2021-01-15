import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import SessionForm from "../session_form/session_form";
import Dropdown from "../navbar/dropdown";
import Upload from "../track/upload_page_container";

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
		case "login":
			component = <LoginFormContainer />;
			break;
		case "signup":
			component = <SignupFormContainer />;
			break;
		case "session":
			component = <SessionForm />;
			break;
		case "upload":
			component = <Upload />;
			break;
		case "dropdown":
			component = <Dropdown />;
		default:
			return null;
	}
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default Modal;

