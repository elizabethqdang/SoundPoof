import {connect} from 'react-redux';
import {createTrack} from "../../actions/track_actions";
import UploadPage from "./upload_page";

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.id,
    // uploaderId: state.session.id
})
const mapDispatchToProps = dispatch => ({
    createTrack: (track) => dispatch(createTrack(track))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage)