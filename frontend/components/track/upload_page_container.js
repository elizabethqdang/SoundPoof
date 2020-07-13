import {connect} from 'react-redux';
import {createTrack, fetchAllTracks} from "../../actions/track_actions";
import UploadPage from "./upload_page";

const mapStateToProps = (state) => ({
		currentUser: state.session.currentUser,
		user_id: state.session.currentUser.id,
		// userId: users[session.id]
		track: {
			title: '',
			description: '',
			user_id: state.session.currentUser.id,
			artworkFile: null,
			artworkUrl: null,
			audioFile: null,
			audioUrl: null,
		}
})
const mapDispatchToProps = dispatch => ({
		createTrack: (track) => dispatch(createTrack(track)),
		fetchAllTracks: () => dispatch(fetchAllTracks()),

    
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage);