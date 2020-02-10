import { connect } from "react-redux";
import { createTrack } from "../../actions/track_actions";
import UploadTrack from "./upload_track";
import { openModal, closeModal } from "../../actions/modal_actions";
import UploadTrackForm from "./upload_track_form";

const mapStateToProps = ({ session, entities: { users } }) => {
	return {
		uploader_id: users[session.id],
		currentUser: users[session.id],
		formType: "upload",
	};
};
// const mapStateToProps = (state, ownProp) => ({
//   userId: state.session.id
// });

const mapDispatchToProps = dispatch => ({
	upload: formData => dispatch(createTrack(formData)),
	openModal: modal => dispatch(openModal(modal)),
	processForm: track => dispatch(createTrack(track)),
	closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadTrack);
