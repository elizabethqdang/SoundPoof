import { connect } from 'react-redux';
import _ from 'lodash';
// import { togglePlayback, receivePlaybackSong, addToNextUp } from '../../actions/playback_actions';
import UserStream from './user_stream';

const mapStateToProps = (state, ownProps) => {

  return {
		currentUser: state.entities.users[state.session.currentUser.id],
		currentUser: state.session.currentUser,
    tracks: state.entities.tracks,
    users: state.entities.users,
    playing: state.ui.playback.playing,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // togglePlayback: () => dispatch(togglePlayback()),
  // receivePlaybackSong: (songId) => dispatch(receivePlaybackSong(songId)),
  // addToNextUp: (songId) => dispatch(addToNextUp(songId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStream);