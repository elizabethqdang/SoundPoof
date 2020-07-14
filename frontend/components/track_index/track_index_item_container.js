import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item';
import { fetchTrack, fetchAllTracks, fetchSingleTrack, deleteTrack, updateTrack } from '../../actions/track_actions';
import { fetchUser, createLike, deleteLike, createRepost, deleteRepost } from '../../actions/user_actions';
import { setCurrentTrack, setPlayPause, setProg } from '../../actions/track_player_actions';

const mapStateToProps = (state, ownProps) => ({
	comments: state. comments,
	errors: state.errors.tracks || [],
	trackplayer: state.trackplayer || {},
	currentUser: state.session.currentUser || {},
	loading: state.ui.loading,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUser: (userId) => dispatch(fetchUser(userId)),
	fetchCurrentUser: (userId) => dispatch(fetchUser(userId)),
	fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
	deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
	updateTrack: (track, id) => dispatch(updateTrack(track, id)),
	setProg: (trackId, progress) => dispatch(setProg(trackId, progress)),
	createLike: (trackId) => dispatch(createLike(trackId)),
	deleteLike: (trackId) => dispatch(deleteLike(trackId)),
	createRepost: (trackId) => dispatch(createRepost(trackId)),
	deleteRepost: (trackId) => dispatch(deleteRepost(trackId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);