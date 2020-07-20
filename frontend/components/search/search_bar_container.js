import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllTracks } from '../../actions/track_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
	search: state.search,
	tracks: Object.values(state.tracks),
	users: Object.values(state.users)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTracks: () => dispatch(fetchAllTracks(tracks)),
	fetchAllUsers: () => dispatch(fetchAllUsers(users))
});

export default (connect)(mapStateToProps, mapDispatchToProps)(SearchBar);