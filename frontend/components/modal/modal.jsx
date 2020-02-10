import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import UploadTrackFormContainer from "../track_form/upload_track_form_container";

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
		case "upload":
			component = <UploadTrackFormContainer />;
			break;
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

