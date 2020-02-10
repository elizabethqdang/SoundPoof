import * as TrackAPIUtil from "../util/track_api_util";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REQUEST_TRACK_FETCH = "REQUEST_TRACK_FETCH";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";

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

export const receiveCurrentTrack = track => ({
  type: RECEIVE_CURRENT_TRACK,
  track
});

export const fetchTracks = () => dispatch =>
  TrackAPIUtil.fetchTracks().then(
    tracks => dispatch(receiveTracks(tracks))
  );

export const fetchTrack = trackId => dispatch => {
  // dispatch(requestTrackFetch());
  return TrackAPIUtil.fetchTrack(trackId).then(
    track => dispatch(receiveTrack(track))
  );
};

export const createTrack = track => dispatch =>
  TrackAPIUtil.createTrack(track).then(
    track => dispatch(receiveTrack(track))
  );

export const updateTrack = (track) => dispatch =>
  TrackAPIUtil.updateTrack(track).then(
    track => dispatch(receiveTrack(track))
  );

export const deleteTrack = trackId => dispatch =>
  TrackAPIUtil.deleteTrack(trackId).then(
    track => dispatch(removeTrack(track))
  );
