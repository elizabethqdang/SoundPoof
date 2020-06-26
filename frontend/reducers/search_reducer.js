import { RECEIVE_TRACK_DATA, RECEIVE_USER_DATA } from "../actions/search_actions";

const _initialState = {
	tracks: {},
	users: {}
};

const SearchReducer = (state = _initialState, action) => {
	Object.freeze(state);
	let newState = Object.assign({}, state);

	switch (action.type) {
		case RECEIVE_TRACK_DATA:
			newState.tracks = action.tracks;
			return newState;
		case RECEIVE_USER_DATA:
			newState.users = action.users;
			return newState;
		default:
			return state;
	}
};

export default SearchReducer;