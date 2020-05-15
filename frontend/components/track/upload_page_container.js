import {connect} from 'react-redux';
import {createTrack} from "../../actions/track_actions";
import UploadPage from "./upload_page";

const mapStateToProps = (state) => ({
		currentUser: state.session.currentUser,
		user_id: state.session.currentUser.id,
		// userId: users[session.id]
})
const mapDispatchToProps = dispatch => ({
    createTrack: (track) => dispatch(createTrack(track))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage)