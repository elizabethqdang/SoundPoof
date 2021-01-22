import { connect } from "react-redux";
import { fetchTrack, fetchAllTracks, deleteTrack, updateTrack } from "../../actions/track_actions";
import { fetchAllUsers, fetchSingleUser, createLike, deleteLike, createRepost, deleteRepost, createFollow, deleteFollow } from '../../actions/user_actions';
import { fetchCurrentUser } from '../../actions/session_actions';
import TrackShowPage from './track_show_page';
import { setCurrentTrack, setPlayPause, setProg, receiveCurrentTrack, seekWaveForm, seekTrack } from '../../actions/trackplayer_actions';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
	// const	tracks = state.tracks;
	// let trackId = parseInt(match.params.trackId);
	// let track = state.tracks.track || {};
	let track = state.tracks[ownProps.match.params.trackId] || {};
	return {
		tracks: state.tracks || {},
		trackId: ownProps.match.params.trackId,
		track: state.tracks[ownProps.match.params.trackId],
		trackplayer: state.trackplayer || {},
		errors: state.errors.tracks || [],
		currentUser: state.session.currentUser || {},
		users: state.users || {},
		user: state.users[track.user_id],
		comments: Object.values(state.comments) || {},
		loggedIn: Boolean(state.session.currentUser),
	};
};

const mapDispatchToProps = dispatch => ({
	fetchTrack: trackId => dispatch(fetchTrack(trackId)),
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
	fetchSingleUser: userId => dispatch(fetchSingleUser(userId)),
	fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
	playSong: () => dispatch(playSong()),
	pauseSong: () => dispatch(pauseSong()),
	updateCurrentSongTime: time => dispatch(updateCurrentSongTime(time)),
	resetCurrentSong: () => dispatch(resetCurrentSong()),
	receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
	setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
	deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
	setProg: (trackId, progress) => dispatch(setProg(trackId, progress)),
	endCurrentTrack: () => dispatch(endCurrentTrack()),
	seekTrack: (seconds) => dispatch(seekTrack(seconds)),
	seekWaveForm: (progress) => dispatch(seekWaveForm(progress, ownProps.track.id)),
	updateTrack: (track, id) => dispatch(updateTrack(track, id)),
	createLike: (trackId) => dispatch(createLike(trackId)),
	deleteLike: (trackId) => dispatch(deleteLike(trackId)),
	createRepost: (trackId) => dispatch(createRepost(trackId)),
	deleteRepost: (trackId) => dispatch(deleteRepost(trackId)),
	createFollow: (followingId) => dispatch(createFollow(followingId)),
	deleteFollow: (followingId) => dispatch(deleteFollow(followingId)),
	deleteComment: (commentId) => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShowPage);
