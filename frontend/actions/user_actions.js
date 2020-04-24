import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveUser = user => ({
	type: RECEIVE_USER,
	user,
  // user: payload.user,
  // tracks: payload.tracks || {}
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

const receiveAllUsers = payload => ({
  type: RECEIVE_ALL_USERS,
  users: payload.users
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

export const fetchUser = userId => dispatch => {
  return UserAPIUtil.fetchUser(userId).then(user => {
		dispatch(receiveUser(user));
		return user;
	}, errors => {
		dispatch(receiveUserErrors(errors.responseJSON));
		return errors;
	});
}

export const fetchAllUsers = (userIds) => dispatch => {
	UserAPIUtil.fetchAllUsers(userIds).then(payload => {
		dispatch(receiveAllUsers(payload));
		return payload;
	});
};

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

export const updateUser = (userId, formData) => (dispatch) => {
	return UserApiUtil.updateUser(userId, formData).then(user => {
		dispatch(receiveUser(user));
		return user;
	}, errors => {
		dispatch(receiveUserErrors(errors.responseJSON));
		return errors;
	});
};