import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchAllTracks } from "../../actions/track_actions";
import Stream from "./stream";

const mapStateToProps = state => ({
	// currentUser: state.session.currentUser,
	tracks: Object.values(state.entities.tracks),
	// tracks: state.tracks,
	// track: { title: "", artist: "", uploader_id: "", trackFile: null },
	currentUser: state.session.id,
	users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
	fetchAllTracks: () => dispatch(fetchAllTracks())

	// createTrack: formData => dispatch(createTrack(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
