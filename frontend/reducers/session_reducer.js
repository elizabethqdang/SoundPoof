import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/user_actions';

const _nullUser = {
	// isAuthenticated: false,
	// user: {},
	currentUser: null,
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
	let newState = {};

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
				return { currentUser: action.currentUser };
			// 	newState = _.merge({}, state);
			// 	newState[action.currentUser.id] = action.currentUser;
			// 	newState[action.currentUser.id].commentedTrackIds = new Set(newState[action.currentUser.id].commentedTrackIds);
			// 	newState[action.currentUser.id].likedTrackIds = new Set(newState[action.currentUser.id].likedTrackIds);
			// return newState;
    case LOGOUT_CURRENT_USER:
      return {
				// isAuthenticated: false,
				// user: undefined,
				// id: null,
				_nullUser
			}
		case RECEIVE_LIKE:
			newState = _.merge({}, state);
			newState.currentUser.likedTrackIds.push(action.trackId);
			return newState;
		case REMOVE_LIKE:
			newState = _.merge({}, state);
			const sliceIdx = newState.currentUser.likedTrackIds.indexOf(action.trackId);
			newState.currentUser.likedTrackIds.splice(sliceIdx, 1); 
			return newState;
		default:
			return state;
  }
};

export default sessionReducer;
