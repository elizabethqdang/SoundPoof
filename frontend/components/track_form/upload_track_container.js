import { connect } from "react-redux";
import { createTrack } from "../../actions/track_actions";
import UploadTrack from "./upload_track";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
	return {
		uploader_id: users[session.id]
	};
};
// const mapStateToProps = (state, ownProp) => ({
//   userId: state.session.id
// });

const mapDispatchToProps = dispatch => ({
	createTrack: formData => dispatch(createTrack(formData)),
	openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadTrack);
