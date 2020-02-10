import { RECEIVE_TRACK, RECEIVE_TRACKS, REMOVE_TRACK } from '../actions/track_actions';
import { RECEIVE_USER } from "../actions/user_actions";

const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TRACK:
            return Object.assign(newState, {[action.track.id]: action.track});
        case RECEIVE_TRACKS:
            return action.tracks;
        case REMOVE_TRACK:
            delete newState[action.trackId];
            return newState;   
        case RECEIVE_USER:
            return action.tracks;   
        default:
            return state;
    }
};

export default tracksReducer;