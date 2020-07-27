import _ from 'lodash';
// import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/user_actions';
import { RECEIVE_SINGLE_TRACK } from '../actions/track_actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
	Object.freeze(state);
	// let newState = {};
	let newState = Object.assign({}, state);

	switch (action.type) {
		case RECEIVE_USER:
			// newState = { [action.user.id]: action.user };
			// return Object.assign({}, state, newState);  
			newState.user = action.user;
			return newState;
		case RECEIVE_ALL_USERS:
			return Object.assign(newState, action.users);
		default:
			return state;
	}
};

export default usersReducer;