import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchAllTracks, fetchTrack, deleteTrack } from "../../actions/track_actions";
import { setCurrentTrack, setPlayPause, setProg, endCurrentTrack, seekTrack, seekWaveForm, setTrackPlayer, seekPlayer } from '../../actions/trackplayer_actions';
import { fetchAllUsers, fetchUser, createLike, deleteLike, createFollow, deleteFollow,createRepost, deleteRepost } from "../../actions/user_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import Stream from "./stream";

const mapStateToProps = state => ({
	tracks: state.tracks,
	trackplayer: state.trackplayer || {},
	currentUser: state.session.currentUser || {},
	// users: Object.values(state.users) || {},
	users: state.users || {},
	errors: state.errors.tracks || [],
	loggedIn: Boolean(state.session.currentUser),
});

const mapDispatchToProps = dispatch => ({
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchTrack: (id) => dispatch(fetchTrack(id)),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
	fetchUser: (userId) => dispatch(fetchUser(userId)),
	fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
	setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
	setTrackPlayer: (trackplayer) => dispatch(setTrackPlayer(trackplayer)),
	seekPlayer: (progress) => dispatch(seekPlayer(progress)),
	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
	deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
	endCurrentTrack: () => dispatch(endCurrentTrack()),
	seekTrack: (seconds) => dispatch(seekTrack(seconds)),
	seekWaveForm: (progress) => dispatch(seekWaveForm(progress, ownProps.track.id)),
	updateTrack: (track, id) => dispatch(updateTrack(track, id)),
	toggleLike: (trackId) => dispatch(toggleLike(trackId)),
	setProg: (trackId, progress) => dispatch(setProg(trackId, progress)),
	createLike: (trackId) => dispatch(createLike(trackId)),
	deleteLike: (trackId) => dispatch(deleteLike(trackId)),
	createFollow: (use4rId) => dispatch(createFollow(use4rId)),
	deleteFollow: (use4rId) => dispatch(deleteFollow(use4rId)),
	createRepost: (trackId) => dispatch(createRepost(trackId)),
	deleteRepost: (trackId) => dispatch(deleteRepost(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
