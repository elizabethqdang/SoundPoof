import { RECEIVE_TRACK, RECEIVE_ALL_TRACKS, REMOVE_TRACK } from '../actions/track_actions';
// import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const TracksReducer = (state = {}, action) => {

    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TRACK:
            return Object.assign(newState, {[action.track.id]: action.track
            });

        case RECEIVE_ALL_TRACKS:
            return action.tracks;

        case REMOVE_TRACK:
            delete newState[action.track.id];
            return newState; 
            
        default:
            return state;
    }
};

export default TracksReducer;