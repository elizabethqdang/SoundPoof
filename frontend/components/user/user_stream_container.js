import { connect } from 'react-redux';
import _ from 'lodash';
import { setPlayPause } from '../../actions/track_player_actions';
import UserStream from './user_stream';

const mapStateToProps = (state, ownProps) => {

  return {
		currentUser: state. users[state.session.currentUser.id],
		currentUser: state.session.currentUser,
    tracks: state. tracks,
    users: state. users,
    playing: state.ui.playback.playing,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // togglePlayback: () => dispatch(togglePlayback()),
  // receivePlaybackSong: (songId) => dispatch(receivePlaybackSong(songId)),
	// addToNextUp: (songId) => dispatch(addToNextUp(songId)),
	setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStream);