import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.tracks || [],
  currentUser: state.session.currentUser || {},
  comments: Object.values(state.entities.comments) || {} 
});

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
