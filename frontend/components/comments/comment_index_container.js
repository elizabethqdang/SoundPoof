import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchTrack } from '../../actions/track_actions';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.tracks || [],
  currentUser: state.session.currentUser || {},
	comments: state.comments || {},
	users: state.users || {},
	loggedIn: Boolean(state.session.currentUser),
});

const mapDispatchToProps = (dispatch) => ({
	deleteComment: (trackId, id) => dispatch(deleteComment(trackId, id)),
	fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
