import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/user_actions';

const _nullUser = {
	// isAuthenticated: false,
	// user: {},
	currentUser: null,
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
	let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
				// return { currentUser: action.currentUser };
				// let newState = _.merge({}, state);
				newState[action.currentUser] = action.currentUser;
				// newState[action.currentUser].commentIds = new Set(newState[action.currentUser].commentIds);
				// newState[action.currentUser].likedTrackIds = new Set(newState[action.currentUser].likedTrackIds);
			return newState;
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
