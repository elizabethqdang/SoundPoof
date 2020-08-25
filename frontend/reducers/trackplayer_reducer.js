import { RECEIVE_CURRENT_TRACK, PLAY_PAUSE_TRACK, PREVIOUS, NEXT, END_CURRENT_TRACK, TOGGLE_SHUFFLE, TOGGLE_LOOP, SEEK_TRACK, SET_TRACK_PLAYER, SEEK_WAVE_FORM, SEEK_PLAYER, SET_PROGRESS } from '../actions/trackplayer_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
	currentTrack: null,
	playing: false,
	player: null,
	trackId: 0,
	playerSeek: 0,
	waveSeek: 0,
	progressTrackId: {},
	loop: null,
	shuffle: false,
	unshuffled: []
};

const trackplayerReducer = (state = _defaultState, action) => {

	Object.freeze(state);
	let newTrackId;

	switch (action.type) {
		case RECEIVE_CURRENT_TRACK:
			newState = { 
				currentState: action.track, 
				playing: true, 
				trackId: action.track.id, 
				seek: 0 
			};
			return merge({}, state, newTrack);
		case PLAY_PAUSE_TRACK:
			if (action.trackId !== state.trackId) {
				return merge({}, state, {
					playing: true, 
					trackId: action.trackId,
					waveSeek: state.progressTrackId[action.trackId] || 0,
					playerSeek: state.progressTrackId[action.trackId] || 0,
					progressTrackId: {[action.trackId]: action.progress}
				});
			} else {
				return merge({}, state, {
					playing: !state.playing,
					progressTrackId: { [action.trackId]: action.progress },
				});
			}
		case NEXT:
			if (action.trackId === tracks.length - 1 || !action.trackId) {
				return merge({}, state, {
					trackId: 1,
					playing: true,
				})
			} else {
				newtrackId = state.trackId += 1
				return merge({}, state, {
					trackId: newtrackId,
					playing: true,
					progressTrackId: 0,
					waveSeek: 0,
					playerSeek: 0,
				});
			}
		case PREVIOUS:
			if (action.trackId <= 1 || !action.trackId) {
				return _defaultState;
			} else {
				newtrackId = state.trackId -= 1;
				return merge({}, state, {
					trackId: newtrackId,
					playing: true,
					progressTrackId: 0,
					waveSeek: 0,
					playerSeek: 0,
				});
			}
		case END_CURRENT_TRACK:
			return merge({}, state, {
				playing: false,
				progressTrackId: { [action.trackId]: 0 },
				waveSeek: 0,
				playerSeek: 0,
			});
		case SET_PROGRESS:
			return merge({}, state, {
				progressTrackId: { [action.trackId]: action.progress }
			});
		case LOGOUT_CURRENT_USER:
			return _defaultState;
		case SEEK_TRACK:
			return merge({}, state, { 
				seek: action.seconds 
			});
		case SEEK_PLAYER:
			return Object.assign({}, state, { 
				playerSeek: action.progress 
			});
		case SET_TRACK_PLAYER:
			return merge({}, state, { 
				player: action.trackplayer 
			});
		case SEEK_WAVE_FORM:
			if (action.trackId && (action.trackId !== state.trackId)) {
				return merge({}, state, {
					progressTrackId: { [action.trackId]: action.progress }
				});
			} else { 
				return merge({}, state, {
					progressTrackId: { [action.trackId]: action.progress }, 
					waveSeek: action.progress 
				});
			}
		default:
			return state;
	}
};

export default trackplayerReducer;