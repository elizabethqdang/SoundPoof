import { RECEIVE_CURRENT_TRACK, PLAY_PAUSE_TRACK, END_CURRENT_TRACK, SEEK_TRACK, SET_TRACK_PLAYER, SEEK_WAVE_FORM, SEEK_PLAYER, SET_PROGRESS } from '../actions/track_player_actions';
import merge from 'lodash/merge';

const defaultState = {
	currentTrack: null,
	playing: false,
	player: null,
	trackId: -1,
	playerSeek: 0,
	// waveSeek: 0,
	progressTrackId: {},

};

const trackPlayerReducer = (oldState = defaultState, action) =>
{
	Object.freeze(oldState);
	let newState;
	let change;
	switch (action.type) {
		case RECEIVE_CURRENT_TRACK:
			change = { currentTrack: action.track, playing: true, trackId: action.track.id, seek: 0 };
			return merge({}, oldState, change);
		case PLAY_PAUSE_TRACK:
			if (action.trackId !== oldState.trackId) { // if play_paused track is not whats currently playing
				return merge({}, oldState, {
					playing: true, //action.boolean,
					trackId: action.trackId,
					// waveSeek: oldState.progressTrackId[action.trackId] || 0,
					playerSeek: oldState.progressTrackId[action.trackId] || 0,
					progressTrackId: { [action.trackId]: action.progress } //setting leaving track progress out
				});
			}
			else {
				return merge({}, oldState, {
					playing: !oldState.playing,
					progressTrackId: { [action.trackId]: action.progress },
				});
			}
		case END_CURRENT_TRACK:
			return merge({}, oldState, {
				playing: false,
				progressTrackId: { [action.trackId]: 0 },
				// waveSeek: 0,
				playerSeek: 0,
			});
		case SET_PROGRESS:
			return merge({}, oldState, {
				progressTrackId: { [action.trackId]: action.progress }
			});
		case SEEK_TRACK:
			return merge({}, oldState, { seek: action.seconds });
		case SEEK_PLAYER:
			return Object.assign({}, oldState, { playerSeek: action.progress });
		case SET_TRACK_PLAYER:
			return merge({}, oldState, { player: action.trackplayer });

		default:
			return oldState;
	}
};

export default trackPlayerReducer;