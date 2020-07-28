import { connect } from 'react-redux';
import TrackPlayer from './track_player';
import { setPlayPause, setTrackPlayer, seekPlayer, endCurrentTrack, next, seekTrack, seekWaveForm } from '../../actions/track_player_actions';
import { fetchTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
	currentTrack: state.trackplayer.currentTrack,
	// currentTrack: state.tracks[state.trackplayer.trackId],
	playing: state.trackplayer.playing,
	trackId: state.trackplayer.trackId,
	seek: state.trackplayer.seek,
	player: state.trackplayer.player,
	trackplayer: state.trackplayer,
	currentUser: state.session.currentUser || {}
});

const mapDispatchToProps = (dispatch) => ({
	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
	fetchTrack: (id) => dispatch(fetchTrack(id)),
	setTrackPlayer: (trackplayer) => dispatch(setTrackPlayer(trackplayer)),
	next: () => dispatch(next()),
	seekPlayer: (progress) => dispatch(seekPlayer(progress)),
	endCurrentTrack: (id) => dispatch(endCurrentTrack(id)),
	createLike: (trackId) => dispatch(createLike(trackId)),
	deleteLike: (trackId) => dispatch(deleteLike(trackId)),
	seekTrack: (seconds) => dispatch(seekTrack(seconds)),
	seekWaveForm: (progress) => dispatch(seekWaveForm(progress, ownProps.track.id)),

});


export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer);