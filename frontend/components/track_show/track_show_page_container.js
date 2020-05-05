import { connect } from "react-redux";
import { receiveCurrentTrack, fetchTrack, fetchAllTracks, deleteTrack, updateTrack } from "../../actions/track_actions";
import { fetchAllUsers, fetchUser, createLike, deleteLike } from '../../actions/user_actions';
import TrackShowPage from './track_show_page';
import { setCurrentTrack, setPlayPause } from '../../actions/track_player_actions';
// import { toggleLike } from '../../actions/like_actions';

// const currentUserLikes = ({ session: { currentUser } }, trackid) => {
// 	if (!currentUser || !currentUser.likes) return false;
// 	return currentUser.likes.includes(parseInt(trackid));
// };

const mapStateToProps = (state, ownProps) => {
	// const	tracks = state.entities.tracks;
	// let trackId = parseInt(match.params.trackId);
	// let track = state.entities.tracks[ownProps.match.params.trackId];
	return {
		// tracks: Object.values(state.entities.tracks),
		// trackId: ownProps.match.params.trackId,
		track: state.entities.tracks[ownProps.match.params.trackId] || {},
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
		comments: Object.values(state.entities.comments),
		liked: currentUserLikes(state, ownProps.match.params.id)
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
	toggleLike: (trackId) => dispatch(createLike(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShowPage);
