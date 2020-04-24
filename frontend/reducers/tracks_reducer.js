import { RECEIVE_TRACK, RECEIVE_ALL_TRACKS, REMOVE_TRACK, RECEIVE_CURRENT_TRACK, RECEIVE_SINGLE_TRACK } from '../actions/track_actions';
import { RECEIVE_USER } from "../actions/user_actions";
import merge from 'lodash/merge';
import _ from 'lodash';


const tracksReducer = (state = {}, action) => {

		Object.freeze(state);
		// let nextState;
    let nextState = {};

    switch (action.type) {
				case RECEIVE_ALL_TRACKS:
					if (!state.tracks) {
						nextState = _.merge({}, action.tracks);
					} else {
						nextState = _.merge({}, state, action.tracks);
						for (let trackI in action.users) {
							nextState[trackI].likedTrackIds = new Set(nextState[user].trackIds)
						}
					}
					return nextState;
					// return action.tracks;
					// nextState = _.merge({}, state);
					// nextState = action.tracks;
					// return nextState;
					// return Object.assign({}, state, action.tracks);
				case RECEIVE_TRACK:
					nextState = { [action.track.id]: action.track };
					return Object.assign({}, state, nextState);
				case RECEIVE_CURRENT_TRACK:
					nextState = { [action.track.id]: action.track };
					return Object.assign({}, state, nextState);	
					// return Object.assign( nextState, {[action.track.id]: action.track} );
				// case RECEIVE_SINGLE_TRACK:
				// 	return nextState[action.payload.track.id] = action.payload.track;
        case REMOVE_TRACK:
						nextState = Object.assign({}, state);
            delete nextState[action.trackId];
            return nextState;   
        // case RECEIVE_USER:
				// 	return Object.assign( nextState, action.tracks );
        default:
            return state;
    }
};

export default tracksReducer;