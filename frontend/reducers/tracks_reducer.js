import { RECEIVE_TRACK, RECEIVE_ALL_TRACKS, REMOVE_TRACK, RECEIVE_CURRENT_TRACK, RECEIVE_SINGLE_TRACK } from '../actions/track_actions';
import { RECEIVE_USER } from "../actions/user_actions";
import merge from 'lodash/merge';
import _ from 'lodash';

const tracksReducer = (state = {}, action) => {

		Object.freeze(state);
		let nextState = Object.assign({}, state);
		let newState = merge({}, state);
		
    switch (action.type) {
				case RECEIVE_ALL_TRACKS:
					return action.tracks;
				case RECEIVE_TRACK:
					newState[action.track.id] = action.track;
					return newState;
				case RECEIVE_SINGLE_TRACK:
					nextState[action.track.id] = action.track;
					return nextState;
        case REMOVE_TRACK:
            delete nextState[action.trackId.id];
            return nextState;   
        case RECEIVE_USER:
					if (action.user.tracks === undefined) {
						return {};
					} else {
						return Object.assign({}, action.tracks);
					};
        default:
            return state;
    }
};

export default tracksReducer;