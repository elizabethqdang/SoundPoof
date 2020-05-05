import { RECEIVE_TRACK, RECEIVE_ALL_TRACKS, REMOVE_TRACK, RECEIVE_CURRENT_TRACK, RECEIVE_SINGLE_TRACK } from '../actions/track_actions';
import { RECEIVE_USER } from "../actions/user_actions";
import merge from 'lodash/merge';
import _ from 'lodash';


const tracksReducer = (state = {}, action) => {

		Object.freeze(state);
		let nextState = Object.assign({}, state);
		
    switch (action.type) {
				case RECEIVE_ALL_TRACKS:
					return action.tracks;
				case RECEIVE_TRACK:
					// return Object.assign(nextState, {[action.track.id]: action.track});
					return Object.assign(nextState, {[action.track.id]: action.track});
				// case RECEIVE_CURRENT_TRACK:
					// nextState = { [action.track.id]: action.track };
					// return Object.assign({}, state, nextState);	
					// return Object.assign( nextState, {[action.track.id]: action.track} );
				// case RECEIVE_SINGLE_TRACK:
				// 	return nextState[action.payload.track.id] = action.payload.track;
        case REMOVE_TRACK:
						// nextState = Object.assign({}, state);
            delete nextState[action.trackId.id];
            return nextState;   
        // case RECEIVE_USER:
				// 	return Object.assign( nextState, action.tracks );
        default:
            return state;
    }
};

export default tracksReducer;