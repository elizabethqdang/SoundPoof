import _ from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/user_actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
	Object.freeze(state);
	let newState = {};

	switch (action.type) {
		case RECEIVE_ALL_USERS:
			if (!state.users) {
				newState = _.merge({}, action.users);
			} else {
				newState = _.merge({}, state, action.users);
				for (let userId in action.users) {
					newState[userId].likedTrackIds = new Set(newState[userId].likedTrackIds)
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
			return newState;
			// return Object.assign({}, state, {
			// 		[action.payload.id]: action.payload
			// });
		case RECEIVE_CURRENT_USER:
			if (!action.user) { return state }
				newState = _.merge({}, state);
			if (!Boolean(newState[action.user.id])) {
				newState[action.user.id] = action.user;
				newState[action.user.id].likedTrackIds = new Set(newState[action.user.id].likedTrackIds);
				newState[action.currentUser.id] = action.currentUser;
				newState[action.currentUser.id].likedTrackIds = new Set(newState[action.currentUser.id].likedTrackIds);
			}
			return newState;
			// return Object.assign({}, state, {
			// 		[action.currentUser.id]: action.currentUser
			// });
		case RECEIVE_LIKE:
			newState = _.merge({}, state);
			newState[action.userId].likedTrackIds.add(action.trackId);
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