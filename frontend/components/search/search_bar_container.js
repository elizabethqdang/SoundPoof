import { connect } from 'react-redux';
import { fetchTracks, fetchUsers } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
	search: state.search,
	tracks: Object.values(state.entities.tracks),
	users: Object.values(state.entities.users)
});

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: query => dispatch(fetchTracks(query)),
  fetchUsers: query => dispatch(fetchUsers(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);