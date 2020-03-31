import * as TrackAPIUtil from "../util/track_api_util";

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_ALL_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";

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
export const receiveAllTrackErrors = errors => ({
  type: RECEIVE_ALL_TRACK_ERRORS,
  errors
});

export const fetchAllTracks = () => dispatch =>
  TrackAPIUtil.fetchAllTracks().then(
    tracks => dispatch(receiveAllTracks(tracks)),
    errors => dispatch(receiveAllTrackErrors(errors.responseJSON))
  );
export const fetchTrack = trackId => dispatch => {
  TrackAPIUtil.fetchTrack(trackId).then(
    track => dispatch(receiveTrack(track)),
    errors => dispatch(receiveAllTrackErrors(errors.responseJSON))
  );
};
export const createTrack = track => dispatch =>
  TrackAPIUtil.createTrack(track).then(
    track => (dispatch(receiveTrack(track)))
  );
export const updateTrack = track => dispatch =>
  TrackAPIUtil.updateTrack(track).then(
    track => (dispatch(receiveTrack(track)))
  );
export const deleteTrack = trackId => dispatch =>
  TrackAPIUtil.deleteTrack(trackId).then(
    track => (dispatch(removeTrack(track)))
  );
