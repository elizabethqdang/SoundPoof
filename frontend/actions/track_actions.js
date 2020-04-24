import * as TrackAPIUtil from "../util/track_api_util";

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REQUEST_TRACK = "REQUEST_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";
export const RECEIVE_SINGLE_TRACK = "RECEIVE_SINGLE_TRACK";
export const REQUEST_TRACK_FETCH = 'REQUEST_TRACK_FETCH';
export const SET_PEAKS = 'SET_PEAKS'; 

// Action creators
export const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
	track
});

export const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
});

export const receiveTrackErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const receiveCurrentTrack = payload => ({
  type: RECEIVE_CURRENT_TRACK,
	payload
});

export const receiveSingleTrack = payload => ({
	type: RECEIVE_SINGLE_TRACK,
	user: payload.track.user_id,
	track: payload.track
})

export const requestTrackFetch = () => ({
	type: REQUEST_TRACK_FETCH
});

// Thunk actions
export const fetchAllTracks = () => dispatch => (
	TrackAPIUtil.fetchAllTracks()
		.then(tracks => dispatch(receiveAllTracks(tracks)))
  );

export const fetchTrack = id => dispatch => {
	dispatch(requestTrackFetch()); 
	return TrackAPIUtil.fetchTrack(id)
		.then(
			track => dispatch(receiveTrack(track))),
    	errors => dispatch(receiveTrackErrors(errors.responseJSON));
};

export const createTrack = track => dispatch =>
  TrackAPIUtil.createTrack(track).then(
    track => dispatch(receiveTrack(track)),
  );

export const updateTrack = (track, id) => dispatch => (
	TrackAPIUtil.updateTrack(track, id).then(track => (
		dispatch(receiveTrack(track))
	), err => (
		dispatch(receiveTrackErrors(err.responseJSON))
	))
);

export const deleteTrack = trackId => dispatch => (
	TrackAPIUtil.deleteTrack(trackId).then(track => (
		dispatch(removeTrack(trackId))
	), err => (
		dispatch(receiveTrackErrors(err.responseJSON))
	))
);