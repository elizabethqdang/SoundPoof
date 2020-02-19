import { RECEIVE_TRACK, RECEIVE_ALL_TRACKS, REMOVE_TRACK } from '../actions/track_actions';
import { RECEIVE_USER } from "../actions/user_actions";

const TracksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TRACK:
            return Object.assign({}, state, {[action.track.id]: action.track});
        case RECEIVE_ALL_TRACKS:
            return action.tracks;
        case REMOVE_TRACK:
            delete nextState[action.trackId];
            return nextState;   
        case RECEIVE_USER:
            return action.tracks;   
        default:
            return state;
    }
};

export default TracksReducer;