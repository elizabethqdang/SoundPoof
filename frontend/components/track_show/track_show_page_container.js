import { connect } from "react-redux";
import { fetchTrack, fetchAllTracks, deleteTrack, updateTrack } from "../../actions/track_actions";
import { fetchAllUsers, fetchUser, createLike, deleteLike } from '../../actions/user_actions';
import TrackShowPage from './track_show_page';
import { setCurrentTrack, setPlayPause, receiveCurrentTrack } from '../../actions/track_player_actions';

// const currentUserLikes = ({ session: { currentUser } }, trackid) => {
// 	if (!currentUser || !currentUser.likes) return false;
// 	return currentUser.likes.includes(parseInt(trackid));
// };

const mapStateToProps = (state, ownProps) => {
	// const	tracks = state.entities.tracks;
	// let trackId = parseInt(match.params.trackId);
	// let track = state.entities.tracks[ownProps.match.params.trackId];
	return {
		tracks: state.entities.tracks || {},
		// trackId: ownProps.match.params.trackId,
		track: state.entities.tracks[ownProps.match.params.trackId],
		trackplayer: state.trackplayer || {},
		// trackId: parseInt(match.params.trackId),
		// currentTrack: state.currentTrack || {},
		errors: state.errors.tracks || [],
		currentUser: state.session.currentUser || {},
		users: state.entities.users,
		// users: Object.values(state.entities.users) || {},
		loading: state.ui.loading,
		// currentTrack: state.entities.tracks[state.ui.currentTrack.id],
		// playing: state.ui.currentTrack.playing,
		comments: Object.values(state.entities.comments) || {},
		// liked: currentUserLikes(state, ownProps.match.params.id)
	};
};

const mapDispatchToProps = dispatch => ({
	fetchTrack: trackId => dispatch(fetchTrack(trackId)),
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchAllUsers: (userIds) => dispatch(fetchAllUsers(userIds)),
	fetchUser: userId => dispatch(fetchUser(userId)),
	fetchCurrentUser: userId => dispatch(fetchUser(userId)),
	playSong: () => dispatch(playSong()),
	pauseSong: () => dispatch(pauseSong()),
	updateCurrentSongTime: time => dispatch(updateCurrentSongTime(time)),
	resetCurrentSong: () => dispatch(resetCurrentSong()),
	receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
	setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
	deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
	updateTrack: (track, id) => dispatch(updateTrack(track, id)),
	createLike: (trackId) => dispatch(createLike(trackId)),
	deleteLike: (id) => dispatch(deleteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShowPage);
