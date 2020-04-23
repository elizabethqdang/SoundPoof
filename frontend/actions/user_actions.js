import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = payload => ({
	type: RECEIVE_USER,
	payload
  // user: payload.user,
  // tracks: payload.tracks || {}
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveLike = (payload) => ({
	type: RECEIVE_LIKE,
	userId: payload.userId,
	trackId: payload.trackId
});

export const removeLike = (payload) => ({
	type: REMOVE_LIKE,
	userId: payload.userId,
	trackId: payload.trackId
});

export const fetchUser = id => dispatch =>
  UserAPIUtil.fetchUser(id).then(
    payload => dispatch(receiveUser(payload)),
    errors => dispatch(receiveUserErrors(errors.responseJSON))
  );

export const fetchAllUsers = () => dispatch =>
  UserAPIUtil.fetchAllUsers().then(users => dispatch(receiveAllUsers(users)));

export const createLike = (trackId) => (dispatch) => {
	return UserAPIUtil.createLike(trackId).then(payload => {
		dispatch(receiveLike(payload));
		return payload;
	}, errors => {
		console.log(errors.responseJSON);
		return errors;
	});
};

export const deleteLike = (trackId) => (dispatch) => {
	return UserAPIUtil.deleteLike(trackId).then(payload => {
		dispatch(removeLike(payload));
		return payload;
	}, errors => {
		console.log(errors.responseJSON);
		return errors;
	});
};