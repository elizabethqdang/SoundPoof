import { connect } from "react-redux";

import { createTrack } from "../../actions/track_actions";
import TrackForm from "./track_form";

const mapStateToProps = ( state, ownProps ) => ({
  track: {title: "", artist: "", uploader_id: "", audioFile: null},
  formtype: "create"
});

const mapDispatchToProps = dispatch => ({
  action: track => dispatch(createTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
