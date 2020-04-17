import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchAllTracks, fetchTrack } from "../../actions/track_actions";
import { fetchAllUsers } from "../../actions/user_actions";

import TrackIndex from "./track_index";

const mapStateToProps = state => ({
	// currentUser: state.session.currentUser,
	tracks: Object.values(state.entities.tracks) || {},
	trackplayer: state.trackplayer || {},
	currentUser: state.session.id || {},
	users: state.entities.users || {},
});

const mapDispatchToProps = dispatch => ({
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchTrack: id => dispatch(fetchTrack()),
	fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
