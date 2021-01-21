import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTrack, fetchAllTracks, fetchTrack, fetchSingleTrack } from "../../actions/track_actions";
import UploadPage from "./upload_page";

const mapStateToProps = (state) => ({

		currentUser: state.session.currentUser,
		user_id: state.session.currentUser.id,
		// track: {
			title: '',
			description: '',
			user_id: state.session.currentUser.id,
			artworkFile: null,
			artworkUrl: null,
			audioFile: null,
			audioUrl: null,
		// },
		// trackId: track.id,
			loggedIn: Boolean(state.session.currentUser),

})

const mapDispatchToProps = dispatch => ({
		createTrack: (track) => dispatch(createTrack(track)),
		fetchAllTracks: () => dispatch(fetchAllTracks()),
		fetchSingleTrack: (id) => dispatch(receiveTrack(track)),
		fetchTrack: (id) => dispatch(receiveTrack(track))
})

export default (connect)(mapStateToProps, mapDispatchToProps)(UploadPage);