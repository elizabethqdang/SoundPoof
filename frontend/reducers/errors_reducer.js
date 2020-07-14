import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_TRACK_ERRORS, RECEIVE_TRACK } from '../actions/track_actions';
import { RECEIVE_USER_ERRORS, RECEIVE_USER } from '../actions/user_actions';
import { CLOSE_MODAL } from "../actions/modal_actions";

const errorsReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_SESSION_ERRORS:
			return { session: action.errors };
		case RECEIVE_CURRENT_USER:
			return [];
		case CLEAR_SESSION_ERRORS:
			return {};
		case CLOSE_MODAL:
			return [];	
		case RECEIVE_TRACK_ERRORS:
			return { tracks: action.errors };
		case RECEIVE_TRACK:
			return [];
		case RECEIVE_USER_ERRORS:
			return { users: action.errors };
		case RECEIVE_USER:
			return [];
		default:
			return state;
	}
}

export default errorsReducer;