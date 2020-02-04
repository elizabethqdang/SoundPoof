import * as APIUtil from "../util/track_api_util";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REQUEST_TRACK_FETCH = "REQUEST_TRACK_FETCH";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";


export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});


export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const requestTrackFetch = () => ({
  type: REQUEST_TRACK_FETCH
});

export const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
});

export const receiveTrackErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const fetchTracks = () => dispatch =>
  APIUtil.fetchTracks().then(
    tracks => dispatch(receiveTracks(tracks)),
    error => dispatch(receiveTrackErrors(error.responseJSON))
  );

export const fetchTrack = trackId => dispatch => {
  dispatch(requestTrackFetch());
  return APIUtil.fetchTrack(trackId).then(
    trackId => dispatch(receiveTrack(trackId)),
    error => dispatch(receiveTrackErrors(error.responseJSON))
  );
};

export const createTrack = track => dispatch =>
  APIUtil.createTrack(track).then(
    track => dispatch(receiveTrack(track)),
    error => dispatch(receiveTrackErrors(error.responseJSON))
  );

export const updateTrack = (track) => dispatch =>
  APIUtil.updateTrack(track).then(
    track => dispatch(receiveTrack(track)),
    error => dispatch(receiveTrackErrors(error.responseJSON))
  );

export const deleteTrack = trackId => dispatch =>
  APIUtil.deleteTrack(trackId).then(
    trackId => dispatch(removeTrack(trackId)),
    error => dispatch(receiveTrackErrors(error.responseJSON))
  );
