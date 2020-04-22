import { connect } from "react-redux";
import { receiveCurrentTrack, fetchTrack, fetchAllTracks, deleteTrack, updateTrack } from "../../actions/track_actions";
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
import TrackShowPage from './track_show_page';
import { setCurrentTrack, setPlayPause } from '../../actions/track_player_actions';
import { toggleLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
	// const	tracks = state.entities.tracks;
	// let trackId = parseInt(match.params.trackId);
	let track = state.entities.tracks[ownProps.match.params.trackId];
	return {
		tracks: Object.values(state.entities.tracks),
		trackId: ownProps.match.params.trackId,
		track: state.entities.tracks[ownProps.match.params.trackId],
		trackplayer: state.trackplayer || {},
		// trackId: parseInt(match.params.trackId),
		currentTrack: state.currentTrack || {},
		errors: state.errors.tracks || [],
		currentUser: state.session.id || {},
		// users: state.entities.users,
		// [ownProps.match.params.user_id],
		users: Object.values(state.entities.users) || {},
		user_id: ownProps.match.params.user_id,
		// user_id: track.user_id,
		// currentTrack: state.entities.tracks[state.ui.currentTrack.id],
		// playing: state.ui.currentTrack.playing,
		comments: Object.values(state.entities.comments) || {}
	};
};

const mapDispatchToProps = dispatch => ({
	fetchTrack: id => dispatch(fetchTrack(id)),
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
	fetchUser: id => dispatch(fetchUser(id)),
	playSong: () => dispatch(playSong()),
	pauseSong: () => dispatch(pauseSong()),
	updateCurrentSongTime: time => dispatch(updateCurrentSongTime(time)),
	resetCurrentSong: () => dispatch(resetCurrentSong()),
	receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
	setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
	deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
	updateTrack: (track, id) => dispatch(updateTrack(track, id)),
	toggleLike: (trackId) => dispatch(toggleLike(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShowPage);
