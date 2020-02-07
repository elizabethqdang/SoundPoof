import React from "react";
import { connect } from "react-redux";
import { receiveTrack, receiveTracks } from "../../actions/track_actions";
import tracksReducer from "../../reducers/tracks_reducer";
import TrackIndex from "./track_index";

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	track: { title: "", artist: "", uploader_id: "", trackFile: null },
	formtype: "create",
	// currentUser: currentUser(state),
});

const mapDispatchToProps = dispatch => ({
	createTrack: formData => dispatch(createTrack(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
