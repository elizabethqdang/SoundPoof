import { connect } from "react-redux";
import { receiveCurrentTrack, fetchTrack, fetchAllTracks } from "../../actions/track_actions";
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
// import { receiveCurrentTrack } from "../../actions/audio_actions"
import TrackShowPage from "./track_show_page";
// import {
// 	playSong,
// 	pauseSong,
// 	updateCurrentSongTime,
// 	resetCurrentSong
// } from "../../actions/current_song_actions";
// import { fetchComments } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
	// const	tracks = state.entities.tracks;
	// let trackId = parseInt(match.params.trackId);
	// let track = state.entities.tracks[ownProps.match.params.trackId];
	return {
		// tracks: Object.values(state.entities.tracks),
		trackId: ownProps.match.params.trackId,
		trackplayer: state.trackplayer || {},
		// trackId: parseInt(match.params.trackId),
		currentTrack: state.currentTrack,
		errors: state.errors.tracks || [],
		// currentUser: state.entities.users[state.session.id],
		currentUser: state.session.id || {},
		users: state.entities.users || {},
		// currentTrack: state.entities.tracks[state.ui.currentTrack.id],
		// playing: state.ui.currentSong.playing,
		// comments: state.entities.comments
	};
};

const mapDispatchToProps = dispatch => ({
	// fetchComments: songId => dispatch(fetchComments(songId)),
	fetchTrack: id => dispatch(fetchTrack(id)),
	fetchAllTracks: () => dispatch(fetchAllTracks()),
	fetchAllUsers: () => dispatch(fetchAllUsers()),
	fetchUser: id => dispatch(fetchUser(id)),
	// playSong: () => dispatch(playSong()),
	// pauseSong: () => dispatch(pauseSong()),
	// updateCurrentSongTime: time => dispatch(updateCurrentSongTime(time)),
	// resetCurrentSong: () => dispatch(resetCurrentSong()),
	// receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShowPage);
