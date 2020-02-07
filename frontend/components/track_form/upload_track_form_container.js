import { connect } from "react-redux";
import { createTrack } from "../../actions/track_actions";
import UploadTrackForm from "./upload_track_form";

const mapStateToProps = ({ session, entities: { users } }) => ({
	uploader_id: users[session.id],
  // currentUserId: state.session.currentUser.id,
  // errors: state.errors.tracks || [],
});

const mapDispatchToProps = dispatch => ({
  createTrack: formData => dispatch(createTrack(formData)),
	// openModal: () => dispatch(openModal("upload")),
	// closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadTrackForm);
