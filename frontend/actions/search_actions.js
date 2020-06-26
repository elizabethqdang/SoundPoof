export const RECEIVE_TRACK_DATA = "RECEIVE_TRACK_DATA";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";

import * as TrackAPIUtil from '../util/track_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const receiveUserData = users => ({
  type: RECEIVE_USER_DATA,
  users
});

export const receiveTrackData = tracks => ({
  type: RECEIVE_TRACK_DATA,
  tracks
});

export const fetchTracks = query => dispatch => (
  TrackAPIUtil.fetchTracks(query)
    .then(tracks => dispatch(receiveTrackData(tracks)))
);

export const fetchUsers = query => dispatch => (
  UserAPIUtil.fetchUsers(query)
    .then(users => dispatch(receiveUserData(users)))
);