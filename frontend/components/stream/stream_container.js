import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchAllTracks, fetchTrack} from "../../actions/track_actions";
import { setCurrentTrack, setPlayPause, setProg } from '../../actions/track_player_actions';
import { fetchAllUsers, fetchUser } from "../../actions/user_actions";
import Stream from "./stream";

const mapStateToProps = state => ({
	// tracks: state.entities.tracks || {},
	tracks: Object.values(state.entities.tracks) || {},
	trackplayer: state.trackplayer || {},
	currentUser: state.session.currentUser || {},
	// users: Object.values(state.entities.users) || {},
	users: state.entities.users || {},
	errors: state.errors.tracks || [],
	
});

const mapDispatchToProps = dispatch => ({
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchTrack: id => dispatch(fetchTrack(id)),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
	fetchUser: (userId) => dispatch(fetchUser(userId)),
	setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
	deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
	updateTrack: (track, id) => dispatch(updateTrack(track, id)),
	toggleLike: (trackId) => dispatch(toggleLike(trackId)),
	setProg: (trackId, progress) => dispatch(setProg(trackId, progress)),
	createLike: (trackId) => dispatch(createLike(trackId)),
	deleteLike: (id) => dispatch(deleteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
