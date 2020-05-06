import _ from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/user_actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
	Object.freeze(state);
	let newState = {};

	switch (action.type) {
		case RECEIVE_ALL_USERS:
			if (action.doNotReplace) {
				newState = _.merge({}, action.users);
				for (let userId in action.users) {
					newState[userId].likedTrackIds = new Set(newState[userId].likedTrackIds)
					newState[currentUser].likedTrackIds = new Set(newState[userId].likedTrackIds)
					newState[userId].commentedTrackIds = new Set(newState[userId].commentedTrackIds)
					newState[currentUser].commentedTrackIds = new Set(newState[userId].commentedTrackIds)
				}
			} else {
				if (!state.users) {
				newState = _.merge({}, state, action.users);
				}
			}
			return newState;
		case RECEIVE_USER:
			// let newState;
			// newState = { [action.user.id]: action.payload };
			// return Object.assign({}, state, newState);

			newState = _.merge({}, state);
			newState[action.user.id] = action.user;
			newState[action.user.id].likedTrackIds = new Set(newState[action.user.id].likedTrackIds);
			newState[action.user.id].commentedTrackIds = new Set(newState[action.user.id].commentedTrackIds);
			return newState;

		case RECEIVE_CURRENT_USER:
			if (!action.user) { return state; }

			newState = _.merge({}, state);
			if (!Boolean(newState[action.user.id])) {
				newState[action.currentUser.id] = action.currentUser;
				newState[action.currentUser.id].commentedTrackIds = new Set(newState[action.currentUser.id].commentedTrackIds);
				newState[action.currentUser.id].likedTrackIds = new Set(newState[action.currentUser.id].likedTrackIds);
			}
			return newState;
		case RECEIVE_LIKE:
			newState = _.merge({}, state);
			newState[action.userId].likedTrackIds.add(action.trackId);
			// newState[action.currentUser.userId].likedTrackIds.add(action.trackId);
			return newState;
		case REMOVE_LIKE:
			newState = _.merge({}, state);
			newState[action.userId].likedTrackIds.delete(action.trackId);
			return newState;
		default:
			return state;
	}
};

export default usersReducer;