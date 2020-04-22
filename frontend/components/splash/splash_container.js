import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchAllTracks, fetchTrack } from "../../actions/track_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import Splash from "./splash";

const mapStateToProps = (state) => {
	return {
		tracks: Object.values(state.entities.tracks),
		trackplayer: state.trackplayer || {},
		users: state.entities.users || {},
		currentUser: state.session.id || {},
	};
};

const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal)),
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchTrack: id => dispatch(fetchTrack(id)),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
