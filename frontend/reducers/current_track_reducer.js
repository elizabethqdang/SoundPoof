import { RECEIVE_SINGLE_TRACK } from '../actions/track_actions';
import { RECEIVE_USER } from '../actions/user_actions';

// Initial state
const _initialState = {
	// user: '',
	track: ''
};

// Current spot reducer (current spot that the user is viewing)
export default function (state = _initialState, action)
{
	switch (action.type) {
		case RECEIVE_SINGLE_TRACK:
			let nextState = Object.assign({}, state, { track: action.track });
			// let finalState = Object.assign({}, nextState, { user: action.user });
			// return finalState;
			return nextState;
		default:
			return state;
	}
}