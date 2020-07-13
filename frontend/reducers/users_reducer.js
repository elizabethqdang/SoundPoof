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
			// if (action.doNotReplace) {
				// newState = _.merge({}, action.payload);
			// 	for (let userId in action.payload) {
			// 		newState[userId].likedTrackIds = new Set(newState[userId].likedTrackIds)
			// 		newState[currentUser].likedTrackIds = new Set(newState[userId].likedTrackIds)
			// 		newState[userId].commentedTrackIds = new Set(newState[userId].commentedTrackIds)
			// 		newState[currentUser].commentedTrackIds = new Set(newState[userId].commentedTrackIds)
			// 	}
			// } else {
			// 	if (!state.users) {
				// newState = _.merge({}, state, action.payload);
				// }
			// }
			// return newState;
		case RECEIVE_USER:
			// let newState = _.merge({}, state);
			// newState[action.user.id] = action.user;
			// newState[action.tracks] = action.tracks;
			// return newState;
			// newState[action.user.id].trackIds = new Set(newState[action.user.id].trackIds);
			// newState[action.user.id].likedTrackIds = new Set(newState[action.user.id].likedTrackIds);
			newState = { [action.user.id]: action.user };
			// newState = { [action.track.id]: action.track };
			return Object.assign({}, state, newState);  
			// return newState;
			// newState[action.user.id].commentedTrackIds = new Set(newState[action.user.id].commentedTrackIds);
			// return newState;
			// return Object.assign(newState, { [action.payload.user.id]: action.payload.user });
			// return Object.assign(newState, { [action.payload.tracks]: action.payload.tracks });
		// case RECEIVE_SINGLE_TRACK:
			// return Object.assign(newState, { [action.payload.track.id]: action.payload.track });
			// return newState[action.payload.track.id] = action.payload.track;
			// return newState;
			// if (action.payload.tracks === undefined) {
			// 	return {};
			// } else {
				// return newState[action.user] = action.payload.user;
				// return Object.assign(newState, action.user);

			// };
		// case RECEIVE_CURRENT_USER:
		// 	if (!action.user) { return state; }

		// 	newState = _.merge({}, state);
		// 	if (!Boolean(newState[action.user.id])) {
		// 		newState[action.currentUser.id] = action.currentUser;
		// 		newState[action.currentUser.id].commentedTrackIds = new Set(newState[action.currentUser.id].commentedTrackIds);
		// 		newState[action.currentUser.id].likedTrackIds = new Set(newState[action.currentUser.id].likedTrackIds);
		// 	}
		// 	return newState;
		// case RECEIVE_LIKE:
		// 	newState = _.merge({}, state);
		// 	newState[action.userId].likedTrackIds.add(action.trackId);
			// newState[action.currentUser.userId].likedTrackIds.add(action.trackId);
	// 		return newState;
	// 	case REMOVE_LIKE:
	// 		newState = _.merge({}, state);
	// 		newState[action.userId].likedTrackIds.delete(action.trackId);
	// 		return newState;
		case RECEIVE_ALL_USERS:
			return Object.assign(newState, action.users);

		default:
			return state;
	}
};

export default usersReducer;