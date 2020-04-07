import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import TrackIndex from "./track_index";
import { fetchAllTracks } from "../../actions/track_actions";

const mapStateToProps = state => ({
	// currentUser: state.session.currentUser,
	tracks: Object.values(state.entities.tracks)

	// track: { title: "", artist: "", uploader_id: "", trackFile: null },
	// formtype: "create",
	// currentUser: currentUser(state),
});

const mapDispatchToProps = dispatch => ({
	fetchAllTracks: () => dispatch(fetchAllTracks())

	// createTrack: formData => dispatch(createTrack(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
