import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchAllTracks, fetchTrack, deleteTrack, updateTrack } from "../../actions/track_actions";
import { fetchAllUsers } from "../../actions/user_actions";

import TrackIndex from "./track_index";

const mapStateToProps = state => ({
	currentUser: state.session.currentUser || {},
	tracks: Object.values(state.entities.tracks) || {},
	trackplayer: state.trackplayer || {},
	users: Object.values(state.entities.users) || {},
	liked: currentUserLikes(state, ownProps.track.id)
});

const mapDispatchToProps = dispatch => ({
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchTrack: id => dispatch(fetchTrack()),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
	setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
	deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
	updateTrack: (track, id) => dispatch(updateTrack(track, id)),
	toggleLike: (trackId) => dispatch(toggleLike(trackId)),
	setProg: (trackId, progress) => dispatch(setProg(trackId, progress))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
