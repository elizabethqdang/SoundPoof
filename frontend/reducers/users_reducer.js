import _ from 'lodash';
// import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_SINGLE_USER, RECEIVE_ALL_USERS, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/user_actions';
import { RECEIVE_SINGLE_TRACK } from '../actions/track_actions';

const _initialState = {};

const usersReducer = (state = _initialState, action) => {
	Object.freeze(state);
	let newState = Object.assign({}, state);

	switch (action.type) {
		case RECEIVE_USER:
			newState = _.merge({}, state);
			newState.user = action.user;
			return newState;
		case RECEIVE_SINGLE_USER:
			newState = _.merge({}, state);
			newState.user = action.user;
		case RECEIVE_ALL_USERS:
			newState = _.merge({}, state);
			newState = action.users;
			return newState;
		default:
			return state;
	}
};

export default usersReducer;