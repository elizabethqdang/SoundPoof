import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = (currentUser) => ({
	type: LOGOUT_CURRENT_USER,
	currentUser
});

export const receiveUserInfo = (user) => ({
    type: RECEIVE_USER_INFO,
    email: user.email,
    formType: user.formType,
})

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
  errors: []
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => {
			dispatch(receiveSessionErrors(errors));
			console.log(errors);
			return errors;
		}
  ));

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => {
			dispatch(receiveSessionErrors(errors.responseJSON));
			console.log(errors.responseJSON);
			return errors;
		}
  ));

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(
		user => dispatch(logoutCurrentUser(null)), 
		errors => dispatch(receiveSessionErrors(errors.responseJSON))
));

export const otherForm = email => dispatch => (
  SessionAPIUtil.emailValidate(email).then(
		user => dispatch(receiveUserInfo(user))).fail(
		errors => {
			dispatch(receiveSessionErrors(errors.responseJSON));
			console.log(errors.responseJSON);
		}
	))

export const fetchCurrentUser = currentUserId => dispatch => {
	return SessionAPIUtil.fetchCurrentUser(currentUserId).then(currentUser => {
		dispatch(receiveCurrentUser(currentUser));
		// return currentUser;
	});
};