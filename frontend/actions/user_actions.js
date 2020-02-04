import * as UserAPI from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUser = id => dispatch =>
  UserAPI.fetchUser(id).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors.responseJSON))
  );

export const fetchUsers = () => dispatch =>
  UserAPI.fetchUsers().then(users => dispatch(receiveUsers(users)));
