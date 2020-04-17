import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchAllTracks, fetchTrack} from "../../actions/track_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import Stream from "./stream";

const mapStateToProps = state => ({
	// currentUser: state.session.currentUser,
	tracks: Object.values(state.entities.tracks) || {},
	trackplayer: state.trackplayer || {},
	currentUser: state.session.id || {},
	users: Object.values(state.entities.users) || {},
	errors: state.errors.tracks || [],
});

const mapDispatchToProps = dispatch => ({
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchTrack: id => dispatch(fetchTrack(id)),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
