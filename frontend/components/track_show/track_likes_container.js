import TrackLikes from './track_likes';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    sessionCurrentUser: state.session.currentUser,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (trackId) => dispatch(createLike(trackId)),
    deleteLike: (trackId) => dispatch(deleteLike(trackId)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackLikes)
);