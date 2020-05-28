import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.tracks || [],
  currentUser: state.session.currentUser || {},
	comments: state.entities.comments || {},
	users: state.entities.users || {}
});

const mapDispatchToProps = (dispatch) => ({
	deleteComment: (trackId, id) => dispatch(deleteComment(trackId, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
